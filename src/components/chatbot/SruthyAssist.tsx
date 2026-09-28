import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Shield,
  Bot,
  User,
  ArrowRight,
  Maximize2,
  Minimize2,
  RefreshCw,
} from 'lucide-react';
import { chatbotService, ChatMessage, INITIAL_QUICK_REPLIES } from '../../chatbot/chatbotEngine';

export const SruthyAssist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-0',
      sender: 'bot',
      text: "Hi! I'm Sruthy Assist. I can help you understand insurance options, coverage, renewals and claims. How can I help?",
      timestamp: 'Just now',
      quickReplies: INITIAL_QUICK_REPLIES,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const messageContent = (textToSend || inputText).trim();
    if (!messageContent) return;

    const userMessage: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    try {
      const response = await chatbotService.getResponse(messageContent);
      setIsTyping(false);

      const botMessage: ChatMessage = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: response.quickReplies,
        actionLink: response.actionLink,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 'msg-' + Date.now(),
          sender: 'bot',
          text: "I apologize, I encountered a brief delay. Please feel free to book a direct consultation or WhatsApp Sruthy directly.",
          timestamp: 'Just now',
        },
      ]);
    }
  };

  const handleActionLink = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'msg-0',
        sender: 'bot',
        text: "Hi! I'm Sruthy Assist. I can help you understand insurance options, coverage, renewals and claims. How can I help?",
        timestamp: 'Just now',
        quickReplies: INITIAL_QUICK_REPLIES,
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#dfc88e] via-[#d1b164] to-[#c29b41] text-[#0a1426] shadow-[0_10px_35px_rgba(209,177,100,0.45)] border border-amber-300 font-semibold text-xs sm:text-sm uppercase tracking-wider group focus:outline-none"
          aria-label="Open Sruthy Assist AI Chatbot"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#0a1426]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-600 border-2 border-white" />
          </div>
          <span className="hidden sm:inline font-bold">Sruthy Assist</span>
          <span className="sm:hidden font-bold">Assist</span>
        </motion.button>
      </div>

      {/* Floating / Full-screen Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`fixed z-50 bg-[#0a1426] border border-[#d1b164]/40 shadow-2xl flex flex-col overflow-hidden text-white transition-all duration-300 ${
              isFullScreen
                ? 'inset-0 sm:inset-4 rounded-none sm:rounded-3xl'
                : 'bottom-20 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl'
            }`}
          >
            {/* Chatbot Header */}
            <div className="px-5 py-4 bg-[#0f1f38] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#182d4d] to-[#0a1426] border border-[#d1b164]/40 flex items-center justify-center text-[#d1b164] shadow-inner">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-bold text-white tracking-wide leading-none">
                      Sruthy Assist
                    </h3>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-[#d1b164] mt-0.5">Insurance Guidance Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset Conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Reset chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  title={isFullScreen ? 'Minimize window' : 'Full-screen mode'}
                  className="hidden sm:inline-block p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Toggle full-screen chat"
                >
                  {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#d1b164] text-[#0a1426] font-medium rounded-tr-none'
                        : 'bg-[#0f1f38] text-slate-200 border border-slate-800 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>

                    {/* Action link button if bot suggested a section */}
                    {msg.actionLink && (
                      <div className="pt-2">
                        <button
                          onClick={() => handleActionLink(msg.actionLink!.targetId)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#182d4d] text-[#d1b164] hover:bg-[#25406b] border border-[#d1b164]/30 font-semibold text-[11px] transition-colors"
                        >
                          <span>{msg.actionLink.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>

                  {/* Render Quick Replies Chips */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleSend(reply)}
                          className="px-2.5 py-1 rounded-full bg-[#182d4d]/80 hover:bg-[#182d4d] border border-slate-700 hover:border-[#d1b164] text-[11px] text-slate-300 hover:text-white transition-all text-left"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Animated Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 max-w-[120px] rounded-2xl bg-[#0f1f38] border border-slate-800 rounded-tl-none">
                  <div className="w-2 h-2 rounded-full bg-[#d1b164] animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 rounded-full bg-[#d1b164] animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 rounded-full bg-[#d1b164] animate-bounce" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#0f1f38] border-t border-slate-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask Sruthy Assist about coverage, claims..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#0a1426] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#d1b164]"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#dfc88e] to-[#c29b41] text-[#0a1426] disabled:opacity-40 hover:brightness-105 transition-all shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[10px] text-slate-500 text-center mt-1.5">
                Sruthy Assist AI provides guidance. Real policies depend on underwriting.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
