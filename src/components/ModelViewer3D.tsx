import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, Compass, Camera, Upload, AlertCircle, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/su57_hero_cinematic_1791537846023.jpg';

interface ModelViewer3DProps {
  onInteract?: () => void;
}

export const ModelViewer3D: React.FC<ModelViewer3DProps> = ({ onInteract }) => {
  const [modelUrl, setModelUrl] = useState<string>('su57.glb');
  const [viewMode, setViewMode] = useState<'model' | 'cinematic'>('model');
  const [modelError, setModelError] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<string>('default');
  const [userUploadedName, setUserUploadedName] = useState<string | null>(null);
  const modelViewerRef = useRef<HTMLElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = modelViewerRef.current;
    if (!el) return;

    const handleError = () => {
      // Model file not found on disk yet (normal before user adds su57.glb)
      setModelError(true);
    };

    const handleLoad = () => {
      setModelError(false);
    };

    el.addEventListener('error', handleError);
    el.addEventListener('load', handleLoad);

    return () => {
      el.removeEventListener('error', handleError);
      el.removeEventListener('load', handleLoad);
    };
  }, [modelUrl]);

  const handleCameraPreset = (preset: string, orbit: string) => {
    setActivePreset(preset);
    const viewer = modelViewerRef.current as any;
    if (viewer) {
      viewer.cameraOrbit = orbit;
    }
  };

  const handleCustomFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setModelUrl(url);
      setUserUploadedName(file.name);
      setModelError(false);
      setViewMode('model');
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-[#0c1017] shadow-2xl">
      {/* Top Telemetry / Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 bg-[#090d14]/90 px-4 py-2.5 text-xs">
        <div className="flex items-center gap-3 font-mono text-slate-400">
          <span className="text-red-400 font-semibold tracking-wider uppercase">3D TACTICAL VIEWPORT</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-300">SU-57 AIRFRAME</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-400">WebGL 2.0</span>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex items-center rounded-md border border-slate-800 bg-slate-900/80 p-0.5">
            <button
              onClick={() => setViewMode('model')}
              className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
                viewMode === 'model'
                  ? 'bg-red-600/90 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Mô hình 3D (.glb)
            </button>
            <button
              onClick={() => setViewMode('cinematic')}
              className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
                viewMode === 'cinematic'
                  ? 'bg-red-600/90 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Hangar 8K Studio
            </button>
          </div>

          {/* User File Uploader */}
          <input
            type="file"
            ref={fileInputRef}
            accept=".glb,.gltf"
            onChange={handleCustomFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Tải lên file 3D Su-57 .glb của bạn"
            className="flex items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            <Upload className="h-3 w-3 text-red-400" />
            <span className="hidden sm:inline">Nạp file GLB</span>
          </button>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div className="relative h-[480px] sm:h-[540px] lg:h-[600px] w-full bg-tactical-grid bg-[#0a0d14] flex items-center justify-center">
        {/* Radar concentric circular markings in background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25">
          <div className="h-[420px] w-[420px] rounded-full border border-dashed border-red-500/20 animate-[spin_120s_linear_infinite]" />
          <div className="absolute h-[280px] w-[280px] rounded-full border border-slate-700/40" />
          <div className="absolute h-[140px] w-[140px] rounded-full border border-slate-700/30" />
          <div className="absolute h-full w-[1px] bg-slate-800/60" />
          <div className="absolute w-full h-[1px] bg-slate-800/60" />
        </div>

        {viewMode === 'model' ? (
          <>
            {/* The primary <model-viewer> HTML component requested */}
            <model-viewer
              ref={modelViewerRef as any}
              id="su57-viewer"
              src={modelUrl}
              alt="Sukhoi Su-57 Felon 3D Model"
              poster={heroImage}
              auto-rotate
              camera-controls
              shadow-intensity="1.5"
              shadow-softness="0.8"
              exposure="1.0"
              camera-orbit="45deg 75deg 105%"
              field-of-view="30deg"
              interaction-prompt="auto"
              onPointerDown={onInteract}
              style={{ width: '100%', height: '100%' }}
            >
              {/* Optional slot for loading state */}
              <div slot="poster" className="w-full h-full relative">
                <img
                  src={heroImage}
                  alt="Su-57 Felon Preview"
                  className="w-full h-full object-cover opacity-85"
                  referrerPolicy="no-referrer"
                />
              </div>
            </model-viewer>

            {/* In case su57.glb has not been placed in the public folder yet */}
            {modelError && (
              <div className="absolute bottom-16 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md rounded-lg border border-red-900/60 bg-[#0e121a]/95 p-3.5 shadow-xl backdrop-blur-md">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-200">
                      Mã thẻ model-viewer đã sẵn sàng
                    </p>
                    <p className="mt-1 text-slate-400 leading-relaxed">
                      Để hiển thị file 3D riêng, bạn có thể bấm nút <strong className="text-slate-200 font-medium">"Nạp file GLB"</strong> ở góc phải trên, hoặc đặt file vào thư mục <code className="text-red-300 font-mono">public/su57.glb</code>.
                    </p>
                    <button
                      onClick={() => setViewMode('cinematic')}
                      className="mt-2 text-[11px] font-medium text-red-400 hover:text-red-300 underline"
                    >
                      Chuyển sang góc nhìn Studio Hangar &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Cinematic 8K Hangar Studio View */
          <div className="relative w-full h-full">
            <img
              src={heroImage}
              alt="Sukhoi Su-57 Felon Studio Shot"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-black/40 pointer-events-none" />
            <div className="absolute top-4 left-4 rounded bg-black/60 px-2.5 py-1 text-[11px] font-mono text-slate-300 backdrop-blur-xs border border-white/10">
              STUDIO CAPTURE // TITANIUM RAM COATING
            </div>
          </div>
        )}

        {/* 360 Rotation Guidance Badge */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-md border border-slate-800 bg-[#090d14]/90 px-3 py-1.5 text-[11px] text-slate-300 backdrop-blur-xs font-mono">
          <RotateCcw className="h-3.5 w-3.5 text-red-500 animate-[spin_6s_linear_infinite]" />
          <span>Kéo chuột xoay 360° · Cuộn để phóng to</span>
          {userUploadedName && (
            <span className="text-red-400">({userUploadedName})</span>
          )}
        </div>

        {/* Quick Camera Preset Buttons */}
        <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-800/90 bg-[#090d14]/90 p-1 backdrop-blur-xs">
          <button
            onClick={() => handleCameraPreset('front', '45deg 75deg 105%')}
            className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
              activePreset === 'front' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Mũi 45°
          </button>
          <button
            onClick={() => handleCameraPreset('top', '0deg 10deg 110%')}
            className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
              activePreset === 'top' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Mặt trên
          </button>
          <button
            onClick={() => handleCameraPreset('side', '90deg 85deg 115%')}
            className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
              activePreset === 'side' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Mạn sườn
          </button>
          <button
            onClick={() => handleCameraPreset('rear', '180deg 80deg 110%')}
            className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
              activePreset === 'rear' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Ống xả 3D
          </button>
        </div>
      </div>

      {/* Code snippet disclosure for developer / user */}
      <div className="border-t border-slate-800 bg-[#07090e] px-4 py-2 text-[11px] font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-slate-400">
          <Sparkles className="h-3 w-3 text-red-500" />
          <span>Thẻ nhúng 3D HTML:</span>
          <code className="text-red-300 bg-red-950/30 px-1.5 py-0.5 rounded border border-red-900/40">
            &lt;model-viewer src="su57.glb" auto-rotate camera-controls&gt;&lt;/model-viewer&gt;
          </code>
        </span>
        <span className="text-slate-400">Độ trễ phản hồi: &lt;16ms</span>
      </div>
    </div>
  );
};
