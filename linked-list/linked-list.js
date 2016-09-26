var node = function(data){

  var data = data;
  var nextNode;
  this.setNext = function(next){

     nextNode = next;

  }
  this.setData = function(data){

     data = data;

  } 
  this.getNext = function(){

     return nextNode;

  }
  this.getData = function(){

      return data;
  };

};

var linkedList = function(firstdata){

 this.head  = new node(firstdata);

 this.print = function(){
    for(var current = this.head; current !== undefined; current = current.getNext()){
		
     console.log( current.getData());	
    // console.log(" up next: " + current.getNext());
   }
 };

 this.append = function(data){
    
    this.current =this.head;
    while(this.current.getNext() !== undefined){
	this.current = this.current.getNext();
    } 
    this.current.setNext(new node(data));
    //console.log(this.current.getNext()); 

 };



}

var ll = new linkedList(Math.floor(Math.random() * (1000-0) + 0));

for(var i = 0; i<= 1000; i++){
console.log(1);
ll.append(Math.floor(Math.random() * (1000-0) + 0));

}

console.log(ll.print()); 
