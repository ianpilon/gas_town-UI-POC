// AI Agent icons/avatars
const agentAvatars = [
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent1&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent2&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent3&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent4&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent5&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent6&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent7&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent8&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent9&backgroundColor=1a1c23',
  'https://api.dicebear.com/7.x/bottts/svg?seed=agent10&backgroundColor=1a1c23',
];

const getAgentAvatar = (name: string) => {
  const index = Math.abs(name.charCodeAt(0) + name.charCodeAt(name.length - 1)) % agentAvatars.length;
  return agentAvatars[index];
};

// AI Agent naming components
const agentPrefixes = ['Nova', 'Atlas', 'Cipher', 'Echo', 'Flux', 'Helix', 'Ion', 'Nexus', 'Orion', 'Pulse', 'Quantum', 'Synth', 'Vector', 'Zephyr', 'Apex', 'Core', 'Delta', 'Omega', 'Prism', 'Vertex'];
const agentSuffixes = ['AI', 'Bot', 'Agent', 'Mind', 'Logic', 'Net', 'Core', 'X', 'Pro', 'Plus', 'Max', 'Prime', 'Ultra', 'Neo', 'One', 'Zero', 'Alpha', 'Beta', 'Omega', 'Spark'];
const versionNumbers = ['1.0', '1.5', '2.0', '2.1', '3.0', '3.5', '4.0', '4.1', '5.0'];

const agentTypes = [
  'Code Assistant',
  'Language Model',
  'Image Generator',
  'Data Analyst',
  'Research Agent',
  'Chat Assistant',
  'Task Automation',
  'Content Creator',
  'Search Agent',
  'Reasoning Engine'
];

const creators = ['OpenAI', 'Anthropic', 'Google DeepMind', 'Meta AI', 'Mistral AI', 'Cohere', 'Stability AI', 'xAI', 'Inflection', 'Adept'];

const capabilities = [
  'Natural Language Processing',
  'Code Generation',
  'Image Synthesis',
  'Multi-modal Understanding',
  'Chain-of-Thought Reasoning',
  'Tool Use',
  'Long Context',
  'Function Calling',
  'RAG Integration',
  'Agentic Workflows',
  'Vision Analysis',
  'Audio Processing',
  'Embeddings',
  'Fine-tuning',
  'Real-time Streaming'
];

// Version history templates for AI agents
const versionTemplates = [
  { version: 'v0.1', event: 'Initial prototype with basic language understanding', category: 'research' },
  { version: 'v0.5', event: 'Added instruction following capabilities', category: 'engineering' },
  { version: 'v1.0', event: 'First production release with safety guardrails', category: 'launch' },
  { version: 'v1.5', event: 'Improved reasoning and reduced hallucinations', category: 'improvement' },
  { version: 'v2.0', event: 'Major architecture upgrade with extended context', category: 'architecture' },
  { version: 'v2.5', event: 'Added multi-modal capabilities', category: 'feature' },
  { version: 'v3.0', event: 'State-of-the-art benchmark performance', category: 'breakthrough' },
  { version: 'v3.5', event: 'Tool use and function calling support', category: 'feature' },
  { version: 'v4.0', event: 'Agentic capabilities with autonomous task completion', category: 'architecture' },
  { version: 'v4.5', event: 'Real-time streaming and voice integration', category: 'feature' },
];

const differentiators = [
  'Consistently outperforms competitors on reasoning benchmarks',
  'Unique architecture enables 10x longer context windows',
  'Pioneered novel approach to reducing hallucinations',
  'Industry-leading safety and alignment scores',
  'First to achieve human-level performance on specific tasks',
  'Breakthrough in efficient training methodology',
  'Revolutionary multi-modal fusion architecture',
  'Best-in-class tool use and function calling',
  'Exceptional performance with minimal compute',
  'Novel approach to agentic task decomposition',
];

const agentNarratives = [
  "Emerged from cutting-edge research to become a category-defining AI agent. Demonstrates exceptional ability to understand nuanced instructions and execute complex multi-step tasks with remarkable precision.",
  "Built on a novel architecture that prioritizes reasoning depth over raw scale. Known for producing unusually coherent and well-structured outputs that require minimal human oversight.",
  "Represents a paradigm shift in AI capabilities—combining unprecedented context length with sophisticated tool use. Trusted by enterprises for mission-critical applications.",
  "Distinguished by its ability to maintain coherent reasoning across extended interactions. Excels at collaborative problem-solving and adaptive learning from user feedback.",
  "Pioneered new approaches to multi-modal understanding, seamlessly integrating text, code, and visual inputs. Sets the standard for versatile AI assistance.",
];

// Define agent clusters/ecosystems
const ecosystems = [
  { name: 'OpenAI Ecosystem', count: 150 },
  { name: 'Anthropic Ecosystem', count: 120 },
  { name: 'Google AI Ecosystem', count: 130 },
  { name: 'Open Source Community', count: 233 },
];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface VersionMilestone {
  version: string;
  event: string;
  category: 'research' | 'engineering' | 'launch' | 'improvement' | 'architecture' | 'feature' | 'breakthrough';
}

