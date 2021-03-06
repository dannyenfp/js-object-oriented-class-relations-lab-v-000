//The "store" allows us to associate these different classes.

let store = {drivers: [], trips: [], passengers: []};
 
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }
  
  passengers(){
    return this.trips().map(trip => { 
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    
    store.passengers.push(this);
  }
  
  trips() {
    return store.trips.filter(trip => { 
      return trip.passengerId === this.id;
    });
  }
  
  drivers() {
    return this.trips().map(trip => { 
      return trip.driver();
    });
  }    
}
 
class Trip {
  constructor(driver1, passenger1){ 
    this.id = ++tripId;
    this.driverId = driver1.id;
    this.passengerId = passenger1.id;
  
    store.trips.push(this);
  }
  
  // because this is ONLY one passenger, you use find.
  
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}
