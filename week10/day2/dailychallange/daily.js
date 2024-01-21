class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
      }
    }
    

    const myVideo = new Video("Learning JavaScript", "emma owl", 120);
myVideo.watch();

