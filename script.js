const moodSelector = document.querySelector(".mood-selector");
const colorDisplay = document.querySelector(".color-display");
const playlist = document.querySelector(".playlist");
const title = document.querySelector(".title")

// predefined colors and playlists
const moodData = {
    happy: { colour: ["#FAE791", "#F28DBF"], playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0" },
    calm: { colour: ["#ffffff", "#5E9167"], playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO" },
    energetic: { colour: ["#FF4500","#51DB42"], playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1EIeEZPgsd7pko" },
    sad: { colour: ["#000000", "#E7F2E6"], playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634" }
};

// change background and display playlist
moodSelector.addEventListener("change", () => {
    const mood = moodSelector.value;
    const colours = moodData[mood].colour;
    //update CSS custom variables to match mood
    document.body.style.setProperty('--colour1', colours[0]);
    document.body.style.setProperty('--colour2', colours[1]);
    //update playlist
    playlist.src = moodData[mood].playlist;
});
