const moodSelector = document.querySelector(".mood-selector");
const colorDisplay = document.querySelector(".color-display");
const playlist = document.querySelector(".playlist");
const title = document.querySelector(".title")

// Predefined colors and playlists
const moodData = {
    happy: { color: "#FFD700", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0" },
    calm: { color: "#ADD8E6", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO" },
    energetic: { color: "#FF4500", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1gCrZ1xC96D" },
    sad: { color: "#708090", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634" }
};

// Change background and display playlist
moodSelector.addEventListener("change", () => {
    const mood = moodSelector.value;
    document.body.style.background = moodData[mood].color;
    colorDisplay.style.background = moodData[mood].color;
    playlist.src = moodData[mood].playlist;
});
