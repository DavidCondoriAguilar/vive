import React, { useState, useRef } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const VideoShowcase = ({ 
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1920",
  title = "Conoce Nuestra Fábrica"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 gradient-variant-3 grid-variant-3 relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el proceso de fabricación de nuestros colchones de alta calidad
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black glass-grid">
          <div className="relative aspect-video">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={thumbnail}
              muted={isMuted}
              playsInline
              onEnded={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                onClick={handlePlay}
              >
                <div className="w-20 h-20 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl">
                  <FaPlay className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {/* Mute/Unmute Button */}
              <button
                onClick={handleMute}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
                aria-label={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? (
                  <FaVolumeMute className="w-5 h-5" />
                ) : (
                  <FaVolumeUp className="w-5 h-5" />
                )}
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={handlePlay}
                className="w-10 h-10 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <FaPlay className="w-4 h-4 ml-0.5" />
                )}
              </button>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-4 left-4 right-20">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-bold text-lg mb-1">
                  Proceso de Fabricación
                </h3>
                <p className="text-gray-200 text-sm">
                  3:45 min • HD • Producción 100% peruana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPlay className="w-8 h-8 text-gold-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Video HD</h3>
            <p className="text-gray-600 text-sm">
              Calidad cinematográfica para apreciar cada detalle
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Proceso Completo</h3>
            <p className="text-gray-600 text-sm">
              Desde la materia prima hasta el producto final
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Calidad Garantizada</h3>
            <p className="text-gray-600 text-sm">
              Cada etapa supervisada por expertos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
