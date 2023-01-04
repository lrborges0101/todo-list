

class Item{

static lestId = 0;

    constructor(text){
    this.id = Item.lestId++
    this.text = text;
    this.done = false  

    }



}

export default Item;