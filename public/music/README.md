# Music Folder

Place your audio files here!

## Supported Audio Formats

- MP3 (recommended)
- WAV
- OGG
- AAC
- M4A

## How to Add Songs

1. **Copy your MP3 files** into this `public/music` folder

2. **Update the songs array** in `src/App.jsx`:

```javascript
{
  id: 1,
  title: "Your Song Title",
  artist: "Artist Name",
  url: "/music/your-song-file.mp3", // Use the exact file name
}
```

3. **File naming tips:**
   - Use lowercase letters and hyphens for file names (e.g., `my-song.mp3`)
   - Avoid spaces in file names (use hyphens instead)
   - Make sure file names match exactly (case-sensitive on some systems)

## Examples

If you have a file named `blinding-lights.mp3` in this folder:

```javascript
{
  id: 1,
  title: "Blinding Lights",
  artist: "The Weeknd",
  url: "/music/blinding-lights.mp3",
}
```

## Using Online Audio URLs

You can also use direct MP3 URLs from the internet:

```javascript
{
  id: 1,
  title: "Song Title",
  artist: "Artist",
  url: "https://example.com/path/to/song.mp3",
}
```

**Note:** YouTube URLs won't work directly. You need direct audio file links.

## Getting Audio Files

- Purchase music from online stores (iTunes, Amazon, etc.)
- Use royalty-free music from sites like:
  - Freesound.org
  - Incompetech.com
  - YouTube Audio Library (download the MP3 files)
- Convert your existing music files to MP3 format

---

**Important:** Make sure you have the rights to use any audio files you add!