export interface NodeData {
  id: string;
  name: string;
  role: string;
  company: string;
  img: string;
  exceptional: boolean;
  skills: string[];
  psychographic: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
    innovationScore: number;
    leadershipPotential: number;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
  yearsExperience: number;
  location: string;
  clusterGroup: number;
  journey: {
    milestones: VersionMilestone[];
    narrative: string;
    exceptionalTraits: string[];
  };
  // AI Agent specific fields
  agentType: string;
  version: string;
  parameters: string;
  contextWindow: string;
  apiEndpoint: string;
  releaseDate: string;
}

// Featured AI agents
const featuredAgents = [
  { name: 'Claude 3.5 Sonnet', ecosystem: 'Anthropic Ecosystem', type: 'Language Model', creator: 'Anthropic' },
  { name: 'GPT-4o', ecosystem: 'OpenAI Ecosystem', type: 'Language Model', creator: 'OpenAI' },
  { name: 'Gemini Ultra', ecosystem: 'Google AI Ecosystem', type: 'Language Model', creator: 'Google DeepMind' },
  { name: 'Llama 3.1 405B', ecosystem: 'Open Source Community', type: 'Language Model', creator: 'Meta AI' },
  { name: 'Mistral Large', ecosystem: 'Open Source Community', type: 'Language Model', creator: 'Mistral AI' },
  { name: 'DALL-E 3', ecosystem: 'OpenAI Ecosystem', type: 'Image Generator', creator: 'OpenAI' },
];

function createFeaturedAgentNode(agent: { name: string; ecosystem: string; type: string; creator: string }, index: number): NodeData {
  const ecosystemIdx = ecosystems.findIndex(e => e.name === agent.ecosystem);
  
  const shuffledVersions = [...versionTemplates].sort(() => Math.random() - 0.5);
  const selectedVersions = shuffledVersions.slice(0, 6).sort((a, b) => a.version.localeCompare(b.version));
  
  const shuffledDifferentiators = [...differentiators].sort(() => Math.random() - 0.5);
  const selectedDifferentiators = shuffledDifferentiators.slice(0, 4);

  const parameterSizes = ['7B', '13B', '34B', '70B', '175B', '540B', '1T'];
  const contextSizes = ['4K', '8K', '16K', '32K', '128K', '200K', '1M'];

  return {
    id: `featured${index}`,
    name: agent.name,
    role: agent.type,
    company: agent.creator,
    img: `https://api.dicebear.com/7.x/bottts/svg?seed=${agent.name.replace(/\s/g, '')}&backgroundColor=1a1c23`,
    exceptional: true,
    skills: Array.from({ length: 5 }, () => randomItem(capabilities)),
    psychographic: {
      openness: randomInt(85, 100),
      conscientiousness: randomInt(80, 100),
      extraversion: randomInt(60, 95),
      agreeableness: randomInt(70, 95),
      neuroticism: randomInt(10, 30),
      innovationScore: randomInt(92, 100),
      leadershipPotential: randomInt(85, 100),
    },
    social: {
      github: `github.com/${agent.creator.toLowerCase().replace(/\s/g, '')}`,
      linkedin: `linkedin.com/company/${agent.creator.toLowerCase().replace(/\s/g, '')}`,
      twitter: `@${agent.creator.toLowerCase().replace(/\s/g, '')}`,
      website: `${agent.creator.toLowerCase().replace(/\s/g, '')}.com`,
    },
    yearsExperience: randomInt(1, 5),
    location: agent.ecosystem,
    clusterGroup: ecosystemIdx >= 0 ? ecosystemIdx : 0,
    journey: {
      milestones: selectedVersions as VersionMilestone[],
      narrative: randomItem(agentNarratives),
      exceptionalTraits: selectedDifferentiators,
    },
    agentType: agent.type,
    version: randomItem(versionNumbers),
    parameters: randomItem(parameterSizes),
    contextWindow: randomItem(contextSizes),
    apiEndpoint: `api.${agent.creator.toLowerCase().replace(/\s/g, '')}.com/v1/${agent.name.toLowerCase().replace(/\s/g, '-')}`,
    releaseDate: `${randomInt(2022, 2025)}-${String(randomInt(1, 12)).padStart(2, '0')}`,
  };
}

