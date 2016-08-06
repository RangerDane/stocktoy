class LineGraph {
  constructor( ctx ) {
    this.ctx = ctx;
    this.data = [];
  }
  push( point ) {
    this.data.push( point );
    console.log("pushing " + point);
    if( this.data.length > 20 ) {
      this.data.shift();
    }
  }
  draw() {
    if( this.data.length > 0 ) {
      var start = this.data[0];
      this.ctx.beginPath();
      console.log("drawing");
      this.ctx.moveTo(0,this.data[0]);
      this.data.forEach( (x,index) => {
        console.log(index);
        console.log(this.data[index]);
        this.ctx.lineTo( index * 10, this.data[index] );
      });
      this.ctx.stroke();
    }
  }
}

module.exports = LineGraph;
