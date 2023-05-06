class Room {
floorNumber;
roomNumber;
price;
#isBooked;

constructor(floorNumber,roomNumber,price,isBooked){
  this.floorNumber=floorNumber;
  this.roomNumber=roomNumber;
  this.price=price;
  this.#isBooked=isBooked
}

getisbooked (){
  return this.#isBooked;
}

setisbooked (booked){
  this.#isBooked=booked;
}

printRoom(){

  console.log(`The room is on floor : ${this.floorNumber} , room number is : ${this.roomNumber} , and the price is:  ${this.price}` );

}

isBooked() {
  if(this.#isBooked)
  return true;
  else 
  return false;

}


book() {
 if(this.#isBooked)
 console.log("We are sorry ,the room with the number : "+this.roomNumber +" is already booked "); 
 else
 {this.#isBooked=true;
 console.log("Welcome , the room with number : "+ this.roomNumber + " is booked for you ");
 }}
}



class Hotel {
 Address;
 NumberOfRooms;
 #minFloor; 
 #maxFloor;
 rooms;
 constructor(address,numberOfRooms,minFloor,maxFloor,rooms){
  this.Address=address;
  this.NumberOfRooms=numberOfRooms;
  this.#minFloor=minFloor;
  this.#maxFloor=maxFloor;
  this.rooms=rooms;
 }  
  printAdvertismen () {
   console.log(this.Address); 
  }

  listBookedRooms () {
    let list =[];
   for (let i = 0; i < this.rooms.length; i++) {
    if(this.rooms[i].isBooked())
      list.push(this.rooms[i]);
  }
  return list;
  }

}



class RoomWithView extends Room {
  view;
  numberOfBeds;
  constructor(view,numberOfBeds,floorNumber,roomNumber,price,isbooked){
 super(floorNumber,roomNumber,price);
   this.view=view;
   this.numberOfBeds=numberOfBeds;
   this.setisbooked(isbooked);
  }

  printRoom(){

  console.log(`The room is on floor : ${this.floorNumber} room number is : ${this.roomNumber} , it is with  ${this.view} , it includees ${this.numberOfBeds} beds , and the price is:  ${this.price}` );

}
}



class SleepingRoom extends Room {
  persoCapacity;
  constructor(persoCapacity,floorNumber,roomNumber,price,isbooked){
    super( floorNumber,roomNumber,price);
    this.persoCapacity=persoCapacity
    this.setisbooked(isbooked);
  }
  
  printRoom(){

   console.log(`The room is on floor : ${this.floorNumber} , room number is : ${this.roomNumber} , the room can accommodates ${this.persoCapacity} , and the price is:  ${this.price}` );

  }

}



const room1 =new Room (2 , "a24" ,240 ,true );
const room2 =new Room (1 , "b56" ,240 ,true );
const room3 =new Room (5 , "a11" ,240 ,false );
const room4 =new Room (8 , "a47" ,240 ,false );


const room5=new SleepingRoom (4,5,"c145",500,false);
const room6=new SleepingRoom (2,5,"a15",250,true);


const room7=new RoomWithView ("Mountain view",2,9,"h45",500,false);
const room8=new RoomWithView ("Sea view",4,5,"m22",600,true);


const rooms =[room1,room2,room3,room4,room5,room6,room7,room8];


const ceazer = new Hotel ("ramallah , st: 60",100,1,9,rooms);

ceazer.printAdvertismen();
console.log(ceazer.listBookedRooms());


console.log(room1.isBooked());
room4.book();
room3.printRoom();

room7.book();

room8.book();


room6.printRoom();







