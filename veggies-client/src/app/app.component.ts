import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from './model/app-constants';
// import { Product } from './model/product';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veggies-client';

  // productsList = new Array<Product>();

  constructor(public router: Router) {
    // if (localStorage.getItem("init") == null || localStorage.getItem("init") === "false") {
    //   this.generateProductsData();
    //   this.generateCart();
    //   this.generateUserData();
    //   localStorage.setItem("init", "true");
    // }
  }

  // generateProductsData() {
  //   this.generateVegetablesData();
  //   this.generateFruitsData();
  //   this.generateDryfruitsData();
  //   this.generateNestleBrandData();
  //   this.generateHersheysBrandData();
  //   this.generateHeinzBrandData();
  //   this.generateDrOetkarBrandData();
  //   this.generateKnorrBrandData();
  //   this.generateReadyToEatFoodData();
    

  //   localStorage.setItem(AppConstants.PRODUCTS, JSON.stringify(this.productsList));
  // }

  // generateVegetablesData() {
  //   this.productsList.push(this.getProduct("Cauliflower", 20, AppConstants.VEGETABLES, 10, "cauliflower.png", 'kg'));
  //   this.productsList.push(this.getProduct("Capsicum", 30, AppConstants.VEGETABLES, 10, "capsicum.png", 'kg'));
  //   this.productsList.push(this.getProduct("Beans", 50, AppConstants.VEGETABLES, 10, "beans.png", 'kg'));
  //   this.productsList.push(this.getProduct("Brinjal", 30, AppConstants.VEGETABLES, 10, "brinjal.png", 'kg'));
  //   this.productsList.push(this.getProduct("Brocolli", 80, AppConstants.VEGETABLES, 10, "brocolli.png", 'kg'));
  //   this.productsList.push(this.getProduct("Cabbage", 60, AppConstants.VEGETABLES, 10, "cabbage.png", 'kg'));
  //   this.productsList.push(this.getProduct("Cucumber", 50, AppConstants.VEGETABLES, 10, "cucumber.png", 'kg'));
  //   this.productsList.push(this.getProduct("Ladyfinger", 40, AppConstants.VEGETABLES, 10, "ladyfinger.png", 'kg'));
  //   this.productsList.push(this.getProduct("Onion", 100, AppConstants.VEGETABLES, 10, "onion.png", 'kg'));
  //   this.productsList.push(this.getProduct("Spinach", 45, AppConstants.VEGETABLES, 10, "spinach.png", 'kg'));
  //   this.productsList.push(this.getProduct("Pea", 70, AppConstants.VEGETABLES, 10, "pea.png", 'kg'));
  //   this.productsList.push(this.getProduct("Pumpkin", 30, AppConstants.VEGETABLES, 10, "pumpkin.png", 'kg'));
  //   this.productsList.push(this.getProduct("Tomato", 25, AppConstants.VEGETABLES, 10, "tomato.png", 'kg'));
  //   this.productsList.push(this.getProduct("Turnip", 80, AppConstants.VEGETABLES, 10, "turnip.png", 'kg'));
  // }

  // generateFruitsData() {
  //   this.productsList.push(this.getProduct("Dragonfruit", 50, AppConstants.FRUITS, 10, "dragonfruit.png", 'piece'));
  //   this.productsList.push(this.getProduct("Kiwi", 30, AppConstants.FRUITS, 10, "kiwi.png", 'piece'));
  //   this.productsList.push(this.getProduct("Orange", 80, AppConstants.FRUITS, 10, "orange.png", 'kg'));
  //   this.productsList.push(this.getProduct("Strawberry", 200, AppConstants.FRUITS, 10, "strawberry.png", 'kg'));
  //   this.productsList.push(this.getProduct("Carrot", 40, AppConstants.FRUITS, 10, "carrot.png", 'kg'));
  //   this.productsList.push(this.getProduct("Apple", 100, AppConstants.FRUITS, 10, "apple.png", 'kg'));
  //   this.productsList.push(this.getProduct("Blackgrapes", 150, AppConstants.FRUITS, 10, "blackgrapes.png", 'kg'));
  //   this.productsList.push(this.getProduct("Banana", 60, AppConstants.FRUITS, 10, "banana.png", 'dozen'));
  //   this.productsList.push(this.getProduct("Blueberries", 200, AppConstants.FRUITS, 10, "blueberries.png", 'kg'));
  //   this.productsList.push(this.getProduct("Cherry", 150, AppConstants.FRUITS, 10, "cherry.png", 'kg'));
  //   this.productsList.push(this.getProduct("Grapes", 60, AppConstants.FRUITS, 10, "grapes.png", 'kg'));
  //   this.productsList.push(this.getProduct("Guava", 80, AppConstants.FRUITS, 10, "guava.png", 'kg'));
  //   this.productsList.push(this.getProduct("Lychee", 150, AppConstants.FRUITS, 10, "lychee.png", 'kg'));
  //   this.productsList.push(this.getProduct("Mango", 120, AppConstants.FRUITS, 10, "mango.png", 'kg'));
  //   this.productsList.push(this.getProduct("Papaya", 40, AppConstants.FRUITS, 10, "papaya.png", 'kg'));
  //   this.productsList.push(this.getProduct("Pashionfruit", 200, AppConstants.FRUITS, 10, "passionfruit.png", 'peice'));
  //   this.productsList.push(this.getProduct("Peaches", 140, AppConstants.FRUITS, 10, "peaches.png", 'kg'));
  //   this.productsList.push(this.getProduct("Pears", 100, AppConstants.FRUITS, 10, "pears.png", 'kg'));
  //   this.productsList.push(this.getProduct("Pineapple", 130, AppConstants.FRUITS, 10, "pineapple.png", 'kg'));
  //   this.productsList.push(this.getProduct("Plum", 160, AppConstants.FRUITS, 10, "plum.png", 'kg'));
  //   this.productsList.push(this.getProduct("Pomegranate", 180, AppConstants.FRUITS, 10, "pomegranate.png", 'kg'));
  //   this.productsList.push(this.getProduct("Rasberry", 250, AppConstants.FRUITS, 10, "rasberry.png", 'kg'));
  //   // this.productsList.push(this.getProduct("", 200, AppConstants.FRUITS, 10, "", /kg));
  //   // this.productsList.push(this.getProduct("", 200, AppConstants.FRUITS, 10, "", /kg));
  //   // this.productsList.push(this.getProduct("", 200, AppConstants.FRUITS, 10, "", /kg));
  // }

  // generateDryfruitsData() {
  //   this.productsList.push(this.getProduct("Walnuts", 1000, AppConstants.DRYFRUITS, 10, "walnuts.png", 'piece'));
  //   this.productsList.push(this.getProduct("Almond", 600, AppConstants.DRYFRUITS, 10, "almond.png", 'piece'));
  //   this.productsList.push(this.getProduct("Cashew", 1200, AppConstants.DRYFRUITS, 10, "cashew.png", 'piece'));
  //   this.productsList.push(this.getProduct("Dry Dates", 800, AppConstants.DRYFRUITS, 10, "drydates.png", 'kg'));
  //   this.productsList.push(this.getProduct("Flax Seeds", 100, AppConstants.DRYFRUITS, 10, "flaxseeds.png", 'kg'));
  //   this.productsList.push(this.getProduct("Kismis", 500, AppConstants.DRYFRUITS, 10, "kismis.png", 'kg'));
  //   this.productsList.push(this.getProduct("Peanuts", 200, AppConstants.DRYFRUITS, 10, "peanuts.png", 'kg'));
  //   this.productsList.push(this.getProduct("Pistachio", 1500, AppConstants.DRYFRUITS, 10, "pistachio.png", 'dozen'));
  //   this.productsList.push(this.getProduct("Pumpkin Seeds", 200, AppConstants.DRYFRUITS, 10, "pumpkinseeds.png", 'kg'));
  //   this.productsList.push(this.getProduct("Saffron", 900, AppConstants.DRYFRUITS, 10, "saffron.png", 'kg'));
  //   this.productsList.push(this.getProduct("Sunflower Seeds", 400, AppConstants.DRYFRUITS, 10, "sunflowerseeds.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Lychee", 150, AppConstants.FRUITS, 10, "lychee.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Mango", 120, AppConstants.FRUITS, 10, "mango.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Papaya", 40, AppConstants.FRUITS, 10, "papaya.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Pashionfruit", 200, AppConstants.FRUITS, 10, "passionfruit.png", 'peice'));
  //   // this.productsList.push(this.getProduct("Peaches", 140, AppConstants.FRUITS, 10, "peaches.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Pears", 100, AppConstants.FRUITS, 10, "pears.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Pineapple", 130, AppConstants.FRUITS, 10, "pineapple.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Plum", 160, AppConstants.FRUITS, 10, "plum.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Pomegranate", 180, AppConstants.FRUITS, 10, "pomegranate.png", 'kg'));
  //   // this.productsList.push(this.getProduct("Rasberry", 250, AppConstants.FRUITS, 10, "rasberry.png", 'kg'));
  //   // this.productsList.push(this.getProduct("", 200, AppConstants.FRUITS, 10, "", /kg));
  //   // this.productsList.push(this.getProduct("", 200, AppConstants.FRUITS, 10, "", /kg));
  //   // this.productsList.push(this.getProduct("", 200, AppConstants.FRUITS, 10, "", /kg));
  // }

  // generateNestleBrandData() {
  //   this.productsList.push(this.getProduct("Cerelac", 1000, AppConstants.NESTLE, 10, "cerelac.png", 'item'));
  //   this.productsList.push(this.getProduct("Coffeemate", 600, AppConstants.NESTLE, 10, "coffeemate.png", 'item'));
  //   this.productsList.push(this.getProduct("Cornflakes", 1200, AppConstants.NESTLE, 10, "cornflakes.png", 'item'));
  //   this.productsList.push(this.getProduct("KitKat", 800, AppConstants.NESTLE, 10, "kitkat.png", 'item'));
  //   this.productsList.push(this.getProduct("Milkmaid", 500, AppConstants.NESTLE, 10, "milkmaid.png", 'item'));
  //   this.productsList.push(this.getProduct("Milo", 200, AppConstants.NESTLE, 10, "milo.png", 'item'));
  // }

  // generateHersheysBrandData() {
  //   this.productsList.push(this.getProduct("Jollyrancher", 1000, AppConstants.HERSHEYS, 60, "jollyrancher.png", 'item'));
  //   this.productsList.push(this.getProduct("Kisses", 600, AppConstants.HERSHEYS, 30, "kisses.png", 'item'));
  //   this.productsList.push(this.getProduct("Spreads", 1200, AppConstants.HERSHEYS, 100, "spreads.png", 'item'));
  //   this.productsList.push(this.getProduct("Syrup", 800, AppConstants.HERSHEYS, 200, "syrup.png", 'item'));
  //   this.productsList.push(this.getProduct("Whoppers", 500, AppConstants.HERSHEYS, 80, "whoppers.png", 'item'));
  // }

  // generateHeinzBrandData() {
  //   this.productsList.push(this.getProduct("Beanz", 1000, AppConstants.HEINZ, 10, "beanz.png", 'item'));
  //   this.productsList.push(this.getProduct("Ketchup", 600, AppConstants.HEINZ, 10, "ketchup.png", 'item'));
  //   this.productsList.push(this.getProduct("Mustard", 1200, AppConstants.HEINZ, 10, "mustard.png", 'item'));
  //   this.productsList.push(this.getProduct("Saladcream", 800, AppConstants.HEINZ, 10, "saladcream.png", 'item'));
  //   this.productsList.push(this.getProduct("Soup", 500, AppConstants.HEINZ, 10, "soup.png", 'item'));
  //   this.productsList.push(this.getProduct("Sweetrelish", 200, AppConstants.HEINZ, 10, "sweetrelish.png", 'item'));
  // }

  // generateDrOetkarBrandData() {
  //   this.productsList.push(this.getProduct("Bistro", 1000, AppConstants.DR_OETKAR, 10, "bistro.png", 'item'));
  //   this.productsList.push(this.getProduct("Chocolava Muffins", 600, AppConstants.DR_OETKAR, 10, "chocolavamuffins.png", 'item'));
  //   this.productsList.push(this.getProduct("Cocoa Powder", 1200, AppConstants.DR_OETKAR, 10, "cocoapowder.png", 'item'));
  //   this.productsList.push(this.getProduct("Cream", 800, AppConstants.DR_OETKAR, 10, "cream.png", 'item'));
  //   this.productsList.push(this.getProduct("Mayonnaise", 500, AppConstants.DR_OETKAR, 10, "mayonnaise.png", 'item'));
  //   this.productsList.push(this.getProduct("Muffins", 200, AppConstants.DR_OETKAR, 10, "muffins.png", 'item'));
  //   this.productsList.push(this.getProduct("Peanut Butter", 200, AppConstants.DR_OETKAR, 10, "peanutbutter.png", 'item'));
  //   this.productsList.push(this.getProduct("Pizza", 200, AppConstants.DR_OETKAR, 10, "pizza.png", 'item'));
  //   this.productsList.push(this.getProduct("Zucker", 200, AppConstants.DR_OETKAR, 10, "zucker.png", 'item'));
  // }

  // generateKnorrBrandData() {
  //   this.productsList.push(this.getProduct("Cup Soup", 1000, AppConstants.KNORR, 10, "cupsoup.png", 'item'));
  //   this.productsList.push(this.getProduct("Manchurian", 600, AppConstants.KNORR, 10, "manchurian.png", 'item'));
  //   this.productsList.push(this.getProduct("Mast Masala", 1200, AppConstants.KNORR, 10, "mastmasala.png", 'item'));
  //   this.productsList.push(this.getProduct("Minestrone Soup", 800, AppConstants.KNORR, 10, "minestronesoup.png", 'item'));
  //   this.productsList.push(this.getProduct("Pastaslides", 500, AppConstants.KNORR, 10, "pastaslides.png", 'item'));
  //   this.productsList.push(this.getProduct("Quick Pasta", 200, AppConstants.KNORR, 10, "quickpasta.png", 'item'));
  //   this.productsList.push(this.getProduct("Rice", 200, AppConstants.KNORR, 10, "rice.png", 'item'));
  //   this.productsList.push(this.getProduct("Tomato Soup", 200, AppConstants.KNORR, 10, "tomatosoup.png", 'item'));
  // }

  // generateReadyToEatFoodData() {
  //   this.productsList.push(this.getProduct("Maggi", 20, AppConstants.READY, 10, "maggi.png", 'item'));
  //   this.productsList.push(this.getProduct("McCain Fries", 200, AppConstants.READY, 10, "mccainfries.png", 'item'));
  //   this.productsList.push(this.getProduct("Lays", 30, AppConstants.READY, 10, "lays.png", 'item'));
  //   this.productsList.push(this.getProduct("McCain Smileys", 150, AppConstants.READY, 10, "mccainsmileys.png", 'item'));
  // }


  // getProduct(name, price, category, quantiyAvalable, imgName, measureUnit, brand?): Product {
  //   let product: Product = new Product();
  //   product.id = this.productsList.length+1;
  //   product.name = name;
  //   product.price = price;
  //   product.category = category;
  //   product.quantityAvailable = quantiyAvalable;
  //   product.imgName = imgName;
  //   product.measureUnit = measureUnit;
  //   product.brand = brand;
  //   return product;
  // }

  // generateCart() {
  //   let cart: Map<number, number> = new Map<number, number>();
  //   localStorage.setItem(AppConstants.CART, JSON.stringify([...cart]));
  // }

  // generateUserData() {
  //   let userList: Array<User> = new Array<User>();
  //   userList.push(this.getUser('Simran', 'Dhiman', 'simran@gmail.com', 'simran123'));
  //   userList.push(this.getUser('John', 'Doe', 'john@gmail.com', 'john123'));
  //   localStorage.setItem(AppConstants.USERS, JSON.stringify(userList));
  // }

  // getUser(firstName, lastName, email, password): User {
  //   let user: User = new User();
  //   user.firstName = firstName;
  //   user.lastName = lastName;
  //   user.email = email;
  //   user.password = password;
  //   return user;
  // }

}
