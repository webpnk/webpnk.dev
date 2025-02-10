import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
    src: string;
    className?: string;
}

export default function LazyVideo({ src, className }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (videoRef.current) {
                            void videoRef.current.play();
                        }
                    }
                });
            },
            { threshold: 0.1 },
        );

        const handleTimeUpdate = () => {
            if (videoRef.current && progressRef.current) {
                const progress =
                    (videoRef.current.currentTime / videoRef.current.duration) *
                    100;
                progressRef.current.style.width = `${progress}%`;
            }
        };

        if (videoRef.current) {
            observer.observe(videoRef.current);
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            observer.disconnect();
            if (videoRef.current) {
                videoRef.current.removeEventListener(
                    'timeupdate',
                    handleTimeUpdate,
                );
            }
        };
    }, []);

    return (
        <div className="relative overflow-hidden rounded-2xl border-b-2 border-b-gray-400 pt-2 shadow-md">
            <div className="absolute left-0 top-0 z-10 h-2 w-full bg-gray-200/20">
                <div
                    ref={progressRef}
                    className="bg-neon-carrot h-full transition-all duration-300"
                />
            </div>
            <video
                ref={videoRef}
                className={className}
                muted
                loop
                playsInline
                preload="none"
            >
                {isVisible && <source src={src} type="video/mp4" />}
            </video>
        </div>
    );
}
