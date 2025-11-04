import { useState, useEffect, useRef } from 'react'
import './App.css'

// Add your songs here!
// Place your MP3 files in the public/music folder
// Then update the songs array below with your actual song files
const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "/music/Blinding Lights.mp3", // File path from public/music folder
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    url: "/music/Shape-Of-You.mp3",
  },
  {
    id: 3,
    title: "Someone Like You",
    artist: "Adele",
    url: "/music/Someone-Like-You.mp3",
  },
]

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  const currentSong = songs[currentSongIndex]

  // Update current time and duration
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [currentSongIndex])

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(err => {
        console.error('Play error:', err)
        if (err.message.includes('Failed to load')) {
          alert(`Audio file not found: ${currentSong.url}\n\nPlease make sure:\n1. The file exists in the public/music folder\n2. The file name matches exactly (including case and spaces)\n3. The file is a valid MP3, WAV, or OGG format`)
        }
      })
    } else {
      audio.pause()
    }
  }, [isPlaying, currentSongIndex, currentSong.url])

  // Handle song end - auto play next
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length)
      setIsPlaying(true)
    }

    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [currentSongIndex])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length)
    setIsPlaying(true)
  }

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length)
    setIsPlaying(true)
  }

  const handleProgressChange = (e) => {
    const audio = audioRef.current
    if (!audio) return

    const clickX = e.nativeEvent.offsetX / e.currentTarget.offsetWidth
    const newTime = clickX * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time) => {
    if (isNaN(time) || time === 0) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="music-player-container">
      <div className="music-player">
        <div className="player-header">
          <h1>Music Player</h1>
        </div>

        <div className="album-art">
          <div className="album-art-placeholder">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="url(#gradient)" />
              <circle cx="50" cy="50" r="15" fill="rgba(255,255,255,0.2)" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="song-info">
          <h2 className="song-title">{currentSong.title}</h2>
          <p className="song-artist">{currentSong.artist}</p>
        </div>

        <div className="progress-section">
          <div className="progress-bar-container" onClick={handleProgressChange}>
            <div 
              className="progress-bar" 
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="progress-handle"></div>
            </div>
          </div>
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="controls">
          <button className="control-btn prev-btn" onClick={handlePrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          
          <button className="control-btn play-pause-btn" onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <button className="control-btn next-btn" onClick={handleNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>

        <div className="playlist">
          <h3>Playlist</h3>
          <div className="song-list">
            {songs.map((song, index) => (
              <div
                key={song.id}
                className={`song-item ${index === currentSongIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSongIndex(index)
                  setIsPlaying(true)
                }}
              >
                <div className="song-number">{index + 1}</div>
                <div className="song-details">
                  <div className="song-item-title">{song.title}</div>
                  <div className="song-item-artist">{song.artist}</div>
                </div>
                {index === currentSongIndex && isPlaying && (
                  <div className="playing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <audio
          ref={audioRef}
          src={currentSong.url}
          preload="metadata"
        />
      </div>
    </div>
  )
}

export default App
