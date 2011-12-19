/**
 * Pong.js
 * @author Paul Adenot
 *
 * Methods handling sound.
 */

Pong.Sound = function(pong) {
  this.assets = {
    win : "sounds/win.ogg",
    bounce : "sounds/bounce.ogg",
    paddle : "sounds/paddle.ogg",
    lose : "sounds/lose.ogg"
  };

  this.elements = { };

  /**
   * Add audio elements in the DOM, provoking the fetch of the sound assets.
   */
  this.preloadSounds = function() {
    for (var sound in this.assets) {
      var audio = new Audio(this.assets[sound]);
      audio.preload = "auto";
      audio.load();
      $('body').append(audio);
      this.elements[sound] = audio;
    }
  };

  this.play = function(which) {
    this.elements[which].play();
  };
};
