var chaos = (function() { return {
  init: function()  {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.setSize(window.innerWidth, window.innerHeight);
  },

  clear: function(color) {
    if (color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    } else {
      this.context.clearRect(0, 0, this.width, this.height);
    }
  },

  setSize: function(width, height) {
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
  },

  popImage: function() {
    var win = window.open("", "Canvas Image"),
      src = this.canvas.toDataURL("image/png");
    win.document.write("<img src='" + src + "' width='" +
      this.width + "' height='" + this.height + "'/>");
  }


}; }());

