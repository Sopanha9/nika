import React, { useState, useRef, useEffect } from 'react';
import { Music, Coffee, Camera, Sparkles, Pause, Play, Heart } from 'lucide-react';
import vibeDesk from '../assets/vibe-desk.png';
import vibeAlbum from '../assets/vibe-album.png';
import vibeSticker from '../assets/vibe-sticker.png';
import pistolSong from '../music/Pistol-Cigarettes-After-Sex.m4a';
import { useLanguage } from '../context/LanguageContext';

const interestIcons = [
    <Coffee size={16} />,
    <Camera size={16} />,
    <Sparkles size={16} />,
    <Heart size={16} />,
];

const Playground = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const { t } = useLanguage();
    // Actual audio file
    const audioRef = useRef(new Audio(pistolSong));

    useEffect(() => {
        const audio = audioRef.current;

        // Handlers
        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const onEnded = () => setIsPlaying(false);

        // Events
        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', onEnded);

        if (isPlaying) {
            audio.play().catch(e => console.log("Audio play failed:", e));
        } else {
            audio.pause();
        }

        // Cleanup on unmount
        return () => {
            audio.pause();
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', onEnded);
        }
    }, [isPlaying]);

    const handleSeek = (e) => {
        if (!duration) return;
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.min(Math.max(0, x / width), 1); // Clamp between 0 and 1
        const newTime = percentage * duration;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <section id="playground" className="section-container">
            <div className="section-header">
                <h2 className="section-title">{t.playground.title}</h2>
                <div className="section-line"></div>
            </div>

            <div className="vibes-grid">
                {/* Card 1: Music Player */}
                <div className="vibe-card music-card glass-card">
                    <div className="music-header">
                        <Music size={16} className="music-icon-small" />
                        <span>{t.playground.onRepeat}</span>
                    </div>
                    <div className="music-content">
                        <img src={vibeAlbum} alt="Album Art" className="album-art" />
                        <div className="music-info">
                            <h4 className="song-title">{t.playground.songTitle}</h4>
                            <p className="artist-name">{t.playground.songArtist}</p>
                        </div>
                    </div>
                    <div className="music-progress">
                        <div className="progress-bar" onClick={handleSeek}>
                            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
                        </div>
                        <div className="time-stamps">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration || 0)}</span>
                        </div>
                    </div>
                    <div className="music-controls">
                        <button
                            className="play-btn"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                        </button>
                    </div>
                </div>

                {/* Card 2: Photo Dump */}
                <div className="vibe-card photo-card glass-card">
                    <div className="polaroid-stack">
                        <div className="polaroid p-1">
                            <img src={vibeDesk} alt="Desk Setup" />
                            <span className="caption">{t.playground.workspace}</span>
                        </div>
                        <div className="sticker-decoration">
                            <img src={vibeSticker} alt="Sticker" />
                        </div>
                    </div>
                </div>

                {/* Card 3: Current Obsessions */}
                <div className="vibe-card obsessions-card glass-card">
                    <h3 className="card-title">{t.playground.obsessions}</h3>
                    <div className="tags-container">
                        {t.playground.interests.map((text, index) => (
                            <div key={index} className="vibe-tag">
                                {interestIcons[index]}
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="status-update">
                        <div className="status-dot"></div>
                        <p>{t.playground.status}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Playground;
