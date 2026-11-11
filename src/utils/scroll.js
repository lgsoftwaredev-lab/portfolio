/**
 * Realiza un scroll suave cinematográfico con curva de aceleración y desaceleración (easeInOutCubic).
 * Garantiza que la transición visual sea visible, fluida y elegante en cualquier navegador o dispositivo,
 * sin importar los ajustes de accesibilidad de Windows/Chrome que suelen cancelar el scroll nativo.
 *
 * @param {string} targetId - ID del elemento destino (sin '#')
 * @param {number} [customDuration] - Duración personalizada en ms (opcional)
 */
export function smoothScrollTo(targetId, customDuration) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const navOffset = 60; // Altura de la navbar fija
  const targetPosition = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - navOffset);
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  if (Math.abs(distance) < 5) return;

  // Duración adaptable: mínimo 650ms para saltos cortos, hasta 1150ms para cruzar toda la página
  const duration = customDuration ?? Math.min(Math.max(Math.abs(distance) * 0.35, 650), 1150);

  let startTime = null;
  let isCancelled = false;

  const cancel = () => {
    isCancelled = true;
    window.removeEventListener('wheel', cancel);
    window.removeEventListener('touchstart', cancel);
  };

  window.addEventListener('wheel', cancel, { passive: true });
  window.addEventListener('touchstart', cancel, { passive: true });

  function animation(currentTime) {
    if (isCancelled) return;
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Curva easeInOutCubic: aceleración inicial suave, paneo visual claro, frenado amortiguado
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
      window.history.pushState(null, '', `#${targetId}`);
    }
  }

  requestAnimationFrame(animation);
}
