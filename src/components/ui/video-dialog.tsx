"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Play } from "lucide-react";


interface VideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VideoDialog({ open, onOpenChange }: VideoDialogProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10">
        <DialogHeader className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Play className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <DialogTitle className="text-lg font-semibold text-white">
                Demonstração HocketZap
              </DialogTitle>
              <p className="text-sm text-white/60">
                Veja como é fácil automatizar seu WhatsApp
              </p>
            </div>
          </div>
          <button 
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5 text-white/70 hover:text-white" />
            <span className="sr-only">Fechar</span>
          </button>
        </DialogHeader>

        <div className="relative w-full aspect-video">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="w-12 h-12 border-4 border-white/20 border-t-emerald-500 rounded-full animate-spin" />
            </div>
          )}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cEPvVBy6sqA?si=iACXOFAWJLm-SfWw"
            title="HocketZap Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}