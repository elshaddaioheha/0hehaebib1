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
      const hostJson = await hostRes.json();
      const activeNode = hostJson.data[0];

      // 2. Fetch top 5 trending tracks from the public API
      const tracksRes = await fetch(
        `${activeNode}/v1/tracks/trending?app_name=oheha_portfolio&limit=5`
      );
      const tracksJson = await tracksRes.json();

      if (tracksJson.data && tracksJson.data.length > 0) {
        const livePlaylist: Track[] = tracksJson.data.map((item: any) => ({
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
      <div className="fixed bottom-6 right-6 z-[9999] font-sans">
        <AnimatePresence>
          {!isExpanded ? (
            // Minimized Floating Button
            <motion.button
              layoutId="music-player-container"
              onClick={() => setIsExpanded(true)}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1C1B21]/90 backdrop-blur-xl border border-[#71ADDD]/30 text-[#71ADDD] shadow-2xl hover:border-[#71ADDD]/60 hover:text-white transition-all cursor-pointer relative group"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                <svg width="24" height="16" viewBox="0 0 24 16" className="text-[#71ADDD] relative z-10">
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
                <svg width="24" height="16" viewBox="0 0 24 16" className="text-[#71ADDD]/50 relative z-10">
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
              <span className="absolute bottom-16 right-0 scale-0 group-hover:scale-100 bg-[#1C1B21] border border-[#71ADDD]/20 text-[10px] uppercase tracking-wider font-bold text-[#71ADDD] py-1.5 px-3 rounded-lg shadow-xl transition-all duration-200 origin-bottom-right whitespace-nowrap">
                {isLive ? "Audius Live Stream" : "Rob Woolridge Songs"}
              </span>
            </motion.button>
          ) : (
            // Expanded Glassmorphic Deck
            <motion.div
              layoutId="music-player-container"
              className="w-76 sm:w-80 rounded-3xl bg-[#1C1B21]/95 backdrop-blur-2xl border border-[#71ADDD]/20 p-5 shadow-2xl text-white relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#71ADDD]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex justify-between items-center mb-4 border-b border-[#71ADDD]/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#71ADDD]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#71ADDD]">
                    {isLive ? "Live API Streaming" : "Sound Portfolio"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowTrackList(!showTrackList)}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      showTrackList
                        ? "bg-[#71ADDD]/20 text-[#71ADDD]"
                        : "text-white/60 hover:text-white"
                    }`}
                    title="Track List"
                  >
                    <ListMusic className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                    title="Minimize"
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
                    <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-[#71ADDD]/10 border border-[#71ADDD]/10 flex items-center justify-center overflow-hidden shadow-inner">
                      <motion.div
                        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 8,
                          ease: "linear",
                        }}
                        className="w-10 h-10 rounded-full border-2 border-[#71ADDD]/30 flex items-center justify-center"
                      >
                        <Disc className="w-5 h-5 text-[#71ADDD]/70" />
                      </motion.div>
                      {/* Interactive subtle play badge (Waveform overlay) */}
                      {isPlaying && (
                        <div className="absolute inset-0 bg-[#1C1B21]/60 flex items-center justify-center">
                          <svg width="32" height="20" viewBox="0 0 32 20" className="text-[#71ADDD]">
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
                      <h4 className="text-sm font-bold truncate text-white uppercase tracking-wide">
                        {currentTrack.title}
                      </h4>
                      <p className="text-[10px] text-white/50 truncate mt-0.5">
                        {currentTrack.artist}
                      </p>
                      <span className="inline-block px-2 py-0.5 mt-1.5 rounded bg-[#71ADDD]/10 border border-[#71ADDD]/15 text-[8px] font-bold text-[#71ADDD] uppercase tracking-wider">
                        {currentTrack.genre}
                      </span>
                    </div>
                  </div>

                  {/* Large dynamic dual-layer wave visualizer */}
                  <div className="h-12 w-full flex items-center justify-center overflow-hidden my-3 relative bg-white/5 rounded-2xl border border-white/5">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full absolute inset-0">
                      {/* Layer 1 (Subtle Background Wave) */}
                      <motion.path
                        d="M0 20 Q25 20 50 20 T100 20"
                        fill="none"
                        stroke="#71ADDD"
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
                        stroke="#71ADDD"
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
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#71ADDD] focus:outline-none"
                    />
                    <div className="flex justify-between items-center text-[10px] text-white/40 mt-1 font-semibold">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex justify-center items-center gap-6 mt-4">
                    <button
                      onClick={handlePrev}
                      className="text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handlePlayPause}
                      className="w-12 h-12 rounded-full bg-[#71ADDD] hover:bg-[#71ADDD]/90 text-[#1C1B21] flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current translate-x-[2px]" />
                      )}
                    </button>
                    <button
                      onClick={handleNext}
                      className="text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Volume Slider */}
                  <div className="flex items-center gap-2.5 mt-5 border-t border-[#71ADDD]/10 pt-3">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
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
                      className="flex-1 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#71ADDD] focus:outline-none"
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
                        className="flex-1 py-2 px-3 rounded-xl bg-[#71ADDD] text-[#1C1B21] text-[10px] font-bold uppercase tracking-wider hover:bg-[#71ADDD]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
                        className="flex-1 py-2 px-3 rounded-xl bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider hover:bg-white/15 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Disc className="w-3.5 h-3.5 text-[#71ADDD]" />
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
                            ? "bg-[#71ADDD]/15 border-[#71ADDD]/30 text-[#71ADDD]"
                            : "bg-white/5 border-transparent text-white/80 hover:bg-white/10 hover:text-white"
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
