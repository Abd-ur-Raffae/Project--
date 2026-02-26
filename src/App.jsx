import React, { useState } from 'react';
import InputSection from './components/InputSection';
import ResponseArea from './components/ResponseArea';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        // Add user message
        const newUserMsg = { id: Date.now(), role: 'user', content: text };
        setMessages(prev => [...prev, newUserMsg]);

        // Simulate AI response
        setTimeout(() => {
            const aiMsg = {
                id: Date.now() + 1,
                role: 'assistant',
                content: "I am Jetpack, your tactical AI assistant. I've received your transmission. How shall we proceed with the mission?"
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            {/* Background elements */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
            </div>

            <header className="w-full max-w-4xl mb-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tighter glow-cyan font-outfit italic">
                    JET<span className="text-neon-cyan">PACK</span>
                </h1>
                <div className="flex items-center gap-4 text-xs font-mono text-secondary">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                        SYSTEM ONLINE
                    </span>
                    <span className="px-2 py-1 border border-glass-border rounded">v1.0.4</span>
                </div>
            </header>

            <main className="w-full max-w-4xl flex-1 flex flex-col gap-6">
                <ResponseArea messages={messages} />
                <InputSection onSend={handleSendMessage} />
            </main>

            <footer className="mt-8 text-secondary text-[10px] font-mono opacity-50 uppercase tracking-widest">
                &copy; 2026 Jetpack Tactical Systems // Zero Latency Guaranteed
            </footer>
        </div>
    );
}

export default App;
