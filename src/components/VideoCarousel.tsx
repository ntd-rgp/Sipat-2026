import { useRef, useState } from 'react';

interface VideoItem {
    src: string;
    label: string;
}

interface VideoCarouselProps {
    videos: VideoItem[];
}

function VideoCarousel({ videos }: VideoCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    function goTo(index: number) {
        if (index === current) return;
        // Pausa o vídeo atual
        const cur = videoRefs.current[current];
        if (cur) {
            cur.pause();
            cur.currentTime = 0;
        }
        setIsPlaying(false);
        setCurrent(index);
    }

    function prev() {
        goTo(current === 0 ? videos.length - 1 : current - 1);
    }

    function next() {
        goTo(current === videos.length - 1 ? 0 : current + 1);
    }

    function handlePlay() {
        const video = videoRefs.current[current];
        if (!video) return;
        if (video.paused) {
            video.play().catch(() => {});
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }

    function handleEnded() {
        setIsPlaying(false);
        const nextIdx = current === videos.length - 1 ? 0 : current + 1;
        goTo(nextIdx);
    }

    return (
        <div className="relative w-full select-none overflow-hidden rounded-2xl shadow-[2px_5px_12px_rgba(0,0,0,0.55)] bg-black">
            {/* Track que desliza */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {videos.map((video, i) => (
                    <div key={i} className="w-full shrink-0">
                        <video
                            ref={el => { videoRefs.current[i] = el; }}
                            src={video.src}
                            playsInline
                            preload="metadata"
                            onPlay={() => { if (i === current) setIsPlaying(true); }}
                            onPause={() => { if (i === current) setIsPlaying(false); }}
                            onEnded={() => { if (i === current) handleEnded(); }}
                            className="w-full block"
                        />
                    </div>
                ))}
            </div>

            {/* Botão de play centralizado */}
            {!isPlaying && (
                <button
                    onClick={handlePlay}
                    aria-label="Reproduzir vídeo"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                    <div className="bg-[#d10c56] rounded-full w-[48px] h-[48px] md:w-[80px] md:h-[80px] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] ml-[2px] md:ml-[4px]"
                        >
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                </button>
            )}

            {/* Overlay para pausar quando tocando */}
            {isPlaying && (
                <button
                    onClick={handlePlay}
                    aria-label="Pausar vídeo"
                    className="absolute inset-0 cursor-pointer"
                />
            )}

            {/* Seta esquerda */}
            <button
                onClick={prev}
                aria-label="Vídeo anterior"
                className="absolute left-[8px] md:left-[16px] top-1/2 -translate-y-1/2 z-10 bg-black/15 hover:bg-black/30 text-white rounded-full w-[30px] h-[30px] md:w-[46px] md:h-[46px] flex items-center justify-center text-[18px] md:text-[26px] cursor-pointer transition-colors"
            >
                ‹
            </button>

            {/* Seta direita */}
            <button
                onClick={next}
                aria-label="Próximo vídeo"
                className="absolute right-[8px] md:right-[16px] top-1/2 -translate-y-1/2 z-10 bg-black/15 hover:bg-black/30 text-white rounded-full w-[30px] h-[30px] md:w-[46px] md:h-[46px] flex items-center justify-center text-[18px] md:text-[26px] cursor-pointer transition-colors"
            >
                ›
            </button>

            {/* Indicadores (dots) */}
            <div className="absolute bottom-[10px] md:bottom-[16px] left-1/2 -translate-x-1/2 flex gap-[6px]">
                {videos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Ir para vídeo ${i + 1}`}
                        className={`rounded-full transition-colors cursor-pointer ${
                            i === current
                                ? 'bg-[#d10c56] w-[10px] h-[10px] md:w-[14px] md:h-[14px]'
                                : 'bg-white/60 hover:bg-white w-[8px] h-[8px] md:w-[12px] md:h-[12px]'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default VideoCarousel;
