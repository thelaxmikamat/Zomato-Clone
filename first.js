const resturants = [
  {
    "images": "img4",
    "name": "Garden Delight",
    "rating": 2,
    "food_types": "Thai",
    "Price": 1135,
    "location": "Dwarka",
    "distance": "1.7",
    "offers": 1,
    "alcohol": false,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img5",
    "name": "Olive Gardenia",
    "rating": 2.3,
    "food_types": "Middle Eastern",
    "Price": 582,
    "location": "Connaught Place",
    "distance": "7.0",
    "offers": 27,
    "alcohol": false,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img1",
    "name": "Saffron & Sage",
    "rating": 4.9,
    "food_types": "Middle Eastern",
    "Price": 1845,
    "location": "Rajouri Garden",
    "distance": "9.6",
    "offers": 24,
    "alcohol": false,
    "Rest_open": 16,
    "Rest_close": 4
  },
  {
    "images": "img8",
    "name": "Golden Bite",
    "rating": 3.3,
    "food_types": "Indian",
    "Price": 2027,
    "location": "Vasant Kunj",
    "distance": "5.8",
    "offers": 17,
    "alcohol": false,
    "Rest_open": 6,
    "Rest_close": 18
  },
  {
    "images": "img10",
    "name": "Midnight Munchies",
    "rating": 1.2,
    "food_types": "American",
    "Price": 1413,
    "location": "Connaught Place",
    "distance": "2.6",
    "offers": 28,
    "alcohol": false,
    "Rest_open": 6,
    "Rest_close": 18
  },
  {
    "images": "img8",
    "name": "Ocean’s Catch",
    "rating": 3.7,
    "food_types": "Chinese",
    "Price": 1929,
    "location": "Karol Bagh",
    "distance": "7.4",
    "offers": 17,
    "alcohol": false,
    "Rest_open": 16,
    "Rest_close": 4
  },
  {
    "images": "img1",
    "name": "Basil & Bread",
    "rating": 4.5,
    "food_types": "Japanese",
    "Price": 661,
    "location": "Lajpat Nagar",
    "distance": "10.6",
    "offers": 26,
    "alcohol": true,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img3",
    "name": "Heavenly Bites",
    "rating": 2.1,
    "food_types": "Thai",
    "Price": 1114,
    "location": "Vasant Kunj",
    "distance": "8.9",
    "offers": 10,
    "alcohol": false,
    "Rest_open": 17,
    "Rest_close": 5
  },
  {
    "images": "img10",
    "name": "Fire & Grill",
    "rating": 3.7,
    "food_types": "Mexican",
    "Price": 1091,
    "location": "Rajouri Garden",
    "distance": "5.7",
    "offers": 8,
    "alcohol": false,
    "Rest_open": 6,
    "Rest_close": 18
  },
  {
    "images": "img7",
    "name": "Garden Delight",
    "rating": 2.1,
    "food_types": "Mediterranean",
    "Price": 579,
    "location": "Connaught Place",
    "distance": "7.5",
    "offers": 23,
    "alcohol": true,
    "Rest_open": 12,
    "Rest_close": 0
  },
  {
    "images": "img7",
    "name": "The Secret Recipe",
    "rating": 0.6,
    "food_types": "Japanese",
    "Price": 877,
    "location": "Dwarka",
    "distance": "3.6",
    "offers": 29,
    "alcohol": false,
    "Rest_open": 11,
    "Rest_close": 23
  },
  {
    "images": "img2",
    "name": "Olive Gardenia",
    "rating": 4.4,
    "food_types": "American",
    "Price": 857,
    "location": "Chandni Chowk",
    "distance": "2.0",
    "offers": 26,
    "alcohol": false,
    "Rest_open": 21,
    "Rest_close": 9
  },
  {
    "images": "img5",
    "name": "Basil & Bread",
    "rating": 0.4,
    "food_types": "Middle Eastern",
    "Price": 164,
    "location": "Karol Bagh",
    "distance": "6.8",
    "offers": 14,
    "alcohol": false,
    "Rest_open": 5,
    "Rest_close": 17
  },
  {
    "images": "img2",
    "name": "Basil & Bread",
    "rating": 4.8,
    "food_types": "American",
    "Price": 1866,
    "location": "Hauz Khas",
    "distance": "1.4",
    "offers": 9,
    "alcohol": true,
    "Rest_open": 14,
    "Rest_close": 2
  },
  {
    "images": "img6",
    "name": "Heavenly Bites",
    "rating": 2.1,
    "food_types": "Chinese",
    "Price": 2359,
    "location": "Vasant Kunj",
    "distance": "8.3",
    "offers": 26,
    "alcohol": true,
    "Rest_open": 4,
    "Rest_close": 16
  },
  {
    "images": "img10",
    "name": "Midnight Munchies",
    "rating": 2.9,
    "food_types": "Chinese",
    "Price": 1040,
    "location": "Vasant Kunj",
    "distance": "5.8",
    "offers": 28,
    "alcohol": false,
    "Rest_open": 17,
    "Rest_close": 5
  },
  {
    "images": "img1",
    "name": "Taste Avenue",
    "rating": 3.4,
    "food_types": "American",
    "Price": 377,
    "location": "Dwarka",
    "distance": "10.5",
    "offers": 14,
    "alcohol": true,
    "Rest_open": 5,
    "Rest_close": 17
  },
  {
    "images": "img7",
    "name": "Golden Bite",
    "rating": 2.1,
    "food_types": "Indian",
    "Price": 2084,
    "location": "Lajpat Nagar",
    "distance": "2.2",
    "offers": 24,
    "alcohol": true,
    "Rest_open": 23,
    "Rest_close": 11
  },
  {
    "images": "img2",
    "name": "Golden Bite",
    "rating": 3.4,
    "food_types": "Italian",
    "Price": 1208,
    "location": "Rajouri Garden",
    "distance": "1.2",
    "offers": 25,
    "alcohol": false,
    "Rest_open": 18,
    "Rest_close": 6
  },
  {
    "images": "img8",
    "name": "Basil & Bread",
    "rating": 4.1,
    "food_types": "Italian",
    "Price": 378,
    "location": "Greater Kailash",
    "distance": "5.2",
    "offers": 24,
    "alcohol": false,
    "Rest_open": 3,
    "Rest_close": 15
  },
  {
    "images": "img8",
    "name": "The Hungry Fork",
    "rating": 1.8,
    "food_types": "Chinese",
    "Price": 155,
    "location": "Chandni Chowk",
    "distance": "10.6",
    "offers": 24,
    "alcohol": false,
    "Rest_open": 5,
    "Rest_close": 17
  },
  {
    "images": "img2",
    "name": "The Cozy Plate",
    "rating": 4.8,
    "food_types": "Middle Eastern",
    "Price": 1347,
    "location": "Rajouri Garden",
    "distance": "8.8",
    "offers": 24,
    "alcohol": false,
    "Rest_open": 6,
    "Rest_close": 18
  },
  {
    "images": "img5",
    "name": "Ocean’s Catch",
    "rating": 4.7,
    "food_types": "American",
    "Price": 1383,
    "location": "Hauz Khas",
    "distance": "1.3",
    "offers": 29,
    "alcohol": false,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img7",
    "name": "The Rustic Spoon",
    "rating": 1.2,
    "food_types": "Italian",
    "Price": 432,
    "location": "Lajpat Nagar",
    "distance": "9.5",
    "offers": 1,
    "alcohol": true,
    "Rest_open": 14,
    "Rest_close": 2
  },
  {
    "images": "img4",
    "name": "Heavenly Bites",
    "rating": 0.8,
    "food_types": "American",
    "Price": 360,
    "location": "Chandni Chowk",
    "distance": "9.5",
    "offers": 19,
    "alcohol": true,
    "Rest_open": 22,
    "Rest_close": 10
  },
  {
    "images": "img7",
    "name": "Basil & Bread",
    "rating": 3.5,
    "food_types": "Thai",
    "Price": 1140,
    "location": "Chandni Chowk",
    "distance": "1.7",
    "offers": 15,
    "alcohol": false,
    "Rest_open": 7,
    "Rest_close": 19
  },
  {
    "images": "img6",
    "name": "Basil & Bread",
    "rating": 4.6,
    "food_types": "Chinese",
    "Price": 1609,
    "location": "Chandni Chowk",
    "distance": "7.0",
    "offers": 1,
    "alcohol": true,
    "Rest_open": 22,
    "Rest_close": 10
  },
  {
    "images": "img5",
    "name": "Royal Feast",
    "rating": 3.3,
    "food_types": "Italian",
    "Price": 361,
    "location": "Connaught Place",
    "distance": "8.7",
    "offers": 10,
    "alcohol": true,
    "Rest_open": 1,
    "Rest_close": 13
  },
  {
    "images": "img9",
    "name": "Olive Gardenia",
    "rating": 3.2,
    "food_types": "American",
    "Price": 739,
    "location": "Greater Kailash",
    "distance": "3.3",
    "offers": 27,
    "alcohol": false,
    "Rest_open": 1,
    "Rest_close": 13
  },
  {
    "images": "img7",
    "name": "Midnight Munchies",
    "rating": 2,
    "food_types": "Indian",
    "Price": 1857,
    "location": "Greater Kailash",
    "distance": "2.7",
    "offers": 3,
    "alcohol": false,
    "Rest_open": 21,
    "Rest_close": 9
  },
  {
    "images": "img3",
    "name": "The Flavor Factory",
    "rating": 4.1,
    "food_types": "Mediterranean",
    "Price": 2128,
    "location": "Hauz Khas",
    "distance": "5.9",
    "offers": 9,
    "alcohol": false,
    "Rest_open": 19,
    "Rest_close": 7
  },
  {
    "images": "img6",
    "name": "Basil & Bread",
    "rating": 4,
    "food_types": "Middle Eastern",
    "Price": 1466,
    "location": "Greater Kailash",
    "distance": "2.6",
    "offers": 5,
    "alcohol": false,
    "Rest_open": 17,
    "Rest_close": 5
  },
  {
    "images": "img5",
    "name": "Golden Bite",
    "rating": 3.4,
    "food_types": "Japanese",
    "Price": 1802,
    "location": "Karol Bagh",
    "distance": "3.6",
    "offers": 23,
    "alcohol": false,
    "Rest_open": 7,
    "Rest_close": 19
  },
  {
    "images": "img6",
    "name": "Heavenly Bites",
    "rating": 3.9,
    "food_types": "Japanese",
    "Price": 542,
    "location": "Hauz Khas",
    "distance": "9.0",
    "offers": 15,
    "alcohol": false,
    "Rest_open": 12,
    "Rest_close": 0
  },
  {
    "images": "img10",
    "name": "Midnight Munchies",
    "rating": 1.9,
    "food_types": "Mexican",
    "Price": 1243,
    "location": "Rajouri Garden",
    "distance": "2.0",
    "offers": 0,
    "alcohol": false,
    "Rest_open": 23,
    "Rest_close": 11
  },
  {
    "images": "img2",
    "name": "Curry Junction",
    "rating": 3.7,
    "food_types": "Indian",
    "Price": 538,
    "location": "Hauz Khas",
    "distance": "8.1",
    "offers": 26,
    "alcohol": true,
    "Rest_open": 6,
    "Rest_close": 18
  },
  {
    "images": "img7",
    "name": "Olive Gardenia",
    "rating": 4.5,
    "food_types": "Chinese",
    "Price": 1990,
    "location": "Vasant Kunj",
    "distance": "8.3",
    "offers": 6,
    "alcohol": false,
    "Rest_open": 13,
    "Rest_close": 1
  },
  {
    "images": "img5",
    "name": "Urban Tandoor",
    "rating": 4.8,
    "food_types": "Italian",
    "Price": 478,
    "location": "Lajpat Nagar",
    "distance": "2.6",
    "offers": 16,
    "alcohol": false,
    "Rest_open": 12,
    "Rest_close": 0
  },
  {
    "images": "img1",
    "name": "Olive Gardenia",
    "rating": 2.9,
    "food_types": "Mediterranean",
    "Price": 1289,
    "location": "Chandni Chowk",
    "distance": "5.2",
    "offers": 10,
    "alcohol": true,
    "Rest_open": 16,
    "Rest_close": 4
  },
  {
    "images": "img9",
    "name": "Curry Junction",
    "rating": 4.8,
    "food_types": "American",
    "Price": 300,
    "location": "Chandni Chowk",
    "distance": "1.2",
    "offers": 13,
    "alcohol": false,
    "Rest_open": 10,
    "Rest_close": 22
  },
  {
    "images": "img7",
    "name": "Olive Gardenia",
    "rating": 4.1,
    "food_types": "Middle Eastern",
    "Price": 2109,
    "location": "Connaught Place",
    "distance": "10.1",
    "offers": 22,
    "alcohol": false,
    "Rest_open": 7,
    "Rest_close": 19
  },
  {
    "images": "img7",
    "name": "Fire & Grill",
    "rating": 3.5,
    "food_types": "Italian",
    "Price": 1242,
    "location": "Chandni Chowk",
    "distance": "9.0",
    "offers": 20,
    "alcohol": false,
    "Rest_open": 15,
    "Rest_close": 3
  },
  {
    "images": "img5",
    "name": "The Flavor Factory",
    "rating": 3.2,
    "food_types": "Mexican",
    "Price": 1421,
    "location": "Saket",
    "distance": "4.4",
    "offers": 7,
    "alcohol": false,
    "Rest_open": 4,
    "Rest_close": 16
  },
  {
    "images": "img4",
    "name": "Saffron & Sage",
    "rating": 0.7,
    "food_types": "Italian",
    "Price": 311,
    "location": "Hauz Khas",
    "distance": "9.4",
    "offers": 25,
    "alcohol": false,
    "Rest_open": 13,
    "Rest_close": 1
  },
  {
    "images": "img5",
    "name": "Ocean’s Catch",
    "rating": 4.4,
    "food_types": "Mediterranean",
    "Price": 353,
    "location": "Dwarka",
    "distance": "11.0",
    "offers": 19,
    "alcohol": false,
    "Rest_open": 7,
    "Rest_close": 19
  },
  {
    "images": "img9",
    "name": "Ocean’s Catch",
    "rating": 1.8,
    "food_types": "Italian",
    "Price": 1423,
    "location": "Hauz Khas",
    "distance": "9.8",
    "offers": 21,
    "alcohol": false,
    "Rest_open": 5,
    "Rest_close": 17
  },
  {
    "images": "img4",
    "name": "The Cozy Plate",
    "rating": 4.7,
    "food_types": "Japanese",
    "Price": 390,
    "location": "Greater Kailash",
    "distance": "10.2",
    "offers": 14,
    "alcohol": false,
    "Rest_open": 15,
    "Rest_close": 3
  },
  {
    "images": "img1",
    "name": "Taste Avenue",
    "rating": 3.9,
    "food_types": "Mexican",
    "Price": 724,
    "location": "Saket",
    "distance": "10.9",
    "offers": 10,
    "alcohol": true,
    "Rest_open": 17,
    "Rest_close": 5
  },
  {
    "images": "img9",
    "name": "Chef’s Table",
    "rating": 2.6,
    "food_types": "Indian",
    "Price": 1550,
    "location": "Chandni Chowk",
    "distance": "1.8",
    "offers": 25,
    "alcohol": true,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img4",
    "name": "Saffron & Sage",
    "rating": 2.3,
    "food_types": "Chinese",
    "Price": 988,
    "location": "Karol Bagh",
    "distance": "7.8",
    "offers": 10,
    "alcohol": false,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img2",
    "name": "Olive Gardenia",
    "rating": 4.4,
    "food_types": "Italian",
    "Price": 163,
    "location": "Lajpat Nagar",
    "distance": "9.6",
    "offers": 22,
    "alcohol": false,
    "Rest_open": 21,
    "Rest_close": 9
  },
  {
    "images": "img6",
    "name": "Midnight Munchies",
    "rating": 0.1,
    "food_types": "Japanese",
    "Price": 500,
    "location": "Greater Kailash",
    "distance": "11.0",
    "offers": 14,
    "alcohol": true,
    "Rest_open": 19,
    "Rest_close": 7
  },
  {
    "images": "img9",
    "name": "The Hungry Fork",
    "rating": 3.1,
    "food_types": "Chinese",
    "Price": 984,
    "location": "Dwarka",
    "distance": "1.1",
    "offers": 19,
    "alcohol": false,
    "Rest_open": 19,
    "Rest_close": 7
  },
  {
    "images": "img8",
    "name": "Olive Gardenia",
    "rating": 0.9,
    "food_types": "Middle Eastern",
    "Price": 686,
    "location": "Rajouri Garden",
    "distance": "7.5",
    "offers": 9,
    "alcohol": true,
    "Rest_open": 14,
    "Rest_close": 2
  },
  {
    "images": "img7",
    "name": "Olive Gardenia",
    "rating": 0.4,
    "food_types": "Japanese",
    "Price": 1846,
    "location": "Saket",
    "distance": "8.4",
    "offers": 26,
    "alcohol": false,
    "Rest_open": 17,
    "Rest_close": 5
  },
  {
    "images": "img10",
    "name": "The Secret Recipe",
    "rating": 2.6,
    "food_types": "American",
    "Price": 462,
    "location": "Connaught Place",
    "distance": "2.3",
    "offers": 6,
    "alcohol": false,
    "Rest_open": 18,
    "Rest_close": 6
  },
  {
    "images": "img5",
    "name": "Royal Feast",
    "rating": 2.7,
    "food_types": "French",
    "Price": 519,
    "location": "Saket",
    "distance": "3.2",
    "offers": 12,
    "alcohol": false,
    "Rest_open": 16,
    "Rest_close": 4
  },
  {
    "images": "img6",
    "name": "Taste Avenue",
    "rating": 3,
    "food_types": "Thai",
    "Price": 1421,
    "location": "Hauz Khas",
    "distance": "9.6",
    "offers": 26,
    "alcohol": false,
    "Rest_open": 2,
    "Rest_close": 14
  },
  {
    "images": "img2",
    "name": "Saffron & Sage",
    "rating": 0.4,
    "food_types": "Mexican",
    "Price": 255,
    "location": "Vasant Kunj",
    "distance": "7.1",
    "offers": 23,
    "alcohol": false,
    "Rest_open": 22,
    "Rest_close": 10
  },
  {
    "images": "img8",
    "name": "The Hungry Fork",
    "rating": 2.6,
    "food_types": "Japanese",
    "Price": 2482,
    "location": "Vasant Kunj",
    "distance": "2.6",
    "offers": 16,
    "alcohol": false,
    "Rest_open": 5,
    "Rest_close": 17
  },
  {
    "images": "img10",
    "name": "Spice & Soul",
    "rating": 2.6,
    "food_types": "Chinese",
    "Price": 2155,
    "location": "Dwarka",
    "distance": "10.4",
    "offers": 20,
    "alcohol": true,
    "Rest_open": 7,
    "Rest_close": 19
  },
  {
    "images": "img7",
    "name": "Urban Tandoor",
    "rating": 1.9,
    "food_types": "Chinese",
    "Price": 633,
    "location": "Hauz Khas",
    "distance": "4.1",
    "offers": 11,
    "alcohol": false,
    "Rest_open": 0,
    "Rest_close": 12
  },
  {
    "images": "img2",
    "name": "The Flavor Factory",
    "rating": 2.4,
    "food_types": "French",
    "Price": 1988,
    "location": "Chandni Chowk",
    "distance": "6.4",
    "offers": 1,
    "alcohol": true,
    "Rest_open": 16,
    "Rest_close": 4
  },
  {
    "images": "img1",
    "name": "Fire & Grill",
    "rating": 1.9,
    "food_types": "Italian",
    "Price": 2406,
    "location": "Greater Kailash",
    "distance": "5.5",
    "offers": 12,
    "alcohol": false,
    "Rest_open": 8,
    "Rest_close": 20
  },
  {
    "images": "img7",
    "name": "The Hungry Fork",
    "rating": 4.6,
    "food_types": "French",
    "Price": 1465,
    "location": "Hauz Khas",
    "distance": "1.4",
    "offers": 11,
    "alcohol": false,
    "Rest_open": 19,
    "Rest_close": 7
  },
  {
    "images": "img3",
    "name": "Saffron & Sage",
    "rating": 3,
    "food_types": "Thai",
    "Price": 1679,
    "location": "Lajpat Nagar",
    "distance": "1.2",
    "offers": 9,
    "alcohol": false,
    "Rest_open": 1,
    "Rest_close": 13
  },
  {
    "images": "img10",
    "name": "Taste Avenue",
    "rating": 2.2,
    "food_types": "Chinese",
    "Price": 355,
    "location": "Karol Bagh",
    "distance": "8.0",
    "offers": 26,
    "alcohol": false,
    "Rest_open": 10,
    "Rest_close": 22
  },
  {
    "images": "img7",
    "name": "Royal Feast",
    "rating": 1.6,
    "food_types": "Mediterranean",
    "Price": 165,
    "location": "Dwarka",
    "distance": "4.8",
    "offers": 13,
    "alcohol": true,
    "Rest_open": 3,
    "Rest_close": 15
  },
  {
    "images": "img2",
    "name": "Basil & Bread",
    "rating": 4.1,
    "food_types": "Chinese",
    "Price": 311,
    "location": "Greater Kailash",
    "distance": "2.7",
    "offers": 24,
    "alcohol": true,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img10",
    "name": "Basil & Bread",
    "rating": 3.1,
    "food_types": "Mediterranean",
    "Price": 279,
    "location": "Greater Kailash",
    "distance": "6.7",
    "offers": 20,
    "alcohol": true,
    "Rest_open": 11,
    "Rest_close": 23
  },
  {
    "images": "img4",
    "name": "The Hungry Fork",
    "rating": 2.4,
    "food_types": "Mediterranean",
    "Price": 1806,
    "location": "Karol Bagh",
    "distance": "5.6",
    "offers": 21,
    "alcohol": true,
    "Rest_open": 0,
    "Rest_close": 12
  },
  {
    "images": "img5",
    "name": "The Hungry Fork",
    "rating": 3,
    "food_types": "Mexican",
    "Price": 1795,
    "location": "Chandni Chowk",
    "distance": "5.9",
    "offers": 16,
    "alcohol": true,
    "Rest_open": 12,
    "Rest_close": 0
  },
  {
    "images": "img7",
    "name": "The Cozy Plate",
    "rating": 1.6,
    "food_types": "Japanese",
    "Price": 623,
    "location": "Dwarka",
    "distance": "5.9",
    "offers": 28,
    "alcohol": false,
    "Rest_open": 16,
    "Rest_close": 4
  },
  {
    "images": "img3",
    "name": "Heavenly Bites",
    "rating": 3.8,
    "food_types": "Indian",
    "Price": 522,
    "location": "Connaught Place",
    "distance": "5.6",
    "offers": 9,
    "alcohol": true,
    "Rest_open": 16,
    "Rest_close": 4
  },
  {
    "images": "img8",
    "name": "The Secret Recipe",
    "rating": 3.4,
    "food_types": "Thai",
    "Price": 1503,
    "location": "Connaught Place",
    "distance": "7.0",
    "offers": 24,
    "alcohol": true,
    "Rest_open": 23,
    "Rest_close": 11
  },
  {
    "images": "img5",
    "name": "The Flavor Factory",
    "rating": 1.4,
    "food_types": "Italian",
    "Price": 1841,
    "location": "Dwarka",
    "distance": "9.3",
    "offers": 29,
    "alcohol": false,
    "Rest_open": 13,
    "Rest_close": 1
  },
  {
    "images": "img6",
    "name": "Heavenly Bites",
    "rating": 2.1,
    "food_types": "Indian",
    "Price": 1394,
    "location": "Lajpat Nagar",
    "distance": "8.3",
    "offers": 24,
    "alcohol": false,
    "Rest_open": 14,
    "Rest_close": 2
  },
  {
    "images": "img8",
    "name": "Garden Delight",
    "rating": 4,
    "food_types": "Indian",
    "Price": 2070,
    "location": "Hauz Khas",
    "distance": "1.1",
    "offers": 0,
    "alcohol": true,
    "Rest_open": 21,
    "Rest_close": 9
  },
  {
    "images": "img7",
    "name": "Urban Tandoor",
    "rating": 1.4,
    "food_types": "French",
    "Price": 527,
    "location": "Greater Kailash",
    "distance": "7.6",
    "offers": 8,
    "alcohol": false,
    "Rest_open": 2,
    "Rest_close": 14
  },
  {
    "images": "img6",
    "name": "Basil & Bread",
    "rating": 4,
    "food_types": "Italian",
    "Price": 1103,
    "location": "Hauz Khas",
    "distance": "9.1",
    "offers": 10,
    "alcohol": true,
    "Rest_open": 6,
    "Rest_close": 18
  },
  {
    "images": "img7",
    "name": "Ocean’s Catch",
    "rating": 4,
    "food_types": "Indian",
    "Price": 254,
    "location": "Dwarka",
    "distance": "8.6",
    "offers": 28,
    "alcohol": false,
    "Rest_open": 22,
    "Rest_close": 10
  },
  {
    "images": "img1",
    "name": "Urban Tandoor",
    "rating": 2.6,
    "food_types": "French",
    "Price": 1116,
    "location": "Connaught Place",
    "distance": "9.6",
    "offers": 14,
    "alcohol": false,
    "Rest_open": 19,
    "Rest_close": 7
  },
  {
    "images": "img3",
    "name": "Fire & Grill",
    "rating": 2.7,
    "food_types": "Italian",
    "Price": 2336,
    "location": "Saket",
    "distance": "5.7",
    "offers": 29,
    "alcohol": false,
    "Rest_open": 13,
    "Rest_close": 1
  },
  {
    "images": "img10",
    "name": "Chef’s Table",
    "rating": 4.5,
    "food_types": "Thai",
    "Price": 1373,
    "location": "Rajouri Garden",
    "distance": "9.5",
    "offers": 11,
    "alcohol": false,
    "Rest_open": 15,
    "Rest_close": 3
  },
  {
    "images": "img7",
    "name": "Heavenly Bites",
    "rating": 3.3,
    "food_types": "Japanese",
    "Price": 1610,
    "location": "Greater Kailash",
    "distance": "4.1",
    "offers": 29,
    "alcohol": true,
    "Rest_open": 4,
    "Rest_close": 16
  },
  {
    "images": "img10",
    "name": "Spice & Soul",
    "rating": 3.5,
    "food_types": "Mexican",
    "Price": 476,
    "location": "Connaught Place",
    "distance": "6.9",
    "offers": 22,
    "alcohol": true,
    "Rest_open": 0,
    "Rest_close": 12
  },
  {
    "images": "img7",
    "name": "Garden Delight",
    "rating": 3.8,
    "food_types": "Indian",
    "Price": 907,
    "location": "Karol Bagh",
    "distance": "1.2",
    "offers": 7,
    "alcohol": false,
    "Rest_open": 12,
    "Rest_close": 0
  },
  {
    "images": "img6",
    "name": "The Flavor Factory",
    "rating": 3.6,
    "food_types": "American",
    "Price": 988,
    "location": "Greater Kailash",
    "distance": "5.1",
    "offers": 4,
    "alcohol": false,
    "Rest_open": 6,
    "Rest_close": 18
  },
  {
    "images": "img9",
    "name": "Golden Bite",
    "rating": 0,
    "food_types": "Indian",
    "Price": 1200,
    "location": "Connaught Place",
    "distance": "4.4",
    "offers": 6,
    "alcohol": true,
    "Rest_open": 11,
    "Rest_close": 23
  },
  {
    "images": "img5",
    "name": "The Flavor Factory",
    "rating": 2.8,
    "food_types": "Middle Eastern",
    "Price": 1070,
    "location": "Connaught Place",
    "distance": "2.8",
    "offers": 4,
    "alcohol": true,
    "Rest_open": 5,
    "Rest_close": 17
  },
  {
    "images": "img4",
    "name": "Curry Junction",
    "rating": 3.9,
    "food_types": "Indian",
    "Price": 2146,
    "location": "Saket",
    "distance": "8.2",
    "offers": 27,
    "alcohol": false,
    "Rest_open": 3,
    "Rest_close": 15
  },
  {
    "images": "img8",
    "name": "Golden Bite",
    "rating": 2.9,
    "food_types": "French",
    "Price": 423,
    "location": "Dwarka",
    "distance": "2.1",
    "offers": 9,
    "alcohol": false,
    "Rest_open": 12,
    "Rest_close": 0
  },
  {
    "images": "img2",
    "name": "The Flavor Factory",
    "rating": 1.7,
    "food_types": "Thai",
    "Price": 1136,
    "location": "Chandni Chowk",
    "distance": "4.9",
    "offers": 15,
    "alcohol": true,
    "Rest_open": 20,
    "Rest_close": 8
  },
  {
    "images": "img1",
    "name": "Urban Tandoor",
    "rating": 1.6,
    "food_types": "Thai",
    "Price": 1206,
    "location": "Chandni Chowk",
    "distance": "8.4",
    "offers": 0,
    "alcohol": true,
    "Rest_open": 21,
    "Rest_close": 9
  },
  {
    "images": "img7",
    "name": "The Rustic Spoon",
    "rating": 2,
    "food_types": "Japanese",
    "Price": 1775,
    "location": "Dwarka",
    "distance": "7.3",
    "offers": 23,
    "alcohol": true,
    "Rest_open": 22,
    "Rest_close": 10
  },
  {
    "images": "img2",
    "name": "Ocean’s Catch",
    "rating": 3.2,
    "food_types": "Middle Eastern",
    "Price": 2311,
    "location": "Chandni Chowk",
    "distance": "4.5",
    "offers": 20,
    "alcohol": true,
    "Rest_open": 17,
    "Rest_close": 5
  },
  {
    "images": "img1",
    "name": "The Flavor Factory",
    "rating": 2.1,
    "food_types": "American",
    "Price": 2229,
    "location": "Hauz Khas",
    "distance": "6.9",
    "offers": 22,
    "alcohol": false,
    "Rest_open": 17,
    "Rest_close": 5
  },
  {
    "images": "img3",
    "name": "The Flavor Factory",
    "rating": 2.5,
    "food_types": "Italian",
    "Price": 1406,
    "location": "Karol Bagh",
    "distance": "7.9",
    "offers": 21,
    "alcohol": true,
    "Rest_open": 10,
    "Rest_close": 22
  },
  {
    "images": "img5",
    "name": "The Hungry Fork",
    "rating": 2.3,
    "food_types": "French",
    "Price": 896,
    "location": "Karol Bagh",
    "distance": "3.0",
    "offers": 12,
    "alcohol": true,
    "Rest_open": 21,
    "Rest_close": 9
  },
  {
    "images": "img1",
    "name": "Heavenly Bites",
    "rating": 2.2,
    "food_types": "American",
    "Price": 950,
    "location": "Rajouri Garden",
    "distance": "1.1",
    "offers": 0,
    "alcohol": false,
    "Rest_open": 5,
    "Rest_close": 17
  }
]

