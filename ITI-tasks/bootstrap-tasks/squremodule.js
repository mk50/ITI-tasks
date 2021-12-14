class reactangle extends shape{
width=10;
heigth=10;
constructor(_width,_heigth){
    super(color);
    this.width=_width;
    this.heigth=_heigth;
}
export shapedraw(){
    var area=this.width*this.heigth;
    return area;
}
 export getarea(){
    this.shapedraw();
}
reacta=new reactangle("the area is " + this.getaria);

}

class square extends reactangle{
 constructor(_width){
     super(_width)
     this.width=-this.width;
 }
export getarea(){
     area=this.width*this.width;
 }
 squarearea=new square("the area is "+this.getaria );

}