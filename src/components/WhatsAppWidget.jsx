import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState('');

  // Show tooltip after a small delay to invite user engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const quickChips = [
    { label: '💼 Project Inquiry', text: 'Hi Aditya, I am interested in hiring you for a web development project.' },
    { label: '🤝 Collaboration', text: 'Hi Aditya, I would love to collaborate with you on a project!' },
    { label: '💬 Saying hii!', text: 'Hi Aditya, I visited your website and just wanted to connect!' }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = message.trim() || "Hi Aditya! I visited your portfolio website and wanted to connect.";
    const url = `https://wa.me/919392584546?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  const selectChip = (text) => {
    setMessage(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-20 right-2 bg-neutral-900 border border-emerald-500/20 text-white text-xs py-2.5 px-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap z-50 flex items-center gap-2"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Chat with me on WhatsApp!</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="ml-2 text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}

        {/* Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-20 right-0 w-[340px] max-w-[calc(100vw-2rem)] bg-[#0f0f11]/95 border border-emerald-500/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black text-white border border-white/20">
                    A
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">Aditya</h4>
                  <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span>Online / Active</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/25 flex items-center justify-center transition-colors text-white cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            {/* Body / Chat Area */}
            <div className="p-4 max-h-[280px] overflow-y-auto flex flex-col gap-4 bg-black/30">
              <div className="bg-emerald-950/40 border border-emerald-900/30 rounded-2xl p-3 text-white text-xs max-w-[85%] self-start leading-relaxed shadow-sm">
                <p className="font-medium text-emerald-400 mb-1">Aditya</p>
                Hi there! 👋 Thanks for visiting. How can I help you today? Ask me anything or select a quick option below.
              </div>

              {/* Chips */}
              <div className="flex flex-col gap-2 mt-1">
                <p className="text-[10px] text-white/40 uppercase font-semibold tracking-wider mb-1">Quick Options</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickChips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectChip(chip.text)}
                      className="text-[11px] bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-white/90 hover:text-emerald-400 py-1.5 px-2.5 rounded-full transition-all duration-300 cursor-pointer text-left"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Message Input */}
            <form onSubmit={handleSend} className="p-3 bg-[#131317] border-t border-white/5 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <button
                type="submit"
                className="w-8 h-8 shrink-0 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current transform rotate-45 translate-x-[-1px] translate-y-[1px]" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
            <div className="text-[9px] text-white/30 text-center pb-2 bg-[#131317]">
              Usually replies in a few minutes
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] cursor-pointer overflow-hidden border border-emerald-400/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          ) : (
            <motion.svg
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.235 3.466 5.211 3.466 8.378 0 6.537-5.325 11.863-11.863 11.863-2.022-.001-4.004-.518-5.764-1.503L0 24zm6.208-3.791c1.666.989 3.315 1.503 5.594 1.504 5.431 0 9.851-4.42 9.852-9.853 0-2.631-1.025-5.105-2.887-6.967C16.96 3.031 14.485 2.03 11.859 2.03c-5.434 0-9.852 4.419-9.853 9.852 0 2.203.567 4.363 1.639 6.223l-.99 3.616 3.71-.973zm11.393-7.234c-.266-.134-1.58-.78-1.828-.869-.247-.089-.427-.134-.607.135-.179.268-.696.87-.852 1.048-.158.179-.315.201-.581.067-.266-.134-1.127-.415-2.147-1.326-.79-.705-1.324-1.577-1.48-1.846-.155-.269-.016-.414.118-.548.121-.12.266-.313.4-.469.133-.156.177-.268.266-.447.089-.179.045-.335-.022-.469-.067-.134-.607-1.462-.832-2.001-.219-.527-.459-.454-.627-.463-.162-.008-.348-.01-.534-.01-.186 0-.489.07-.746.348-.256.277-1.002.978-1.002 2.388 0 1.41 1.025 2.77 1.168 2.96.143.19 2.017 3.08 4.886 4.318.682.295 1.214.471 1.629.603.686.219 1.311.188 1.803.115.549-.081 1.58-.646 1.801-1.238.22-.592.22-1.1.155-1.206-.067-.107-.247-.179-.513-.312z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
