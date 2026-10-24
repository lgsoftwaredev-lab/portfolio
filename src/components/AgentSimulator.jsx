import React, { useState, useEffect } from 'react';
import { Play, CheckCircle2, Loader2, Sparkles, Cpu, Server, Database, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AgentSimulator() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [completed, setCompleted] = useState(false);

  const scenario = portfolioData.interactiveScenarios[selectedScenarioIndex];

  const handleRunSimulation = () => {
    if (running) return;
    setRunning(true);
    setCompleted(false);
    setActiveStep(0);
  };

  useEffect(() => {
    let timer;
    if (running && activeStep >= 0 && activeStep < scenario.steps.length) {
      timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 700);
    } else if (running && activeStep >= scenario.steps.length) {
      setRunning(false);
      setCompleted(true);
    }
    return () => clearTimeout(timer);
  }, [running, activeStep, scenario.steps.length]);

  const switchScenario = (idx) => {
    if (running) return;
    setSelectedScenarioIndex(idx);
    setActiveStep(-1);
    setCompleted(false);
  };

  return (
    <section id="simulador" className="section-wrapper">
      <div className="section-header">
        <div className="section-tag">
          <Sparkles size={14} />
          <span>Live Interactive Demo</span>
        </div>
        <h2 className="section-title">Simulador de Flujos & Agentes en Producción</h2>
        <p className="section-desc">
          Interactúa con los flujos de arquitectura real que desarrollo: desde pipelines transaccionales bancarios hasta orquestación de agentes autónomos con llamadas a herramientas (Tool Calling).
        </p>
      </div>

      <div className="agent-simulator-card">
        {/* Simulator Header & Tabs */}
        <div className="simulator-header">
          <div className="scenario-selector">
            {portfolioData.interactiveScenarios.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => switchScenario(idx)}
                className={`scenario-btn ${selectedScenarioIndex === idx ? 'active' : ''}`}
                disabled={running}
              >
                {sc.name}
              </button>
            ))}
          </div>

          <div className="simulator-badge">
            <Cpu size={14} />
            <span>{scenario.category}</span>
          </div>
        </div>

        {/* Input Prompt / Trigger Box */}
        <div className="simulator-input-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto' }}>
            <span style={{ color: 'var(--accent-emerald-light)', fontWeight: 'bold' }}>INPUT:</span>
            <span style={{ color: '#a1a1aa' }}>{scenario.inputPrompt}</span>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={running}
            className="run-simulation-btn"
          >
            {running ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Ejecutando...</span>
              </>
            ) : (
              <>
                <Play size={14} fill="currentColor" />
                <span>Ejecutar Pipeline</span>
              </>
            )}
          </button>
        </div>

        {/* Step-by-Step Pipeline Execution */}
        <div className="pipeline-track">
          {scenario.steps.map((step, idx) => {
            const isStepActive = running && activeStep === idx;
            const isStepDone = completed || activeStep > idx;

            return (
              <div 
                key={idx} 
                className={`pipeline-node ${isStepActive ? 'active' : ''} ${isStepDone ? 'done' : ''}`}
              >
                <div className="node-left">
                  <div className="node-indicator">
                    {isStepDone ? (
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald-light)' }} />
                    ) : isStepActive ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <div>
                    <div className="node-name">{step.node}</div>
                    <div className="node-desc">{step.action}</div>
                  </div>
                </div>

                <div className="node-latency">
                  {isStepDone || isStepActive ? step.latency : 'standby'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Execution Result */}
        {completed && (
          <div className="simulator-result-box">
            <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald-light)', flexShrink: 0 }} />
            <span>
              <strong>Resultado de Producción:</strong> {scenario.result}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
