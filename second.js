const resturant = [];
const images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9','img10']
const rest_name = [
  "The Hungry Fork",
  "Spice & Soul",
  "Golden Bite",
  "The Rustic Spoon",
  "Urban Tandoor",
  "Olive Gardenia",
  "Curry Junction",
  "The Flavor Factory",
  "Saffron & Sage",
  "Midnight Munchies",
  "Basil & Bread",
  "Royal Feast",
  "The Cozy Plate",
  "Ocean’s Catch",
  "Fire & Grill",
  "The Secret Recipe",
  "Heavenly Bites",
  "Taste Avenue",
  "Garden Delight",
  "Chef’s Table"
];
const food_Types = [
  "Italian",
  "Chinese",
  "Indian",
  "Mexican",
  "Japanese",
  "Mediterranean",
  "Thai",
  "American",
  "French",
  "Middle Eastern"
];
const delhiLocations = [
  "Connaught Place",
  "Karol Bagh",
  "Chandni Chowk",
  "Rajouri Garden",
  "Lajpat Nagar",
  "Saket",
  "Hauz Khas",
  "Dwarka",
  "Greater Kailash",
  "Vasant Kunj"
];



for(let i =0; i<100; i++){
    const obj = {};
    obj["images"]= images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj["rating"]= parseFloat((Math.random()*5).toFixed(1));
    obj["food_types"]= food_Types[Math.floor(Math.random()*10)];
    obj['Price']= Math.floor(Math.random()*2401+100);
    obj['location']= delhiLocations[Math.floor(Math.random()*10)]
    obj['distance']= (Math.random()*10+1).toFixed(1);
    obj['offers'] = Math.floor(Math.random()*30);
    obj['alcohol'] = Math.random()>0.7;
    obj['Rest_open'] = Math.floor(Math.random()*24);
    obj['Rest_close']= (obj['Rest_open']+12)%24;
    resturant.push(obj);

}
//console.log(resturant);
const jsonData = JSON.stringify(resturant, null, 2);
console.log(jsonData);
/*The null means we’re not changing the values.

The 2 means 2 spaces indentation (you can use 4 for more spacing).
as not adding null and 2  convert it into one line string format*/