function getresturant(resturants){
  const root = document.getElementById('root');
  resturants.forEach(resturant => {
    
    //create a card info
             // 1 iamge
             //2 card content
                 // a card header - name, rating
                 //b card footer - food type, price
                 //c card location -  resturant location, distance
     
                 
     // create a card
     const card = document.createElement('div');
     card.classList.add('card');  
     
     //create imge
     const image= document.createElement('img');
     image.src= `img/${resturant.images}.jpeg`;

     //card content
     const card_content = document.createElement('div');
     card_content.classList.add('card-content');

     //card header
     const card_header = document.createElement('div');
     card_header.classList.add('card-header');

          //name and rating
     const h3 = document.createElement('h3')
     h3.textContent= resturant.name;

     const rate = document.createElement('span')
     rate.textContent= 'Rating: '+resturant.rating;
     rate.classList.add('rating');

     card_header.appendChild(h3);
     card_header.appendChild(rate);

     //card footer
     const card_footer = document.createElement('div');
     card_footer.classList.add('card-footer');

         //food type, price
     const food = document.createElement('span');
     food.textContent= resturant.food_types;

     const price_two = document.createElement('span');
     price_two.textContent= "₹"+resturant.Price;
     
    card_footer.appendChild(food);
    card_footer.appendChild(price_two);

     //card location
     const card_location = document.createElement('div');
     card_location.classList.add('card-location');

     //resturant location, distance
     const locations = document.createElement('span');
     locations.textContent= resturant.location;

      const distances = document.createElement('span');
     distances.textContent= resturant.distance + 'km';

     card_location.appendChild(locations);
     card_location.appendChild(distances);

     //add all parts in card content in

     card_content.appendChild(card_header);
     card_content.appendChild(card_footer);
     card_content.appendChild(card_location);

     // now img and content in card

     card.appendChild(image);
     card.appendChild(card_content);

     root.appendChild(card);
  });
}

