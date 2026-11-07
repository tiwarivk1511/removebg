"use client";

import { useState, useRef, ChangeEvent } from "react";
import JSZip from "jszip";
import { removeBackground } from "@imgly/background-removal";
import {
  UploadCloud,
  FolderArchive,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Trash2,
  Palette,
  Check,
  Zap
} from "lucide-react";

interface BulkFileItem {
  id: string;
  file: File;
  originalUrl: string;
  processedBlobUrl: string | null;
  status: "pending" | "processing" | "completed" | "error";
  progress: number;
}

const SOLID_COLORS = [
  { name: "Transparent PNG", value: "transparent", isChecker: true },
  { name: "Studio White", value: "#ffffff" },
  { name: "Obsidian Black", value: "#0b0f19" },
  { name: "Neon Cyan", value: "#06b6d4" },
  { name: "Royal Blue", value: "#2563eb" },
];

export default function BulkProcessor() {
  const [items, setItems] = useState<BulkFileItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedCount, setProcessedCount] = useState(0);
  const [selectedBg, setSelectedBg] = useState<string>("transparent");
  const [isZipping, setIsZipping] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFilesAdded = (files: FileList | File[]) => {
    const validFiles = Array.from(files)
      .filter((f) => f.type.startsWith("image/") || f.name.match(/\.(png|jpe?g|webp|avif)$/i))
      .slice(0, 500); // Limit up to 500 images

    if (validFiles.length === 0) return;

    const newItems: BulkFileItem[] = validFiles.map((file, idx) => ({
      id: `${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
      file,
      originalUrl: URL.createObjectURL(file),
      processedBlobUrl: null,
      status: "pending",
      progress: 0,
    }));

    setItems((prev) => [...prev, ...newItems].slice(0, 500));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFilesAdded(e.target.files);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      handleFilesAdded(e.dataTransfer.files);
    }
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setItems([]);
    setProcessedCount(0);
    setIsProcessing(false);
  };

  // Ultra-Fast Concurrent Parallel Queue Processor (Concurrency = 3)
  const startBulkProcessing = async () => {
    if (items.length === 0 || isProcessing) return;

    setIsProcessing(true);
    const concurrency = 3;
    let completed = 0;

    const pendingList = items.filter((i) => i.status !== "completed");

    const processItem = async (item: BulkFileItem) => {
      setItems((prev) =>
        prev.map((i) => (i.id === item.id ? { ...i, status: "processing", progress: 20 } : i))
      );

      try {
        // Deep Neural Network AI Segmentation (Exact same engine as ImageProcessor)
        const blob = await removeBackground(item.file, {
          progress: (key: string, current: number, total: number) => {
            if (total > 0) {
              const pct = Math.round((current / total) * 100);
              setItems((prev) =>
                prev.map((i) => (i.id === item.id ? { ...i, progress: pct } : i))
              );
            }
          },
        });

        const resultUrl = URL.createObjectURL(blob);

        setItems((prev) =>
          prev.map((i) =>
            i.id === item.id
              ? { ...i, status: "completed", processedBlobUrl: resultUrl, progress: 100 }
              : i
          )
        );
        completed++;
        setProcessedCount(completed);
      } catch (err) {
        console.error(`Bulk processing error for ${item.file.name}:`, err);
        setItems((prev) =>
          prev.map((i) => (i.id === item.id ? { ...i, status: "error", progress: 0 } : i))
        );
      }
    };

    // Parallel Worker Pool
    const queue = [...pendingList];
    const workers = Array(concurrency)
      .fill(null)
      .map(async () => {
        while (queue.length > 0) {
          const item = queue.shift();
          if (item) {
            await processItem(item);
          }
        }
      });

    await Promise.all(workers);
    setIsProcessing(false);
  };

  // Download All Processed Cutouts at 8K Ultra HD Resolution in a Single ZIP File
  const downloadZip = async () => {
    const completedItems = items.filter((i) => i.status === "completed" && i.processedBlobUrl);
    if (completedItems.length === 0) return;

    setIsZipping(true);
    const zip = new JSZip();
    const folder = zip.folder("removebg-8k-cutouts");

    for (let idx = 0; idx < completedItems.length; idx++) {
      const item = completedItems[idx];
      if (!item.processedBlobUrl) continue;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = item.processedBlobUrl;

      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;

      // 8K Ultra HD Target Scaling (preserving natural aspect ratio)
      const targetWidth = Math.max(7680, img.naturalWidth || 7680);
      const scale = targetWidth / (img.naturalWidth || 1200);
      const targetHeight = Math.round((img.naturalHeight || 800) * scale);

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      if (selectedBg !== "transparent") {
        ctx.fillStyle = selectedBg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL("image/png");
      const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");

      const cleanName = item.file.name.replace(/\.[^/.]+$/, "") + `-8k-cutout-${idx + 1}.png`;
      folder?.file(cleanName, base64Data, { base64: true });
    }

    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = `removebg-bulk-${completedItems.length}-8k-cutouts.zip`;
    link.click();
    setIsZipping(false);
  };

  const totalCount = items.length;
  const completedCount = items.filter((i) => i.status === "completed").length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Upload Zone when empty */}
      {items.length === 0 ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="glass-card bg-white/95 rounded-3xl p-12 border-2 border-dashed border-slate-300 hover:border-cyan-500 text-center cursor-pointer transition-all duration-300 space-y-6 shadow-xl relative group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleInputChange}
            multiple
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
          />

          <div className="w-20 h-20 mx-auto rounded-3xl bg-cyan-50 border-2 border-cyan-200 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <FolderArchive className="w-10 h-10 text-cyan-600" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Batch Process Up To <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">500 Images</span>
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              Drag & drop multiple product photos, portraits, or e-commerce images. Export all 8K Ultra HD cutouts in a single ZIP folder!
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/20 group-hover:from-cyan-600 group-hover:to-blue-700 transition-all">
            <UploadCloud className="w-5 h-5" /> Select Up To 500 Images
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-slate-700">
            <span className="bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
              PNG, JPG, WebP
            </span>
            <span className="bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
              Parallel AI Neural Processing
            </span>
            <span className="bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
              8K Ultra HD ZIP Download
            </span>
          </div>
        </div>
      ) : (
        /* Active Bulk Studio Interface */
        <div className="space-y-6">
          {/* Top Bulk Action Bar */}
          <div className="glass-card bg-white/95 rounded-2xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleInputChange}
                multiple
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing || items.length >= 500}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all disabled:opacity-50"
              >
                <UploadCloud className="w-4 h-4 text-cyan-600" /> Add More ({items.length}/500)
              </button>
              <button
                onClick={clearAll}
                disabled={isProcessing}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all disabled:opacity-50"
              >
                <RotateCcw className="w-4 h-4" /> Clear All
              </button>
            </div>

            {/* Background Output Palette & ZIP Export */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <span className="text-[11px] font-black text-slate-700 px-2 flex items-center gap-1">
                  <Palette className="w-3.5 h-3.5 text-cyan-600" /> Output:
                </span>
                {SOLID_COLORS.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedBg(col.value)}
                    title={col.name}
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                      selectedBg === col.value
                        ? "border-cyan-600 scale-110 shadow-sm"
                        : "border-slate-300"
                    } ${col.isChecker ? "bg-checkerboard" : ""}`}
                    style={{ backgroundColor: !col.isChecker ? col.value : undefined }}
                  >
                    {selectedBg === col.value && (
                      <Check className={`w-3 h-3 ${col.value === "#ffffff" || col.value === "transparent" ? "text-slate-900" : "text-white"}`} />
                    )}
                  </button>
                ))}
              </div>

              {!isProcessing && completedCount < totalCount && (
                <button
                  onClick={startBulkProcessing}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all glow-cyan"
                >
                  <Zap className="w-4 h-4" /> Start AI Bulk Cut ({totalCount - completedCount} Images)
                </button>
              )}

              {completedCount > 0 && (
                <button
                  onClick={downloadZip}
                  disabled={isZipping}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  {isZipping ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <FolderArchive className="w-4 h-4" />
                  )}
                  <span>Download 8K ZIP ({completedCount} PNGs)</span>
                </button>
              )}
            </div>
          </div>

          {/* Bulk Processing Overall Progress Banner */}
          {isProcessing && (
            <div className="glass-card bg-white p-5 rounded-2xl border border-cyan-500/40 space-y-3 shadow-md">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-slate-900 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-cyan-600 animate-spin" /> AI Neural Processing {completedCount} / {totalCount} Images...
                </span>
                <span className="text-cyan-600 font-extrabold">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-200">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Image Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="glass-card bg-white rounded-2xl overflow-hidden border border-slate-200 p-2 space-y-2 relative shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Remove item button */}
                <button
                  onClick={() => removeItem(item.id)}
                  disabled={isProcessing}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/70 hover:bg-rose-600 text-white transition-all z-10 opacity-0 group-hover:opacity-100"
                  title="Remove Image"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                {/* Preview Thumbnail */}
                <div
                  className={`w-full aspect-square rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center relative ${
                    selectedBg === "transparent" ? "bg-checkerboard" : ""
                  }`}
                  style={{ backgroundColor: selectedBg !== "transparent" ? selectedBg : undefined }}
                >
                  <img
                    src={item.processedBlobUrl || item.originalUrl}
                    alt={item.file.name}
                    className="max-h-full w-auto max-w-full object-contain"
                  />

                  {item.status === "processing" && (
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex flex-col items-center justify-center text-white space-y-1 p-2 text-center">
                      <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
                      <span className="text-[10px] font-bold">{item.progress}%</span>
                    </div>
                  )}

                  {item.status === "completed" && (
                    <span className="absolute bottom-1.5 right-1.5 bg-emerald-500 text-white p-1 rounded-md shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  )}

                  {item.status === "error" && (
                    <span className="absolute bottom-1.5 right-1.5 bg-rose-500 text-white p-1 rounded-md shadow-md">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* File info */}
                <div className="space-y-0.5 px-1">
                  <p className="text-[11px] font-extrabold text-slate-900 truncate" title={item.file.name}>
                    {item.file.name}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-600 font-semibold">
                    <span>{(item.file.size / (1024 * 1024)).toFixed(1)}MB</span>
                    <span
                      className={`font-black uppercase ${
                        item.status === "completed"
                          ? "text-emerald-600"
                          : item.status === "processing"
                          ? "text-cyan-600"
                          : item.status === "error"
                          ? "text-rose-600"
                          : "text-slate-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
