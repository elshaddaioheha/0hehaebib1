import { AnimatePresence, motion } from "framer-motion";
import {
  Disc,
  ListMusic,
  Minimize2,
  Music,
  Pause,
  Play,
  Radio,
  RefreshCw,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Track {
  title: string;
  artist: string;
  src: string;
  genre: string;
  durationText: string;
}

// The subset of the Audius public API responses this player consumes
interface AudiusTrack {
  id: string;
  title: string;
  genre?: string;
  duration: number;
  user: { name: string };
}

const TRACKS: Track[] = [
  {
    title: "In Route",
    artist: "Robert Woolridge",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    genre: "Contemporary Jazz/Bass",
    durationText: "6:12",
  },
  {
    title: "Two Step",
    artist: "Robert Woolridge",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    genre: "Urban Jazz/Bass",
    durationText: "7:05",
  },
  {
    title: "Daydreaming",
    artist: "Robert Woolridge",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    genre: "Smooth Jazz/Bass",
    durationText: "5:44",
  },
];

export function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [playlist, setPlaylist] = useState<Track[]>(TRACKS);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showTrackList, setShowTrackList] = useState(false);

  // Live streaming states (Audius API)
  const [isLive, setIsLive] = useState(false);
  const [loadingLive, setLoadingLive] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = playlist[trackIndex] || TRACKS[0];

  // Initialize Audio
  useEffect(() => {
    if (!currentTrack) return;
    const audio = new Audio(currentTrack.src);
    audioRef.current = audio;
    audio.volume = isMuted ? 0 : volume;

    // Event listeners
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => handleNext();

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    // If it was playing, play the new track automatically
    if (isPlaying) {
      audio.play().catch((err) => console.log("Playback failed:", err));
    }

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [trackIndex, playlist]);

  // Adjust volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log("Playback failed:", err));
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setTrackIndex((prev) => (prev + 1) % playlist.length);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Audius API integration for actual dynamic track mapping
  const loadLiveTrending = async () => {
    setLoadingLive(true);
    try {
      // 1. Fetch live creator/host node
      const hostRes = await fetch("https://api.audius.co");
      const hostJson = (await hostRes.json()) as { data: string[] };
      const activeNode = hostJson.data[0];

      // 2. Fetch top 5 trending tracks from the public API
      const tracksRes = await fetch(
        `${activeNode}/v1/tracks/trending?app_name=oheha_portfolio&limit=5`
      );
      const tracksJson = (await tracksRes.json()) as { data?: AudiusTrack[] };

      if (tracksJson.data && tracksJson.data.length > 0) {
        const livePlaylist: Track[] = tracksJson.data.map((item) => ({
          title: item.title,
          artist: item.user.name,
          src: `${activeNode}/v1/tracks/${item.id}/stream?app_name=oheha_portfolio`,
          genre: item.genre || "Indie/Electronic",
          durationText: formatTime(item.duration),
        }));

        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
        setPlaylist(livePlaylist);
        setTrackIndex(0);
        setIsLive(true);
      }
    } catch (err) {
      console.error("Audius API loading failed:", err);
      alert("Failed to load public stream. Reverting to local tracks.");
    } finally {
      setLoadingLive(false);
    }
  };

  const restoreLocalTracks = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setPlaylist(TRACKS);
    setTrackIndex(0);
    setIsLive(false);
  };

  return (
    <>
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6 z-[9999] font-sans">
        <AnimatePresence>
          {!isExpanded ? (
            // Minimized Floating Button
            <motion.button
              layoutId="music-player-container"
              onClick={() => setIsExpanded(true)}
              aria-label="Open music player"
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-accent/25 text-accent shadow-[0_12px_32px_-8px_rgb(0_0_0/0.6)] hover:border-accent/60 transition-colors duration-200 cursor-pointer relative group"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileTap={{ scale: 0.94 }}
            >
              {/* Rotating record disk inside floating button */}
              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={
                  isPlaying
                    ? { repeat: Infinity, duration: 6, ease: "linear" }
                    : { duration: 0.5 }
                }
                className="absolute inset-0 flex items-center justify-center"
              >
                <Disc className="w-7 h-7 opacity-10" />
              </motion.div>

              {/* Pulsing wiggling wave lines inside minimized player */}
              {isPlaying ? (
                <svg width="24" height="16" viewBox="0 0 24 16" className="text-accent relative z-10">
                  <motion.path
                    d="M0 8 Q6 2 12 14 T24 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{
                      d: [
                        "M0 8 Q6 2 12 14 T24 8",
                        "M0 8 Q6 14 12 2 T24 8",
                        "M0 8 Q6 6 12 10 T24 8",
                        "M0 8 Q6 2 12 14 T24 8",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.4,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              ) : (
                <svg width="24" height="16" viewBox="0 0 24 16" className="text-accent/50 relative z-10">
                  <path
                    d="M0 8 L24 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              {/* Tooltip */}
              <span className="absolute bottom-16 right-0 scale-0 group-hover:scale-100 bg-bg-dark border border-accent/20 label text-accent py-1.5 px-3 rounded-lg shadow-xl transition-transform duration-200 origin-bottom-right whitespace-nowrap">
                {isLive ? "Audius Live Stream" : "Rob Woolridge Songs"}
              </span>
            </motion.button>
          ) : (
            // Expanded Glassmorphic Deck
            <motion.div
              layoutId="music-player-container"
              className="w-[min(20rem,calc(100vw-2rem))] rounded-3xl bg-surface border border-accent/20 p-5 shadow-[0_24px_64px_-16px_rgb(0_0_0/0.7)] text-honeydew relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4 border-b border-accent/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {isLive ? "Live API Streaming" : "Sound Portfolio"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowTrackList(!showTrackList)}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      showTrackList
                        ? "bg-accent/20 text-accent"
                        : "text-honeydew/60 hover:text-honeydew"
                    }`}
                    title="Track List"
                    aria-label="Track list"
                  >
                    <ListMusic className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-honeydew/60 hover:text-honeydew p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    title="Minimize"
                    aria-label="Minimize player"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Deck Content */}
              {!showTrackList ? (
                <div>
                  {/* Track Details & Visualizer Block */}
                  <div className="flex items-center gap-4 py-2">
                    {/* Glowing circular vinyl art */}
                    <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-accent/10 border border-accent/10 flex items-center justify-center overflow-hidden shadow-inner">
                      <motion.div
                        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 8,
                          ease: "linear",
                        }}
                        className="w-10 h-10 rounded-full border-2 border-accent/30 flex items-center justify-center"
                      >
                        <Disc className="w-5 h-5 text-accent/70" />
                      </motion.div>
                      {/* Interactive subtle play badge (Waveform overlay) */}
                      {isPlaying && (
                        <div className="absolute inset-0 bg-bg-dark/60 flex items-center justify-center">
                          <svg width="32" height="20" viewBox="0 0 32 20" className="text-accent">
                            <motion.path
                              d="M0 10 Q8 2 16 18 T32 10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              animate={{
                                d: [
                                  "M0 10 Q8 2 16 18 T32 10",
                                  "M0 10 Q8 18 16 2 T32 10",
                                  "M0 10 Q8 8 16 12 T32 10",
                                  "M0 10 Q8 2 16 18 T32 10",
                                ],
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.2,
                                ease: "easeInOut",
                              }}
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold truncate text-honeydew uppercase tracking-wide">
                        {currentTrack.title}
                      </h4>
                      <p className="text-[10px] text-honeydew/50 truncate mt-0.5">
                        {currentTrack.artist}
                      </p>
                      <span className="inline-block px-2 py-0.5 mt-1.5 rounded bg-accent/10 border border-accent/15 text-[8px] font-bold text-accent uppercase tracking-wider">
                        {currentTrack.genre}
                      </span>
                    </div>
                  </div>

                  {/* Large dynamic dual-layer wave visualizer */}
                  <div className="h-12 w-full flex items-center justify-center overflow-hidden my-3 relative bg-white/5 rounded-2xl border border-white/5">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full absolute inset-0 text-accent">
                      {/* Layer 1 (Subtle Background Wave) */}
                      <motion.path
                        d="M0 20 Q25 20 50 20 T100 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.25"
                        animate={isPlaying ? {
                          d: [
                            "M0 20 Q25 5 50 35 T100 20",
                            "M0 20 Q25 35 50 5 T100 20",
                            "M0 20 Q25 15 50 25 T100 20",
                            "M0 20 Q25 5 50 35 T100 20",
                          ],
                        } : {}}
                        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                      />
                      {/* Layer 2 (Primary Active Wave) */}
                      <motion.path
                        d="M0 20 Q25 20 50 20 T100 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        opacity="0.8"
                        animate={isPlaying ? {
                          d: [
                            "M0 20 Q25 30 50 10 T100 20",
                            "M0 20 Q25 10 50 30 T100 20",
                            "M0 20 Q25 25 50 15 T100 20",
                            "M0 20 Q25 30 50 10 T100 20",
                          ],
                        } : {}}
                        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>

                  {/* Progress Slider */}
                  <div className="mt-2">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none"
                    />
                    <div className="flex justify-between items-center text-[10px] text-honeydew/40 mt-1 font-semibold">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex justify-center items-center gap-6 mt-4">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous track"
                      className="text-honeydew/60 hover:text-honeydew transition-colors cursor-pointer"
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handlePlayPause}
                      aria-label={isPlaying ? "Pause" : "Play"}
                      className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-bg-dark flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current translate-x-[2px]" />
                      )}
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next track"
                      className="text-honeydew/60 hover:text-honeydew transition-colors cursor-pointer"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Volume Slider */}
                  <div className="flex items-center gap-2.5 mt-5 border-t border-accent/10 pt-3">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? "Unmute" : "Mute"}
                      className="text-honeydew/50 hover:text-honeydew transition-colors cursor-pointer"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-punch_red-600" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(parseFloat(e.target.value));
                        setIsMuted(false);
                      }}
                      className="flex-1 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none"
                    />
                  </div>
                </div>
              ) : (
                // Track List View with dynamic live switcher
                <div className="space-y-3">
                  {/* Streaming mode actions */}
                  <div className="flex gap-2">
                    {!isLive ? (
                      <button
                        onClick={loadLiveTrending}
                        disabled={loadingLive}
                        className="flex-1 py-2 px-3 rounded-xl bg-accent text-bg-dark text-[10px] font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {loadingLive ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Radio className="w-3.5 h-3.5" />
                        )}
                        {loadingLive ? "Querying Node..." : "Load Live Stream"}
                      </button>
                    ) : (
                      <button
                        onClick={restoreLocalTracks}
                        className="flex-1 py-2 px-3 rounded-xl bg-white/10 border border-white/10 text-honeydew text-[10px] font-bold uppercase tracking-wider hover:bg-white/15 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Disc className="w-3.5 h-3.5 text-accent" />
                        Back to Rob's Catalog
                      </button>
                    )}
                  </div>

                  <div className="max-h-48 overflow-y-auto space-y-1 pr-1 scrollbar-thin scrollbar-thumb-white/10">
                    {playlist.map((track, index) => (
                      <button
                        key={track.title}
                        onClick={() => {
                          setTrackIndex(index);
                          setShowTrackList(false);
                          setIsPlaying(true);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                          index === trackIndex
                            ? "bg-accent/15 border-accent/30 text-accent"
                            : "bg-white/5 border-transparent text-honeydew/80 hover:bg-white/10 hover:text-honeydew"
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate uppercase tracking-wide">
                            {track.title}
                          </div>
                          <div className="text-[9px] opacity-60 truncate mt-0.5">
                            {track.artist}
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold opacity-40 shrink-0">
                          {track.durationText}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
