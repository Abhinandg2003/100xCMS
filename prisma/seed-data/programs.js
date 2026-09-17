// Source data for the seed script. Icons are stored as plain string
// names (matching lucide-react export names) since React components
// can't be persisted — the frontend maps the name back to a component,
// e.g.:
//   import { Brain, Link2, Globe, Server, Code2, Lock } from 'lucide-react'
//   const ICONS = { Brain, Link2, Globe, Server, Code2, Lock }
//   const Icon = ICONS[program.metadata.icon]
//
// NOTE ON SUBJECTS: each subject used to be a plain string (just a title).
// It is now an object: { name, content, keyPoints }.
//   - name: the topic title (same text as before, so nothing else breaks)
//   - content: a short study-note paragraph explaining the topic
//   - keyPoints: 3-4 bite-sized facts/takeaways a learner should walk away with
// If your frontend currently does `subjects.map(s => <li>{s}</li>)`, switch it
// to `subjects.map(s => <li>{s.name}</li>)` and render `s.content` / `s.keyPoints`
// wherever you want the expanded detail (e.g. an accordion or a topic drawer).

const programs = [
  {
    id: 'ai',
    title: `Machine Learning \nand AI`,
    emoji: '🧠',
    icon: 'Brain',
    pastel: '#e8d5ff',
    pastelbg: 'rgba(180, 120, 255, 0.08)',
    pastelborder: 'rgba(180, 120, 255, 0.18)',
    glowColor: 'rgba(180, 120, 255, 0.25)',
    iconBg: 'rgba(180, 120, 255, 0.15)',
    iconColor: '#c084fc',
    duration: '16 Weeks',
    level: 'Beginner → Advanced',
    tag: 'Most Popular',
    tagColor: 'rgba(255, 159, 67, 0.15)',
    tagText: '#fece01',
    color: '#fece01',
    description:
      'Master ML, Deep Learning, NLP, and build real AI products from scratch with hands-on projects.',
    image:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=300&fit=crop',
    bgimg: '/images/AI2.jpg',
    categories: [
      {
        category: 'Foundations & History',
        subjects: [
          {
            name: 'What is AI',
            content:
              'Artificial Intelligence is the field of building systems that perform tasks normally requiring human intelligence — perception, language, reasoning, and decision-making. Modern AI is dominated by machine learning, where systems learn patterns from data rather than following hand-written rules.',
            keyPoints: [
              'AI ⊃ Machine Learning ⊃ Deep Learning (nested subfields)',
              'Narrow AI (task-specific) vs General AI (human-level, still theoretical)',
              'Learning from data replaced rule-based "expert systems" as the dominant approach',
            ],
          },
          {
            name: 'History of AI',
            content:
              'AI has moved through cycles of hype and "AI winters" since the 1950s Dartmouth workshop. Early symbolic AI gave way to statistical ML in the 1990s, then to deep learning after 2012 (ImageNet/AlexNet), and to large language models after 2017 (Transformers) and 2020+ (GPT-3, ChatGPT).',
            keyPoints: [
              '1956 Dartmouth Conference — the term "Artificial Intelligence" is coined',
              '2012 AlexNet — deep learning wins ImageNet, kicks off the deep learning era',
              '2017 "Attention Is All You Need" — the Transformer paper enables the LLM boom',
            ],
          },
          {
            name: 'How we reached Transformers',
            content:
              'The path ran from feedforward networks to RNNs (which handled sequences but struggled with long-range dependencies), to LSTMs (which added memory gates), to attention mechanisms bolted onto RNNs, and finally to the Transformer, which replaced recurrence entirely with self-attention for full parallelization.',
            keyPoints: [
              'RNNs process sequences step-by-step — slow and prone to vanishing gradients',
              'Attention let models "look back" at any earlier token directly',
              'Transformers drop recurrence, enabling massive parallel training on GPUs',
            ],
          },
          {
            name: 'What is Deep Learning',
            content:
              'Deep Learning uses neural networks with many stacked layers to automatically learn hierarchical features from raw data — pixels, characters, audio waveforms — instead of relying on hand-engineered features. Depth lets the network compose simple patterns into increasingly abstract representations.',
            keyPoints: [
              'Layers learn increasingly abstract features (edges → shapes → objects)',
              'Requires large datasets and compute (GPUs/TPUs) to work well',
              'Trained via gradient descent + backpropagation',
            ],
          },
          {
            name: 'Backpropagation',
            content:
              'Backpropagation is the algorithm that trains neural networks: it computes the gradient of the loss function with respect to every weight by applying the chain rule backward through the network, then updates weights via gradient descent to reduce error.',
            keyPoints: [
              'Forward pass computes predictions and loss; backward pass computes gradients',
              'Relies on the chain rule of calculus applied layer by layer',
              'Paired with an optimizer (SGD, Adam) that actually updates the weights',
            ],
          },
          {
            name: 'NLP Basics',
            content:
              'Natural Language Processing covers how machines represent and manipulate human language: tokenization (splitting text into units), embeddings (turning tokens into vectors), and classic tasks like classification, translation, and named-entity recognition — the groundwork before LLMs.',
            keyPoints: [
              'Tokenization: text → subword/word units the model can process',
              'Embeddings: tokens → dense vectors that capture meaning',
              'Core tasks: classification, translation, NER, summarization',
            ],
          },
        ],
      },
      {
        category: 'Neural Networks & Deep Learning',
        subjects: [
          {
            name: 'Neural Networks',
            content:
              'A neural network is layers of interconnected "neurons," each computing a weighted sum of inputs passed through a non-linear activation function (ReLU, sigmoid, etc.). Stacking layers lets the network approximate complex, non-linear functions between input and output.',
            keyPoints: [
              'Neuron = weighted sum + bias + activation function',
              'Non-linearity is what lets networks model complex relationships',
              'Universal Approximation Theorem: a wide-enough network can approximate any function',
            ],
          },
          {
            name: 'RNNs',
            content:
              'Recurrent Neural Networks process sequences by maintaining a hidden state that is updated at each time step and fed back into the network, giving them a form of memory. They struggle with long sequences due to vanishing/exploding gradients.',
            keyPoints: [
              'Hidden state carries information from previous time steps',
              'Weights are shared across all time steps',
              'Vanishing gradients make it hard to learn long-range dependencies',
            ],
          },
          {
            name: 'LSTMs',
            content:
              'Long Short-Term Memory networks fix the RNN vanishing-gradient problem with a gating mechanism — input, forget, and output gates — that controls what information is kept, discarded, or output at each step, allowing much longer effective memory.',
            keyPoints: [
              'Forget gate decides what to discard from the cell state',
              'Input gate decides what new information to store',
              'A separate cell state acts as a long-term memory highway',
            ],
          },
          {
            name: 'Sequential Models',
            content:
              'Sequential models are architectures designed for ordered data (text, time series, audio), where the order of elements carries meaning. RNNs, LSTMs, GRUs, and Transformers are all sequential models, each trading off memory, parallelism, and long-range accuracy differently.',
            keyPoints: [
              'Order matters: shuffling the input changes the meaning',
              'GRUs are a simplified, faster alternative to LSTMs',
              'Transformers process sequences in parallel using attention instead of recurrence',
            ],
          },
          {
            name: 'CNNs',
            content:
              'Convolutional Neural Networks use sliding filters ("kernels") to detect local patterns like edges and textures in grid-like data (mainly images), then stack and pool these features to recognize increasingly complex shapes and objects.',
            keyPoints: [
              'Convolution = sliding a small filter across the input to detect local patterns',
              'Pooling layers reduce spatial size and add translation invariance',
              'Parameter sharing makes CNNs far more efficient than fully-connected nets for images',
            ],
          },
        ],
      },
      {
        category: 'Attention & Transformers',
        subjects: [
          {
            name: 'Simple Attention Coding',
            content:
              'Implementing attention from scratch means computing Query, Key, and Value matrices from the input, scoring each Query against every Key (dot product), softmaxing those scores, and using them to weight the Value vectors — the core operation behind every Transformer.',
            keyPoints: [
              'Attention(Q,K,V) = softmax(QKᵀ / √d) · V',
              'Scaling by √d keeps gradients stable as dimensionality grows',
              'Self-attention: Q, K, and V all come from the same sequence',
            ],
          },
          {
            name: 'Attention Variations',
            content:
              'Beyond vanilla self-attention there are many variants built for efficiency or capability: multi-head attention (parallel attention "views"), cross-attention (query from one sequence, keys/values from another), sparse/local attention, and flash attention (memory-efficient GPU kernels).',
            keyPoints: [
              'Multi-head attention lets the model attend to different relationships in parallel',
              'Cross-attention connects two different sequences (e.g. encoder–decoder)',
              'Flash Attention reduces memory reads/writes for much faster training/inference',
            ],
          },
          {
            name: 'KV Cache',
            content:
              'During autoregressive generation, a KV cache stores the Key and Value vectors computed for previous tokens so they don\'t need to be recomputed at every new token step — dramatically speeding up inference at the cost of memory.',
            keyPoints: [
              'Avoids recomputing K/V for the entire prefix on every new token',
              'Memory grows linearly with sequence length and batch size',
              'A major bottleneck for serving long-context LLMs efficiently',
            ],
          },
          {
            name: 'GQA',
            content:
              'Grouped-Query Attention is a middle ground between multi-head attention (one K/V per head) and multi-query attention (one shared K/V for all heads): groups of query heads share a single K/V head, cutting KV-cache memory while retaining most of the quality.',
            keyPoints: [
              'Trades off between MHA (quality) and MQA (speed/memory)',
              'Used in models like Llama 2/3 to serve long contexts cheaply',
              'Reduces KV-cache size roughly by the group size',
            ],
          },
          {
            name: 'MLA',
            content:
              'Multi-Head Latent Attention (popularized by DeepSeek-V2) compresses the Key/Value vectors into a low-rank latent space before caching them, shrinking the KV cache far more aggressively than GQA while preserving representational capacity.',
            keyPoints: [
              'Projects K/V into a small latent vector instead of caching full K/V',
              'Achieves large KV-cache savings versus standard multi-head attention',
              'Reconstructs K/V from the latent representation at attention time',
            ],
          },
        ],
      },
      {
        category: 'LLM Engineering',
        subjects: [
          {
            name: 'HuggingFace End-to-End',
            content:
              'The Hugging Face ecosystem (transformers, datasets, tokenizers, accelerate) covers the full LLM workflow: loading pretrained models, fine-tuning on custom data, tokenizing text, and deploying via pipelines or Inference Endpoints.',
            keyPoints: [
              '`transformers` library: model + tokenizer loading in a few lines',
              '`datasets` library: streaming and processing large training corpora',
              'Model Hub: thousands of pretrained checkpoints ready to fine-tune',
            ],
          },
          {
            name: 'LLM Instrumentation',
            content:
              'Instrumentation means adding logging, metrics, and hooks throughout an LLM pipeline (prompts, token usage, latency, tool calls) so you can debug behavior and monitor cost/performance in production, not just accuracy on a benchmark.',
            keyPoints: [
              'Log prompts, completions, latency, and token counts per request',
              'Enables cost tracking and regression detection over time',
              'Foundation for both observability and evals',
            ],
          },
          {
            name: 'Observability',
            content:
              'LLM observability is the practice of tracing requests end-to-end through chains/agents (prompt → retrieval → tool calls → completion) so you can see exactly where a bad output came from — tools like LangSmith, Langfuse, and Helicone specialize in this.',
            keyPoints: [
              'Traces show the full call graph, not just input/output',
              'Helps catch prompt regressions and silent tool failures',
              'Pairs with evals to turn "it feels worse" into measurable numbers',
            ],
          },
          {
            name: 'Tracing',
            content:
              'Tracing captures a structured, timestamped record of every step an LLM application takes for a single request — model calls, retrievals, tool invocations — so engineers can replay and inspect exactly what happened.',
            keyPoints: [
              'Each trace is a tree/graph of spans (one span per operation)',
              'Essential for debugging multi-step agents where failures compound',
              'Often built on OpenTelemetry-style span/trace concepts',
            ],
          },
          {
            name: 'Context Engineering',
            content:
              'Context engineering is deliberately designing what goes into an LLM\'s context window — system prompts, retrieved documents, conversation history, tool schemas — to maximize accuracy and reliability, treated as an engineering discipline rather than one-off prompt tweaking.',
            keyPoints: [
              'Context window is a scarce, expensive resource — every token competes for attention',
              'Includes ordering, compression, and summarization strategies',
              'Broader than "prompt engineering": covers retrieval, memory, and tool outputs too',
            ],
          },
          {
            name: 'Summarization',
            content:
              'Summarization compresses long text into a shorter form while preserving key information — used both as an end-user feature and internally in agent pipelines to compress conversation history or documents that no longer fit the context window.',
            keyPoints: [
              'Extractive (pick key sentences) vs abstractive (generate new sentences)',
              'Used to compress long chat history so agents stay within context limits',
              'Quality is judged on faithfulness (no hallucinated facts) as much as brevity',
            ],
          },
          {
            name: 'Data Collection',
            content:
              'High-quality training and evaluation data is often the biggest lever on LLM/agent performance. This covers sourcing, cleaning, deduplicating, and labeling data — plus synthetic data generation using LLMs themselves to bootstrap datasets.',
            keyPoints: [
              'Garbage in, garbage out — data quality often beats model size',
              'Deduplication and filtering prevent memorization and leakage',
              'Synthetic data generation is now common for fine-tuning and evals',
            ],
          },
        ],
      },
      {
        category: 'RAG & Vector Databases',
        subjects: [
          {
            name: 'Vector Databases',
            content:
              'Vector databases (Pinecone, Weaviate, Qdrant, pgvector) store embeddings and support fast approximate-nearest-neighbor search, letting you retrieve the most semantically similar documents to a query in milliseconds even over millions of vectors.',
            keyPoints: [
              'ANN algorithms (HNSW, IVF) trade a little accuracy for huge speed gains',
              'Similarity is usually cosine similarity or dot product between embeddings',
              'Often combined with metadata filters (hybrid search)',
            ],
          },
          {
            name: 'RAG (Retrieval Augmented Generation)',
            content:
              'RAG grounds an LLM\'s answers in external knowledge: a query is embedded, relevant chunks are retrieved from a vector store, and those chunks are inserted into the prompt so the model generates answers based on real, up-to-date documents instead of memory alone.',
            keyPoints: [
              'Pipeline: chunk documents → embed → store → retrieve → generate',
              'Reduces hallucination by grounding answers in retrieved evidence',
              'Chunking strategy and retrieval quality matter more than model size for RAG accuracy',
            ],
          },
        ],
      },
      {
        category: 'Agents & Agent Frameworks',
        subjects: [
          {
            name: 'Agents from First Principles',
            content:
              'An LLM agent is a loop: the model observes state, reasons about what to do next, calls a tool or takes an action, observes the result, and repeats until the task is done — turning a stateless text predictor into something that can pursue multi-step goals.',
            keyPoints: [
              'Core loop: Observe → Think → Act → Observe (ReAct-style)',
              'Tools give the model the ability to affect and read the outside world',
              'Agents need memory and stopping conditions to avoid infinite loops',
            ],
          },
          {
            name: 'Building an Agent Framework',
            content:
              'Building your own agent framework means implementing the plumbing around the core loop yourself: tool-calling/parsing, state management, memory, error recovery, and orchestration — the same primitives libraries like LangChain abstract away, but understood from scratch.',
            keyPoints: [
              'Tool schema definition + structured output parsing is the trickiest part',
              'Needs robust error handling for malformed tool calls or failures',
              'State/memory management determines how well the agent handles long tasks',
            ],
          },
          {
            name: 'Agent Frameworks',
            content:
              'Frameworks like LangChain, LangGraph, CrewAI, and AutoGen provide ready-made abstractions for chains, tools, memory, and multi-agent orchestration, trading some flexibility for faster development.',
            keyPoints: [
              'LangGraph models agents as explicit state graphs for more control',
              'CrewAI/AutoGen focus on multi-agent collaboration patterns',
              'Trade-off: faster to build vs. harder to debug "magic" abstractions',
            ],
          },
          {
            name: 'Computer Use Agents',
            content:
              'Computer-use agents control a real computer — clicking, typing, taking screenshots — to complete tasks in arbitrary software, rather than being limited to a fixed set of APIs, using vision models to interpret the screen.',
            keyPoints: [
              'Perceives the screen (screenshots) and acts via mouse/keyboard emulation',
              'Far more general than API-based tools, but slower and more error-prone',
              'Needs strong visual grounding to click the right element reliably',
            ],
          },
          {
            name: 'Multimodal Agents',
            content:
              'Multimodal agents reason over more than text — images, audio, video, screenshots — combining a vision/audio encoder with a language model so the agent can perceive and act on rich, real-world inputs.',
            keyPoints: [
              'Combine modality-specific encoders with a shared language backbone',
              'Enable tasks like reading a chart, watching a video, or navigating a UI',
              'Alignment between modalities is the key technical challenge',
            ],
          },
          {
            name: 'Memory Systems',
            content:
              'Because LLM context windows are limited, agent memory systems store and retrieve information across sessions — short-term (recent turns), long-term (vector-store facts/preferences), and episodic (past task traces) — so agents "remember" beyond a single conversation.',
            keyPoints: [
              'Short-term memory = conversation buffer within the context window',
              'Long-term memory = persisted facts retrieved via similarity search',
              'Good memory systems decide what\'s worth saving, not just how to store it',
            ],
          },
        ],
      },
      {
        category: 'Fine-Tuning',
        subjects: [
          {
            name: 'What is Fine-Tuning',
            content:
              'Fine-tuning takes a pretrained model and continues training it on a smaller, task-specific dataset so it adapts its behavior — style, format, domain knowledge — without training a model from scratch.',
            keyPoints: [
              'Full fine-tuning updates all weights; LoRA/PEFT update a small subset',
              'Requires far less data and compute than pretraining',
              'Best for changing style/format; RAG is often better for adding new facts',
            ],
          },
          {
            name: 'Fine-Tuning for Use Cases',
            content:
              'Different goals call for different fine-tuning recipes: supervised fine-tuning (SFT) on input-output examples for task adaptation, instruction tuning for following commands better, and domain adaptation for specialized fields like law or medicine.',
            keyPoints: [
              'SFT: train on curated (prompt, ideal response) pairs',
              'Instruction tuning improves general helpfulness and format-following',
              'Domain adaptation injects specialized vocabulary and conventions',
            ],
          },
          {
            name: 'RL Fine-Tuning',
            content:
              'Reinforcement learning fine-tuning (RLHF, DPO, PPO) further trains a model using human or automated preference signals instead of fixed labels, optimizing the model to produce outputs people actually prefer.',
            keyPoints: [
              'RLHF: reward model trained on human preferences, then PPO optimizes against it',
              'DPO: a simpler, more stable alternative that skips the separate reward model',
              'Used to improve helpfulness, safety, and instruction-following beyond SFT',
            ],
          },
        ],
      },
      {
        category: 'Evaluation & Testing',
        subjects: [
          {
            name: 'Evals',
            content:
              'Evals are systematic tests that measure how well a model or agent performs on representative tasks, giving a repeatable, quantitative signal for comparing prompts, models, or fine-tunes instead of relying on gut feel.',
            keyPoints: [
              'Can be automated (exact match, LLM-as-judge) or human-graded',
              'Should mirror real production tasks, not just generic benchmarks',
              'Run continuously to catch regressions when prompts/models change',
            ],
          },
          {
            name: 'Testing Agents',
            content:
              'Testing multi-step agents is harder than testing single LLM calls because errors compound across steps; it typically involves simulated environments, scripted user turns, and checks on both final outcomes and intermediate tool-call correctness.',
            keyPoints: [
              'Test both the final outcome and the intermediate reasoning/tool-call trace',
              'Simulated environments let you test risky actions safely',
              'Flaky, non-deterministic outputs require statistical (not single-run) testing',
            ],
          },
          {
            name: 'Writing Evals',
            content:
              'Writing good evals means designing a diverse, representative test set, a clear grading rubric or reference answer, and a scoring method (exact match, similarity, or LLM-as-judge) that correlates with real quality.',
            keyPoints: [
              'Start from real failure cases you\'ve observed, not hypothetical ones',
              'LLM-as-judge needs a well-specified rubric to be reliable',
              'Track eval scores over time like any other engineering metric',
            ],
          },
        ],
      },
      {
        category: 'Projects',
        subjects: [
          {
            name: 'Agent Framework Project',
            content:
              'Build your own minimal agent framework from scratch — tool-calling loop, prompt templates, memory, and error handling — then use it to power a real task, cementing the concepts from the Agents module into working code.',
            keyPoints: [
              'Deliverable: a reusable library, not a one-off script',
              'Should support pluggable tools and configurable system prompts',
              'Test it against a real multi-step task end-to-end',
            ],
          },
          {
            name: 'RL Fine-Tuning Project',
            content:
              'Apply RL-based fine-tuning (e.g. DPO) to a small open-source model to shift its behavior on a chosen task, building and using a preference dataset and measuring the before/after difference with an eval set.',
            keyPoints: [
              'Requires constructing a preference (chosen vs rejected) dataset',
              'Compare base vs fine-tuned model on the same eval suite',
              'Good hands-on intro to the RLHF/DPO pipeline end-to-end',
            ],
          },
          {
            name: 'Devin Clone Project',
            content:
              'Build a simplified autonomous coding agent inspired by Devin: it should read a codebase, plan changes, write and run code, interpret errors, and iterate — combining agent loops, tool use, and code execution.',
            keyPoints: [
              'Needs a sandboxed execution environment for safety',
              'Core loop: plan → edit code → run tests → read errors → retry',
              'Tests your agent-framework and tool-calling skills together',
            ],
          },
          {
            name: 'Memory Framework Project',
            content:
              'Design and implement a memory system for an agent — short-term buffer plus a long-term vector-store — so it can recall facts and preferences across sessions, then evaluate recall accuracy over multi-session conversations.',
            keyPoints: [
              'Decide what gets written to long-term memory and when',
              'Use embeddings + a vector store for retrieval-based recall',
              'Evaluate with multi-session test conversations, not single turns',
            ],
          },
        ],
      },
      {
        category: 'Advanced Topics',
        subjects: [
          {
            name: 'Advanced AI Topics',
            content:
              'A capstone module covering emerging areas beyond the core curriculum — mixture-of-experts architectures, model quantization for efficient inference, speculative decoding, multi-agent systems, and the latest research directions in the field.',
            keyPoints: [
              'MoE: activate only a subset of parameters per token for efficiency',
              'Quantization shrinks models (e.g. FP16 → INT4) for cheaper inference',
              'Speculative decoding uses a small model to draft tokens a large model verifies',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'blockchain',
    title: 'Web3 - Solana',
    emoji: '🔗',
    icon: 'Link2',
    pastel: '#d5f0ff',
    pastelbg: 'rgba(56, 189, 248, 0.07)',
    pastelborder: 'rgba(56, 189, 248, 0.15)',
    glowColor: 'rgba(56, 189, 248, 0.2)',
    iconBg: 'rgba(56, 189, 248, 0.12)',
    iconColor: '#38bdf8',
    duration: '14 Weeks',
    level: 'Beginner → Advanced',
    tag: 'High Demand',
    tagColor: 'rgba(56, 189, 248, 0.12)',
    tagText: '#38bdf8',
    color: '#e0706c',
    description:
      'Solidity, smart contracts, DeFi, NFTs and building decentralized applications on Ethereum & beyond.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
    bgimg: '/images/block2.jpg',
    categories: [
      {
        category: 'Blockchain Fundamentals',
        subjects: [
          {
            name: 'Introduction to Blockchains',
            content:
              'A blockchain is a distributed, append-only ledger replicated across many nodes, where new blocks of transactions are cryptographically linked to the previous block. Consensus mechanisms let untrusted parties agree on a single shared state without a central authority.',
            keyPoints: [
              'Each block contains a hash of the previous block, forming a tamper-evident chain',
              'Consensus (Proof of Work, Proof of Stake) resolves who gets to add the next block',
              'Decentralization trades raw performance for censorship-resistance and trustlessness',
            ],
          },
          {
            name: 'Cryptography',
            content:
              'Blockchains rely on cryptographic primitives: hash functions (SHA-256, etc.) for tamper-evidence, public-key cryptography for wallet ownership and signatures, and digital signatures to prove a transaction was authorized by the key holder.',
            keyPoints: [
              'Hash functions are one-way and collision-resistant',
              'A wallet is just a keypair — the public key derives the address',
              'Digital signatures prove authenticity without revealing the private key',
            ],
          },
          {
            name: 'Solana Architecture',
            content:
              'Solana achieves high throughput via Proof of History (a verifiable clock that orders events before consensus), parallel transaction execution (Sealevel), and a leader-based validator schedule — trading some decentralization for speed compared to Ethereum.',
            keyPoints: [
              'Proof of History timestamps events, reducing time spent on ordering consensus',
              'Sealevel executes non-overlapping transactions in parallel across many cores',
              'Validators rotate as "leader" on a known schedule to propose blocks',
            ],
          },
          {
            name: 'Solana Terminology',
            content:
              'Solana has its own vocabulary: "programs" (smart contracts, stateless), "accounts" (where state actually lives), "slots" (time units for block production), "lamports" (the smallest unit of SOL), and "rent" (fees for storing account data).',
            keyPoints: [
              'Programs are stateless code; all data lives in separate accounts',
              '1 SOL = 1,000,000,000 lamports',
              'Accounts pay rent unless they hold a rent-exempt minimum balance',
            ],
          },
          {
            name: 'Authorities & Ownership',
            content:
              'Every Solana account has an "owner" program that alone can modify its data, and often a separate "authority" (a signer) that must approve certain actions — a two-layer permission model that underlies token minting, upgrades, and access control.',
            keyPoints: [
              'Only the owning program can write to an account\'s data',
              'Authorities are signers granted specific permissions (e.g. mint authority)',
              'Authority can often be transferred or revoked (e.g. "renounce mint authority")',
            ],
          },
          {
            name: 'PDAs (Program Derived Addresses)',
            content:
              'PDAs are addresses deterministically derived from a program ID and a set of seeds, with no corresponding private key — letting programs "sign" for accounts they control programmatically, which is essential for building trustless on-chain logic.',
            keyPoints: [
              'Derived via a hash of seeds + program ID + a "bump" value',
              'Have no private key — only the owning program can authorize actions for them',
              'Used heavily for vaults, escrows, and deterministic account lookups',
            ],
          },
        ],
      },
      {
        category: 'Solana Development',
        subjects: [
          {
            name: '@solana/web3.js',
            content:
              'The original JavaScript/TypeScript SDK for interacting with Solana from a client: building and sending transactions, querying accounts, subscribing to events, and connecting to wallets — the standard way frontends talk to the chain.',
            keyPoints: [
              'Wraps Solana\'s JSON-RPC API in a typed JS/TS interface',
              'Handles transaction construction, signing, and submission',
              'Being gradually succeeded by newer, more modular libraries like Gill',
            ],
          },
          {
            name: 'Gill',
            content:
              'Gill is a modern, lightweight TypeScript library for Solana, designed as a leaner alternative to @solana/web3.js with better tree-shaking, more ergonomic APIs, and tighter integration with the newer Solana JS ecosystem (Kit).',
            keyPoints: [
              'Smaller bundle size than legacy web3.js',
              'Built on newer functional/composable primitives',
              'Aimed at faster, more type-safe dApp development',
            ],
          },
          {
            name: 'Wallet Adapter',
            content:
              'Solana Wallet Adapter is a standard library/React hook set that lets dApps connect to any supported wallet (Phantom, Solflare, Backpack, etc.) through a unified interface, handling connection, signing, and disconnect flows.',
            keyPoints: [
              'One integration supports many wallets via a common adapter interface',
              'Provides React hooks (useWallet, useConnection) for easy UI wiring',
              'Handles auto-reconnect and wallet-not-installed states',
            ],
          },
          {
            name: 'Solana Data Model',
            content:
              'Solana state is organized as a flat key-value store of accounts, each with an owner, lamport balance, and a byte array of data — unlike Ethereum\'s contract-embedded storage, all Solana program state lives in separate, explicitly-passed accounts.',
            keyPoints: [
              'Everything is an "account": programs, tokens, and data are all accounts',
              'Transactions must explicitly list every account they touch',
              'This explicitness is what enables Sealevel\'s parallel execution',
            ],
          },
          {
            name: 'Token Program',
            content:
              'The SPL Token Program is Solana\'s standard for creating and managing fungible and non-fungible tokens — mints define a token type, and token accounts hold balances of a specific mint for a specific owner.',
            keyPoints: [
              'A "Mint" account defines a token\'s supply, decimals, and authorities',
              'A "Token Account" holds a balance of one mint for one owner',
              'Token-2022 extends the original program with features like transfer hooks',
            ],
          },
          {
            name: 'Indexing',
            content:
              'Because querying raw on-chain accounts for complex app data is slow, indexers listen to the chain and build queryable off-chain databases (e.g. via Helius, The Graph, or custom geyser plugins) so apps can fetch data efficiently.',
            keyPoints: [
              'Raw RPC calls don\'t scale well for complex, relational queries',
              'Indexers subscribe to chain data and store it in a queryable database',
              'Common providers: Helius, QuickNode, Triton, custom Geyser plugins',
            ],
          },
        ],
      },
      {
        category: 'DeFi Concepts',
        subjects: [
          {
            name: 'AMMs',
            content:
              'Automated Market Makers replace traditional order books with liquidity pools and a pricing formula (like the constant-product x·y=k), letting anyone trade against the pool instantly while liquidity providers earn fees.',
            keyPoints: [
              'Constant product formula: x · y = k sets the exchange price',
              'Liquidity providers deposit pairs of tokens and earn trading fees',
              'Subject to "impermanent loss" when the pooled assets\' prices diverge',
            ],
          },
          {
            name: 'DLMM',
            content:
              'Dynamic Liquidity Market Makers (e.g. Meteora\'s DLMM) organize liquidity into discrete price "bins" rather than a smooth curve, letting liquidity providers concentrate capital precisely and earn fees with much higher capital efficiency than classic AMMs.',
            keyPoints: [
              'Liquidity is split into discrete price bins instead of a continuous curve',
              'LPs can concentrate capital near the current price for higher fee capture',
              'Enables dynamic fees that adjust with volatility',
            ],
          },
          {
            name: 'CLMM',
            content:
              'Concentrated Liquidity Market Makers (popularized by Uniswap v3, used on Solana by Orca/Raydium) let LPs allocate capital to a specific price range instead of the whole curve, dramatically increasing capital efficiency for prices that trade in a range.',
            keyPoints: [
              'LPs choose a price range instead of providing liquidity across 0 → ∞',
              'Capital outside the current price range earns no fees',
              'Requires more active management than classic full-range AMMs',
            ],
          },
          {
            name: 'Perpetuals',
            content:
              'Perpetual futures are derivatives with no expiry date that track an underlying asset\'s price via a "funding rate" mechanism, letting traders take leveraged long/short positions on-chain without ever holding the underlying asset.',
            keyPoints: [
              'No expiry — positions stay open until manually closed or liquidated',
              'Funding rate periodically transfers value between longs and shorts to anchor price',
              'Leverage amplifies both gains and liquidation risk',
            ],
          },
          {
            name: 'DeFi Architecture',
            content:
              'DeFi protocols are composable smart-contract "money legos" — lending markets, DEXs, and derivatives — that can call and build on top of each other permissionlessly, enabling complex financial products assembled entirely from open, auditable code.',
            keyPoints: [
              'Composability: protocols freely integrate with one another ("money legos")',
              'No central intermediary — logic and custody live in smart contracts',
              'Security audits are critical since bugs can be directly exploited for funds',
            ],
          },
        ],
      },
      {
        category: 'Rust Programming',
        subjects: [
          {
            name: 'Rust Basics',
            content:
              'Rust is a systems programming language emphasizing memory safety without a garbage collector, enforced at compile time through its ownership and borrowing rules — the required language for writing native Solana programs.',
            keyPoints: [
              'Ownership: each value has exactly one owner; scope-based cleanup',
              'Borrowing: references can be shared (read-only) or mutable (exclusive), never both',
              'The compiler rejects data races and use-after-free bugs before runtime',
            ],
          },
          {
            name: 'Advanced Rust',
            content:
              'Beyond the basics: traits and generics for polymorphism, lifetimes for explicit reference validity, smart pointers (Box, Rc, RefCell) for flexible memory patterns, and error handling via Result/Option — all essential for production-grade Solana programs.',
            keyPoints: [
              'Traits define shared behavior across types (similar to interfaces)',
              'Lifetimes annotate how long references remain valid',
              'Result<T, E> and Option<T> make error/null handling explicit and safe',
            ],
          },
        ],
      },
      {
        category: 'Smart Contracts',
        subjects: [
          {
            name: 'Anchor Framework',
            content:
              'Anchor is Solana\'s dominant smart-contract framework, providing macros that auto-generate account validation, serialization, and IDLs (interface definitions), dramatically cutting the boilerplate required for raw Rust/Solana program development.',
            keyPoints: [
              '#[program] and #[account] macros handle serialization boilerplate',
              'Automatic IDL generation makes client integration straightforward',
              'Built-in account validation constraints reduce common security bugs',
            ],
          },
          {
            name: 'Common Smart Contracts',
            content:
              'A survey of standard on-chain program patterns — token vaults, multisigs, governance, vesting schedules, and marketplaces — the recurring building blocks that show up across nearly every Solana project.',
            keyPoints: [
              'Vaults hold and release funds under programmatic conditions',
              'Multisigs require M-of-N signers to approve an action',
              'Vesting contracts release tokens gradually according to a schedule',
            ],
          },
          {
            name: 'Staking Contracts',
            content:
              'Staking programs let users lock tokens to earn rewards (or participate in consensus), tracking stake amounts, reward accrual, and unlock/cooldown periods entirely on-chain via program-owned accounts.',
            keyPoints: [
              'Tracks staked amount, reward rate, and last-updated timestamp per user',
              'Often includes a cooldown/unbonding period before withdrawal',
              'Reward math must avoid rounding exploits (a common audit finding)',
            ],
          },
          {
            name: 'Escrow Contracts',
            content:
              'An escrow contract holds assets from two parties until agreed conditions are met, then releases them atomically — a foundational pattern for trustless swaps, OTC trades, and conditional payments without a trusted intermediary.',
            keyPoints: [
              'Assets are locked in a PDA-controlled vault account until release conditions are met',
              'Atomic swap: both sides succeed together or the transaction reverts entirely',
              'Common building block for OTC trading and conditional payments',
            ],
          },
          {
            name: 'Partially Centralized Contracts',
            content:
              'Some real-world contracts intentionally keep an admin key or authority for upgrades, emergency pauses, or parameter changes — a deliberate trust trade-off, common in early-stage or regulated products, that this topic teaches how to design responsibly.',
            keyPoints: [
              'Admin authority can pause, upgrade, or adjust parameters',
              'A deliberate trade-off between decentralization and operational safety',
              'Should be transparent to users (e.g. via a timelock or multisig)',
            ],
          },
        ],
      },
      {
        category: 'Security & Cryptographic Systems',
        subjects: [
          {
            name: 'MPC (Multi-Party Computation)',
            content:
              'Multi-Party Computation lets several parties jointly compute a function (like signing a transaction) over their private inputs without any single party ever seeing the full secret — used in modern wallets to eliminate single points of key compromise.',
            keyPoints: [
              'No single party ever holds the complete private key',
              'Signing requires cooperation from a threshold of parties',
              'Used by institutional custody solutions and MPC wallets (e.g. Fireblocks-style)',
            ],
          },
          {
            name: 'Shamir\'s Secret Sharing',
            content:
              'Shamir\'s Secret Sharing splits a secret (like a private key) into N pieces such that any K of them can reconstruct it, but fewer than K reveal nothing — a classic technique for distributed key backup and recovery.',
            keyPoints: [
              'Based on polynomial interpolation over a finite field',
              'K-of-N threshold: any K shares reconstruct the secret, K-1 reveal nothing',
              'Commonly used for secure key backup and social recovery wallets',
            ],
          },
        ],
      },
      {
        category: 'Web2 + Web3 Integration',
        subjects: [
          {
            name: 'Ad Hoc Web2 + Web3 Integration',
            content:
              'Real products blend on-chain logic with traditional backends — off-chain databases for fast reads, webhooks for chain events, and hybrid auth combining wallets with normal accounts — this covers pragmatic patterns for stitching the two worlds together.',
            keyPoints: [
              'Use off-chain databases as a fast cache/index of on-chain state',
              'Webhooks/indexers notify your backend of relevant on-chain events',
              'Hybrid auth: wallet signature + traditional session/JWT',
            ],
          },
          {
            name: 'Frontend/Client Integration',
            content:
              'Connecting a React/Next.js frontend to Solana: wallet connection flows, building and sending transactions, optimistic UI updates while waiting for confirmation, and gracefully handling failed/rejected transactions.',
            keyPoints: [
              'Wallet Adapter handles connect/sign flows in the UI layer',
              'Show optimistic state, then reconcile once the transaction confirms',
              'Always handle user rejection and RPC failure gracefully',
            ],
          },
          {
            name: 'Testing Smart Contracts',
            content:
              'Solana programs are tested with local validators and frameworks (Anchor\'s test suite, LiteSVM) that simulate the runtime, letting you write unit and integration tests for instructions, account state changes, and failure cases before mainnet deployment.',
            keyPoints: [
              'Local validator (solana-test-validator) simulates the real runtime',
              'Anchor\'s TypeScript test framework drives instructions and asserts state',
              'Always test both happy paths and expected failure/revert cases',
            ],
          },
        ],
      },
      {
        category: 'Projects',
        subjects: [
          {
            name: 'DEX (Decentralized Exchange)',
            content:
              'Build an on-chain exchange where users swap tokens directly against liquidity pools using an AMM formula, implementing pool creation, swap logic, and fee accounting as an Anchor program plus a frontend.',
            keyPoints: [
              'Implement pool init, deposit/withdraw liquidity, and swap instructions',
              'Constant-product pricing with slippage protection',
              'Frontend should show live pool state and estimated swap output',
            ],
          },
          {
            name: 'CEX (Centralized Exchange)',
            content:
              'Build a centralized exchange backend: an off-chain order book/matching engine, custody of user balances, and deposit/withdrawal bridges to the chain — contrasting the trust and performance trade-offs versus a DEX.',
            keyPoints: [
              'Order book + matching engine typically live off-chain for speed',
              'Requires secure custody of user funds (hot/cold wallet design)',
              'Deposits/withdrawals bridge between off-chain balances and on-chain transfers',
            ],
          },
          {
            name: 'Wallet Development',
            content:
              'Build a Solana wallet: keypair generation and secure storage, transaction signing, balance/token display, and integration with the Wallet Standard so other dApps can detect and connect to it.',
            keyPoints: [
              'Secure private key storage is the most security-critical piece',
              'Implement the Wallet Standard interface for dApp compatibility',
              'Support SOL and SPL token balances, plus transaction history',
            ],
          },
          {
            name: 'Prediction Market',
            content:
              'Build a market where users bet on the outcome of future events: outcome shares are minted and traded, and a resolution mechanism (oracle or admin) settles the market and pays out winners proportionally.',
            keyPoints: [
              'Design outcome tokens (e.g. YES/NO shares) that sum to a fixed payout',
              'Needs a trusted or decentralized resolution/oracle mechanism',
              'Pricing can use an AMM (like LMSR) to reflect the crowd\'s probability estimate',
            ],
          },
          {
            name: 'Staking Platform',
            content:
              'Build a full staking product: deposit/withdraw instructions, reward accrual over time, optional lock-up tiers with boosted rewards, and a dashboard showing users their staked balance and pending rewards.',
            keyPoints: [
              'Track per-user stake and reward-per-token accounting on-chain',
              'Consider lock-up tiers for boosted APY vs flexible unstaking',
              'Guard against reward-math rounding exploits',
            ],
          },
          {
            name: 'Escrow Platform',
            content:
              'Build a general-purpose escrow app: two parties propose a trade, deposit assets into a PDA-controlled vault, and the contract releases funds atomically once both sides confirm — plus a dispute/cancel path.',
            keyPoints: [
              'PDA vault holds funds until both parties confirm or a timeout passes',
              'Atomic release: swap succeeds fully or reverts fully',
              'Include a cancel/refund path for abandoned trades',
            ],
          },
        ],
      },
      {
        category: 'Resources',
        subjects: [
          {
            name: 'Solana Foundation Curriculum',
            content:
              'The Solana Foundation\'s official developer curriculum and documentation — structured lessons covering the runtime, Anchor, SPL tokens, and best practices, maintained directly by the ecosystem\'s core team.',
            keyPoints: [
              'Official, up-to-date reference maintained by the Solana Foundation',
              'Covers everything from account model basics to production patterns',
              'Good primary source to cross-check against third-party tutorials',
            ],
          },
          {
            name: 'Bitcoin Whitepaper',
            content:
              'Satoshi Nakamoto\'s 2008 paper "Bitcoin: A Peer-to-Peer Electronic Cash System" introduced the original blockchain design — Proof of Work, the UTXO model, and a solution to double-spending without a trusted third party — the conceptual root of the entire industry.',
            keyPoints: [
              'Introduced Proof of Work as a Sybil-resistant consensus mechanism',
              'Solved double-spending without any central authority',
              'Essential historical context even though most modern chains differ architecturally',
            ],
          },
          {
            name: 'Rust by Jon Gjengset',
            content:
              'Jon Gjengset\'s "Crust of Rust" video series and deep-dive content walk through advanced Rust concepts (lifetimes, traits, unsafe, concurrency) with live-coding depth well beyond introductory tutorials — recommended for solidifying Rust before serious Solana program work.',
            keyPoints: [
              'Deep, live-coded explanations of advanced Rust internals',
              'Strong preparation for reading/writing production Solana programs',
              'Complements (doesn\'t replace) the official Rust Book for beginners',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'webdev',
    title: 'Full-Stack \nWeb Dev',
    emoji: '🌐',
    icon: 'Globe',
    pastel: '#d5ffe8',
    pastelbg: 'rgba(52, 211, 153, 0.07)',
    pastelborder: 'rgba(52, 211, 153, 0.15)',
    glowColor: 'rgba(52, 211, 153, 0.2)',
    iconBg: 'rgba(52, 211, 153, 0.12)',
    iconColor: '#34d399',
    duration: '18 Weeks',
    level: 'Zero to Hero',
    tag: 'Best for Beginners',
    tagColor: 'rgba(52, 211, 153, 0.12)',
    tagText: '#34d399',
    color: '#eccd51',
    description:
      'Full-stack mastery from HTML to Next.js, React, Node.js, databases and deploying production apps.',
    image:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=300&fit=crop',
    bgimg: '/images/web2.jpg',
    categories: [
      {
        category: 'Frontend Fundamentals',
        subjects: [
          {
            name: 'HTML',
            content:
              'HTML (HyperText Markup Language) structures web content using nested elements and tags — headings, paragraphs, links, forms, and semantic tags like <header>/<article> that describe meaning, not just appearance.',
            keyPoints: [
              'The DOM tree is built directly from HTML element nesting',
              'Semantic tags (nav, main, article) improve accessibility and SEO',
              'Forms and inputs are the primary way users send data to a server',
            ],
          },
          {
            name: 'CSS',
            content:
              'CSS (Cascading Style Sheets) controls layout and appearance: the box model, selectors and specificity, and modern layout systems like Flexbox (1D) and Grid (2D) that replaced older float-based layouts.',
            keyPoints: [
              'Box model: content → padding → border → margin',
              'Specificity + cascade determine which conflicting rule wins',
              'Flexbox for one-dimensional layout, Grid for two-dimensional layout',
            ],
          },
          {
            name: 'JavaScript Basics',
            content:
              'Core JS: variables (let/const), data types, functions, arrays/objects, and control flow — the language that makes web pages interactive by running in the browser and manipulating the DOM in response to events.',
            keyPoints: [
              'let/const replaced var for block-scoped, safer variable declarations',
              'Functions are first-class values — can be passed around, returned, stored',
              'The DOM API lets JS read and modify page content live',
            ],
          },
          {
            name: 'JavaScript Architecture',
            content:
              'How JavaScript actually runs: the single-threaded call stack, the event loop, the callback/microtask queues, and closures — understanding this explains why async code behaves the way it does and how to structure larger codebases.',
            keyPoints: [
              'Single-threaded call stack executes one thing at a time',
              'Event loop pulls tasks from queues once the stack is empty',
              'Closures let functions "remember" variables from their defining scope',
            ],
          },
          {
            name: 'Asynchronous JavaScript',
            content:
              'JS handles non-blocking operations (network calls, timers) via callbacks, Promises, and async/await — letting code wait for results without freezing the whole page, with microtasks (Promises) prioritized over macrotasks (setTimeout).',
            keyPoints: [
              'Promises represent a value that will resolve or reject in the future',
              'async/await is syntactic sugar over Promises for readable async code',
              'Microtask queue (Promises) drains before the next macrotask (setTimeout)',
            ],
          },
          {
            name: 'TypeScript',
            content:
              'TypeScript is a superset of JavaScript adding static types, catching whole categories of bugs (typos, wrong argument types) at compile time instead of runtime, and enabling much better editor autocomplete and refactoring.',
            keyPoints: [
              'Types are checked at compile time, then erased — pure JS runs at runtime',
              'Interfaces/types describe the shape of objects and function signatures',
              'Generics let you write reusable, type-safe components and functions',
            ],
          },
        ],
      },
      {
        category: 'Backend Development',
        subjects: [
          {
            name: 'Node.js vs Browser JavaScript',
            content:
              'Node.js runs JavaScript outside the browser using the V8 engine, swapping browser APIs (DOM, window) for server-side ones (filesystem, networking, process) — the same language, a very different runtime environment and set of capabilities.',
            keyPoints: [
              'No DOM/window in Node — instead you get fs, process, and net modules',
              'Node uses CommonJS (require) or ES modules for code organization',
              'Enables JavaScript to power full backend servers, not just browser pages',
            ],
          },
          {
            name: 'HTTP Fundamentals',
            content:
              'HTTP is the request/response protocol underlying the web: methods (GET, POST, PUT, DELETE), status codes (200, 404, 500), headers, and the request/response cycle every backend framework is built on top of.',
            keyPoints: [
              'Methods signal intent: GET reads, POST creates, PUT/PATCH update, DELETE removes',
              'Status codes: 2xx success, 3xx redirect, 4xx client error, 5xx server error',
              'Headers carry metadata (content type, auth tokens, caching rules)',
            ],
          },
          {
            name: 'Express.js',
            content:
              'Express is the classic minimal Node.js web framework, providing routing, middleware, and request/response helpers so you can build REST APIs and servers with just a few lines of code.',
            keyPoints: [
              'Middleware functions run in a chain before the final route handler',
              'Routing maps HTTP method + path to a handler function',
              'Unopinionated — you assemble the pieces (auth, validation, DB) yourself',
            ],
          },
          {
            name: 'Databases',
            content:
              'Databases persist application data beyond a single process\'s lifetime. The two major families are relational (SQL — structured tables, strong consistency) and non-relational (NoSQL — flexible schemas, horizontal scale), each suited to different access patterns.',
            keyPoints: [
              'SQL databases enforce a fixed schema and support complex joins',
              'NoSQL databases favor flexible schemas and horizontal scalability',
              'Choice depends on data shape, consistency needs, and query patterns',
            ],
          },
          {
            name: 'MongoDB',
            content:
              'MongoDB is a document-oriented NoSQL database storing JSON-like BSON documents in flexible collections rather than fixed tables, popular for rapid prototyping and workloads with evolving or nested data shapes.',
            keyPoints: [
              'Documents (BSON) can have varying fields within the same collection',
              'No enforced joins — data is often denormalized/embedded for speed',
              'Scales horizontally well via sharding',
            ],
          },
          {
            name: 'PostgreSQL',
            content:
              'PostgreSQL is a powerful open-source relational database known for strict SQL compliance, strong consistency (ACID transactions), and advanced features like JSONB columns, full-text search, and extensibility.',
            keyPoints: [
              'ACID transactions guarantee consistent, reliable multi-step writes',
              'Supports both relational tables and semi-structured JSONB data',
              'Rich ecosystem of extensions (PostGIS, pgvector, etc.)',
            ],
          },
          {
            name: 'Prisma',
            content:
              'Prisma is a type-safe Node.js/TypeScript ORM: you define your schema in a Prisma schema file, and it generates a fully-typed client for querying your database plus migration tooling to evolve the schema safely.',
            keyPoints: [
              'Schema-first: define models once, get a fully-typed query client',
              'Prisma Migrate handles versioned database schema changes',
              'Autocomplete and compile-time checks catch bad queries early',
            ],
          },
          {
            name: 'Drizzle ORM',
            content:
              'Drizzle is a lightweight, SQL-like TypeScript ORM that stays close to raw SQL syntax and generates minimal runtime overhead, appealing to developers who want type safety without a heavy abstraction layer.',
            keyPoints: [
              'Query syntax mirrors SQL closely — less "magic" than Prisma',
              'Very lightweight with minimal runtime overhead',
              'Type-safe schema definitions in plain TypeScript',
            ],
          },
        ],
      },
      {
        category: 'Modern Web Tooling',
        subjects: [
          {
            name: 'Turborepo',
            content:
              'Turborepo is a build system for JavaScript/TypeScript monorepos that caches task outputs (builds, tests, lints) and parallelizes them across packages, making large multi-app codebases fast to build and test.',
            keyPoints: [
              'Caches build/test outputs locally and remotely to skip redundant work',
              'Understands task dependencies across packages in the monorepo',
              'Common pairing: Turborepo + pnpm workspaces',
            ],
          },
          {
            name: 'BunJS',
            content:
              'Bun is an all-in-one JavaScript runtime, bundler, test runner, and package manager built for speed (written in Zig, using JavaScriptCore), positioned as a faster, more batteries-included alternative to Node.js + separate tooling.',
            keyPoints: [
              'Drop-in Node compatibility for most common APIs',
              'Native bundler and test runner — fewer external tools needed',
              'Package installs are dramatically faster than npm/yarn in most cases',
            ],
          },
        ],
      },
      {
        category: 'Frontend Frameworks',
        subjects: [
          {
            name: 'React',
            content:
              'React builds UIs from composable, reusable components that re-render declaratively when state changes, using a virtual DOM diffing algorithm to efficiently update only what actually changed in the real DOM.',
            keyPoints: [
              'Components + props + state is the core mental model',
              'Hooks (useState, useEffect) manage state and side effects in function components',
              'Virtual DOM diffing minimizes expensive real-DOM updates',
            ],
          },
          {
            name: 'Tailwind CSS',
            content:
              'Tailwind is a utility-first CSS framework: instead of writing custom CSS classes, you compose small, single-purpose utility classes directly in your markup (e.g. flex, p-4, text-lg), speeding up UI development significantly.',
            keyPoints: [
              'Utility classes map directly to individual CSS properties',
              'Avoids the "naming things" problem of traditional CSS class architecture',
              'JIT compiler generates only the CSS you actually use, keeping bundles small',
            ],
          },
          {
            name: 'Next.js',
            content:
              'Next.js is a full-stack React framework adding server-side rendering, static site generation, file-based routing, and API routes — turning React from a client-only library into a production-ready application framework.',
            keyPoints: [
              'File-based routing: folder/file structure defines your app\'s routes',
              'Supports SSR, SSG, and ISR rendering strategies per page',
              'API routes let you write backend endpoints inside the same project',
            ],
          },
        ],
      },
      {
        category: 'Real-Time Communication',
        subjects: [
          {
            name: 'WebSockets',
            content:
              'WebSockets provide a persistent, full-duplex connection between client and server (unlike request/response HTTP), enabling real-time features like chat, live notifications, and collaborative editing with low latency.',
            keyPoints: [
              'Single long-lived connection replaces repeated HTTP polling',
              'Full-duplex: both client and server can push messages anytime',
              'Common libraries: native WebSocket API, Socket.IO',
            ],
          },
          {
            name: 'WebRTC',
            content:
              'WebRTC enables direct peer-to-peer audio, video, and data connections between browsers without routing media through a server, using NAT traversal (STUN/TURN) and signaling to establish the connection — the backbone of browser video calls.',
            keyPoints: [
              'Peer-to-peer media transfer avoids server-side bandwidth costs',
              'STUN/TURN servers help peers connect through NATs/firewalls',
              'A separate signaling channel (often WebSockets) is needed to set up the connection',
            ],
          },
          {
            name: 'Queues',
            content:
              'Message queues (RabbitMQ, SQS, BullMQ/Redis) decouple producers from consumers by buffering work items, letting systems handle spikes gracefully, retry failed jobs, and process tasks asynchronously in the background.',
            keyPoints: [
              'Decouples the producer of work from the consumer that processes it',
              'Smooths out traffic spikes and enables retries on failure',
              'Common use: background jobs like emails, image processing, notifications',
            ],
          },
          {
            name: 'Publish/Subscribe Systems',
            content:
              'Pub/Sub is a messaging pattern where publishers emit events to named topics/channels without knowing who\'s listening, and subscribers receive only the topics they\'ve subscribed to — powering real-time fan-out at scale (Redis Pub/Sub, Kafka).',
            keyPoints: [
              'Publishers and subscribers are decoupled — no direct knowledge of each other',
              'One event can fan out to many subscribers simultaneously',
              'Kafka adds durable, replayable logs on top of the basic pub/sub pattern',
            ],
          },
        ],
      },
      {
        category: 'Projects',
        subjects: [
          {
            name: 'Todo App',
            content:
              'The classic starter project: CRUD operations (create, read, update, delete) on a list of tasks, wiring together frontend state, an API, and a database — the "hello world" of full-stack development.',
            keyPoints: [
              'Covers full CRUD across frontend, API, and database layers',
              'Good first project for practicing state management and API design',
              'Extend with auth, filtering, or persistence to deepen the exercise',
            ],
          },
          {
            name: 'Lovable Clone',
            content:
              'Build a simplified version of an AI app-builder: a chat interface where user prompts generate and iteratively modify a live web app/code, combining an LLM backend with a code-execution/preview frontend.',
            keyPoints: [
              'Combines LLM code generation with a live preview/sandbox',
              'Requires managing iterative edits to generated code across turns',
              'Tests full-stack skills plus LLM API integration',
            ],
          },
          {
            name: 'Codeforces Clone',
            content:
              'Build a competitive programming platform: problem statements, a code submission system, a judge that compiles/runs submissions against test cases, and a live leaderboard/ranking system.',
            keyPoints: [
              'Needs a sandboxed code execution/judging pipeline',
              'Submission queue pattern fits well with background job processing',
              'Leaderboard requires efficient ranking queries as submissions grow',
            ],
          },
          {
            name: 'Trading App',
            content:
              'Build a simulated trading platform: real-time price feeds, an order placement system, a matching engine or price-based execution, and a portfolio/PnL dashboard — heavy on real-time data and state management.',
            keyPoints: [
              'Real-time price updates typically via WebSockets',
              'Needs careful handling of concurrent order state',
              'Portfolio/PnL calculations must stay consistent with executed trades',
            ],
          },
        ],
      },
      {
        category: 'Resources & Practice',
        subjects: [
          {
            name: 'YouTube Channel Resources',
            content:
              'Curated YouTube channels covering web development — from beginner walkthroughs to deep architecture breakdowns — used as supplementary video learning alongside the written curriculum.',
            keyPoints: [
              'Best for visual/step-by-step learners supplementing written material',
              'Look for channels that build real projects, not just theory',
              'Cross-check code against official docs since APIs change over time',
            ],
          },
          {
            name: 'Angela Yu Course',
            content:
              'Angela Yu\'s "The Complete Web Development Bootcamp" is a widely-used, comprehensive beginner-to-intermediate course covering HTML/CSS/JS through full-stack Node.js apps, known for its structured, project-based teaching style.',
            keyPoints: [
              'Comprehensive beginner-to-intermediate full-stack coverage',
              'Project-based teaching style with incremental complexity',
              'Good structured on-ramp before diving into framework-specific deep dives',
            ],
          },
          {
            name: 'React.dev Documentation',
            content:
              'The official React documentation at react.dev — rewritten with interactive examples and a "thinking in React" pedagogy — is the most authoritative and up-to-date source for learning React concepts and hooks.',
            keyPoints: [
              'Official, always up-to-date source for React APIs and patterns',
              'Interactive sandboxes let you experiment directly in the docs',
              '"Thinking in React" guide is excellent for building the right mental model',
            ],
          },
          {
            name: 'Open Source Practice Projects',
            content:
              'Contributing to real open-source repositories — fixing bugs, adding small features, improving docs — builds practical skills (reading unfamiliar code, git workflows, code review) that toy projects can\'t teach.',
            keyPoints: [
              'Start with "good first issue" labeled tickets on GitHub',
              'Teaches real-world git workflows: forks, branches, PRs, code review',
              'Builds a public portfolio recruiters can actually inspect',
            ],
          },
          {
            name: 'GSOC Organizations',
            content:
              'Google Summer of Code pairs students with open-source organizations for a paid, mentored summer of contributing real features — a well-regarded way to gain deep experience in a specific codebase and community.',
            keyPoints: [
              'Paid, mentored contribution program run by Google each summer',
              'Requires a competitive proposal to a specific participating organization',
              'A strong signal of real-world open-source experience on a resume',
            ],
          },
          {
            name: 'Open Source Companies',
            content:
              'Companies that build their core product as open source (e.g. dev tools, databases) often have approachable, well-documented codebases and active communities — great targets for meaningful contributions and learning production-grade practices.',
            keyPoints: [
              'Often have clear contribution guides and active maintainer communities',
              'Reading production-grade code teaches patterns tutorials skip',
              'Contributions here carry extra credibility since the product is widely used',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    emoji: '🚀',
    icon: 'Server',
    pastel: '#fff3d5',
    pastelbg: 'rgba(254, 206, 1, 0.06)',
    pastelborder: 'rgba(254, 206, 1, 0.18)',
    glowColor: 'rgba(254, 206, 1, 0.15)',
    iconBg: 'rgba(254, 206, 1, 0.12)',
    iconColor: '#fece01',
    duration: '12 Weeks',
    level: 'Intermediate',
    tag: 'High Salary',
    tagColor: 'rgba(254, 206, 1, 0.12)',
    tagText: '#fece01',
    color: '#6fb3de',
    description:
      'Docker, Kubernetes, CI/CD pipelines, AWS/GCP, infrastructure as code — become a cloud native.',
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop',
    bgimg: '/images/devops.jpg',
    categories: [
      {
        category: 'Linux & Infrastructure Fundamentals',
        subjects: [
          {
            name: 'Bash / Terminal',
            content:
              'The shell is how engineers control servers directly: navigating the filesystem, chaining commands with pipes, writing scripts for automation, and managing processes — a non-negotiable baseline skill for any DevOps work.',
            keyPoints: [
              'Pipes (|) chain commands so one\'s output feeds the next\'s input',
              'Shell scripts automate repetitive multi-step tasks',
              'Core toolkit: grep, awk, sed, find, xargs',
            ],
          },
          {
            name: 'Virtual Machines',
            content:
              'A VM emulates a full computer — its own OS kernel — on top of a hypervisor, giving strong isolation between workloads but with more overhead than containers, which share the host kernel.',
            keyPoints: [
              'Hypervisor (Type 1 bare-metal or Type 2 hosted) manages VMs',
              'Each VM runs its own full OS kernel — strong isolation, higher overhead',
              'Cloud instances (EC2, Compute Engine) are VMs under the hood',
            ],
          },
          {
            name: 'Bare Metal Machines',
            content:
              'Bare metal servers are physical machines dedicated to a single tenant with no hypervisor layer, offering maximum performance and full hardware control — used when virtualization overhead or shared-tenancy risk isn\'t acceptable.',
            keyPoints: [
              'No hypervisor overhead — direct access to physical hardware',
              'Used for latency-sensitive or compliance-sensitive workloads',
              'Less flexible/elastic than VMs or containers to provision',
            ],
          },
          {
            name: 'Process Management',
            content:
              'Managing long-running services on Linux: process states, signals (SIGTERM/SIGKILL), and process supervisors (systemd, pm2, supervisord) that restart crashed services and manage startup/shutdown ordering.',
            keyPoints: [
              'Signals (SIGTERM, SIGKILL) control how processes stop',
              'Supervisors auto-restart crashed processes and manage boot order',
              'systemd is the standard init system on most modern Linux distros',
            ],
          },
          {
            name: 'Reverse Proxies',
            content:
              'A reverse proxy (Nginx, Caddy, HAProxy) sits in front of backend servers, routing incoming requests, handling TLS termination, load balancing across instances, and shielding internal architecture from direct exposure.',
            keyPoints: [
              'Routes requests to the correct backend based on path/host',
              'Commonly handles TLS termination and load balancing',
              'Hides internal server topology from the public internet',
            ],
          },
          {
            name: 'Certificates',
            content:
              'TLS certificates enable HTTPS by cryptographically proving a server\'s identity and enabling encrypted connections, issued by Certificate Authorities and validated via a chain of trust back to trusted root certificates.',
            keyPoints: [
              'X.509 certificates bind a public key to a domain identity',
              'Chain of trust: leaf cert → intermediate CA → trusted root CA',
              'Expired or misconfigured certs are a leading cause of production outages',
            ],
          },
          {
            name: 'Certificate Management',
            content:
              'At scale, certificates must be automatically issued and renewed before expiry — tools like Let\'s Encrypt/ACME and cert-manager (Kubernetes) automate this so humans don\'t have to manually rotate certs.',
            keyPoints: [
              'ACME protocol (Let\'s Encrypt) automates free certificate issuance',
              'cert-manager automates cert lifecycle inside Kubernetes clusters',
              'Monitoring expiry dates prevents unexpected outages',
            ],
          },
        ],
      },
      {
        category: 'Cloud Infrastructure',
        subjects: [
          {
            name: 'ASGs (Auto Scaling Groups)',
            content:
              'AWS Auto Scaling Groups automatically add or remove EC2 instances based on demand (CPU load, request count), maintaining a target capacity and replacing unhealthy instances — the core building block of elastic cloud infrastructure.',
            keyPoints: [
              'Scales instance count up/down based on metrics or schedules',
              'Automatically replaces instances that fail health checks',
              'Typically paired with a load balancer distributing traffic across instances',
            ],
          },
          {
            name: 'MIGs (Managed Instance Groups)',
            content:
              'Google Cloud\'s equivalent of ASGs: a group of identical VM instances managed together, supporting autoscaling, auto-healing, and rolling updates from a single instance template.',
            keyPoints: [
              'Instances are created from a shared template for consistency',
              'Supports autoscaling and auto-healing (replacing failed instances)',
              'Rolling updates deploy new versions gradually across the group',
            ],
          },
          {
            name: 'CDNs',
            content:
              'Content Delivery Networks cache static (and sometimes dynamic) content at edge servers geographically close to users, dramatically reducing latency and offloading traffic from origin servers.',
            keyPoints: [
              'Edge servers cache content close to end users worldwide',
              'Reduces latency and origin server load simultaneously',
              'Cache invalidation strategy determines how fresh content stays',
            ],
          },
          {
            name: 'Object Storage',
            content:
              'Object storage (S3, GCS) stores unstructured data (files, images, backups) as objects with metadata in flat buckets rather than a filesystem hierarchy, offering massive scalability and durability for static assets.',
            keyPoints: [
              'Flat namespace of buckets/objects, not a traditional file tree',
              'Extremely durable and horizontally scalable by design',
              'Common uses: static assets, backups, data lakes, log archives',
            ],
          },
        ],
      },
      {
        category: 'Containers & Orchestration',
        subjects: [
          {
            name: 'Containers',
            content:
              'Containers package an application with its dependencies into a portable unit that shares the host OS kernel (unlike VMs), giving near-native performance with much faster startup and lower overhead than full virtualization.',
            keyPoints: [
              'Shares the host kernel instead of running a full guest OS',
              'Images are built in layers and are highly portable across environments',
              'Much faster to start and lighter-weight than VMs',
            ],
          },
          {
            name: 'Container Runtimes',
            content:
              'The runtime is the low-level software that actually creates and runs containers from images — containerd and CRI-O are common runtimes underneath Docker and Kubernetes, implementing the OCI (Open Container Initiative) spec.',
            keyPoints: [
              'containerd and CRI-O are the two most common Kubernetes-compatible runtimes',
              'Follows the OCI spec so images are portable across runtimes',
              'Docker itself uses containerd under the hood',
            ],
          },
          {
            name: 'Docker',
            content:
              'Docker popularized containers with a simple developer workflow: write a Dockerfile describing an image, build it, and run/ship it anywhere Docker is installed, guaranteeing "it works the same everywhere."',
            keyPoints: [
              'Dockerfile: a recipe of layered instructions that builds an image',
              'Images are immutable; containers are running instances of an image',
              'docker-compose orchestrates multi-container local dev setups',
            ],
          },
          {
            name: 'Kubernetes Basics',
            content:
              'Kubernetes orchestrates containers across a cluster of machines: it schedules Pods onto Nodes, keeps the desired number of replicas running, handles service discovery, and self-heals by restarting failed workloads.',
            keyPoints: [
              'Pod: the smallest deployable unit (one or more tightly-coupled containers)',
              'Deployment: manages a set of replica Pods and rolling updates',
              'Service: stable network endpoint for a group of Pods',
            ],
          },
          {
            name: 'Advanced Kubernetes',
            content:
              'Beyond the basics: custom resources and operators for extending the API, Helm for templated package management, service meshes (Istio) for traffic control, and fine-grained autoscaling (HPA/VPA) and networking policies.',
            keyPoints: [
              'Operators encode operational knowledge as custom Kubernetes controllers',
              'Helm charts template and version complex multi-resource deployments',
              'Service meshes add observability, retries, and traffic-shifting between services',
            ],
          },
        ],
      },
      {
        category: 'DevOps Automation',
        subjects: [
          {
            name: 'CI/CD Pipelines',
            content:
              'Continuous Integration/Continuous Deployment automates building, testing, and shipping code on every commit — catching integration bugs early (CI) and pushing validated changes to production quickly and safely (CD).',
            keyPoints: [
              'CI: automatically build and test every code change',
              'CD: automatically deploy changes that pass CI, often with staged rollouts',
              'Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI',
            ],
          },
          {
            name: 'Infrastructure as Code (IaC)',
            content:
              'IaC defines infrastructure (servers, networks, databases) in version-controlled configuration files (Terraform, Pulumi, CloudFormation) rather than manual console clicks, making infra reproducible, reviewable, and auditable.',
            keyPoints: [
              'Infrastructure changes go through code review just like application code',
              'Terraform\'s declarative model computes a diff/plan before applying changes',
              'Enables identical environments to be spun up reproducibly (dev/staging/prod)',
            ],
          },
        ],
      },
      {
        category: 'Monitoring & Reliability',
        subjects: [
          {
            name: 'Monitoring',
            content:
              'Monitoring collects metrics (CPU, memory, latency, error rate) over time and alerts engineers when thresholds are breached, giving visibility into system health before users notice a problem.',
            keyPoints: [
              'Metrics + dashboards + alerting form the core monitoring loop',
              'Common stack: Prometheus (metrics) + Grafana (dashboards)',
              'Good alerts are actionable, not just noisy',
            ],
          },
          {
            name: 'Observability',
            content:
              'Observability goes beyond monitoring known metrics — it means having enough logs, metrics, and traces to answer questions you didn\'t anticipate when a novel failure occurs, enabling root-cause analysis of unknown-unknowns.',
            keyPoints: [
              'The three pillars: logs, metrics, and distributed traces',
              'Aims to answer "why" questions you didn\'t predict in advance',
              'Distributed tracing is essential for debugging microservice architectures',
            ],
          },
        ],
      },
      {
        category: 'Security & Isolation',
        subjects: [
          {
            name: 'Sandboxing',
            content:
              'Sandboxing runs untrusted or risky code in a restricted environment with limited access to the host system — filesystem, network, syscalls — to contain the blast radius if that code turns out to be malicious or buggy.',
            keyPoints: [
              'Restricts filesystem, network, and syscall access for untrusted code',
              'Critical when running user-submitted or AI-generated code',
              'Techniques range from OS-level namespaces to full VM isolation',
            ],
          },
          {
            name: 'Firecracker',
            content:
              'Firecracker is AWS\'s open-source microVM technology: it provides VM-level security isolation with container-like startup speed (milliseconds) and minimal overhead, powering services like AWS Lambda under the hood.',
            keyPoints: [
              'MicroVMs combine VM-grade isolation with container-like startup speed',
              'Minimal device model reduces attack surface versus a full VM',
              'Powers AWS Lambda and other high-density multi-tenant sandboxing use cases',
            ],
          },
        ],
      },
      {
        category: 'Projects',
        subjects: [
          {
            name: 'e2b Clone',
            content:
              'Build a cloud code-execution sandbox service (like e2b): spin up isolated environments on demand, execute arbitrary code safely, stream output back, and tear down/reclaim resources efficiently.',
            keyPoints: [
              'Requires strong sandboxing (e.g. microVMs or gVisor) for safety',
              'Needs fast cold-start times to feel interactive',
              'Resource cleanup/reclamation is critical to control cost at scale',
            ],
          },
          {
            name: 'Replit Clone',
            content:
              'Build a browser-based IDE with live code execution: file editing, a terminal, and a backend that provisions an isolated environment per user session to run and preview their code.',
            keyPoints: [
              'Combines a web-based editor with a real backend execution environment',
              'Needs per-user session isolation and resource limits',
              'Real-time terminal streaming typically uses WebSockets',
            ],
          },
          {
            name: 'Cloudflare Workers Project',
            content:
              'Build and deploy an edge-computing application on Cloudflare Workers: request handling running at edge locations worldwide instead of a single origin server, minimizing latency for globally distributed users.',
            keyPoints: [
              'Code runs at edge locations close to the requesting user',
              'V8 isolates provide fast cold starts without full container overhead',
              'Great fit for latency-sensitive, stateless request handling',
            ],
          },
        ],
      },
      {
        category: 'Resources',
        subjects: [
          {
            name: 'e2b Blog',
            content:
              'e2b\'s engineering blog covers real-world lessons on building secure, fast sandboxed code execution infrastructure for AI agents — practical detail on microVMs, isolation, and performance trade-offs.',
            keyPoints: [
              'Practical, production-grade writing on sandboxing infrastructure',
              'Useful companion reading for the Sandboxing and Firecracker topics',
              'Focused specifically on AI-agent code-execution use cases',
            ],
          },
          {
            name: 'Modal Blog',
            content:
              'Modal\'s engineering blog covers building serverless infrastructure for compute-heavy workloads (ML, batch jobs) — container cold-start optimization, scheduling, and GPU infrastructure at scale.',
            keyPoints: [
              'Deep dives on serverless container cold-start optimization',
              'Covers scheduling and infrastructure for GPU/compute-heavy workloads',
              'Good real-world companion to the Containers & Orchestration module',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'dsa',
    title: 'Data Structures\n & Algorithms',
    emoji: '🏆',
    icon: 'Code2',
    pastel: '#ffd5e8',
    pastelbg: 'rgba(244, 114, 182, 0.07)',
    pastelborder: 'rgba(244, 114, 182, 0.15)',
    glowColor: 'rgba(244, 114, 182, 0.2)',
    iconBg: 'rgba(244, 114, 182, 0.12)',
    iconColor: '#f472b6',
    duration: '10 Weeks',
    level: 'All Levels',
    tag: 'Interview Prep',
    tagColor: 'rgba(244, 114, 182, 0.12)',
    tagText: '#f472b6',
    color: '#ed8f66',
    description:
      'Crack FAANG interviews. Master arrays, trees, graphs, dynamic programming with 500+ curated problems.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop',
    bgimg: '/images/dsa2.jpg',
    categories: [
      {
        category: 'Programming Fundamentals',
        subjects: [
          {
            name: 'Introduction to C++',
            content:
              'C++ is the language of choice for competitive programming due to its speed and rich standard library (STL). This covers syntax, compilation, and the basic program structure you\'ll use for every problem going forward.',
            keyPoints: [
              'Compiled language — fast execution, ideal for tight time limits',
              'The STL provides ready-made, well-optimized data structures',
              'main() is the program entry point; cin/cout handle I/O',
            ],
          },
          {
            name: 'Loops',
            content:
              'for, while, and do-while loops let you repeat operations — the foundation of iterating over arrays, generating sequences, and implementing most brute-force algorithms before optimizing them.',
            keyPoints: [
              'for: best when the iteration count is known upfront',
              'while: best when the stopping condition is checked each iteration',
              'Nested loops are the source of most O(n²) and worse time complexities',
            ],
          },
          {
            name: 'Pattern Printing',
            content:
              'Pattern printing problems (triangles, pyramids, diamonds of stars/numbers) build intuition for nested loop control — mapping row/column indices to conditions for what to print — a classic beginner exercise.',
            keyPoints: [
              'Outer loop controls rows, inner loop(s) control what\'s printed per row',
              'Great for building intuition about loop bounds and off-by-one errors',
              'A stepping stone to more general 2D array manipulation',
            ],
          },
          {
            name: 'Arrays',
            content:
              'Arrays store elements in contiguous memory, giving O(1) index access but O(n) insertion/deletion in the middle — the most fundamental data structure and the basis for strings, matrices, and most other structures.',
            keyPoints: [
              'O(1) random access via index due to contiguous memory layout',
              'Insertion/deletion in the middle costs O(n) due to shifting elements',
              'Fixed size in C++ (unless using vector, which is dynamic)',
            ],
          },
          {
            name: '2D Arrays',
            content:
              'Two-dimensional arrays (matrices/grids) extend the array concept to rows and columns, used for grids, images, dynamic programming tables, and adjacency matrices in graph problems.',
            keyPoints: [
              'Stored as either an array of arrays or a flattened 1D array with index math',
              'Traversal patterns: row-major, column-major, diagonal, spiral',
              'Foundation for grid-based DP and BFS/DFS problems',
            ],
          },
          {
            name: 'Strings',
            content:
              'Strings are sequences of characters, treated as arrays for most algorithmic purposes but with their own specialized problems: pattern matching, palindromes, anagrams, and parsing.',
            keyPoints: [
              'In C++, std::string manages memory dynamically like a resizable array',
              'Immutable in some languages (Java, Python) — impacts algorithm design',
              'Common techniques: two pointers, sliding window, hashing',
            ],
          },
          {
            name: 'Pointers',
            content:
              'Pointers store memory addresses rather than values directly, enabling dynamic memory allocation, efficient array/string manipulation, and the implementation of linked structures like lists and trees.',
            keyPoints: [
              'A pointer holds the memory address of another variable',
              'Dereferencing (*ptr) accesses the value at that address',
              'Essential for building linked lists, trees, and dynamic data structures',
            ],
          },
          {
            name: 'Pass by Value',
            content:
              'When a function receives an argument by value, it gets a copy — changes inside the function don\'t affect the original variable, which is safe but can be costly for large objects.',
            keyPoints: [
              'A full copy of the argument is made for the function',
              'Modifications inside the function do not affect the caller\'s variable',
              'Can be inefficient for large structs/objects — copying takes time and memory',
            ],
          },
          {
            name: 'Pass by Reference',
            content:
              'Passing by reference gives the function direct access to the original variable (via a reference or pointer), so changes made inside the function persist after it returns — faster and used to return multiple values.',
            keyPoints: [
              'No copy is made — the function operates on the original data',
              'Lets a function modify the caller\'s variable directly',
              'In C++, denoted with & in the parameter type (e.g. int&)',
            ],
          },
          {
            name: 'Memory Addresses',
            content:
              'Understanding how variables map to physical memory locations — the stack (fast, automatic, function-scoped) versus the heap (manual/dynamic allocation) — underpins pointers, references, and performance-aware programming.',
            keyPoints: [
              'Stack memory: fast, automatically managed, tied to function scope',
              'Heap memory: manually allocated (new/delete), persists until freed',
              'Understanding this prevents memory leaks and dangling-pointer bugs',
            ],
          },
        ],
      },
      {
        category: 'Algorithm Basics',
        subjects: [
          {
            name: 'Sorting Algorithms',
            content:
              'Sorting arranges data in order and underlies many other algorithms. Covers comparison-based sorts (bubble, merge, quick) with their time/space trade-offs, and when to reach for the standard library sort versus a custom one.',
            keyPoints: [
              'Merge sort: O(n log n) guaranteed, stable, needs extra space',
              'Quick sort: O(n log n) average, in-place, but O(n²) worst case',
              'Know when a problem needs a stable sort vs. just "any" sorted order',
            ],
          },
          {
            name: 'Searching Algorithms',
            content:
              'Finding elements efficiently: linear search (O(n), no ordering required) versus binary search (O(log n), requires sorted data) — plus binary search\'s many variants for finding boundaries and answers over a solution space.',
            keyPoints: [
              'Binary search halves the search space each step — O(log n)',
              'Requires the data (or the answer space) to be monotonic/sorted',
              '"Binary search on the answer" is a powerful pattern beyond simple lookups',
            ],
          },
          {
            name: 'Time Complexity',
            content:
              'Big-O notation describes how an algorithm\'s runtime grows with input size, letting you compare algorithms independent of hardware — essential for predicting whether a solution will pass within a problem\'s time limit.',
            keyPoints: [
              'Big-O describes worst-case growth rate, ignoring constants',
              'Common classes: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)',
              'Interview problems often hint at required complexity via input size constraints',
            ],
          },
          {
            name: 'Space Complexity',
            content:
              'Space complexity measures how much extra memory an algorithm uses relative to input size — important when optimizing for memory-constrained environments or when an in-place solution is required.',
            keyPoints: [
              'Counts auxiliary space used, not the input itself',
              'In-place algorithms use O(1) extra space',
              'Often a direct trade-off against time complexity (e.g. memoization)',
            ],
          },
          {
            name: 'Bit Manipulation',
            content:
              'Operating directly on the binary representation of numbers (AND, OR, XOR, shifts) enables extremely fast, low-memory solutions for problems involving subsets, parity, and flags.',
            keyPoints: [
              'XOR is self-inverse — useful for finding unique elements, toggling bits',
              'Bitmasks represent subsets compactly for subset-enumeration DP',
              'Shifts (<<, >>) are fast multiply/divide by powers of two',
            ],
          },
          {
            name: 'Number Theory Basics',
            content:
              'Foundational math for algorithmic problems: primes and sieves, GCD/LCM (Euclidean algorithm), modular arithmetic, and modular exponentiation — recurring building blocks in competitive programming.',
            keyPoints: [
              'Sieve of Eratosthenes finds all primes up to N in O(N log log N)',
              'Euclidean algorithm computes GCD in O(log min(a,b))',
              'Modular arithmetic prevents overflow in large-number computations',
            ],
          },
        ],
      },
      {
        category: 'Problem Solving Techniques',
        subjects: [
          {
            name: 'Prefix Sums',
            content:
              'Precomputing cumulative sums lets you answer "sum of range [i,j]" queries in O(1) after O(n) preprocessing, instead of recomputing the sum each time — a huge speedup for repeated range-sum queries.',
            keyPoints: [
              'prefix[i] = sum of all elements from index 0 to i',
              'Range sum [l,r] = prefix[r] - prefix[l-1] in O(1)',
              'Extends to 2D prefix sums for rectangle-sum queries on grids',
            ],
          },
          {
            name: 'Sliding Window',
            content:
              'The sliding window technique maintains a window of elements that expands/contracts as it moves across an array, avoiding recomputation from scratch — key for substring/subarray problems with a size or sum constraint.',
            keyPoints: [
              'Two pointers (window start/end) move forward, never backward',
              'Reduces many O(n²) brute-force scans to O(n)',
              'Fixed-size vs. variable-size window are two distinct sub-patterns',
            ],
          },
          {
            name: 'Contribution Technique',
            content:
              'Instead of computing an aggregate directly, you calculate how much each individual element "contributes" to the final answer across all relevant subarrays/subsets — often turning an O(n²) sum into O(n).',
            keyPoints: [
              'Reframes "sum over all subarrays" as "sum of each element\'s contribution"',
              'Often requires finding, for each element, how many subarrays include it',
              'Common in problems asking for sum of min/max over all subarrays',
            ],
          },
          {
            name: 'Recursion',
            content:
              'Recursion solves a problem by breaking it into smaller instances of itself, with a base case to stop — the foundation for tree/graph traversal, divide-and-conquer, and backtracking algorithms.',
            keyPoints: [
              'Needs a clear base case or it recurses infinitely',
              'Each call uses stack space — deep recursion risks stack overflow',
              'Many recursive solutions can be rewritten iteratively for efficiency',
            ],
          },
          {
            name: 'Backtracking',
            content:
              'Backtracking explores all candidate solutions incrementally, abandoning ("backtracking" from) a path as soon as it can\'t possibly lead to a valid solution — used for permutations, combinations, and constraint-satisfaction problems.',
            keyPoints: [
              'Build a solution incrementally, undo (backtrack) when a choice fails',
              'Pruning invalid branches early is what makes it efficient',
              'Classic examples: N-Queens, Sudoku solver, generating permutations',
            ],
          },
          {
            name: 'Two Pointers',
            content:
              'Using two indices that move through a (usually sorted) array from different positions or directions, avoiding nested loops for problems like pair-sum, merging, or partitioning.',
            keyPoints: [
              'Often used on sorted arrays to find pairs meeting a target condition',
              'Converts many O(n²) brute-force checks into O(n)',
              'Pointers can move toward each other or in the same direction',
            ],
          },
          {
            name: 'Greedy Algorithms',
            content:
              'Greedy algorithms make the locally optimal choice at each step, hoping it leads to a globally optimal solution — works for problems with the right structure (e.g. interval scheduling), but requires proving correctness carefully.',
            keyPoints: [
              'Makes irrevocable, locally-optimal choices — never reconsiders past decisions',
              'Only correct when the problem has "optimal substructure" for greedy choices',
              'Classic examples: activity selection, Huffman coding, coin change (specific systems)',
            ],
          },
          {
            name: 'Dynamic Programming',
            content:
              'DP solves problems by breaking them into overlapping subproblems, solving each once, and storing (memoizing) the result to avoid recomputation — turning exponential brute-force recursion into polynomial time.',
            keyPoints: [
              'Requires overlapping subproblems + optimal substructure',
              'Top-down (memoization) vs bottom-up (tabulation) are two equivalent approaches',
              'Defining the state and transition correctly is the hardest part',
            ],
          },
        ],
      },
      {
        category: 'STL & Data Structures',
        subjects: [
          {
            name: 'Sets',
            content:
              'A set stores unique elements with fast membership testing, typically implemented as a balanced BST (ordered, O(log n)) or hash table (unordered, average O(1)) — used whenever duplicates should be eliminated or existence checked quickly.',
            keyPoints: [
              'std::set: ordered, O(log n) insert/find/erase',
              'std::unordered_set: hash-based, average O(1) operations',
              'Automatically deduplicates inserted elements',
            ],
          },
          {
            name: 'Maps',
            content:
              'A map stores key-value pairs with fast lookup by key — ordered maps (balanced BST, sorted keys, O(log n)) versus unordered/hash maps (average O(1)) — one of the most-used structures in practical problem solving.',
            keyPoints: [
              'std::map: ordered by key, O(log n) operations',
              'std::unordered_map: hash-based, average O(1) operations',
              'Great for frequency counting, caching, and grouping data',
            ],
          },
          {
            name: 'Linked Lists',
            content:
              'A linked list stores elements as nodes connected by pointers rather than contiguous memory, giving O(1) insertion/deletion at known positions at the cost of O(n) random access — singly or doubly linked variants.',
            keyPoints: [
              'O(1) insert/delete at a known node vs O(n) for arrays in the middle',
              'No random access — must traverse from the head (or tail) to reach a node',
              'Doubly linked lists add a "previous" pointer for backward traversal',
            ],
          },
          {
            name: 'Stacks',
            content:
              'A stack is a Last-In-First-Out (LIFO) structure supporting push/pop/top in O(1) — used for expression evaluation, undo functionality, DFS, and matching-parentheses style problems.',
            keyPoints: [
              'LIFO order: the last element pushed is the first popped',
              'O(1) push, pop, and top operations',
              'Classic uses: balanced parentheses, undo history, DFS iterative implementation',
            ],
          },
          {
            name: 'Queues',
            content:
              'A queue is a First-In-First-Out (FIFO) structure supporting enqueue/dequeue in O(1) — the backbone of BFS traversal and any scenario requiring processing in arrival order.',
            keyPoints: [
              'FIFO order: the first element added is the first removed',
              'Essential for BFS graph/tree traversal',
              'O(1) enqueue and dequeue with a proper implementation (e.g. deque-backed)',
            ],
          },
          {
            name: 'Deque',
            content:
              'A double-ended queue supports O(1) insertion and removal at both the front and back, making it more flexible than a stack or queue alone — used in sliding-window-maximum problems and as a building block for other structures.',
            keyPoints: [
              'O(1) push/pop at both the front and the back',
              'Key tool for the "sliding window maximum" pattern using a monotonic deque',
              'std::deque also supports O(1) random access, unlike a linked list',
            ],
          },
          {
            name: 'Priority Queue',
            content:
              'A priority queue (typically backed by a binary heap) always gives O(1) access to the minimum or maximum element, with O(log n) insertion/removal — used for scheduling, Dijkstra\'s algorithm, and top-k problems.',
            keyPoints: [
              'O(1) peek at min/max, O(log n) insert/remove',
              'Backed by a binary heap in most standard library implementations',
              'Essential for Dijkstra\'s shortest path and "k-th largest" style problems',
            ],
          },
          {
            name: 'Heap',
            content:
              'A heap is a complete binary tree satisfying the heap property (parent ≤ children for a min-heap, or ≥ for a max-heap), stored efficiently as an array — the underlying implementation of priority queues.',
            keyPoints: [
              'Min-heap: parent is always ≤ its children (max-heap: reversed)',
              'Stored as an array; children of index i are at 2i+1 and 2i+2',
              'Build-heap runs in O(n); insert/extract-min run in O(log n)',
            ],
          },
          {
            name: 'Ordered Set',
            content:
              'A policy-based ordered set (a competitive-programming GNU PBDS extension) supports everything std::set does, plus O(log n) "find k-th smallest" and "count elements less than X" — operations a plain set can\'t do efficiently.',
            keyPoints: [
              'Extends std::set with order-statistics operations (find_by_order, order_of_key)',
              'Both run in O(log n), same as normal set operations',
              'A GCC-specific extension (policy-based data structures), not standard C++',
            ],
          },
        ],
      },
      {
        category: 'Trees & Graphs',
        subjects: [
          {
            name: 'Binary Trees',
            content:
              'A binary tree is a hierarchical structure where each node has at most two children — the basis for expression trees, heaps, and more specialized structures, with traversal orders (preorder, inorder, postorder, level-order) as core operations.',
            keyPoints: [
              'Each node has at most two children: left and right',
              'Traversal orders: preorder, inorder, postorder (DFS-based), level-order (BFS-based)',
              'Height directly determines the worst-case cost of many tree operations',
            ],
          },
          {
            name: 'Binary Search Trees (BST)',
            content:
              'A BST keeps left-subtree values smaller and right-subtree values larger than each node, enabling O(log n) search/insert/delete when balanced — the conceptual root of std::map and std::set implementations.',
            keyPoints: [
              'Left subtree < node < right subtree, recursively, at every node',
              'O(log n) operations when balanced; degrades to O(n) if skewed',
              'Self-balancing variants (AVL, Red-Black trees) guarantee O(log n) always',
            ],
          },
          {
            name: 'Trie',
            content:
              'A trie (prefix tree) stores strings character by character along tree paths, enabling extremely fast prefix search, autocomplete, and dictionary lookups in O(length of string) regardless of how many strings are stored.',
            keyPoints: [
              'Each path from root to a marked node represents one stored string',
              'Prefix search is O(L) where L is the query length, independent of dataset size',
              'Powers autocomplete, spell-check, and IP routing tables',
            ],
          },
          {
            name: 'Graphs',
            content:
              'Graphs model relationships between entities as nodes and edges — covers representation (adjacency list/matrix), traversal (BFS/DFS), shortest paths (Dijkstra, Bellman-Ford), and structural algorithms (topological sort, union-find, MST).',
            keyPoints: [
              'Adjacency list: efficient for sparse graphs; adjacency matrix for dense/small graphs',
              'BFS finds shortest paths in unweighted graphs; Dijkstra handles weighted ones',
              'Union-Find (DSU) efficiently tracks connected components and detects cycles',
            ],
          },
          {
            name: 'Segment Trees',
            content:
              'A segment tree supports range queries (sum, min, max) and point/range updates in O(log n), by recursively splitting an array into segments stored in a binary tree — far more powerful than prefix sums when updates are needed.',
            keyPoints: [
              'Supports both range queries and range/point updates in O(log n)',
              'Unlike prefix sums, handles updates efficiently without full recomputation',
              'Lazy propagation extends it to efficient range updates as well',
            ],
          },
        ],
      },
      {
        category: 'Competitive Programming Resources',
        subjects: [
          {
            name: 'Harvard CS50',
            content:
              'Harvard\'s CS50 is a renowned introductory computer science course covering programming fundamentals, algorithms, and data structures with hands-on problem sets — a strong general foundation before specializing in competitive programming.',
            keyPoints: [
              'Broad, rigorous introduction to CS fundamentals, not CP-specific',
              'Strong problem-set-driven pedagogy builds real coding discipline',
              'Good foundation before diving into competitive-programming-specific resources',
            ],
          },
          {
            name: 'Abdul Bari Course',
            content:
              'Abdul Bari\'s algorithms video series is widely used for its exceptionally clear visual explanations of core algorithms and data structures — sorting, DP, graphs — often recommended as a companion to written texts.',
            keyPoints: [
              'Known for very clear, visual step-by-step algorithm walkthroughs',
              'Strong for building intuition before diving into implementation',
              'Covers most core DSA topics: sorting, graphs, DP, and more',
            ],
          },
          {
            name: 'Pavel Marvin Playlist',
            content:
              'A curated video playlist covering competitive programming techniques in depth, often used to reinforce pattern recognition — spotting which technique (DP, greedy, graph algorithm) a problem calls for.',
            keyPoints: [
              'Focused specifically on competitive-programming pattern recognition',
              'Useful for bridging "knowing an algorithm" to "recognizing when to use it"',
              'Best used alongside actual problem-solving practice, not in isolation',
            ],
          },
          {
            name: 'Codeforces EDU',
            content:
              'Codeforces EDU is a structured set of courses with lessons and matching practice problems directly on the Codeforces platform, covering topics from basic algorithms to advanced techniques with immediate feedback via the judge.',
            keyPoints: [
              'Lessons paired directly with practice problems on the same platform',
              'Immediate judge feedback on submitted solutions',
              'Covers a progression from beginner to advanced competitive topics',
            ],
          },
          {
            name: 'CP Algorithms',
            content:
              'cp-algorithms.com is a comprehensive reference wiki of competitive programming algorithms and data structures with explanations and working code — a go-to lookup resource once you know roughly what technique you need.',
            keyPoints: [
              'Reference-style: best for looking up a specific known algorithm',
              'Includes working, tested code alongside explanations',
              'Covers advanced topics (e.g. FFT, heavy-light decomposition) many courses skip',
            ],
          },
        ],
      },
      {
        category: 'Practice Platforms',
        subjects: [
          {
            name: 'Codeforces',
            content:
              'Codeforces is the leading competitive programming platform, known for frequent live-rated contests, a large problem archive rated by difficulty, and a strong community — the go-to for improving competitive rating.',
            keyPoints: [
              'Frequent rated contests (Div 1/2/3/4) with a public rating system',
              'Massive problem archive tagged by topic and difficulty',
              'Editorial + community discussion after every contest',
            ],
          },
          {
            name: 'LeetCode',
            content:
              'LeetCode is the standard platform for technical interview preparation, with problems organized by company, topic, and difficulty, plus a widely-used "150"/"Blind 75" style curated list for structured practice.',
            keyPoints: [
              'Problems tagged by company and topic — great for targeted interview prep',
              'Curated lists (Blind 75, NeetCode 150) provide a structured study path',
              'Discussion forums often reveal multiple approaches per problem',
            ],
          },
          {
            name: 'AtCoder',
            content:
              'AtCoder is a Japanese competitive programming platform known for well-crafted problems and high-quality editorials, popular for its beginner-friendly contests (ABC) as well as more advanced ones.',
            keyPoints: [
              'Known for exceptionally well-written problems and editorials',
              'Beginner Contests (ABC) are a great low-pressure entry point',
              'Popular among top competitive programmers for problem quality',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cyber',
    title: 'Cyber Security',
    emoji: '🏆',
    icon: 'Lock',
    pastel: '#ffd5e8',
    pastelbg: 'rgba(244, 114, 182, 0.07)',
    pastelborder: 'rgba(244, 114, 182, 0.15)',
    glowColor: 'rgba(244, 114, 182, 0.2)',
    iconBg: 'rgba(244, 114, 182, 0.12)',
    iconColor: '#f472b6',
    duration: '10 Weeks',
    level: 'Beginner Level',
    tag: 'Interview Prep',
    tagColor: 'rgba(244, 114, 182, 0.12)',
    tagText: '#f472b6',
    color: '#ed8f66',
    description:
      'Understand how cyber attacks work, secure digital systems, and develop essential cybersecurity skills through guided practical sessions.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop',
    categories: [
      {
        category: 'Introduction to Cyber Security',
        subjects: [
          {
            name: 'Cyber Security Fundamentals',
            content:
              'Cybersecurity is the practice of protecting systems, networks, and data from unauthorized access, disruption, or damage — spanning technical controls, processes, and people, since most breaches exploit human error as much as software flaws.',
            keyPoints: [
              'Covers technical, procedural, and human factors of protecting systems',
              'Defense is asymmetric: attackers need one weakness, defenders must cover all of them',
              'Foundational goal: protect confidentiality, integrity, and availability of data',
            ],
          },
          {
            name: 'Security Mindset & Methodologies',
            content:
              'Thinking like a security professional means assuming systems will be attacked and asking "how could this be broken?" at every design decision — a structured, adversarial way of reasoning distinct from typical feature-building mindset.',
            keyPoints: [
              'Assume breach: design for containment, not just prevention',
              'Threat modeling: systematically ask what could go wrong and why',
              'Defense in depth: layer multiple controls so no single failure is catastrophic',
            ],
          },
          {
            name: 'Offensive vs Defensive Security',
            content:
              'Offensive security (red team/pentesting) proactively finds vulnerabilities by attacking systems like an adversary would; defensive security (blue team) builds and monitors defenses to detect and respond to real attacks — two complementary disciplines.',
            keyPoints: [
              'Red team: simulates real attackers to find weaknesses before they do',
              'Blue team: builds, monitors, and defends systems in real time',
              'Purple teaming combines both for continuous, collaborative improvement',
            ],
          },
          {
            name: 'Information Security Principles',
            content:
              'Core principles guiding all security decisions: least privilege (minimum necessary access), separation of duties, fail-safe defaults, and the CIA triad — the conceptual checklist behind virtually every security control.',
            keyPoints: [
              'Least privilege: grant only the access strictly needed to do a job',
              'Fail-safe defaults: systems should deny access by default, not allow',
              'Separation of duties prevents any single compromised actor from doing full damage',
            ],
          },
          {
            name: 'CIA Triad & Security Models',
            content:
              'The CIA triad — Confidentiality (data stays private), Integrity (data stays unaltered), Availability (data/systems stay accessible) — is the foundational model for evaluating and balancing any security decision or control.',
            keyPoints: [
              'Confidentiality: only authorized parties can access the data',
              'Integrity: data cannot be tampered with undetected',
              'Availability: systems remain usable when legitimately needed',
            ],
          },
          {
            name: 'Hacking Lifecycle',
            content:
              'A structured attack follows stages: reconnaissance, scanning, gaining access, maintaining access, and covering tracks — understanding this lifecycle (also called the "cyber kill chain") helps defenders detect and interrupt attacks at each stage.',
            keyPoints: [
              'Recon → scanning → exploitation → maintaining access → covering tracks',
              'Detecting an attack early in the lifecycle limits the damage possible',
              'Also framed as the "Cyber Kill Chain" in defensive literature',
            ],
          },
          {
            name: 'CTF & Cybersecurity Labs',
            content:
              'Capture The Flag competitions and hands-on labs (HackTheBox, TryHackMe) let learners practice real exploitation and defense techniques in safe, legal, gamified environments — the standard way to build practical security skills.',
            keyPoints: [
              'Legal, sandboxed environments to practice real attack/defense techniques',
              'Categories include web, crypto, reverse engineering, forensics, pwn',
              'Hands-on practice is essential — security is a practical, not just theoretical, skill',
            ],
          },
          {
            name: 'Documentation & Note Taking',
            content:
              'Rigorous note-taking during investigations, pentests, and CTFs is a core professional skill — a clear record of steps, evidence, and findings that supports reporting, reproducibility, and legal/compliance requirements.',
            keyPoints: [
              'Every step should be reproducible from your notes alone',
              'Screenshots and command logs are critical evidence for reports',
              'Good documentation is often what separates a professional pentest report from a hobbyist one',
            ],
          },
        ],
      },
      {
        category: 'Networking',
        subjects: [
          {
            name: 'Network Fundamentals',
            content:
              'The basics of how devices communicate: IP addressing, routing, and the client-server model — essential groundwork since most attacks and defenses happen at the network layer.',
            keyPoints: [
              'IP addresses uniquely identify devices on a network',
              'Routers forward traffic between different networks',
              'Most attacks (and their detection) happen at the network communication layer',
            ],
          },
          {
            name: 'Network Types & Architectures',
            content:
              'LANs, WANs, and VPNs each have different scale and trust boundaries — understanding network architecture (perimeter, DMZ, segmentation) is key to reasoning about where an attacker could get in and how far they could move.',
            keyPoints: [
              'LAN (local) vs WAN (wide-area, e.g. the internet)',
              'DMZ isolates public-facing servers from the internal network',
              'Network segmentation limits how far an attacker can move after a breach',
            ],
          },
          {
            name: 'Networking Hardware',
            content:
              'Routers, switches, and firewalls each play a distinct role — routers connect networks, switches connect devices within a network, and firewalls enforce traffic policy — and each is also a potential attack surface if misconfigured.',
            keyPoints: [
              'Switches operate at Layer 2, routers at Layer 3',
              'Firewalls enforce allow/deny rules on traffic crossing a boundary',
              'Misconfigured hardware is a common real-world entry point for attackers',
            ],
          },
          {
            name: 'Protocols & Communication',
            content:
              'Protocols (TCP, UDP, HTTP, DNS) define the rules devices follow to exchange data reliably — understanding protocol behavior is essential for both building secure systems and spotting anomalous/malicious traffic.',
            keyPoints: [
              'TCP: reliable, connection-oriented; UDP: fast, connectionless',
              'DNS resolves domain names to IP addresses — a frequent attack target',
              'Many attacks exploit protocol weaknesses or implementation bugs',
            ],
          },
          {
            name: 'Ports & Common Services',
            content:
              'Ports identify which service on a device should handle incoming traffic (80/443 for web, 22 for SSH, 53 for DNS) — knowing standard ports and services is core to both network defense and reconnaissance.',
            keyPoints: [
              'Well-known ports (0-1023) map to standard services',
              'Open ports are a primary attack surface — scanning reveals what\'s exposed',
              'Closing unnecessary open ports is a basic but critical hardening step',
            ],
          },
          {
            name: 'OSI & TCP/IP Models',
            content:
              'The OSI 7-layer model and the simpler 4-layer TCP/IP model both describe how network communication is organized into layers of abstraction — a shared vocabulary for discussing where in the stack a given attack or protocol operates.',
            keyPoints: [
              'OSI: 7 layers (Physical → Application); TCP/IP: 4 practical layers',
              'Attacks are often categorized by which layer they target',
              'Shared reference vocabulary across all of networking and security',
            ],
          },
          {
            name: 'Network Topologies',
            content:
              'Topology describes how devices are physically/logically arranged and connected (star, bus, mesh, ring) — different topologies have different resilience, performance, and security trade-offs.',
            keyPoints: [
              'Star topology (central hub/switch) is the most common in modern networks',
              'Mesh topologies offer redundancy at the cost of complexity',
              'Topology affects how a single point of failure could impact the network',
            ],
          },
          {
            name: 'Packet Flow & TCP Handshake',
            content:
              'The TCP three-way handshake (SYN, SYN-ACK, ACK) establishes a reliable connection before data flows — understanding this at the packet level is essential for reading packet captures and recognizing attacks like SYN floods.',
            keyPoints: [
              'Three-way handshake: SYN → SYN-ACK → ACK establishes the connection',
              'SYN flood attacks abuse this handshake to exhaust server resources',
              'Packet capture tools (Wireshark) let you inspect this traffic directly',
            ],
          },
        ],
      },
      {
        category: 'Windows & Linux',
        subjects: [
          {
            name: 'Operating System Fundamentals',
            content:
              'How an OS manages hardware resources, processes, and user permissions — the base layer every application (and every attack) ultimately runs on top of, making OS internals essential security knowledge.',
            keyPoints: [
              'Kernel manages hardware access, processes, and memory',
              'User/permission models determine what each account can do',
              'Most exploits ultimately aim to escalate privileges at the OS level',
            ],
          },
          {
            name: 'Windows Administration',
            content:
              'Managing Windows systems: Active Directory, group policy, user/permission management, and the registry — Windows dominates enterprise environments, making its administration a core target for both attackers and defenders.',
            keyPoints: [
              'Active Directory centrally manages users, computers, and permissions',
              'Group Policy enforces security settings across many machines at once',
              'A huge share of real-world enterprise attacks target AD misconfigurations',
            ],
          },
          {
            name: 'Linux Administration',
            content:
              'Managing Linux systems: users/groups, file permissions, services, and package management — Linux dominates servers and cloud infrastructure, making it essential for both offensive and defensive security work.',
            keyPoints: [
              'File permissions (rwx) and ownership control access at the filesystem level',
              'systemd/init manages services that could be attack targets if misconfigured',
              'Package managers (apt, yum) are how systems stay patched against known CVEs',
            ],
          },
          {
            name: 'File Systems & Directories',
            content:
              'Understanding filesystem structure and permission models — where sensitive files live, how permissions are inherited, and how attackers hide or escalate via filesystem manipulation.',
            keyPoints: [
              'Permission bits/ACLs determine who can read, write, or execute a file',
              'Sensitive files (credentials, configs) are common targets once access is gained',
              'Hidden files and unusual permission combinations are common forensic clues',
            ],
          },
          {
            name: 'User & Permission Management',
            content:
              'Creating, managing, and restricting user accounts and privilege levels — the operational side of the "least privilege" principle, and a frequent source of real-world vulnerabilities when misconfigured.',
            keyPoints: [
              'Principle of least privilege applied concretely to real accounts',
              'Privilege escalation is one of the most common post-compromise attacker goals',
              'Regular audits catch stale or over-privileged accounts',
            ],
          },
          {
            name: 'Command Line Essentials',
            content:
              'Fluency with the command line (Bash on Linux, PowerShell/cmd on Windows) is essential for both administering systems efficiently and understanding how attackers operate once they gain shell access.',
            keyPoints: [
              'Most real intrusions ultimately involve command-line/shell activity',
              'Attackers and defenders both rely on scripting for automation',
              'Command history/logging is a key forensic artifact after an incident',
            ],
          },
          {
            name: 'PowerShell & Shell Scripting',
            content:
              'PowerShell is Windows\' powerful scripting shell (also heavily abused by attackers for "living off the land" techniques), while Bash scripting automates Linux administration — both essential for automation and understanding attacker tradecraft.',
            keyPoints: [
              'PowerShell is deeply integrated with Windows internals — powerful for admins and attackers alike',
              '"Living off the land" attacks abuse built-in scripting tools to avoid detection',
              'Script logging/auditing (e.g. PowerShell transcription) is a key defensive control',
            ],
          },
          {
            name: 'System Navigation & Configuration',
            content:
              'Practical skills for navigating and hardening a system\'s configuration — startup services, scheduled tasks, environment variables — areas attackers commonly abuse for persistence after gaining access.',
            keyPoints: [
              'Scheduled tasks/cron jobs are a common persistence mechanism for attackers',
              'Startup/autorun entries are a classic place malware hides',
              'Configuration hardening reduces the available attack surface',
            ],
          },
        ],
      },
      {
        category: 'OSINT (Open Source Intelligence)',
        subjects: [
          {
            name: 'Introduction to OSINT',
            content:
              'OSINT is gathering information from publicly available sources — websites, social media, public records — to build a picture of a target, used both by attackers for reconnaissance and by defenders/investigators for threat intelligence.',
            keyPoints: [
              'Uses only publicly available, legally accessible information',
              'The first phase of most real-world attacks is OSINT-based reconnaissance',
              'Also used defensively: threat intel teams track attacker infrastructure via OSINT',
            ],
          },
          {
            name: 'Search Engine Intelligence',
            content:
              'Advanced search operators ("Google dorking") let investigators find specific exposed information — misconfigured files, login pages, leaked documents — that standard searches wouldn\'t surface.',
            keyPoints: [
              'Search operators (site:, filetype:, intitle:) narrow results precisely',
              '"Google dorking" can reveal accidentally exposed sensitive files',
              'A key reminder of why access control shouldn\'t rely on obscurity alone',
            ],
          },
          {
            name: 'Social Media Investigation',
            content:
              'Analyzing public social media activity to gather intelligence about individuals or organizations — used in both offensive social engineering prep and defensive/investigative work.',
            keyPoints: [
              'Public posts can reveal organizational structure, travel patterns, and habits',
              'A major source of social engineering/phishing pretext material for attackers',
              'Organizations should train staff on what NOT to share publicly',
            ],
          },
          {
            name: 'Domain & DNS Reconnaissance',
            content:
              'Investigating domain registration records (WHOIS), DNS records, and subdomains reveals an organization\'s infrastructure footprint — a standard early step in both penetration testing and real attacks.',
            keyPoints: [
              'WHOIS records can reveal registrant, hosting, and contact information',
              'Subdomain enumeration often uncovers forgotten/unpatched systems',
              'DNS records can leak infrastructure details (mail servers, cloud providers)',
            ],
          },
          {
            name: 'Email & Username Enumeration',
            content:
              'Techniques for discovering valid email addresses and usernames associated with a target organization — a precursor to phishing campaigns or credential-stuffing attacks, and something defenders should monitor for.',
            keyPoints: [
              'Predictable email/username patterns make enumeration easier for attackers',
              'A key input to targeted phishing (spear-phishing) campaigns',
              'Breach databases are often cross-referenced to validate discovered emails',
            ],
          },
          {
            name: 'Metadata Analysis',
            content:
              'Files (documents, images) often contain hidden metadata — author names, software versions, GPS coordinates, edit history — that can leak sensitive information unintentionally shared alongside the file itself.',
            keyPoints: [
              'EXIF data in images can reveal GPS location and device details',
              'Document metadata can leak usernames, software versions, internal paths',
              'Stripping metadata before publishing is a basic but important OPSEC step',
            ],
          },
          {
            name: 'Geolocation & Image Intelligence',
            content:
              'Analyzing visual clues in images — landmarks, signage, shadows, vegetation — to determine where a photo was taken, a specialized OSINT skill used in investigations and increasingly in verifying misinformation.',
            keyPoints: [
              'Combines visual clue analysis with mapping tools to pinpoint locations',
              'Used both offensively (targeting) and for verification/fact-checking',
              'Shadow angles and vegetation can even help estimate time and season',
            ],
          },
          {
            name: 'OSINT Tools & Methodologies',
            content:
              'A structured OSINT investigation follows a methodology (define objectives, collect, verify, analyze, report) using specialized tools (Maltego, Shodan, theHarvester) rather than ad-hoc searching.',
            keyPoints: [
              'Structured methodology prevents missing key sources or going down irrelevant rabbit holes',
              'Shodan indexes internet-connected devices, revealing exposed systems',
              'Cross-verification across multiple sources reduces false conclusions',
            ],
          },
        ],
      },
      {
        category: 'Understanding Cyber Threats',
        subjects: [
          {
            name: 'Threat Landscape Overview',
            content:
              'A survey of who attacks systems and why — from opportunistic criminals seeking financial gain to nation-state actors and insider threats — and how understanding attacker motivation shapes defensive priorities.',
            keyPoints: [
              'Threat actors range from opportunistic criminals to nation-states',
              'Motivation (financial, espionage, ideological) shapes attacker behavior and targets',
              'Understanding "who\'s likely to attack us and why" informs defensive priorities',
            ],
          },
          {
            name: 'Malware & Ransomware',
            content:
              'Malware is software designed to harm or exploit systems — viruses, worms, trojans — with ransomware (which encrypts data and demands payment) being one of the most financially damaging categories in recent years.',
            keyPoints: [
              'Different malware types (virus, worm, trojan) spread and behave differently',
              'Ransomware encrypts victim data and demands payment for the decryption key',
              'Backups and network segmentation are core defenses against ransomware spread',
            ],
          },
          {
            name: 'Phishing & Social Engineering',
            content:
              'Social engineering manipulates people rather than systems — phishing emails, pretexting, and impersonation trick victims into revealing credentials or taking harmful actions, remaining one of the most common breach entry points.',
            keyPoints: [
              'Exploits human trust and urgency rather than technical vulnerabilities',
              'Consistently one of the top initial-access methods in real breaches',
              'Security awareness training is a key, ongoing defensive measure',
            ],
          },
          {
            name: 'Web Application Attacks',
            content:
              'Common web vulnerabilities include SQL injection (malicious database queries), XSS (injecting malicious scripts into pages other users view), and CSRF (tricking a user\'s browser into unwanted actions) — the OWASP Top 10 covers the most critical.',
            keyPoints: [
              'SQL injection: unsanitized input alters database queries',
              'XSS: malicious scripts execute in other users\' browsers',
              'OWASP Top 10 is the standard reference list of critical web risks',
            ],
          },
          {
            name: 'Network-Based Attacks',
            content:
              'Attacks that target network infrastructure directly — DDoS (overwhelming a service with traffic), man-in-the-middle (intercepting communication), and ARP/DNS spoofing — exploiting the trust assumptions built into network protocols.',
            keyPoints: [
              'DDoS overwhelms a target with traffic to deny service to legitimate users',
              'Man-in-the-middle attacks intercept traffic between two trusting parties',
              'Encryption (TLS) is the primary defense against interception attacks',
            ],
          },
          {
            name: 'Insider & Advanced Threats',
            content:
              'Insider threats come from trusted individuals (employees, contractors) misusing legitimate access, while advanced persistent threats (APTs) are sophisticated, well-funded actors who maintain long-term stealthy access — both are harder to detect than external opportunistic attacks.',
            keyPoints: [
              'Insiders already have legitimate access, bypassing perimeter defenses entirely',
              'APTs prioritize stealth and persistence over speed',
              'Behavioral monitoring (not just perimeter defense) is needed to catch both',
            ],
          },
          {
            name: 'Threat Detection & Analysis',
            content:
              'Detecting attacks in progress relies on log analysis, SIEM (Security Information and Event Management) systems, and anomaly detection — correlating signals across a system to spot malicious activity amid normal noise.',
            keyPoints: [
              'SIEM systems aggregate and correlate logs from across an organization',
              'Anomaly detection flags behavior that deviates from an established baseline',
              'Fast detection directly shrinks the window of damage an attacker can do',
            ],
          },
          {
            name: 'Security Best Practices & Mitigation',
            content:
              'Practical, high-leverage defenses: patching promptly, multi-factor authentication, network segmentation, regular backups, and the principle of least privilege — simple measures that stop the large majority of real-world attacks.',
            keyPoints: [
              'Patching known vulnerabilities closes the most commonly exploited holes',
              'MFA significantly reduces the impact of stolen/phished credentials',
              'Regular, tested backups are the ultimate mitigation against ransomware',
            ],
          },
        ],
      },
    ],
  },
]

module.exports = programs