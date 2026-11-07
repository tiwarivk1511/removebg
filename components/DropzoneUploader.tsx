"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, Image as ImageIcon, Sparkles, FileImage, ShieldCheck, Zap, Lock } from "lucide-react";

interface DropzoneUploaderProps {
  onImageSelected: (file: File | null, previewUrl: string, name: string) => void;
}

const SAMPLE_IMAGES = [
  {
    id: "sample-1",
    label: "Person Portrait",
    category: "Portrait",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "sample-2",
    label: "Sneaker Product",
    category: "Product",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "sample-3",
    label: "Cute Pet",
    category: "Animals",
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop",
  },
];

export default function DropzoneUploader({ onImageSelected }: DropzoneUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndProcessFile = (file: File) => {
    setErrorMsg(null);
    const validTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

    if (!validTypes.includes(file.type)) {
      setErrorMsg("Unsupported file format. Please upload PNG, JPG, JPEG, or WebP.");
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setErrorMsg("File size exceeds 15MB. Please choose a smaller image.");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    onImageSelected(file, objectUrl, file.name);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndProcessFile(file);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateAndProcessFile(file);
    }
  };

  const handleSampleClick = (sample: typeof SAMPLE_IMAGES[0]) => {
    setErrorMsg(null);
    onImageSelected(null, sample.url, `${sample.label}.jpg`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 px-1 xs:px-2">
      {/* Main Interactive Dropzone Box */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative group cursor-pointer rounded-3xl transition-all duration-300 p-5 xs:p-8 sm:p-12 text-center border-2 border-dashed ${
          isDragging
            ? "border-cyan-500 bg-sky-100/50 scale-[1.01] glow-cyan"
            : "border-cyan-400/80 hover:border-cyan-600 glass-card bg-white/95"
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg, image/webp"
          className="hidden"
        />

        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-5">
          {/* Animated Icon Ring */}
          <div className="relative flex items-center justify-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-cyan-50 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/10">
              <Upload className="w-7 h-7 sm:w-10 sm:h-10 text-cyan-600 group-hover:animate-bounce" />
            </div>
          </div>

          {/* Heading and Action Details */}
          <div className="space-y-1 sm:space-y-2 max-w-md">
            <h3 className="text-lg xs:text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Drag & Drop your image
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              or <span className="text-cyan-600 font-extrabold underline underline-offset-4 group-hover:text-cyan-700">browse file</span> from your device
            </p>
          </div>

          {/* Main Upload Button */}
          <button
            type="button"
            className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all duration-300 group-hover:scale-105"
          >
            <Sparkles className="w-4 h-4 fill-current shrink-0" />
            <span>Upload Image</span>
          </button>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 pt-2 text-[11px] sm:text-xs text-slate-700 font-bold">
            <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1 shadow-sm">
              <FileImage className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 shrink-0" /> PNG, JPG, WebP
            </span>
            <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1 shadow-sm">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 shrink-0" /> Max 15MB
            </span>
            <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1 shadow-sm">
              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" /> Real-Time Non-Storage
            </span>
          </div>

          {errorMsg && (
            <div className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-black">
              {errorMsg}
            </div>
          )}
        </div>
      </div>

      {/* Preset Sample Images Grid */}
      <div className="glass-card bg-white/95 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-1">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-cyan-600" /> No image? Try one of these samples:
          </span>
          <span className="text-xs font-semibold text-slate-500">Click to process instantly</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {SAMPLE_IMAGES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSampleClick(sample)}
              className="group relative rounded-xl overflow-hidden border border-slate-200 hover:border-cyan-500 transition-all duration-300 text-left bg-slate-100 aspect-video flex items-center justify-center shadow-md hover:shadow-cyan-500/20"
            >
              <img
                src={sample.url}
                alt={sample.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-xs font-extrabold text-white group-hover:text-cyan-200 truncate">
                  {sample.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
