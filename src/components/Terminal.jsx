import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [history, setHistory] = useState([
    { text: "Welcome to Sanket's interactive terminal.", type: 'system' },
    { text: "Type 'help' to see all available commands.", type: 'system' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const endRef = useRef(null);

  const commands = {
    help: () => [
      { text: '┌─────────────────────────────────────────────────────┐', type: 'info' },
      { text: '│  Available commands:                                │', type: 'info' },
      { text: '│  whoami    skills      certifications  ls projects  │', type: 'response' },
      { text: '│  kubectl   docker      terraform       cat env.yaml │', type: 'response' },
      { text: '│  uptime    neofetch    history         clear        │', type: 'response' },
      { text: '│  contact   sudo        exit                         │', type: 'response' },
      { text: '└─────────────────────────────────────────────────────┘', type: 'info' },
    ],

    whoami: () => [
      { text: 'Sanket Chopade', type: 'response' },
      { text: 'Role    : Cloud & DevOps Engineer', type: 'response' },
      { text: 'Status  : ● Open to Opportunities', type: 'success' },
      { text: 'Location: India 🇮🇳', type: 'response' },
    ],

    skills: () => [
      { text: 'Technical Arsenal:', type: 'info' },
      { text: '  Cloud       → AWS (EKS, EC2, S3, IAM, VPC)', type: 'response' },
      { text: '  Containers  → Docker, Kubernetes (CKA Certified)', type: 'response' },
      { text: '  IaC         → Terraform, HCL', type: 'response' },
      { text: '  CI/CD       → Jenkins, GitHub Actions, ArgoCD', type: 'response' },
      { text: '  Monitoring  → Prometheus, Grafana', type: 'response' },
      { text: '  Scripting   → Bash, Python', type: 'response' },
      { text: '  Frontend    → React, Node.js', type: 'response' },
    ],

    certifications: () => [
      { text: '🏆 Certifications:', type: 'info' },
      { text: '  [⏳] Certified Kubernetes Administrator (CKA)', type: 'warning' },
      { text: '      Issuer: Linux Foundation | Status: In Progress', type: 'response' },
      { text: '  [⏳] AWS Solutions Architect – Associate (SAA-C03)', type: 'warning' },
      { text: '      Issuer: Amazon Web Services | Status: In Progress', type: 'response' },
    ],

    'ls projects': () => [
      { text: 'total 6 projects found:', type: 'info' },
      { text: '  drwxr-xr-x  flight-reservation-app       [Spring Boot + K8s]', type: 'response' },
      { text: '  drwxr-xr-x  DevOps-Interview-Questions    [Knowledge Base]', type: 'response' },
      { text: '  drwxr-xr-x  terraform-aws-iac             [IaC + AWS]', type: 'response' },
      { text: '  drwxr-xr-x  nodejs-app-jenkins-pipeline   [CI/CD + Jenkins]', type: 'response' },
      { text: '  drwxr-xr-x  Linux-Automation-Scripts      [Bash + Cron]', type: 'response' },
      { text: '  drwxr-xr-x  student-app-kubernetes        [3-tier K8s]', type: 'response' },
    ],

    kubectl: () => [
      { text: 'kubectl get pods --all-namespaces', type: 'info' },
      { text: 'NAMESPACE     NAME                          READY   STATUS    RESTARTS', type: 'response' },
      { text: 'production    flight-app-6b9d7f-xk2p9       1/1     Running   0', type: 'success' },
      { text: 'production    student-app-7c8b4d-mn3q1      1/1     Running   0', type: 'success' },
      { text: 'monitoring    prometheus-0                  1/1     Running   0', type: 'success' },
      { text: 'monitoring    grafana-7f9b6c-pk4r8          1/1     Running   0', type: 'success' },
      { text: 'ingress       nginx-controller-5d6f-lp2s   1/1     Running   0', type: 'success' },
    ],

    docker: () => [
      { text: 'docker ps', type: 'info' },
      { text: 'CONTAINER ID   IMAGE                    STATUS         PORTS', type: 'response' },
      { text: 'a1b2c3d4e5f6   sanket/flight-app:v2.1   Up 3 days      8080:8080', type: 'success' },
      { text: 'b2c3d4e5f6a7   mysql:8.0                Up 3 days      3306:3306', type: 'success' },
      { text: 'c3d4e5f6a7b8   prom/prometheus:latest   Up 12 hours    9090:9090', type: 'success' },
      { text: 'docker image ls → 14 images | docker volume ls → 8 volumes', type: 'response' },
    ],

    terraform: () => [
      { text: 'terraform plan -out=tfplan', type: 'info' },
      { text: 'Refreshing state...', type: 'system' },
      { text: '', type: 'response' },
      { text: 'Plan: 7 to add, 2 to change, 0 to destroy.', type: 'success' },
      { text: '  + aws_eks_cluster.main', type: 'success' },
      { text: '  + aws_vpc.production', type: 'success' },
      { text: '  + aws_s3_bucket.terraform_state', type: 'success' },
      { text: '  ~ aws_security_group.web (tags updated)', type: 'warning' },
      { text: '', type: 'response' },
      { text: 'Saved plan to: tfplan', type: 'response' },
    ],

    'cat env.yaml': () => [
      { text: 'env:', type: 'info' },
      { text: '  CLOUD_PROVIDER: aws', type: 'response' },
      { text: '  REGION: ap-south-1', type: 'response' },
      { text: '  CLUSTER_NAME: sanket-eks-prod', type: 'response' },
      { text: '  MONITORING: prometheus+grafana', type: 'response' },
      { text: '  IaC_TOOL: terraform', type: 'response' },
      { text: '  CI_CD: jenkins+github-actions', type: 'response' },
      { text: '  AVAILABLE_FOR_HIRE: "true" ✅', type: 'success' },
    ],

    uptime: () => [
      { text: `${new Date().toLocaleTimeString()} up 2 years 147 days, 0 failures, load avg: 0.42, 0.35, 0.31`, type: 'response' },
      { text: 'System: sanket-chopade | Kernel: DevOps-5.0 LTS', type: 'response' },
    ],

    neofetch: () => [
      { text: '     .  .  .                    sanket@portfolio', type: 'response' },
      { text: '   . [K8s] .                   ─────────────────', type: 'response' },
      { text: ' . [Docker][TF] .              OS: Cloud Linux 5.0', type: 'response' },
      { text: '   . [AWS]  .                  Role: DevOps Engineer', type: 'response' },
      { text: '     .  .  .                   Cert: CKA ✓', type: 'response' },
      { text: '                               Stack: K8s+AWS+TF+CI/CD', type: 'response' },
      { text: '                               Status: Open to Work ●', type: 'success' },
    ],

    contact: () => [
      { text: '📧 Email   : chopade.sanket@outlook.com', type: 'response' },
      { text: '🐙 GitHub  : github.com/Sanket006', type: 'response' },
      { text: '💼 LinkedIn: linkedin.com/in/sanketchopade07', type: 'response' },
      { text: '📍 Location: Pune, Maharashtra, India', type: 'response' },
    ],

    history: () => cmdHistory.length === 0
      ? [{ text: 'No command history yet. Start typing!', type: 'system' }]
      : cmdHistory.slice(-10).map((c, i) => ({ text: `  ${i + 1}  ${c}`, type: 'response' })),

    sudo: () => [
      { text: '[sudo] password for visitor: ********', type: 'response' },
      { text: 'sudo: Access denied. This incident has been reported to /dev/null 🕳️', type: 'warning' },
    ],

    exit: () => [
      { text: 'logout', type: 'system' },
      { text: 'Connection to sanket-portfolio closed.', type: 'system' },
    ],
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newCmdHistory = [...cmdHistory, cmd];
    setCmdHistory(newCmdHistory);
    setHistoryIndex(-1);

    const commandLine = { text: `visitor@sanket-portfolio:~$ ${input}`, type: 'command' };

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const matchedKey = Object.keys(commands).find(k => k === cmd);
    const responses = matchedKey
      ? commands[matchedKey]()
      : [{ text: `bash: command not found: ${cmd}. Type 'help' for available commands.`, type: 'warning' }];

    setHistory(prev => [...prev, commandLine, ...responses]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      const newIndex = Math.min(historyIndex + 1, cmdHistory.length - 1);
      setHistoryIndex(newIndex);
      setInput(cmdHistory[cmdHistory.length - 1 - newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? '' : cmdHistory[cmdHistory.length - 1 - newIndex] || '');
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="terminal-container glass-panel" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="close" />
          <span className="minimize" />
          <span className="maximize" />
        </div>
        <div className="terminal-title">bash — sanket@portfolio</div>
      </div>
      <div className="terminal-body">
        {history.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <form onSubmit={handleCommand} className="terminal-input-line">
          <span className="prompt">visitor@sanket-portfolio:~$ </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            spellCheck="false"
            autoComplete="off"
            autoFocus
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Terminal;