getresturant(resturants);
// filtering out alcohol serve resturant

document.getElementById('Alcohol').addEventListener('click',()=>{
  const result= resturants.filter((obj)=>obj.alcohol);
  document.getElementById('root').innerHTML= "";
  getresturant(result);
  //jab humne inner.html nhi kiya tha tab sara data show ho rah tha aur alchol ka data niche aa raha tha
  // lekin hume sirf alchol ka data chahiye sabka nhi toh humne id ko selcet kiya jo ki root haqi 
  // and then inner html ko khali karwaya
})

//filter out 4.5+ rating

document.getElementById('Rating').addEventListener('click',()=>{
  const result= resturants.filter((obj)=> obj.rating>4.5);
  document.getElementById('root').replaceChildren();
  getresturant(result);

  //inner html ="" and replace child ka same kaam h idhar but replace childern is best one
})
//offers
document.getElementById('Offers').addEventListener('click',()=>{
  const result= resturants.filter((obj)=> obj.offers>0);
  document.getElementById('root').replaceChildren();
  getresturant(result);
})
//open
document.getElementById('Open').addEventListener('click',()=>{
  const result= resturants.filter((obj)=> obj.Rest_open>0);
  document.getElementById('root').replaceChildren();
  getresturant(result);
})
//filter
document.getElementById('Filter').addEventListener('click', ()=>{
  document.getElementById('filterPopup').classList.remove('hidden');
})
//making filter work
document.getElementById('applyfilter').addEventListener('click',()=>{
  const element = document.querySelector('input[name= "filterOption"]:checked');
  const ans= element.value;

  if(ans=='rating'){
    resturants.sort((a,b)=> b.rating-a.rating);
  }
    else if(ans=='highLow'){
      resturants.sort((a,b)=> b.Price-a.Price);
  }
  else if(ans=='lowHigh'){
    resturants.sort((a,b)=> a.Price-b.Price);
  }
   else if(ans=='distance'){
    resturants.sort((a,b)=> a.distance-b.distance);
  }
  document.getElementById('root').replaceChildren();
  document.getElementById('filterPopup').classList.add('hidden');
  getresturant(resturants);
})
//close
document.getElementById('closeFilter').addEventListener('click',()=>{
  document.getElementById('filterPopup').classList.add('hidden');
})
document.getElementById('check').addEventListener('click', ()=>{
  const result = resturants.filter((obj)=>obj.offers<=20);
  document.getElementById('root').replaceChildren();
  getresturant(result);
})
//make search bar work
function match(look,query){
  return look.name.toLowerCase().includes(query)||
look.location.toLowerCase().includes(query);
}
const searchInput= document.getElementById('search');
searchInput.addEventListener('keydown', function(e){
  if(e.key==='Enter'){
    e.preventDefault();
  
  const search= searchInput.value.toLowerCase();
  const result = resturants.filter(look=> match(look, search));

  document.getElementById('root').replaceChildren();
  getresturant(result);
  }
})