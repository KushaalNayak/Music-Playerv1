# Music Player

A modern, beautiful music player built with React + Vite featuring a clean UI and smooth user experience.

## Features

- 🎵 **Play/Pause Controls** - Simple and intuitive playback controls
- ⏭️ **Next/Previous** - Navigate through your playlist easily
- 📊 **Progress Bar** - Visual progress indicator with seek functionality
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📋 **Playlist View** - See all songs in your playlist with active song highlighting
- 🎧 **HTML Audio** - Uses native HTML5 audio element for reliable playback

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## How to Add Your Music

### Quick Steps:

1. **Place your MP3 files** in the `public/music` folder
   - Example: `public/music/My Song.mp3`

2. **Update the songs array** in `src/App.jsx`:
```javascript
const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "/music/Blinding Lights.mp3", // Path from public folder
  },
  // Add more songs...
]
```

3. **Important Notes:**
   - File path must start with `/music/`
   - File name must match exactly (including spaces and capital letters)
   - Supported formats: MP3, WAV, OGG, AAC, M4A

**For detailed instructions, see:** `public/music/HOW_TO_ADD_MUSIC.md`

## Features Breakdown

- **Play/Pause**: Click the main play button to start/pause playback
- **Next/Previous**: Navigate to the next or previous song in the playlist
- **Progress Bar**: Click anywhere on the progress bar to seek to that position
- **Auto-play Next**: Automatically plays the next song when current song ends
- **Visual Feedback**: Active song is highlighted in the playlist with a playing indicator

## Technologies Used

- React 19
- Vite 7
- HTML5 Audio API
- CSS3 (Gradients, Animations, Transitions)

## Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
  ├── App.jsx       # Main music player component
  ├── App.css       # Music player styles
  └── index.css     # Global styles

public/
  └── music/        # Place your MP3 files here
      ├── Blinding Lights.mp3
      └── (your other songs...)
```

## Troubleshooting

**Song doesn't play?**
- Check that the file exists in `public/music/`
- Verify the file name in the `url` matches exactly (case-sensitive)
- Make sure the path starts with `/music/`
- Check browser console for errors (F12)

**File not found?**
- Restart the dev server after adding new files
- Verify file is in `public/music/` not `src/assets/`

---

Enjoy your music! 🎶
