// AudioPlayer.js
class AudioPlayer {
    constructor() {
        this.audio = null;
    }

    play(_audio) {
        if (this.audio) {
            this.audio.pause();
        }
        this.audio = new Audio(_audio);
        this.audio.play().catch(error => {
            console.error("Playback failed:", error);
        });
    }

    stop() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }
}

export default new AudioPlayer();
