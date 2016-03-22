$( document ).ready(function() {

  var song_array = ["Jukebox Hero", "How Great Is Our God", "Don't Fall In Love With A Girl Like That", "Rock On", "When It Won't Save You"];
  var current_song = 0
  var volume = .5

  var Jukebox = {
    audio: new Audio("./music/" + song_array[current_song] + ".mp3"),

    play: function(){
      this.audio.play();
      this.audio.volume = volume
      Jukebox.audio.addEventListener('ended', function() {
        Jukebox.next();
        Jukebox.play();
      });
    },

    volume: function(){
      this.audio.volume = volume
    },

    pause: function(){
      this.audio.pause();
    },

    stop: function(){
      this.audio.pause();
      this.audio.currentTime = 0;
    },

    load: function(){
      this.audio = new Audio('./music/' + song_array[current_song] + '.mp3')
    },

    next: function(){
      current_song += 1;
      if (current_song === 5) {
        current_song = 0;
        Jukebox.load();
        return current_song;
      } else {
        Jukebox.load();
      };
      return current_song;
    },

    last: function(){
      current_song -= 1;
      if (current_song === -1) {
        current_song = 4;
        Jukebox.load();
        return current_song;
      } else {
        Jukebox.load();
      };
      return current_song;
    }

  };

  $('#play').click(function(){
    Jukebox.play();
  });

  $('#pause').click(function(){
    Jukebox.pause();
  });

  $('#stop').click(function(){
    Jukebox.stop();
  });

  $('#next').click(function(){
    Jukebox.stop();
    Jukebox.next();
    Jukebox.play();
  });

  $('#last').click(function(){
    Jukebox.stop();
    Jukebox.last();
    Jukebox.play();
  });

  $('#random').click(function(){
    Jukebox.stop();
    Random();
    Jukebox.load();
    Jukebox.play();
  });

  $('#volume-up').click(function(){
    console.log(volume);
    if (volume > .9) {
      return;
    } else {
      volume += .1
      Jukebox.volume();
      return volume;
    };
  });

  $('#volume-down').click(function(){
    console.log(volume);
    if (volume < .1) {
      return;
    } else {
      volume -= .1
      Jukebox.volume();
      return volume;
    };
  });

  function Random(){
    var new_song = Math.floor((Math.random() * 4));
    console.log(new_song);
    if (new_song !== current_song) {
      current_song = new_song;
      return current_song;
    } else {
      Random(current_song);
    };
  };

});
