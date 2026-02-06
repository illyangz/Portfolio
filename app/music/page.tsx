"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Navigation } from "@/components/navigation";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import WaveSurfer from "wavesurfer.js";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";

// Theme colors for waveform
const themeColors = {
  dark: {
    waveColor: "rgba(161, 161, 170, 0.4)",
    progressColor: "rgb(34, 197, 94)",
    cursorColor: "rgb(134, 239, 172)",
    hoverColor: "rgba(134, 239, 172, 0.5)",
  },
  light: {
    waveColor: "rgba(161, 161, 170, 0.5)",
    progressColor: "rgb(249, 115, 22)",
    cursorColor: "rgb(253, 186, 116)",
    hoverColor: "rgba(253, 186, 116, 0.5)",
  },
};

interface Track {
  title: string;
  subtitle: string;
  src: string;
  link?: string;
  date?: string;
}

const tracks: Track[] = [
  {
    title: "Boogie Disco Groove",
    subtitle: "Click here for SoundCloud playlist",
    src: "https://pub-891f5cba39a945e29e40db2d945c2147.r2.dev/Industrial%20Boogie%20Disco%20Groove.mp3",
    date: "2026-01-20",
    link: "https://soundcloud.com/yangzog/sets/sajjjil-v2?si=20b10ec890fb49089578f8bd402441d7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "Aghani",
    subtitle: "Click here to listen on SoundCloud",
    src: "https://pub-891f5cba39a945e29e40db2d945c2147.r2.dev/Aghani.mp3",
    link: "https://soundcloud.com/yangzog/aghani",
    date: "2025-11-15",
  },
];

interface AudioPlayerProps {
  track: Track;
  theme: "light" | "dark";
  index: number;
  currentlyPlayingId: string | null;
  onPlay: (id: string) => void;
}

