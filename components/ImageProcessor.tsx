"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import { removeBackground } from "@imgly/background-removal";
import {
  Download,
  RotateCcw,
  Sliders,
  Check,
  Sparkles,
  Palette,
  ShieldCheck,
  ArrowRightLeft,
  Columns,
  Eraser,
  Paintbrush,
  Undo,
  Redo,
  Layers,
  Image as ImageIcon,
  Cpu,
  Blend
} from "lucide-react";

interface ImageProcessorProps {
  originalUrl: string;
  filename: string;
  rawFile: File | null;
  onReset: () => void;
}

const SOLID_COLORS = [
  { name: "Transparent", value: "transparent", isChecker: true },
  { name: "Studio White", value: "#ffffff" },
  { name: "Obsidian Black", value: "#0b0f19" },
  { name: "Deep Navy", value: "#0a192f" },
  { name: "Neon Cyan", value: "#06b6d4" },
  { name: "Royal Blue", value: "#2563eb" },
  { name: "Sunset Purple", value: "#8b5cf6" },
  { name: "Rose Pink", value: "#ec4899" },
  { name: "Emerald Green", value: "#10b981" },
];

const PRESET_GRADIENTS = [
  { name: "Cyber Cyan", c1: "#06b6d4", c2: "#2563eb", value: "linear-gradient(135deg, #06b6d4, #2563eb)" },
  { name: "Sunset Flame", c1: "#f43f5e", c2: "#fb923c", value: "linear-gradient(135deg, #f43f5e, #fb923c)" },
  { name: "Midnight Neon", c1: "#4c1d95", c2: "#8b5cf6", value: "linear-gradient(135deg, #4c1d95, #8b5cf6)" },
  { name: "Emerald Aura", c1: "#059669", c2: "#10b981", value: "linear-gradient(135deg, #059669, #10b981)" },
  { name: "Cosmic Pink", c1: "#ec4899", c2: "#8b5cf6", value: "linear-gradient(135deg, #ec4899, #8b5cf6)" },
  { name: "Nordic Frost", c1: "#e0e7ff", c2: "#c7d2fe", value: "linear-gradient(135deg, #e0e7ff, #c7d2fe)" },
];

