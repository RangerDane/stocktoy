class LineGraph {
  constructor( ctx ) {
    this.ctx = ctx;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.data = [0];
    this.min = 0;
    this.max = 1;
    console.log( this.Yh );
  }
  push( point ) {
    this.data.push( point );
    if( this.data.length > this.width / 10 ) {
      this.data.shift();
    }
    this.draw();
  }
  calculateBounds() {
    this.min = this.data[0];
    this.max = 1;
    this.data.forEach( (x) => {
      if( x > this.max ) {
        this.max = x;
      }
      if( x < this.min ) {
        this.min = x;
      }
    });
    this.min -= 5;
    this.max += 5;
  }
  mapY( y ) {
    var difference = Math.max( this.max - this.min, 1 );
    return ( ( this.max - y ) * this.height ) / difference;
  }
  draw() {
    this.ctx.clearRect( 0, 0, this.width, this.height );
    this.calculateBounds();
    this.drawRules();
    this.drawLines();
  }
  drawRules() {
    var rule = 0;
    var y;
    while( rule < this.max ) {
      if( rule > this.min ) {
        y = this.mapY( rule );
        this.ctx.textAlign="start";
        this.ctx.font = "18pt Inconsolata";
        this.ctx.fillText( rule, 0, y);
        if( rule === 0 ) {
          console.log( y );
          this.ctx.lineWidth = 7;
        } else {
          this.ctx.lineWidth = 0.5;
        }
        this.ctx.beginPath();
        this.ctx.moveTo( 0, y );
        this.ctx.lineTo( this.width, y );
        this.ctx.stroke();
      }
      rule += 100;
    }
  }
  drawLines() {
    if( this.data.length > 0 ) {
      var x, y, difference;
      this.ctx.beginPath();
      this.ctx.lineWidth = 1;
      this.data.forEach( ( price, index ) => {
        difference = Math.max( this.max - this.min, 100 );
        x = index * 10;
        y = this.mapY( price );
        this.ctx.lineTo( index * 10, y );
      });
      this.ctx.stroke();
    }
  }
}

module.exports = LineGraph;
