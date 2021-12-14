class shape{
    #color="red";
    constructor(color){
        this.#color=color;
    }
    setColor(color){
        this.#color=color;
    }
    getColor(){
        return this.#color;
    }
   export shapedraw(){
        console.log("the color is :" + this.getColor);
    }
     colorob=new shape("yellow");

}

