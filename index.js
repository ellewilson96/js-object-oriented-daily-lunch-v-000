// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
   constructor(name){
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }

class Customer {
  constructor(name){
   this.name = name;
   this.id = ++customerId;
   store.customers.push(this);
}

class Meal {
  constructor(title, price){
   this.title = title;
   this.price = price;
   this.id = ++mealId;
   store.meals.push(this);
}
}