function AudioPlayer({
  track,
  theme,
  index,
  currentlyPlayingId,
  onPlay,
}: AudioPlayerProps) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const themeRef = useRef(theme);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [hoverTime, setHoverTime] = useState<number | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleWaveformHover = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!waveformRef.current || !duration) return;
      const rect = waveformRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const time = percentage * duration;
      setHoverTime(time);
    },
    [duration],
  );

  const handleWaveformLeave = useCallback(() => {
    setHoverTime(null);
  }, []);

  // Keep themeRef in sync
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  // Update waveform colors when theme changes
  useEffect(() => {
    if (wavesurferRef.current) {
      const colors = themeColors[theme];
      wavesurferRef.current.setOptions({
        waveColor: colors.waveColor,
        progressColor: colors.progressColor,
        cursorColor: colors.cursorColor,
      });
    }
  }, [theme]);

  useEffect(() => {
    if (!waveformRef.current) return;

    const colors = themeColors[theme];
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: colors.waveColor,
      progressColor: colors.progressColor,
      cursorColor: colors.cursorColor,
      cursorWidth: 2,
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      height: 80,
      normalize: true,
      dragToSeek: true,
      plugins: [
        Hover.create({
          lineColor: "rgba(255, 255, 255, 0.5)",
          lineWidth: 2,
          labelSize: 0,
        }),
      ],
    });

    // Store ref immediately so theme updates can access it
    wavesurferRef.current = wavesurfer;

    // Load with error handling for abort during unmount
    wavesurfer.load(track.src).catch(() => {
      // Ignore AbortError when component unmounts during load
    });

    wavesurfer.on("ready", () => {
      setDuration(wavesurfer.getDuration());
      setIsLoading(false);
      wavesurfer.setVolume(volume);
      // Re-apply colors after ready using ref to get latest theme
      const currentColors = themeColors[themeRef.current];
      wavesurfer.setOptions({
        waveColor: currentColors.waveColor,
        progressColor: currentColors.progressColor,
        cursorColor: currentColors.cursorColor,
      });
    });

    wavesurfer.on("audioprocess", () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    wavesurfer.on("seeking", () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    wavesurfer.on("play", () => {
      setIsPlaying(true);
      onPlay(track.src);
    });
    wavesurfer.on("pause", () => setIsPlaying(false));
    wavesurfer.on("finish", () => setIsPlaying(false));

    return () => {
      wavesurferRef.current = null;
      try {
        wavesurfer.unAll();
        wavesurfer.stop();
        wavesurfer.destroy();
      } catch {
        // Ignore errors during cleanup
      }
    };
  }, [track.src, onPlay]);

  // Pause this track if another track starts playing
  useEffect(() => {
    if (
      currentlyPlayingId &&
      currentlyPlayingId !== track.src &&
      wavesurferRef.current
    ) {
      wavesurferRef.current.pause();
    }
  }, [currentlyPlayingId, track.src]);

  const togglePlayPause = useCallback(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (wavesurferRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      wavesurferRef.current.setVolume(newMuted ? 0 : volume);
    }
  }, [isMuted, volume]);

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (wavesurferRef.current && !isMuted) {
        wavesurferRef.current.setVolume(newVolume);
      }
    },
    [isMuted],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="border border-border rounded-lg p-6 bg-card"
    >
      <div className="mb-6 relative">
        <h2 className="text-md font-medium pt-6">{track.title}</h2>
        <div className="absolute top-0 right-0">
          <p className="text-xs text-muted-foreground">{track.date}</p>
        </div>

        {track.link ? (
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {track.subtitle}
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">{track.subtitle}</p>
        )}
      </div>

      {/* Waveform */}
      <div
        className="relative mb-4"
        onMouseMove={handleWaveformHover}
        onMouseLeave={handleWaveformLeave}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-4 h-4 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
              Loading waveform...
            </div>
          </div>
        )}
        <div ref={waveformRef} className="w-full cursor-pointer" />

        {/* Hover preview overlay */}
        {hoverTime !== null && !isLoading && duration > 0 && (
          <div
            className="absolute top-0 h-20 pointer-events-none dark:bg-green-400/30 bg-orange-400/30"
            style={{
              left:
                hoverTime > currentTime
                  ? `${(currentTime / duration) * 100}%`
                  : `${(hoverTime / duration) * 100}%`,
              width: `${Math.abs((hoverTime - currentTime) / duration) * 100}%`,
            }}
          />
        )}

        {/* Time indicators */}
        {!isLoading && (
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none text-xs">
            <div className="absolute bottom-1 left-0">
              <span className="dark:bg-green-500 bg-orange-500 text-white px-1.5 py-0.5 rounded text-[10px] font-medium tabular-nums">
                {formatTime(currentTime)}
              </span>
            </div>
            <div className="absolute bottom-1 right-0">
              <span className="bg-muted text-muted-foreground px-1.5 py-0.5 rounded text-[10px] font-medium tabular-nums">
                -{formatTime(duration - currentTime)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayPause}
          disabled={isLoading}
          className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-green-500 bg-orange-500 text-white hover:opacity-90 transition-colors disabled:opacity-50 hover:cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </motion.button>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          <div className="relative w-20 h-4 flex items-center group">
            <div className="absolute w-full h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full dark:bg-green-500 bg-orange-500 transition-all duration-150 ease-out"
                style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="absolute w-full h-4 appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:scale-125 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-foreground [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:hover:scale-125"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Helper to get current theme from DOM
function getThemeFromDOM(): "light" | "dark" {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }
  return "dark";
}

export default function MusicPage() {
  const [theme, setTheme] = useState<"light" | "dark">(getThemeFromDOM);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(
    null,
  );

  // Listen for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setTheme(getThemeFromDOM());
    };

    // Check immediately in case SSR had wrong value
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-3xl mx-auto px-5 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-2xl font-medium mb-2">music</h1>
          <p className="text-muted-foreground">
            DJ sets and mixes I&apos;ve recorded since my soundcloud account has
            been locked. Enjoy the grooves! 🕺🏻
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {tracks.map((track, index) => (
            <AudioPlayer
              key={track.src}
              track={track}
              theme={theme}
              index={index}
              currentlyPlayingId={currentlyPlayingId}
              onPlay={setCurrentlyPlayingId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
