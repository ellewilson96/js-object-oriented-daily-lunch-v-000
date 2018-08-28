// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
   constructor(name){
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }

  deliveries(){
      return store.deliveries.filter(delivery => {
        return delivery.neighborhoodId === this.id
    })
  }
   customers(){
    return store.customers.filter(customer =>{
      return customer.neighborhoodId === this.id
    })
  }
  meals() {
     const allMeals = this.customers().map(customer => customer.meals());
     const merged = [].concat.apply([], allMeals);
     return [...new Set(merged)];
   }
}

let customerId = 0;

class Customer {
  constructor(name){
   this.name = name;
   this.id = ++customerId;
   store.customers.push(this);
 }
}

let mealId = 0;

class Meal {
  constructor(title, price){
   this.title = title;
   this.price = price;
   this.id = ++mealId;
   store.meals.push(this);
}
}

let deliveryId = 0;

class Delivery {
  constructor(meal, neighborhood, customer){
   this.meal = meal.id;
   this.neighborhood = neighborhood.id;
   this.customer = customer.id;
   store.deliveries.push(this);
}
}
}
