"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export default function PreviewModal({ isOpen, onClose, url, title }: PreviewModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full h-full max-w-6xl glass rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm font-medium text-foreground/70 hidden sm:inline-block">
                  {title} — Live Preview
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-foreground/70 group"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-all text-foreground/70"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 bg-white relative">
              <iframe
                src={url}
                className="w-full h-full border-none"
                title={`Live preview of ${title}`}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
