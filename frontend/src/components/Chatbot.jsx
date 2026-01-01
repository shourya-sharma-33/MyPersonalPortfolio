import React, { useState, useRef, useEffect } from 'react';
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline, send, close, refreshOutline } from "ionicons/icons";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = ({ currentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [progressData, setProgressData] = useState([]);
    const chatEndRef = useRef(null);

    const FIREBASE_URL = 'https://pfolio-progress-default-rtdb.asia-southeast1.firebasedatabase.app/.json';
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // ✅ FIXED: Changed from process.env

    // Theme colors
    const themeColors = {
        violet: '#9854f6',
        blue: '#4a9eff',
        green: '#44d62c',
        orange: '#ff8a29',
        pink: '#ff5e9d',
        cyan: '#00d4ff',
    };

    const currentColor = themeColors[currentTheme] || themeColors.violet;

    // Fetch progress data once
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(FIREBASE_URL);
                const data = await response.json();

                if (data && Array.isArray(data)) {
                    setProgressData(data.filter(item => item !== null));
                } else if (data && typeof data === 'object') {
                    setProgressData(Object.values(data).filter(item => item !== null));
                }
            } catch (err) {
                console.error('Error fetching progress data:', err);
            }
        };
        fetchData();
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    // Create context from progress data
    const createContext = () => {
        const context = `
You are Shourya Sharma on his portfolio website. You're friendly, helpful, and knowledgeable about your journey as a developer.

About Shourya:
- 17-year-old developer from Haridwar, Uttarakhand, India
- Specializes in: Machine Learning, Advanced Backend Development, DevOps, and CyberSecurity
- Passionate about learning new technologies and building projects
- Active on X (Twitter): @shouryasharma33
- GitHub: github.com/shourya-sharma-33
- Email: shouryasharma_dev@proton.me

Key Skills & Interests:
- Backend: Node.js, Express, MERN stack, gRPC, GraphQL, TypeScript, Rust, Go
- ML/AI: Python, NumPy, Pandas, Matplotlib, Deep Learning
- DevOps: Docker, Kubernetes, CI/CD
- Architecture: Microservices, Event-driven architecture, System design, Low-level design
- Frontend: React, Tailwind CSS, Three.js

His Development Journey:
${progressData.map(item => `- ${item.date}: ${item.title} - ${item.details}`).join('\n')}

Notable Projects:
- Portfolio with Interactive Avatar (React, Three.js, Tailwind)
- GHCNpy25: Recoded Weather API for 100k+ stations worldwide
- Uber Clone (MERN stack)
- Various anime and travel websites

Instructions:
- Be conversational and friendly, use emojicon :3 everytime you end the sentence
- Answer questions about Shourya's skills, projects, and journey
- If asked about contacting him, provide his email and social links
- If you don't know something specific, be honest but helpful
- Keep responses concise (2-3 sentences max unless asked for details)
- Encourage visitors to check out his projects and GitHub
`;
        return context;
    };

    const handleSendMessage = async () => {
        if (!userInput.trim() || isLoading) return;

        const userMessage = userInput.trim();
        setUserInput('');

        setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


            const prompt = `${createContext()}

User Question: ${userMessage}

Please provide a helpful, friendly response based on the information above. If the question is about Shourya's background, skills, or projects, use the context provided. Keep it conversational and concise.`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const botMessage = response.text();

            setMessages(prev => [...prev, { type: 'bot', content: botMessage }]);
        } catch (error) {
            console.error('Error generating response:', error);
            setMessages(prev => [...prev, {
                type: 'bot',
                content: 'Sorry, I encountered an error. Please try again! 😅'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClear = () => {
        setMessages([]);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen && messages.length === 0) {
            // Welcome message
            setMessages([{
                type: 'bot',
                content: "Hey there! 👋 I'm Shourya's AI assistant. Ask me anything about his skills, projects, or journey as a developer!"
            }]);
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={toggleChat}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: currentColor,
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                }}
                aria-label="Open chat"
            >
                <IonIcon
                    icon={isOpen ? close : chatbubbleEllipsesOutline}
                    style={{ fontSize: '28px', color: '#000' }}
                />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className='chatbot'
                    style={{
                        '--chat-color': currentColor,  
                        position: 'fixed',
                        bottom: '6rem',
                        right: '2rem',
                        width: '380px',
                        maxWidth: 'calc(100vw - 4rem)',
                        height: '500px',
                        maxHeight: 'calc(100vh - 10rem)',
                       boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        zIndex: 999,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    {/* Header */}
                    <div

                        className="chatbot-scroll"
                        style={{
                            padding: '1rem',
                            borderBottom: `1px solid rgba(255,255,255,0.1)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                         }}
                    >
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>
                                Chat with me! 
                            </h4>
                            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: '#aaa' }}>
                                Powered by Gemini AI
                            </p>
                        </div>
                        <button
                            onClick={handleClear}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.5rem'
                            }}
                            aria-label="Clear chat"
                        >
                            <IonIcon icon={refreshOutline} style={{ fontSize: '20px', color: currentColor }} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '80%'
                                }}
                            >
                                <div
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: '12px',
                                        backgroundColor: msg.type === 'user'
                                            ? currentColor
                                            : 'rgba(255,255,255,0.1)',
                                        color: msg.type === 'user' ? '#000' : '#fff',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        wordWrap: 'break-word'
                                    }}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start' }}>
                                <div
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: '12px',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        color: '#aaa',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Thinking...
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input */}
                    <div
                        style={{
                            padding: '1rem',
                            borderTop: `1px solid rgba(255,255,255,0.1)`,
                            display: 'flex',
                            gap: '0.5rem'
                        }}
                    >
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: '#fff',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!userInput.trim() || isLoading}
                            style={{
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: currentColor,
                                color: '#000',
                                cursor: userInput.trim() && !isLoading ? 'pointer' : 'not-allowed',
                                opacity: userInput.trim() && !isLoading ? 1 : 0.5,
                                transition: 'all 0.2s'
                            }}
                        >
                            <IonIcon icon={send} style={{ fontSize: '20px' }} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
