var node = function(data){

  var data;
  var nextNode;

  this.setData = function(data){

    data = data;

  };
  this.setNext = function(next){

    nextNode = next;   
 
  };
  this.getData = function(){ return data};
  
  this.getNext = function(){ return nextNode};

};


var circularBuffer = function(firstData){



  this.head = new node(firstData);
  this.tail = new node("hi im the original tail");
  this.head.setNext(this.tail);
  this.tail.setNext(this.head);
  
  this.append = function(nn){
     //console.log(this.tail.getData());
     //console.log(this.head.getNext().getData());
     //var tempTnext = this.tail.getNext;
     var newNode = new node(nn);
     this.tail.setNext(newNode);
     newNode.setNext(this.head);
     //this.head.setNext(this.tail);
     this.tail = newNode;
     this.tail.setNext(this.head);
     //console.log(this.head.getData() + "--" + this.head.getNext().getData() + "--" +this.tail.getData());
  }
  
  this.print = function(){
    var lap = false;
    for(var current = this.head; current !== undefined; current = current.getNext()){
     console.log( current.getData());
     console.log(" up next: " + current.getNext());
     if(current === this.head && lap === true) break;
     if(lap === false){
       lap = true;
       continue; 
     }
   }
 };


}



var cb = new circularBuffer(Math.floor(Math.random() * (1000-0) + 0));

for(var i = 0; i<= 100; i++){;
cb.append(Math.floor(Math.random() * (1000-0) + 0));

}

console.log(cb.print());

