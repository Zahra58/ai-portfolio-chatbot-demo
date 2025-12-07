import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm Zahra's AI assistant. I can tell you about her background, skills, projects, and experience. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Portfolio data
  const portfolioData = {
    personal: {
      name: "Zahra Etebari",
      role: "AI/ML Engineer & Former Medical Scientist",
      education: "Master's degree in Computer Science",
      background: "10+ years as a medical scientist across all lab sections - public health, private labs, diagnostics, research",
      description: "After 10+ years in medical laboratories, I discovered AI and machine learning as the tool to solve the healthcare problems I witnessed every day. I build real-world AI solutions that make a difference - fall detection systems for elderly people, choking detection for parents, patient care improvements, and diagnostic assistance tools. I'm completely hooked on using AI to fill the gaps in healthcare.",
      mission: "Building AI/ML solutions that solve real healthcare problems - not just cool tech, but tools that actually help people and save lives.",
      portfolio: "https://zahra-etebari-portfolio.netlify.app/",
      journal: "https://from-lab-to-ai.vercel.app/",
      github: "https://github.com/Zahra58",
      tagline: "From Lab to Models - Turning 10+ years of medical expertise into AI solutions that matter"
    },
    journey: {
      medical: "10+ years in medical laboratories - public health facilities, private institutions, running tests, analyzing samples, interpreting results across virtually every section of medical labs",
      transition: "Witnessed the gaps in healthcare every day - inefficiencies, limitations, diagnostic errors, overwhelmed workers. Made the decision to build solutions instead of just observing problems.",
      aiDiscovery: "Discovered AI and ML as the missing piece - suddenly could build patient care systems, fall detection, choking detection, diagnostic tools, and data pipelines that turn chaotic healthcare data into actionable insights",
      passion: "Completely obsessed with this work. Every model trained could prevent a fall, catch a medical error, or give someone peace of mind about their loved ones.",
      uniqueValue: "Medical background gives me something most AI engineers don't have - I understand the REAL problems in healthcare, the pain points, and what actually matters."
    },
    realWorldProjects: [
      {
        category: "Healthcare AI",
        projects: [
          "Fall detection models for elderly people living alone - giving them independence with safety",
          "Choking detection systems for parents - peace of mind when they can't watch every second",
          "Patient care systems that improve outcomes and reduce errors",
          "Diagnostic assistance tools that catch what human eyes might miss",
          "Data pipelines that turn chaotic healthcare data into actionable insights"
        ]
      }
    ],
    skills: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing (NLP)",
      "Speech Recognition & Audio Processing",
      "Computer Vision & Object Detection",
      "Healthcare AI & Medical Applications",
      "Fall Detection Systems",
      "Choking Detection Systems",
      "Patient Care Optimization",
      "Data Pipeline Design",
      "Data Storytelling & Insights",
      "Python, TensorFlow & PyTorch",
      "YOLOv8, LSTM & Transformers",
      "FastAPI & Backend Development",
      "RAG & FAISS",
      "Data Mining & Clustering",
      "Medical Laboratory Expertise",
      "Clinical Diagnostics"
    ],
    projects: [
      {
        name: "AI Portfolio Chatbot with RAG",
        description: "RAG-powered AI Chatbot built with FastAPI and FAISS for intelligent portfolio queries using vector embeddings and semantic search.",
        technologies: "FastAPI, RAG, FAISS, Sentence-Transformers",
        githubUrl: "https://github.com/Zahra58/ai-portfolio-chatbot-demo"
      },
      {
        name: "Live Speech-to-Text Translation PWA",
        description: "Real-time speech-to-text with instant translation into 20+ languages. Progressive Web App for accessibility and education.",
        technologies: "Speech Recognition, Translation API, PWA",
        githubUrl: "https://github.com/Zahra58/Live-speech-translator"
      },
      {
        name: "Object Detection & Tracking with YOLOv8",
        description: "End-to-end computer vision system with real-time multi-object detection and tracking using YOLOv8 and IoU tracker.",
        technologies: "YOLOv8, Computer Vision, OpenCV",
        githubUrl: "https://github.com/Zahra58/Computer-vision-Object-detection"
      },
      {
        name: "Speech Recognition System",
        description: "Deep Learning speech recognition with LSTM/Transformer models and MFCC feature extraction.",
        technologies: "Deep Learning, LSTM, Transformers, Audio Processing",
        githubUrl: "https://github.com/Zahra58/speech-recognition-project"
      },
      {
        name: "Customer Segmentation & Analytics",
        description: "Comprehensive data mining with K-Means, Hierarchical, and DBSCAN clustering plus predictive classification models.",
        technologies: "K-Means, DBSCAN, SVM, Random Forest",
        githubUrl: "https://github.com/Zahra58/data-mining-project--wholesale-customer-clustering"
      }
    ],
    expertise: [
      "Building AI solutions for real healthcare problems",
      "Fall detection systems for elderly independence with safety",
      "Choking detection systems for child safety monitoring",
      "Patient care optimization and error reduction",
      "Diagnostic assistance tools for medical accuracy",
      "Healthcare data pipeline design and optimization",
      "10+ years of medical laboratory expertise",
      "Understanding real healthcare pain points and gaps",
      "Data storytelling - turning numbers into action",
      "End-to-end ML pipelines from problem to deployment",
      "Computer vision for safety and medical applications",
      "Speech recognition and real-time processing",
      "RAG systems with vector databases"
    ]
  };

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.match(/^(hi|hello|hey)/)) {
      return "Hello! I'm here to help you learn about Zahra's journey from 10+ years in medical labs to AI/ML engineering. You can ask me about her medical background, healthcare AI projects, technical skills, or her mission to solve real problems with AI!";
    }

    if (input.match(/about|who|introduction|tell me|journey|background/)) {
      return `${portfolioData.personal.name} - ${portfolioData.personal.role}\n\n${portfolioData.personal.tagline}\n\n${portfolioData.personal.description}\n\n**Background:** ${portfolioData.personal.background}\n\n**Mission:** ${portfolioData.personal.mission}\n\n**Links:**\n• Portfolio: ${portfolioData.personal.portfolio}\n• Blog: ${portfolioData.personal.journal}\n• GitHub: ${portfolioData.personal.github}`;
    }

    if (input.match(/medical|lab|healthcare background|scientist|10 years/)) {
      return `**From Medical Labs to AI Engineering**\n\n${portfolioData.journey.medical}\n\n**The Turning Point:**\n${portfolioData.journey.transition}\n\n**AI Discovery:**\n${portfolioData.journey.aiDiscovery}\n\n**Why This Matters:**\n${portfolioData.journey.uniqueValue}\n\n${portfolioData.journey.passion}`;
    }

    if (input.match(/fall detection|elderly|choking|patient care|healthcare ai|real.*world|solve.*problem/)) {
      return `**Real Healthcare AI Solutions Zahra is Building:**\n\n${portfolioData.realWorldProjects[0].projects.map(p => `• ${p}`).join('\n')}\n\n**Why These Matter:**\nThese aren't just tech demos - each solution addresses real gaps Zahra witnessed during 10+ years in healthcare. Every model could prevent injuries, save lives, or give families peace of mind.\n\n**Her Unique Advantage:**\n${portfolioData.journey.uniqueValue}`;
    }

    if (input.match(/mission|purpose|why|motivation|passion/)) {
      return `**Zahra's Mission:**\n${portfolioData.personal.mission}\n\n**The Passion:**\n${portfolioData.journey.passion}\n\n**The Journey:**\nAfter witnessing healthcare gaps for 10+ years - diagnostic errors, patient delays, overwhelmed workers - Zahra made a decision: stop observing problems and start solving them with AI.\n\n**Real Impact:**\nEvery project is aimed at filling real healthcare gaps - fall detection for elderly independence, choking detection for child safety, patient care optimization, diagnostic assistance.`;
    }

    if (input.match(/blog|journal|writing|from lab to|experiences/)) {
      return `**From Lab to Models - Zahra's AI Journey Blog**\n\n${portfolioData.personal.journal}\n\nZahra documents her transition from medical scientist to AI/ML engineer, sharing:\n\n• Real healthcare AI projects she's building\n• Data pipeline deep dives\n• Career transition tips from healthcare to AI\n• Problem-solving approaches from gap identification to deployment\n• Honest experiences - wins, failures, and lessons learned\n• Data storytelling and insights\n• History of AI/ML models and evolution\n\n**Why Read It:**\nIf you care about using technology to solve real healthcare problems - not just for cool tech, but to actually make a difference - this blog is for you.`;
    }

    if (input.match(/skill|technology|tech|expertise/)) {
      return `**Zahra's Expertise:**\n\n**Healthcare AI:**\n• Fall detection systems\n• Choking detection systems\n• Patient care optimization\n• Diagnostic assistance tools\n• Healthcare data pipelines\n• 10+ years medical lab expertise\n\n**Technical Skills:**\n${portfolioData.skills.filter(s => !s.includes('Healthcare') && !s.includes('Fall') && !s.includes('Choking') && !s.includes('Patient') && !s.includes('Medical') && !s.includes('Data Storytelling')).map(s => `• ${s}`).join('\n')}\n\n**Unique Combination:**\nMedical domain expertise + AI/ML engineering + Real problem understanding = Solutions that actually work in healthcare.`;
    }

    if (input.match(/project|work|built|portfolio/) && !input.match(/rag|speech|object|customer/)) {
      return `**Zahra's AI/ML Projects:**\n\n${portfolioData.projects.map((p, i) => `${i + 1}. **${p.name}**\n   ${p.description}\n   Tech: ${p.technologies}\n   GitHub: ${p.githubUrl}`).join('\n\n')}\n\n**Healthcare AI Projects (In Development):**\n${portfolioData.realWorldProjects[0].projects.map(p => `• ${p}`).join('\n')}\n\nAsk me about any specific project!`;
    }

    if (input.match(/rag|chatbot|faiss|vector/)) {
      const p = portfolioData.projects[0];
      return `**${p.name}**\n\n${p.description}\n\n**Technologies:** ${p.technologies}\n\n**GitHub:** ${p.githubUrl}\n\nThis chatbot uses RAG (Retrieval-Augmented Generation) to intelligently answer questions about Zahra's portfolio by searching through vector embeddings.`;
    }

    if (input.match(/speech.*translation|translation|pwa|translate/)) {
      const p = portfolioData.projects[1];
      return `**${p.name}**\n\n${p.description}\n\n**Technologies:** ${p.technologies}\n\n**Real-World Impact:** Helps with accessibility, education, and communication across language barriers.\n\n**GitHub:** ${p.githubUrl}`;
    }

    if (input.match(/object|detection|yolo|computer vision/)) {
      const p = portfolioData.projects[2];
      return `**${p.name}**\n\n${p.description}\n\n**Technologies:** ${p.technologies}\n\n**Applications:** Can be used for safety monitoring, security systems, and healthcare applications.\n\n**GitHub:** ${p.githubUrl}`;
    }

    if (input.match(/speech recognition|audio|lstm|transformer/)) {
      const p = portfolioData.projects[3];
      return `**${p.name}**\n\n${p.description}\n\n**Technologies:** ${p.technologies}\n\n**GitHub:** ${p.githubUrl}`;
    }

    if (input.match(/customer|segmentation|clustering|data mining/)) {
      const p = portfolioData.projects[4];
      return `**${p.name}**\n\n${p.description}\n\n**Technologies:** ${p.technologies}\n\n**GitHub:** ${p.githubUrl}`;
    }

    if (input.match(/education|degree|study/)) {
      return `**Education:**\nZahra holds a ${portfolioData.personal.education}, specializing in AI and Machine Learning.\n\n**Professional Background:**\n${portfolioData.personal.background}\n\nThis unique combination of medical expertise and AI/ML education allows her to build healthcare solutions that actually address real clinical needs.`;
    }

    if (input.match(/contact|hire|reach|email|opportunity/)) {
      return `**Get in Touch with Zahra:**\n\n**Portfolio:** ${portfolioData.personal.portfolio}\n**Blog:** ${portfolioData.personal.journal}\n**GitHub:** ${portfolioData.personal.github}\n\nZahra is passionate about building AI solutions for healthcare problems. If you're working on meaningful projects that improve patient care, safety, or healthcare outcomes - she'd love to hear from you!`;
    }

    if (input.match(/github|code|repository/)) {
      return `**Zahra's GitHub:** ${portfolioData.personal.github}\n\nCheck out her repositories featuring:\n• RAG-powered chatbots\n• Speech recognition systems\n• Object detection with YOLOv8\n• Translation systems\n• Data mining projects\n\nAll projects include comprehensive documentation and are open source!`;
    }

    if (input.match(/data.*storytelling|data.*pipeline|insights/)) {
      return `**Data Storytelling & Pipeline Design**\n\nZahra specializes in:\n• Designing data pipelines that turn chaotic healthcare data into actionable insights\n• Uncovering stories hidden in medical data\n• Building systems that help healthcare workers make better decisions\n• Transforming raw data into tools that improve patient outcomes\n\nThis skill comes from 10+ years of working with medical data and understanding what healthcare professionals actually need.`;
    }

    if (input.match(/unique|different|special|advantage|edge/)) {
      return `**What Makes Zahra Different:**\n\n${portfolioData.journey.uniqueValue}\n\n**Real Understanding:**\nMost AI engineers build healthcare solutions from outside the industry. Zahra spent 10+ years INSIDE healthcare - she knows:\n• Where the real pain points are\n• What actually matters to patients and providers\n• Which problems are worth solving\n• How healthcare systems actually work\n\n**Practical Focus:**\n${portfolioData.personal.mission}\n\nEvery project addresses a real gap she witnessed in healthcare.`;
    }

    if (input.match(/thank|thanks/)) {
      return "You're welcome! Feel free to ask anything about Zahra's medical background, AI projects, or her journey from lab to models. 😊";
    }

    return "I can tell you about:\n\n• Zahra's 10+ year journey in medical labs\n• Her transition to AI/ML engineering\n• Healthcare AI projects (fall detection, choking detection, patient care)\n• Technical skills and expertise\n• Published projects with GitHub links\n• Her mission to solve real healthcare problems\n• Her blog: From Lab to Models\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: input, timestamp: new Date() }]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => scrollToBottom(), 100);

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: generateResponse(input), timestamp: new Date() }]);
      setIsTyping(false);
      setTimeout(() => scrollToBottom(), 100);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "Tell me about Zahra's journey",
    "What healthcare AI is she building?",
    "What's her medical background?",
    "Show me her projects",
    "What makes her unique?"
  ];

  // Styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a0033 0%, #2d0052 50%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    starsContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    star: {
      position: 'absolute',
      background: 'white',
      borderRadius: '50%',
      animation: 'twinkle 3s infinite'
    },
    nebula: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(100px)',
      opacity: 0.3
    },
    content: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    header: {
      background: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(147, 51, 234, 0.3)',
      padding: '20px'
    },
    headerContent: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    headerIcon: {
      background: 'linear-gradient(135deg, #9333ea, #ec4899, #3b82f6)',
      padding: '10px',
      borderRadius: '10px',
      display: 'flex'
    },
    messagesArea: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      paddingBottom: '100px' // Extra space so messages aren't hidden behind input
    },
    messagesContent: {
      maxWidth: '1000px',
      margin: '0 auto'
    },
    message: {
      display: 'flex',
      gap: '15px',
      marginBottom: '20px'
    },
    messageUser: {
      flexDirection: 'row-reverse'
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    avatarBot: {
      background: 'linear-gradient(135deg, #9333ea, #ec4899, #3b82f6)'
    },
    avatarUser: {
      background: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    bubble: {
      maxWidth: '600px',
      padding: '15px 20px',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      whiteSpace: 'pre-wrap'
    },
    bubbleBot: {
      background: 'rgba(30, 30, 30, 0.7)',
      color: '#e5e5e5',
      border: '1px solid rgba(147, 51, 234, 0.3)'
    },
    bubbleUser: {
      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(6, 182, 212, 0.8))',
      color: 'white',
      border: '1px solid rgba(6, 182, 212, 0.3)'
    },
    quickSection: {
      padding: '15px 20px'
    },
    quickContent: {
      maxWidth: '1000px',
      margin: '0 auto'
    },
    quickLabel: {
      color: 'rgba(216, 180, 254, 0.8)',
      fontSize: '0.8em',
      marginBottom: '10px'
    },
    quickButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    quickButton: {
      background: 'rgba(30, 30, 30, 0.5)',
      backdropFilter: 'blur(10px)',
      color: 'rgba(216, 180, 254, 0.8)',
      border: '1px solid rgba(147, 51, 234, 0.4)',
      padding: '8px 15px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '0.9em',
      transition: 'all 0.3s'
    },
    inputArea: {
      background: 'rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(147, 51, 234, 0.3)',
      padding: '20px'
    },
    inputContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      gap: '10px'
    },
    input: {
      flex: 1,
      background: 'rgba(30, 30, 30, 0.7)',
      color: 'white',
      border: '1px solid rgba(147, 51, 234, 0.4)',
      padding: '15px 20px',
      borderRadius: '15px',
      fontSize: '1em',
      outline: 'none'
    },
    sendButton: {
      background: 'linear-gradient(135deg, #9333ea, #ec4899, #3b82f6)',
      color: 'white',
      border: 'none',
      padding: '15px 20px',
      borderRadius: '15px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          *::-webkit-scrollbar { width: 8px; }
          *::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.3); }
          *::-webkit-scrollbar-thumb { background: rgba(147, 51, 234, 0.5); border-radius: 4px; }
        `}
      </style>

      <div style={styles.starsContainer}>
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 3;
          return (
            <div
              key={i}
              style={{
                ...styles.star,
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          );
        })}
      </div>

      <div style={{...styles.nebula, top: '25%', left: '25%', width: '400px', height: '400px', background: 'rgba(147, 51, 234, 0.3)'}} />
      <div style={{...styles.nebula, bottom: '25%', right: '25%', width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.3)'}} />

      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerIcon}>
              <Bot size={24} color="white" />
            </div>
            <div>
              <h1 style={{color: 'white', fontSize: '1.5em', fontWeight: 'bold', margin: 0}}>
                Zahra's Portfolio Assistant
              </h1>
              <p style={{color: 'rgba(216, 180, 254, 0.8)', fontSize: '0.9em', margin: '5px 0 0 0'}}>
                Ask me about her AI projects and expertise
              </p>
            </div>
          </div>
        </div>

        <div style={styles.messagesArea}>
          <div style={styles.messagesContent}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(message.type === 'user' ? styles.messageUser : {})
                }}
              >
                <div style={{
                  ...styles.avatar,
                  ...(message.type === 'bot' ? styles.avatarBot : styles.avatarUser)
                }}>
                  {message.type === 'bot' ? <Bot size={20} color="white" /> : <User size={20} color="white" />}
                </div>
                <div style={{
                  ...styles.bubble,
                  ...(message.type === 'bot' ? styles.bubbleBot : styles.bubbleUser)
                }}>
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={styles.message}>
                <div style={{...styles.avatar, ...styles.avatarBot}}>
                  <Bot size={20} color="white" />
                </div>
                <div style={{...styles.bubble, ...styles.bubbleBot}}>
                  Typing...
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} style={{ height: '1px' }} />
          </div>
        </div>

        <div style={styles.quickSection}>
          <div style={styles.quickContent}>
            <div style={styles.quickLabel}>Quick questions:</div>
            <div style={styles.quickButtons}>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  style={styles.quickButton}
                  onClick={() => {
                    setInput(q);
                    setTimeout(handleSend, 100);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(30, 30, 30, 0.7)';
                    e.target.style.borderColor = 'rgba(147, 51, 234, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(30, 30, 30, 0.5)';
                    e.target.style.borderColor = 'rgba(147, 51, 234, 0.4)';
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.inputArea}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Zahra's skills, projects, or experience..."
              style={styles.input}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              style={{
                ...styles.sendButton,
                opacity: input.trim() ? 1 : 0.5,
                cursor: input.trim() ? 'pointer' : 'not-allowed'
              }}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