export function generateGraphData() {
  const nodes: NodeData[] = [];
  const links: { source: string; target: string }[] = [];
  let nodeIndex = 0;

  // Add featured agents first
  featuredAgents.forEach((agent, idx) => {
    nodes.push(createFeaturedAgentNode(agent, idx));
    nodeIndex++;
  });

  // Generate nodes for each ecosystem
  ecosystems.forEach((ecosystem, ecosystemIndex) => {
    const featuredInEcosystem = featuredAgents.filter(a => a.ecosystem === ecosystem.name).length;
    const nodesToGenerate = ecosystem.count - featuredInEcosystem;

    for (let i = 0; i < nodesToGenerate; i++) {
      const isExceptional = Math.random() > 0.85;
      const prefix = randomItem(agentPrefixes);
      const suffix = randomItem(agentSuffixes);
      const agentName = `${prefix} ${suffix}`;
      const agentType = randomItem(agentTypes);
      const creator = randomItem(creators);

      const numVersions = isExceptional ? randomInt(4, 7) : randomInt(1, 3);
      const shuffledVersions = [...versionTemplates].sort(() => Math.random() - 0.5);
      const selectedVersions = shuffledVersions.slice(0, numVersions).sort((a, b) => a.version.localeCompare(b.version));
      
      const numDifferentiators = isExceptional ? randomInt(3, 5) : randomInt(1, 2);
      const shuffledDifferentiators = [...differentiators].sort(() => Math.random() - 0.5);
      const selectedDifferentiators = shuffledDifferentiators.slice(0, numDifferentiators);

      const parameterSizes = ['1B', '3B', '7B', '13B', '34B', '70B', '175B'];
      const contextSizes = ['2K', '4K', '8K', '16K', '32K', '128K'];

      nodes.push({
        id: `agent${nodeIndex}`,
        name: agentName,
        role: agentType,
        company: creator,
        img: getAgentAvatar(agentName),
        exceptional: isExceptional,
        skills: Array.from({ length: randomInt(3, 6) }, () => randomItem(capabilities)),
        psychographic: {
          openness: randomInt(60, 100),
          conscientiousness: randomInt(50, 100),
          extraversion: randomInt(20, 90),
          agreeableness: randomInt(40, 90),
          neuroticism: randomInt(10, 60),
          innovationScore: isExceptional ? randomInt(90, 100) : randomInt(50, 90),
          leadershipPotential: randomInt(10, 100),
        },
        social: {
          github: `github.com/${creator.toLowerCase().replace(/\s/g, '')}/${agentName.toLowerCase().replace(/\s/g, '-')}`,
          linkedin: `linkedin.com/company/${creator.toLowerCase().replace(/\s/g, '')}`,
          twitter: `@${prefix.toLowerCase()}_${suffix.toLowerCase()}`,
          website: `${prefix.toLowerCase()}${suffix.toLowerCase()}.ai`,
        },
        yearsExperience: randomInt(1, 5),
        location: ecosystem.name,
        clusterGroup: ecosystemIndex,
        journey: {
          milestones: selectedVersions as VersionMilestone[],
          narrative: isExceptional ? randomItem(agentNarratives) : "A capable AI agent with solid performance across standard benchmarks and reliable task execution.",
          exceptionalTraits: selectedDifferentiators,
        },
        agentType: agentType,
        version: randomItem(versionNumbers),
        parameters: randomItem(parameterSizes),
        contextWindow: randomItem(contextSizes),
        apiEndpoint: `api.${creator.toLowerCase().replace(/\s/g, '')}.com/v1/${agentName.toLowerCase().replace(/\s/g, '-')}`,
        releaseDate: `${randomInt(2020, 2025)}-${String(randomInt(1, 12)).padStart(2, '0')}`,
      });
      nodeIndex++;
    }
  });

  // Build index of nodes by ecosystem
  const nodesByEcosystem: Record<string, number[]> = {};
  nodes.forEach((node, idx) => {
    if (!nodesByEcosystem[node.location]) nodesByEcosystem[node.location] = [];
    nodesByEcosystem[node.location].push(idx);
  });

  // Generate Links
  const connectedNodes = new Set<string>();
  
  nodes.forEach((node, i) => {
    const numLinks = node.exceptional ? randomInt(2, 4) : randomInt(1, 2);
    const ecosystemNodes = nodesByEcosystem[node.location] || [];

    for (let j = 0; j < numLinks; j++) {
      let targetIndex;
      const stayInEcosystem = Math.random() > 0.15;

      if (stayInEcosystem && ecosystemNodes.length > 1) {
        targetIndex = ecosystemNodes[randomInt(0, ecosystemNodes.length - 1)];
      } else {
        targetIndex = randomInt(0, nodes.length - 1);
      }

      if (targetIndex !== i) {
        links.push({
          source: node.id,
          target: nodes[targetIndex].id,
        });
        connectedNodes.add(node.id);
        connectedNodes.add(nodes[targetIndex].id);
      }
    }
  });
  
  // Ensure orphan nodes get connections
  nodes.forEach((node, i) => {
    if (!connectedNodes.has(node.id)) {
      const ecosystemNodes = nodesByEcosystem[node.location] || [];
      let targetIndex = ecosystemNodes.length > 1 
        ? ecosystemNodes[randomInt(0, ecosystemNodes.length - 1)]
        : randomInt(0, nodes.length - 1);
      if (targetIndex === i) targetIndex = (i + 1) % nodes.length;
      
      links.push({
        source: node.id,
        target: nodes[targetIndex].id,
      });
    }
  });

  // Connect featured agents
  const claude = nodes.find(n => n.name === 'Claude 3.5 Sonnet');
  const gpt4 = nodes.find(n => n.name === 'GPT-4o');
  if (claude && gpt4) {
    links.push({
      source: claude.id,
      target: gpt4.id,
    });
  }

  return { nodes, links };
}

// Re-export for backward compatibility
export type JourneyMilestone = VersionMilestone;
