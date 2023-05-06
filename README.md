# Hotel-Room-Task
Class Room

Properties
 floorNumber - (number) the floor number of the room
 roomNumber - (string) the room number
 price - (number) the price of the room
 #isBooked - (boolean) a private property indicating whether the room is booked or not

Constructor
 The constructor method initializes a new instance of the Room class. It takes the following parameters:

 floorNumber - (number) the floor number of the room
 roomNumber - (string) the room number
 price - (number) the price of the room
 isBooked - (boolean) indicating whether the room is booked or not

Methods
 getisbooked() - returns the value of the private property #isBooked.
 setisbooked(booked) - sets the value of the private property #isBooked.
 printRoom() - logs a message to the console indicating the floor number, room number, and price of the room.
 isBooked() - returns true if the room is booked, otherwise false.
 book() - books the room if it is not already booked, otherwise logs a message indicating that the room is already booked.

Class SleepingRoom

Properties

 persoCapacity - (number) the number of people the room can accommodate
 Inherits all properties from the Room class

Constructor
 The constructor method initializes a new instance of the SleepingRoom class. It takes the following parameters:

 persoCapacity - (number) the number of people the room can accommodate
 Inherits all parameters from the Room class

Methods
 Inherits all methods from the Room class

Class RoomWithView

Properties
 view - (string) the view from the room
 numberOfBeds - (number) the number of beds in the room
 Inherits all properties from the Room class

Constructor
 The constructor method initializes a new instance of the RoomWithView class. It takes the following parameters:

 view - (string) the view from the room
 numberOfBeds - (number) the number of beds in the room
 Inherits all parameters from the Room class

Methods
 Inherits all methods from the Room class

Class Hotel

Properties
 Address - (string) the address of the hotel
 NumberOfRooms - (number) the total number of rooms in the hotel
 #minFloor - (number) the minimum floor number in the hotel
 #maxFloor - (number) the maximum floor number in the hotel
 rooms - (array) an array of Room objects representing the rooms in the hotel.

Constructor
 The constructor method initializes a new instance of the Hotel class. It takes the following parameters:

 address - (string) the address of the hotel
 numberOfRooms - (number) the total number of rooms in the hotel
 minFloor - (number) the minimum floor number in the hotel
 maxFloor - (number) the maximum floor number in the hotel
 rooms - (array) an array of Room objects representing the rooms in the hotel.

Methods
 printAdvertismen() - logs the hotel address to the console.
 listBookedRooms() - returns an array of Room objects representing the rooms that are booked in the hotel.
