import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Mic, FileText, Send, Plus } from 'lucide-react';

const InputSection = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend(inputText);
            setInputText('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full glass-morphism p-2 md:p-4 flex flex-col gap-2 relative shadow-[0_0_50px_-12px_rgba(0,243,255,0.25)]"
        >
            <div className="flex items-center gap-3 bg-bg-dark/50 rounded-xl px-4 py-3 border border-white/5 focus-within:border-neon-cyan/50 transition-all">
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="TYPE YOUR TRANSMISSION OR UPLOAD TACTICAL DATA..."
                    className="flex-1 bg-transparent border-none outline-none text-sm font-mono placeholder:text-secondary/30 resize-none h-10 py-2 pt-2.5"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { onSend(inputText); setInputText(''); }}
                    className="bg-neon-cyan text-bg-deep p-2 rounded-lg font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                >
                    <Send size={18} />
                </motion.button>
            </div>

            <div className="flex justify-between items-center px-2 py-1">
                <div className="flex gap-4">
                    <FeatureIcon icon={<Image size={20} />} label="VISUAL SCAN" />
                    <FeatureIcon icon={<Mic size={20} />} label="VOICE INPUT" />
                    <FeatureIcon icon={<FileText size={20} />} label="TACTICAL DOCS" />
                    <button className="text-secondary/50 hover:text-neon-cyan transition-colors">
                        <Plus size={20} />
                    </button>
                </div>
                <div className="text-[10px] font-mono text-secondary/30 hidden md:block select-none">
                    PRESS [ENTER] TO TRANSMIT // [SHIFT+ENTER] FOR LINE BREAK
                </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan/50 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-cyan/50 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-cyan/50 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan/50 rounded-br-lg"></div>
        </motion.div>
    );
};

const FeatureIcon = ({ icon, label }) => (
    <motion.button
        whileHover={{ y: -2, color: '#00f3ff' }}
        className="flex items-center gap-2 group transition-colors text-secondary"
        title={label}
    >
        <div className="p-1.5 rounded-md group-hover:bg-cyan-500/10 border border-transparent group-hover:border-neon-cyan/20">
            {icon}
        </div>
    </motion.button>
);

export default InputSection;