export default function ImageProcessor({
  originalUrl,
  filename,
  rawFile,
  onReset,
}: ImageProcessorProps) {
  const [isProcessing, setIsProcessing] = useState(true);
  const [progress, setProgress] = useState(15);
  const [progressStep, setProgressStep] = useState("Initializing Deep Learning Neural AI Model...");

  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"slider" | "sideBySide" | "touchup">("slider");
  const [sliderPos, setSliderPos] = useState(50);

  const [selectedBg, setSelectedBg] = useState<string>("transparent");
  const [customBgUrl, setCustomBgUrl] = useState<string | null>(null);
  const [customColorHex, setCustomColorHex] = useState<string>("#38bdf8");

  // Custom Dual Color Gradient Generator State
  const [gradientColor1, setGradientColor1] = useState<string>("#06b6d4");
  const [gradientColor2, setGradientColor2] = useState<string>("#3b82f6");

  const [threshold, setThreshold] = useState<number>(30);
  const [edgeSoftness, setEdgeSoftness] = useState<number>(10);
  const [defringe, setDefringe] = useState<boolean>(true);
  const [dropShadow, setDropShadow] = useState<boolean>(false);
  const [shadowBlur, setShadowBlur] = useState<number>(15);
  const [shadowOpacity, setShadowOpacity] = useState<number>(40);

  const [brushMode, setBrushMode] = useState<"eraser" | "restore">("eraser");
  const [brushSize, setBrushSize] = useState<number>(20);
  const [isDrawing, setIsDrawing] = useState(false);
  const [historyStack, setHistoryStack] = useState<ImageData[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const customBgInputRef = useRef<HTMLInputElement>(null);
  const customColorInputRef = useRef<HTMLInputElement>(null);
  const gradInputRef1 = useRef<HTMLInputElement>(null);
  const gradInputRef2 = useRef<HTMLInputElement>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const touchupCanvasRef = useRef<HTMLCanvasElement>(null);
  const originalImageRef = useRef<HTMLImageElement | null>(null);
  const loadedImageRef = useRef<HTMLImageElement | null>(null);
  const isDraggingSlider = useRef(false);
  const initialLoadedRef = useRef(false);

  // Deep Learning Neural AI Background Removal Pipeline
  useEffect(() => {
    let mounted = true;
    initialLoadedRef.current = false;
    setIsProcessing(true);

    const runNeuralAiPipeline = async () => {
      try {
        // Yield to browser UI thread before starting heavy processing
        await new Promise((resolve) => setTimeout(resolve, 80));

        setProgress(20);
        setProgressStep("Loading Deep Neural AI Segmentation Model...");

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = originalUrl;
        originalImageRef.current = img;
        loadedImageRef.current = img;

        await new Promise((resolve) => {
          img.onload = resolve;
        });

        if (!mounted) return;

        let imageInput: Blob | File | string = rawFile || originalUrl;

        // Convert base64 data URIs into pure binary Blob for ONNX WASM engine
        if (typeof imageInput === "string" && imageInput.startsWith("data:")) {
          const res = await fetch(imageInput);
          imageInput = await res.blob();
        }

        setProgress(40);
        setProgressStep("Extracting Subject, Hair & Fine Edges...");
        await new Promise((resolve) => setTimeout(resolve, 50));

        const blob: Blob = await removeBackground(imageInput, {
          progress: (key: string, current: number, total: number) => {
            if (mounted && total > 0) {
              const pct = Math.round((current / total) * 100);
              setProgress(20 + Math.round(pct * 0.75));
              setProgressStep(`AI Processing (${pct}%)...`);
            }
          },
        });

        if (!mounted) return;

        const resultBlobUrl = URL.createObjectURL(blob);
        setProcessedUrl(resultBlobUrl);
        setProgress(100);
        setProgressStep("Complete!");
        initialLoadedRef.current = true;
        setTimeout(() => setIsProcessing(false), 100);
      } catch (err) {
        console.error("AI Neural Background Removal Error:", err);
      }
    };

    runNeuralAiPipeline();

    return () => {
      mounted = false;
    };
  }, [originalUrl, rawFile]);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingSlider.current = true;
    handleSliderMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingSlider.current) {
      handleSliderMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDraggingSlider.current = false;
  };

  const handleCustomBgSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setCustomBgUrl(url);
      setSelectedBg("custom");
    }
  };

  const handleCustomColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    setCustomColorHex(hex);
    setSelectedBg(hex);
  };

  const updateCustomGradient = (c1: string, c2: string) => {
    setGradientColor1(c1);
    setGradientColor2(c2);
    setSelectedBg(`linear-gradient(135deg, ${c1}, ${c2})`);
  };

  useEffect(() => {
    if (viewMode === "touchup" && processedUrl && touchupCanvasRef.current) {
      const canvas = touchupCanvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = processedUrl;

      img.onload = () => {
        canvas.width = img.naturalWidth || 1200;
        canvas.height = img.naturalHeight || 800;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        const initialData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setHistoryStack([initialData]);
        setHistoryIndex(0);
      };
    }
  }, [viewMode, processedUrl]);

  const drawOnTouchupCanvas = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || viewMode !== "touchup" || !touchupCanvasRef.current) return;
    const canvas = touchupCanvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    if (brushMode === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, brushSize * scaleX, 0, Math.PI * 2);
      ctx.fill();
    } else if (brushMode === "restore" && originalImageRef.current) {
      ctx.globalCompositeOperation = "source-over";
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, brushSize * scaleX, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(originalImageRef.current, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
  };

  const handleTouchupMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    drawOnTouchupCanvas(e);
  };

  const handleTouchupMouseUp = () => {
    if (isDrawing && touchupCanvasRef.current) {
      setIsDrawing(false);
      const canvas = touchupCanvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const currentData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const newStack = historyStack.slice(0, historyIndex + 1);
        newStack.push(currentData);
        setHistoryStack(newStack);
        setHistoryIndex(newStack.length - 1);
        setProcessedUrl(canvas.toDataURL("image/png"));
      }
    }
  };

  const handleUndo = () => {
    if (historyIndex > 0 && touchupCanvasRef.current) {
      const prevIdx = historyIndex - 1;
      const canvas = touchupCanvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.putImageData(historyStack[prevIdx], 0, 0);
        setHistoryIndex(prevIdx);
        setProcessedUrl(canvas.toDataURL("image/png"));
      }
    }
  };

  const handleRedo = () => {
    if (historyIndex < historyStack.length - 1 && touchupCanvasRef.current) {
      const nextIdx = historyIndex + 1;
      const canvas = touchupCanvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.putImageData(historyStack[nextIdx], 0, 0);
        setHistoryIndex(nextIdx);
        setProcessedUrl(canvas.toDataURL("image/png"));
      }
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = processedUrl;

    img.onload = () => {
      const targetWidth = Math.max(7680, img.naturalWidth || 7680);
      const scale = targetWidth / (img.naturalWidth || 1200);
      const targetHeight = Math.round((img.naturalHeight || 800) * scale);

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      if (selectedBg !== "transparent") {
        if (selectedBg === "custom" && customBgUrl) {
          const bgImg = new Image();
          bgImg.crossOrigin = "anonymous";
          bgImg.src = customBgUrl;
          bgImg.onload = () => {
            ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
            renderSubjectWithShadow(ctx, img, canvas);
          };
          return;
        } else if (selectedBg.startsWith("linear-gradient")) {
          const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          const hexes = selectedBg.match(/#[0-9a-fA-F]{6}/g);
          if (hexes && hexes.length >= 2) {
            grad.addColorStop(0, hexes[0]);
            grad.addColorStop(1, hexes[1]);
          } else {
            grad.addColorStop(0, gradientColor1);
            grad.addColorStop(1, gradientColor2);
          }
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
          ctx.fillStyle = selectedBg;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }

      renderSubjectWithShadow(ctx, img, canvas);
    };
  };

  const renderSubjectWithShadow = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvas: HTMLCanvasElement
  ) => {
    if (dropShadow) {
      ctx.save();
      ctx.shadowColor = `rgba(0, 0, 0, ${shadowOpacity / 100})`;
      ctx.shadowBlur = shadowBlur * 3;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 24;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    } else {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    triggerDownload(canvas);
  };

  const triggerDownload = (canvas: HTMLCanvasElement) => {
    const link = document.createElement("a");
    const cleanName = filename.replace(/\.[^/.]+$/, "") + "-8k-ultrahd.png";
    link.download = cleanName;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Sleek Pulse Loader Processing View */}
      {isProcessing ? (
        <div className="glass-card bg-white/95 rounded-3xl p-12 border border-slate-200 text-center flex flex-col items-center justify-center space-y-6 min-h-[420px] shadow-xl touch-pan-y">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping opacity-75" />
            <div className="relative w-20 h-20 rounded-full bg-cyan-50 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Cpu className="w-10 h-10 text-cyan-600 animate-spin" style={{ animationDuration: "3s" }} />
            </div>
          </div>

          <div className="space-y-2 max-w-sm">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              AI Deep Neural Network Segmentation
            </h3>
            <p className="text-xs text-cyan-600 font-bold animate-pulse">
              {progressStep}
            </p>
          </div>

          <div className="w-full max-w-md bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
            <div
              className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 h-full rounded-full transition-all duration-300 shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Proprietary AI Deep Neural Network Model v5.0 (HyperLogics Engine)
          </span>
        </div>
      ) : (
        /* Result View & Controls */
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="glass-card bg-white/95 rounded-2xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <button
                onClick={onReset}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-4 h-4 text-cyan-600" /> New Image
              </button>
              <div className="hidden sm:flex items-center text-xs text-slate-600 space-x-2 font-semibold">
                <span>File: <strong className="text-slate-900">{filename}</strong></span>
                <span>•</span>
                <span>Export Target: <strong className="text-cyan-600 font-bold">8K Ultra HD (7680px)</strong></span>
              </div>
            </div>

            {/* View Modes & Export */}
            <div className="flex items-center space-x-3">
              <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center space-x-1">
                <button
                  onClick={() => setViewMode("slider")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === "slider"
                      ? "bg-white text-cyan-600 shadow-md border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" /> Compare
                </button>
                <button
                  onClick={() => setViewMode("sideBySide")}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === "sideBySide"
                      ? "bg-white text-cyan-600 shadow-md border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" /> Side-by-Side
                </button>
                <button
                  onClick={() => setViewMode("touchup")}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === "touchup"
                      ? "bg-white text-cyan-600 shadow-md border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Eraser className="w-3.5 h-3.5" /> Touch-Up Studio
                </button>
              </div>

              <button
                onClick={handleDownload}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all glow-cyan"
              >
                <Download className="w-4 h-4" /> Download 8K Ultra HD
              </button>
            </div>
          </div>

          {/* Interactive Preview Canvas */}
          <div className="glass-card bg-white rounded-3xl overflow-hidden border border-slate-200 p-2 relative shadow-xl">
            {viewMode === "slider" ? (
              /* Slider Comparison Mode */
              <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
                className="relative w-full aspect-auto min-h-[380px] sm:min-h-[500px] max-h-[650px] overflow-hidden rounded-2xl select-none cursor-ew-resize flex items-center justify-center bg-slate-50"
              >
                {/* Result Layer */}
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    selectedBg === "transparent" ? "bg-checkerboard" : ""
                  }`}
                  style={{
                    backgroundColor: selectedBg !== "transparent" && selectedBg !== "custom" && !selectedBg.startsWith("linear-gradient") ? selectedBg : undefined,
                    backgroundImage: selectedBg === "custom" && customBgUrl ? `url(${customBgUrl})` : selectedBg.startsWith("linear-gradient") ? selectedBg : undefined,
                    backgroundSize: selectedBg === "custom" ? "cover" : undefined,
                    backgroundPosition: selectedBg === "custom" ? "center" : undefined,
                  }}
                >
                  {processedUrl && (
                    <img
                      src={processedUrl}
                      alt="Processed 8K Ultra HD Transparent Result"
                      className="max-h-[650px] w-auto max-w-full object-contain"
                      style={{
                        filter: dropShadow ? `drop-shadow(0px 12px ${shadowBlur}px rgba(0,0,0,${shadowOpacity / 100}))` : undefined,
                      }}
                    />
                  )}
                </div>

                {/* Original Layer clipped by slider */}
                <div
                  className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ width: `${sliderRef.current?.getBoundingClientRect().width || 1000}px` }}
                  >
                    <img
                      src={originalUrl}
                      alt="Original Image"
                      className="max-h-[650px] w-auto max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Vertical Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] pointer-events-none flex items-center justify-center z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-cyan-500 text-cyan-600 flex items-center justify-center shadow-lg text-xs font-extrabold">
                    <ArrowRightLeft className="w-4 h-4" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-700 shadow-md z-10 pointer-events-none">
                  Original Photo
                </span>
                <span className="absolute top-3 right-3 bg-cyan-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-lg border border-cyan-400 shadow-md z-10 pointer-events-none">
                  8K AI Cutout Result
                </span>
              </div>
            ) : viewMode === "sideBySide" ? (
              /* Side-by-Side Mode */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-extrabold text-slate-800 flex items-center gap-1">
                      <ImageIcon className="w-3.5 h-3.5 text-cyan-600" /> Original
                    </span>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 min-h-[350px] flex items-center justify-center">
                    <img src={originalUrl} alt="Original" className="max-h-[450px] w-auto object-contain" />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-extrabold text-cyan-600 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> 8K Ultra HD Cutout
                    </span>
                  </div>
                  <div
                    className={`rounded-2xl overflow-hidden border border-cyan-500/40 min-h-[350px] flex items-center justify-center ${
                      selectedBg === "transparent" ? "bg-checkerboard" : ""
                    }`}
                    style={{
                      backgroundColor: selectedBg !== "transparent" && selectedBg !== "custom" && !selectedBg.startsWith("linear-gradient") ? selectedBg : undefined,
                      backgroundImage: selectedBg === "custom" && customBgUrl ? `url(${customBgUrl})` : selectedBg.startsWith("linear-gradient") ? selectedBg : undefined,
                      backgroundSize: selectedBg === "custom" ? "cover" : undefined,
                      backgroundPosition: selectedBg === "custom" ? "center" : undefined,
                    }}
                  >
                    {processedUrl && (
                      <img
                        src={processedUrl}
                        alt="Processed Result"
                        className="max-h-[450px] w-auto object-contain"
                        style={{
                          filter: dropShadow ? `drop-shadow(0px 12px ${shadowBlur}px rgba(0,0,0,${shadowOpacity / 100}))` : undefined,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Touch-Up Studio Mode */
              <div className="space-y-3 p-2">
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100 rounded-2xl border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setBrushMode("eraser")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        brushMode === "eraser"
                          ? "bg-cyan-600 text-white shadow-md"
                          : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200"
                      }`}
                    >
                      <Eraser className="w-3.5 h-3.5" /> Magic Eraser
                    </button>
                    <button
                      onClick={() => setBrushMode("restore")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        brushMode === "restore"
                          ? "bg-cyan-600 text-white shadow-md"
                          : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200"
                      }`}
                    >
                      <Paintbrush className="w-3.5 h-3.5" /> Restore Subject
                    </button>
                  </div>

                  <div className="flex items-center space-x-3 text-xs font-bold text-slate-700">
                    <span>Brush Size: <strong className="text-cyan-600">{brushSize}px</strong></span>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      value={brushSize}
                      onChange={(e) => setBrushSize(Number(e.target.value))}
                      className="w-28 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleUndo}
                      disabled={historyIndex <= 0}
                      className="p-2 rounded-xl bg-white hover:bg-slate-200 disabled:opacity-40 text-slate-700 border border-slate-200 shadow-sm"
                      title="Undo"
                    >
                      <Undo className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleRedo}
                      disabled={historyIndex >= historyStack.length - 1}
                      className="p-2 rounded-xl bg-white hover:bg-slate-200 disabled:opacity-40 text-slate-700 border border-slate-200 shadow-sm"
                      title="Redo"
                    >
                      <Redo className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="relative w-full min-h-[450px] max-h-[600px] flex items-center justify-center bg-checkerboard rounded-2xl overflow-hidden cursor-crosshair">
                  <canvas
                    ref={touchupCanvasRef}
                    onMouseDown={handleTouchupMouseDown}
                    onMouseMove={drawOnTouchupCanvas}
                    onMouseUp={handleTouchupMouseUp}
                    className="max-h-[600px] w-auto max-w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Background Replacement & Quality Studio Palette */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card bg-white/95 rounded-2xl p-4 border border-slate-200 space-y-3 shadow-md md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-cyan-600" /> Background Replacer (Solids, Gradients & Photos)
                </span>
              </div>

              {/* Solid Colors & Custom Color */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-600">Solid Colors & Custom</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {SOLID_COLORS.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedBg(col.value)}
                      title={col.name}
                      className={`relative w-7 h-7 rounded-lg border-2 transition-all flex items-center justify-center ${
                        selectedBg === col.value
                          ? "border-cyan-600 scale-110 shadow-md shadow-cyan-500/30"
                          : "border-slate-300 hover:border-slate-400"
                      } ${col.isChecker ? "bg-checkerboard" : ""}`}
                      style={{ backgroundColor: !col.isChecker ? col.value : undefined }}
                    >
                      {selectedBg === col.value && (
                        <Check
                          className={`w-3.5 h-3.5 ${
                            col.value === "#ffffff" || col.value === "transparent" ? "text-slate-900" : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}

                  {/* Custom Solid Color Picker */}
                  <div className="relative flex items-center">
                    <input
                      type="color"
                      ref={customColorInputRef}
                      value={customColorHex}
                      onChange={handleCustomColorChange}
                      className="sr-only"
                    />
                    <button
                      onClick={() => customColorInputRef.current?.click()}
                      title="Custom Solid Color"
                      className={`px-2.5 py-1 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all ${
                        selectedBg === customColorHex
                          ? "border-cyan-600 bg-cyan-50 text-cyan-700 shadow-sm"
                          : "border-slate-200 hover:border-cyan-500 text-slate-700 bg-white"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 inline-block shrink-0"
                        style={{ backgroundColor: customColorHex }}
                      />
                      <span>Solid Color</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Preset Gradients */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-600">Studio Gradients</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {PRESET_GRADIENTS.map((grad) => (
                    <button
                      key={grad.name}
                      onClick={() => setSelectedBg(grad.value)}
                      title={grad.name}
                      className={`relative w-7 h-7 rounded-lg border-2 transition-all flex items-center justify-center ${
                        selectedBg === grad.value
                          ? "border-cyan-600 scale-110 shadow-md shadow-cyan-500/30"
                          : "border-slate-300 hover:border-slate-400"
                      }`}
                      style={{ backgroundImage: grad.value }}
                    >
                      {selectedBg === grad.value && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Dual Gradient Generator & Photo Backdrop */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                {/* Custom Gradient Controls */}
                <div className="flex items-center space-x-2 bg-slate-50 px-2 py-1 rounded-xl border border-slate-200">
                  <span className="text-xs font-black text-slate-700 flex items-center gap-1">
                    <Blend className="w-3.5 h-3.5 text-cyan-600" /> Custom Gradient:
                  </span>
                  <input
                    type="color"
                    ref={gradInputRef1}
                    value={gradientColor1}
                    onChange={(e) => updateCustomGradient(e.target.value, gradientColor2)}
                    className="w-6 h-6 rounded-md border-0 cursor-pointer p-0 bg-transparent shadow-xs"
                    title="Gradient Color 1"
                  />
                  <span className="text-xs font-bold text-slate-400">→</span>
                  <input
                    type="color"
                    ref={gradInputRef2}
                    value={gradientColor2}
                    onChange={(e) => updateCustomGradient(gradientColor1, e.target.value)}
                    className="w-6 h-6 rounded-md border-0 cursor-pointer p-0 bg-transparent shadow-xs"
                    title="Gradient Color 2"
                  />
                </div>

                {/* Custom Photo Upload */}
                <input
                  type="file"
                  ref={customBgInputRef}
                  onChange={handleCustomBgSelect}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => customBgInputRef.current?.click()}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all ${
                    selectedBg === "custom"
                      ? "border-cyan-600 bg-cyan-50 text-cyan-700 shadow-sm"
                      : "border-slate-200 hover:border-cyan-500 text-slate-700 bg-white"
                  }`}
                >
                  <ImageIcon className="w-4 h-4 text-cyan-600" /> Custom Photo Backdrop
                </button>
              </div>
            </div>

            <div className="glass-card bg-white/95 rounded-2xl p-4 border border-slate-200 space-y-3 shadow-md md:col-span-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-600" /> Subject Drop Shadow
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dropShadow}
                    onChange={(e) => setDropShadow(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-600"></div>
                </label>
              </div>

              {dropShadow && (
                <div className="space-y-2 text-xs font-bold text-slate-700 pt-1">
                  <div className="flex items-center justify-between">
                    <span>Shadow Blur: {shadowBlur}px</span>
                    <span>Opacity: {shadowOpacity}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={shadowBlur}
                    onChange={(e) => setShadowBlur(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
