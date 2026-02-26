import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponseArea = ({ messages }) => {
    return (
        <div className="flex-1 overflow-y-auto space-y-6 px-4 py-8 custom-scrollbar">
            {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                    <div className="w-24 h-24 border-2 border-dashed border-neon-cyan rounded-full animate-[spin_10s_linear_infinite] mb-6"></div>
                    <p className="font-mono text-sm tracking-[0.2em]">WAITING FOR CONNECTION...</p>
                </div>
            ) : (
                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-1' : 'order-1'}`}>
                                <div className={`text-[10px] font-mono mb-1 ${msg.role === 'user' ? 'text-right text-neon-purple' : 'text-left text-neon-cyan'}`}>
                                    {msg.role === 'user' ? '► USER_TRANS' : '◄ JETPACK_COMM'}
                                </div>
                                <div
                                    className={`px-6 py-4 rounded-2xl ${msg.role === 'user'
                                            ? 'bg-purple-500/10 border border-neon-purple/20 rounded-tr-none'
                                            : 'bg-cyan-500/10 border border-neon-cyan/20 rounded-tl-none font-mono text-sm leading-relaxed'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            )}
        </div>
    );
};

export default ResponseArea;
