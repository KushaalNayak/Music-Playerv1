# How to Add Music to Your Player

## Step-by-Step Guide

### Step 1: Place Your Music Files
1. Copy your MP3 files into the `public/music` folder
   - Location: `public/music/`
   - Example: `public/music/My Song.mp3`

### Step 2: Update the Songs Array
1. Open `src/App.jsx`
2. Find the `songs` array (around line 4-20)
3. Add your songs following this format:

```javascript
const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "/music/Blinding Lights.mp3", // Path from public folder
  },
  {
    id: 2,
    title: "Your Song Title",
    artist: "Artist Name",
    url: "/music/Your Song Title.mp3", // Exact file name
  },
  // Add more songs...
]
```

### Step 3: Important Notes

#### File Path Format
- ✅ Correct: `"/music/Blinding Lights.mp3"`
- ❌ Wrong: `"./music/song.mp3"` or `"music/song.mp3"`

#### File Name Matching
- The file name in the `url` must match exactly:
  - ✅ Case-sensitive: `"Blinding Lights.mp3"` matches file `Blinding Lights.mp3`
  - ❌ Won't work: `"blinding lights.mp3"` (lowercase) doesn't match `Blinding Lights.mp3`

#### Supported Formats
- MP3 (recommended)
- WAV
- OGG
- AAC
- M4A

### Step 4: Test Your Music
1. Save `src/App.jsx`
2. Run `npm run dev`
3. Click on your song in the playlist
4. If the file doesn't play, check:
   - File exists in `public/music/`
   - File name matches exactly (spaces, capital letters, etc.)
   - File is a valid audio format

## Example: Adding Multiple Songs

```javascript
const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    url: "/music/Blinding Lights.mp3",
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    url: "/music/Shape of You.mp3",
  },
  {
    id: 3,
    title: "Someone Like You",
    artist: "Adele",
    url: "/music/Someone Like You.mp3",
  },
]
```

## Quick Checklist

- [ ] Music file is in `public/music/` folder
- [ ] File name in `url` matches the actual file name exactly
- [ ] File path starts with `/music/`
- [ ] Added song to the `songs` array in `src/App.jsx`
- [ ] Each song has a unique `id`
- [ ] Saved the file and refreshed the browser

## Troubleshooting

**Song doesn't play?**
1. Check browser console for errors (F12)
2. Verify file exists: Look in `public/music/` folder
3. Check file name: Must match exactly including spaces and capital letters
4. Try a different audio file to test if the format is supported

**File not found error?**
- Make sure the file is in `public/music/` not `src/assets/`
- Check the path starts with `/music/` not `./music/` or `music/`
- Restart the dev server after adding new files

---

That's it! Enjoy your music player! 🎵

