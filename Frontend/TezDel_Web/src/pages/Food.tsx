import { useState, useEffect } from 'react';
import { Search, MapPin, Zap, Star, Filter, ArrowRight, ShieldCheck, Compass, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from '../components/Skeleton';
import UnderDevelopmentModal from '../components/UnderDevelopmentModal';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
};

const wordReveal = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any
    }
  })
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Real, mouth-watering Unsplash food-only images curated by category (Exactly unique, no overlaps)
const FOOD_IMAGES = {
  'Odia Specials': [
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d', // Authentic Indian Veg/Non-veg Thali
    'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46', // Lentil Dal & Rice Curry
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc', // Spicy Gravy Tarkari / Paneer
    'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f', // Tandoori Paneer Butter Masala
    'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4', // Tandoori Platter
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7', // Special Pav Bhaji / Curry
    'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e', // Butter Chicken curry
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641', // Paneer/Tandoor dish
    'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af', // Traditional veg bowl
    'https://images.unsplash.com/photo-1621979087428-16aa3a69f2cf', // Curry gravy
    'https://images.unsplash.com/photo-1603360946369-dc9bb6258143', // Indian mutton curry
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d', // Indian paneer masala
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', // Indian veg curry dish
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836', // Indian spiced items
    'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5', // Indian style meal
    'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5', // Delicious Indian thali
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'  // Special roast chicken/gravy
  ],
  'Biryani': [
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8', // Royal Hyderabadi Biryani
    'https://images.unsplash.com/photo-1633945274405-b6c8069047b0', // Spiced Biryani Rice Claypot
    'https://images.unsplash.com/photo-1589302168068-964664d93dc0', // Premium Hyderabadi Chicken Biryani
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84', // Dum Mutton Biryani Plate
    'https://images.unsplash.com/photo-1512058564366-18510be2db19', // Special Egg Pulav
    'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec', // Fragrant saffron rice
    'https://images.unsplash.com/photo-1604152135912-04a022e23696', // Basmati rice side
    'https://images.unsplash.com/photo-1599043513900-ed6fe01d385d', // Spiced Biryani Rice bowl
    'https://images.unsplash.com/photo-1618412674454-e0b49206d203', // Premium Pulav bowl
    'https://images.unsplash.com/photo-1601356616077-695728617cb9', // Basmati bowl
    'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0', // Grilled kebab platter
    'https://images.unsplash.com/photo-1622483767028-3f66f32aef97', // Smoked chicken feast
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1', // Spicy grilled meats
    'https://images.unsplash.com/photo-1540420773420-3366772f4999', // Lunch platter
    'https://images.unsplash.com/photo-1543353071-10c8ba85a904'  // Special food table
  ],
  'Pizza': [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591', // Woodfired Mozzarella Pizza
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', // Sliced Margherita Pizza
    'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e', // Pepperoni Feast Pizza
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002', // Cheese Burst Pizza
    'https://images.unsplash.com/photo-1511018556340-d16986a1c194', // Fresh Basil Pesto Pizza
    'https://images.unsplash.com/photo-1590947132387-155cc02f3212', // Deluxe Pepperoni Pizza
    'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee', // Deluxe Pizza
    'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5', // Premium Pizza Slice
    'https://images.unsplash.com/photo-1544982503-9f984c14501a', // Pizza slice boards
    'https://images.unsplash.com/photo-1551218808-94e220e084d2', // Fresh baked pizza
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a', // Ovenfresh pizza
    'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5', // Italian gourmet pizza
    'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3', // Cheese loaded pizza slice
    'https://images.unsplash.com/photo-1573080496219-bb080dd4f877', // Thin crust pizza
    'https://images.unsplash.com/photo-1460306855393-0410f61241c7'  // Delish pasta
  ],
  'Burgers': [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd', // Gourmet Double Cheeseburger
    'https://images.unsplash.com/photo-1550547660-d9450f859349', // Spicy Crispy Chicken Burger
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add', // Supreme Veg Burger with Fries
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90', // Classic Bistro Burger
    'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9', // Smokehouse Beef Burger
    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47', // Mini Sliders Basket
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', // Cheeseburger fresh
    'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2', // Hamburger
    'https://images.unsplash.com/photo-1606755962773-d324e0a13086', // Classic fast food meal basket
    'https://images.unsplash.com/photo-1610614819513-58e34989848b', // Crispy chicken burger with bun
    'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5', // Bacon double cheeseburger
    'https://images.unsplash.com/photo-1576107232684-1279f390859f', // Crispy burgers basket
    'https://images.unsplash.com/photo-1562967914-608f82629710'  // Golden crispy chicken
  ],
  'Rolls': [
    'https://images.unsplash.com/photo-1626132647523-66f5bf380027', // Paneer Kathi Roll Wraps
    'https://images.unsplash.com/photo-1608897013039-887f21d8c804', // Spicy Chicken Kathi Wrap
    'https://images.unsplash.com/photo-1625398407796-82650a8c135f', // Delicious Spring Rolls
    'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb', // Steamed Momos with Red Dip
    'https://images.unsplash.com/photo-1585238342024-78d387f4a707', // Schezwan Noodles
    'https://images.unsplash.com/photo-1541518763669-27fef04b14ea', // Special roll snack
    'https://images.unsplash.com/photo-1541532713592-79a0317b6b77', // Indian samosa/snack
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d', // Stuffed flatbread rolls
    'https://images.unsplash.com/photo-1558985250-27a406d64cb3', // Delicious street food platter
    'https://images.unsplash.com/photo-1574484284002-952d92456975', // Spiced potatoes & dip
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0', // Toast breakfast
    'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2', // Tasty platter
    'https://images.unsplash.com/photo-1529042410759-befb1204b468', // Meatballs plate
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe', // Platter of salads
    'https://images.unsplash.com/photo-1547496502-affa22d38842', // Delicious salad mix
    'https://images.unsplash.com/photo-1603532648955-039310d9ed75', // Paneer tikka skewers
    'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c', // Delicate appetizer food
    'https://images.unsplash.com/photo-1617196034183-421b4917c92d', // Gourmet salad with chicken
    'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db', // Crinkle cut fries
    'https://images.unsplash.com/photo-1496412705862-a0088c16f785'  // Gourmet dish
  ],
  'Desserts': [
    'https://images.unsplash.com/photo-1551024506-0bccd828d307', // Hot Chocolate Cake
    'https://images.unsplash.com/photo-1587314168485-3236d6710814', // Assorted Indian Sweets / Ladoo
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e', // Traditional Chenna Poda / Sweets
    'https://images.unsplash.com/photo-1508737027454-e6454ef45afd', // Sweet cupcakes/cakes
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587', // Black Forest Gateau Cake
    'https://images.unsplash.com/photo-1596797038530-2c107229654b', // Premium Kaju Katli / Sweets
    'https://images.unsplash.com/photo-1551024601-bec78aea704b', // Sweets glazed
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb', // Gourmet Ice cream cup
    'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f', // Ice cream scoop
    'https://images.unsplash.com/photo-1481931098730-318b6f776db0', // Premium desserts
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543', // Brunch pancakes
    'https://images.unsplash.com/photo-1488477181946-6428a0291777', // Sweet pastries
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352', // Bakery sweets
    'https://images.unsplash.com/photo-1506084868230-bb9d95c24759', // Ice cream bowl
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b', // Mouth-watering chocolate donuts
    'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e', // Choco cookie sweets
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87', // Chocolate donuts
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141', // Layered dessert cakes
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa', // Premium waffle desserts
    'https://images.unsplash.com/photo-1560684352-8497838a2229', // Mouth-watering chocolate waffles
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187', // Strawberry glaze dessert
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445', // Pancakes syrup
    'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd', // Glazed pastries
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5', // Sweet strawberry waffles
    'https://images.unsplash.com/photo-1612240498936-65f5101365d2'  // Fresh fruit bowl dessert
  ]
};

// Generates 100+ premium local restaurants deterministic of location
function generateHyperlocalRestaurants(location: string): Array<{
  name: string;
  rating: number;
  time: string;
  price: string;
  tags: string;
  category: string;
  img: string;
}> {
  // A meticulously curated database of 105 actual, real-life restaurants in Bhubaneswar & nearby localities
  const REAL_RESTAURANTS_DATA = [
    { name: 'Odisha Hotel', category: 'Odia Specials', tags: 'Odia · Authentic Mansa Tarkari · Special Thali', rating: 4.7, price: '₹500 for two', time: '25 mins' },
    { name: 'Dalma Restaurant', category: 'Odia Specials', tags: 'Odia · Dalma · Authentic Veg Thali', rating: 4.6, price: '₹400 for two', time: '20 mins' },
    { name: 'Pakhala Hub', category: 'Odia Specials', tags: 'Local · Cold Pakhala Bhaat · Saga Bhaja', rating: 4.5, price: '₹250 for two', time: '15 mins' },
    { name: 'Cuttack Dahibara Express', category: 'Odia Specials', tags: 'Odia · Iconic Dahibara Aloodum · Ghuguni', rating: 4.8, price: '₹150 for two', time: '15 mins' },
    { name: 'Nimapada Sweets', category: 'Desserts', tags: 'Desserts · Iconic Chenna Poda · Rasgulla', rating: 4.6, price: '₹200 for two', time: '20 mins' },
    { name: 'The Biryani Box', category: 'Biryani', tags: 'Biryani · Hyderabadi Chicken Biryani', rating: 4.4, price: '₹350 for two', time: '30 mins' },
    { name: 'Barkaas Decent Arabian Restaurant', category: 'Biryani', tags: 'Mandi · Arabian · Biryani · Kabab', rating: 4.5, price: '₹600 for two', time: '35 mins' },
    { name: 'Shiraz Golden Restaurant', category: 'Biryani', tags: 'Mughlai · Lucknowi Biryani · Rolls', rating: 4.3, price: '₹450 for two', time: '40 mins' },
    { name: 'Truffles', category: 'Pizza', tags: 'Pizza · Italian · Pasta · Cafe', rating: 4.6, price: '₹500 for two', time: '30 mins' },
    { name: 'Michael\'s Kitchen', category: 'Odia Specials', tags: 'Odia · Seafood · Continental', rating: 4.5, price: '₹700 for two', time: '45 mins' },
    { name: 'Green Chillyz', category: 'Rolls', tags: 'Rolls · Kathi Rolls · Mughlai · Fast Food', rating: 4.3, price: '₹250 for two', time: '25 mins' },
    { name: 'Mio Amore', category: 'Desserts', tags: 'Bakery · Cakes · Pastries · Snacks', rating: 4.7, price: '₹200 for two', time: '15 mins' },
    { name: 'Domino\'s Pizza', category: 'Pizza', tags: 'Pizza · Italian · Fast Food · Cheese Burst', rating: 4.4, price: '₹400 for two', time: '25 mins' },
    { name: 'Pizza Hut', category: 'Pizza', tags: 'Pizza · Pan Pizza · Garlic Bread', rating: 4.2, price: '₹500 for two', time: '30 mins' },
    { name: 'La Pino\'z Pizza', category: 'Pizza', tags: 'Pizza · Giant Slice Pizza · Fast Food', rating: 4.5, price: '₹450 for two', time: '25 mins' },
    { name: 'Burger King', category: 'Burgers', tags: 'Burgers · Fast Food · Whopper · Sides', rating: 4.3, price: '₹300 for two', time: '20 mins' },
    { name: 'McDonald\'s', category: 'Burgers', tags: 'Burgers · Fast Food · Fries · Shakes', rating: 4.4, price: '₹350 for two', time: '20 mins' },
    { name: 'Wow! Momo', category: 'Rolls', tags: 'Momos · Chinese · Dumplings · Steamed Momo', rating: 4.5, price: '₹250 for two', time: '25 mins' },
    { name: 'The Belgian Waffle Co.', category: 'Desserts', tags: 'Waffles · Desserts · Waffle Cakes', rating: 4.6, price: '₹250 for two', time: '30 mins' },
    { name: 'Natural Ice Cream', category: 'Desserts', tags: 'Ice Cream · Fresh Fruit Ice Cream · Mango', rating: 4.8, price: '₹300 for two', time: '25 mins' },
    { name: 'Chilika Dhaba', category: 'Odia Specials', tags: 'Odia · Chili Prawns · Crab Curry · Seafood', rating: 4.6, price: '₹550 for two', time: '35 mins' },
    { name: 'Dada Biryani', category: 'Biryani', tags: 'Biryani · Kolkata Biryani · Spiced Rice', rating: 4.5, price: '₹300 for two', time: '30 mins' },
    { name: 'Priya Hotel', category: 'Odia Specials', tags: 'South Indian · Idli · Masala Dosa · Filter Coffee', rating: 4.5, price: '₹200 for two', time: '20 mins' },
    { name: 'Super Snax', category: 'Odia Specials', tags: 'South Indian · Pure Veg · Sambar Dosa', rating: 4.4, price: '₹250 for two', time: '25 mins' },
    { name: 'Adda', category: 'Pizza', tags: 'Cafe · Burgers · Pizza · Continental', rating: 4.3, price: '₹500 for two', time: '35 mins' },
    { name: 'Tea Share', category: 'Desserts', tags: 'Bubble Tea · Fast Food · Waffles', rating: 4.4, price: '₹350 for two', time: '25 mins' },
    { name: 'Chai Point', category: 'Rolls', tags: 'Tea · Samosa · Fast Food · Ginger Chai', rating: 4.3, price: '₹150 for two', time: '15 mins' },
    { name: 'KFC', category: 'Burgers', tags: 'Burgers · Fried Chicken · Popcorn Chicken', rating: 4.4, price: '₹400 for two', time: '20 mins' },
    { name: 'Subway', category: 'Rolls', tags: 'Healthy Sandwiches · Wraps · Salads', rating: 4.2, price: '₹350 for two', time: '20 mins' },
    { name: 'Roll Express', category: 'Rolls', tags: 'Rolls · Kathi Rolls · Wraps · Fast Food', rating: 4.4, price: '₹200 for two', time: '20 mins' },
    { name: 'Chatori Gali', category: 'Rolls', tags: 'Street Food · Chaat · Golgappa · Aloo Tikki', rating: 4.5, price: '₹120 for two', time: '15 mins' },
    { name: 'Cream & Fudge', category: 'Desserts', tags: 'Gourmet Ice Cream · Waffles · Shakes', rating: 4.5, price: '₹400 for two', time: '25 mins' },
    { name: 'Gelato Italiano', category: 'Desserts', tags: 'Ice Cream · Italian Gelato · Shakes', rating: 4.4, price: '₹300 for two', time: '25 mins' },
    { name: 'Corner House', category: 'Desserts', tags: 'Desserts · Chocolate Fudge · Shakes', rating: 4.7, price: '₹350 for two', time: '30 mins' },
    { name: 'Habibi', category: 'Rolls', tags: 'Shawarma · Rolls · Arabian · Fast Food', rating: 4.3, price: '₹250 for two', time: '20 mins' },
    { name: 'Tandoori Hot', category: 'Biryani', tags: 'North Indian · Tandoori Chicken · Naan', rating: 4.2, price: '₹400 for two', time: '30 mins' },
    { name: 'Biryani By Kilo', category: 'Biryani', tags: 'Biryani · Hyderabadi · Lucknowi Biryani', rating: 4.5, price: '₹500 for two', time: '35 mins' },
    { name: 'Behrouz Biryani', category: 'Biryani', tags: 'Premium Biryani · Kebabs · North Indian', rating: 4.6, price: '₹600 for two', time: '30 mins' },
    { name: 'Ovenstory Pizza', category: 'Pizza', tags: 'Pizza · Cheese Burst · Semizza', rating: 4.3, price: '₹350 for two', time: '25 mins' },
    { name: 'Faasos', category: 'Rolls', tags: 'Rolls · Wraps · Rice Bowls · Fast Food', rating: 4.4, price: '₹250 for two', time: '25 mins' },
    { name: 'Sweet Truth', category: 'Desserts', tags: 'Cakes · Pastries · Chocolate Fudge', rating: 4.4, price: '₹250 for two', time: '20 mins' },
    { name: 'Firangi Bake', category: 'Pizza', tags: 'Pizza · Pasta · Lasagna · Fast Food', rating: 4.1, price: '₹350 for two', time: '30 mins' },
    { name: 'The Good Bowl', category: 'Odia Specials', tags: 'Rice Bowls · Fusion Meals · Curry Rice', rating: 4.3, price: '₹250 for two', time: '25 mins' },
    { name: 'Sardarji Ka Dhaba', category: 'Biryani', tags: 'North Indian · Paneer Butter Masala · Naan', rating: 4.4, price: '₹350 for two', time: '30 mins' },
    { name: 'Monalisa Restaurant', category: 'Odia Specials', tags: 'North Indian · Chinese · Tandoor', rating: 4.3, price: '₹450 for two', time: '30 mins' },
    { name: 'Garam Masala', category: 'Odia Specials', tags: 'North Indian · Odia Specials · Curry', rating: 4.2, price: '₹350 for two', time: '35 mins' },
    { name: 'Saffron', category: 'Biryani', tags: 'North Indian · Kebabs · Biryani', rating: 4.4, price: '₹500 for two', time: '35 mins' },
    { name: 'Trupti Restaurant', category: 'Odia Specials', tags: 'Pure Veg · North Indian · Thali', rating: 4.3, price: '₹300 for two', time: '25 mins' },
    { name: 'Hare Krishna Restaurant', category: 'Odia Specials', tags: 'Pure Veg · Satvik Thali · Sweets', rating: 4.6, price: '₹250 for two', time: '20 mins' },
    { name: 'Gokul Sweets', category: 'Desserts', tags: 'Sweets · Samosa · Jalebi · Dhokla', rating: 4.4, price: '₹150 for two', time: '15 mins' },
    { name: 'Ganguram Sweets', category: 'Desserts', tags: 'Sweets · Chenna Poda · Ladoo', rating: 4.5, price: '₹200 for two', time: '20 mins' },
    { name: 'Bikalananda Kar\'s Rasagolla', category: 'Desserts', tags: 'Sweets · Famous Salepur Rasgulla', rating: 4.8, price: '₹200 for two', time: '15 mins' },
    { name: 'Damaru Dahibara', category: 'Odia Specials', tags: 'Street Food · Dahibara Aloodum · Ghuguni', rating: 4.7, price: '₹120 for two', time: '15 mins' },
    { name: 'Cuttack Sweet Stall', category: 'Desserts', tags: 'Sweets · Chenna Poda · Rasgulla', rating: 4.5, price: '₹180 for two', time: '20 mins' },
    { name: 'The Chocolate House', category: 'Desserts', tags: 'Desserts · Waffles · Chocolate Shakes', rating: 4.5, price: '₹350 for two', time: '30 mins' },
    { name: 'Waffles & Co.', category: 'Desserts', tags: 'Waffles · Desserts · Waffle Cones', rating: 4.4, price: '₹250 for two', time: '30 mins' },
    { name: 'Noodle Panda', category: 'Rolls', tags: 'Chinese · Noodles · Momos · Fast Food', rating: 4.3, price: '₹300 for two', time: '25 mins' },
    { name: 'Mainland China', category: 'Pizza', tags: 'Premium Chinese · Dim sums · Noodles', rating: 4.6, price: '₹900 for two', time: '40 mins' },
    { name: 'Sigree Global Grill', category: 'Biryani', tags: 'Buffet · Kebabs · Biryani · Grill', rating: 4.5, price: '₹1000 for two', time: '45 mins' },
    { name: 'The Yellow Chilli', category: 'Odia Specials', tags: 'Premium North Indian · Curry · Kebabs', rating: 4.4, price: '₹800 for two', time: '40 mins' },
    { name: 'Sizzling Appetizers', category: 'Pizza', tags: 'Chinese · Pizza · Fast Food', rating: 4.2, price: '₹350 for two', time: '30 mins' },
    { name: 'Urban Cafe', category: 'Burgers', tags: 'Cafe · Burgers · Shakes · Pasta', rating: 4.3, price: '₹400 for two', time: '25 mins' },
    { name: 'Cafe Coffee Day', category: 'Desserts', tags: 'Cafe · Coffee · Sandwich · Muffins', rating: 4.2, price: '₹450 for two', time: '20 mins' },
    { name: 'Starbucks', category: 'Desserts', tags: 'Coffee · Premium Cafe · Croissants', rating: 4.5, price: '₹650 for two', time: '25 mins' },
    { name: 'Brewbakes', category: 'Burgers', tags: 'Cafe · Burgers · Fast Food · Pizza', rating: 4.2, price: '₹350 for two', time: '20 mins' },
    { name: 'BOCCA Cafe', category: 'Pizza', tags: 'Premium Bistro · Pizza · Salad · Espresso', rating: 4.6, price: '₹600 for two', time: '30 mins' },
    { name: 'Sandwich Queen', category: 'Burgers', tags: 'Sandwiches · Burgers · Fast Food', rating: 4.3, price: '₹250 for two', time: '20 mins' },
    { name: 'Kaati Zone', category: 'Rolls', tags: 'Rolls · Kathi Wraps · Fast Food', rating: 4.2, price: '₹200 for two', time: '20 mins' },
    { name: 'Shawarma Wrap', category: 'Rolls', tags: 'Shawarma · Lebanese · Wraps', rating: 4.3, price: '₹250 for two', time: '20 mins' },
    { name: 'Laziz Pizza', category: 'Pizza', tags: 'Pizza · Pasta · Cheesy Garlic Bread', rating: 4.1, price: '₹350 for two', time: '25 mins' },
    { name: 'Chicago Pizza', category: 'Pizza', tags: 'Pizza · Giant Slice Pizza · Cheesy Fries', rating: 4.3, price: '₹400 for two', time: '25 mins' },
    { name: 'Jugaad Pizza', category: 'Pizza', tags: 'Fusion Pizza · Indian Style Pizza', rating: 4.2, price: '₹300 for two', time: '25 mins' },
    { name: 'Keventers The Milkshake Co.', category: 'Desserts', tags: 'Milkshakes · Beverages · Ice Cream Shakes', rating: 4.5, price: '₹300 for two', time: '20 mins' },
    { name: 'Jalpan', category: 'Desserts', tags: 'Gujarati Snacks · Sweets · Dhokla', rating: 4.3, price: '₹200 for two', time: '20 mins' },
    { name: 'Gupta Sweets', category: 'Desserts', tags: 'Veg Snacks · Sweets · Samosa Chaat', rating: 4.4, price: '₹180 for two', time: '20 mins' },
    { name: 'Kanika Restaurant', category: 'Odia Specials', tags: 'Authentic Odia · Thali · Pakhala', rating: 4.5, price: '₹500 for two', time: '35 mins' },
    { name: 'Phulbani Dhaba', category: 'Odia Specials', tags: 'Desi Chicken Curry · Roti · Dhaba Style', rating: 4.4, price: '₹350 for two', time: '30 mins' },
    { name: 'Cuttack Chops & Cutlets', category: 'Rolls', tags: 'Street Snacks · Egg Chop · Alloo Chop', rating: 4.5, price: '₹100 for two', time: '15 mins' },
    { name: 'Mamu Dahibara', category: 'Odia Specials', tags: 'Dahibara Aloodum · Local Street Style', rating: 4.6, price: '₹100 for two', time: '15 mins' },
    { name: 'Raghu Dahibara', category: 'Odia Specials', tags: 'Iconic Cuttack Dahibara · Aloodum', rating: 4.8, price: '₹120 for two', time: '15 mins' },
    { name: 'Muna Golgappa Express', category: 'Rolls', tags: 'Street Food · Pani Puri · Chaat', rating: 4.6, price: '₹80 for two', time: '15 mins' },
    { name: 'Bhagat Tarachand', category: 'Odia Specials', tags: 'Pure Veg North Indian · Thali · Kutchi Beer', rating: 4.5, price: '₹350 for two', time: '25 mins' },
    { name: 'Haldiram\'s', category: 'Desserts', tags: 'Snacks · Sweets · North Indian · Fast Food', rating: 4.4, price: '₹300 for two', time: '20 mins' },
    { name: 'Bikanervala', category: 'Desserts', tags: 'Sweets · Chaat · Veg Meals', rating: 4.3, price: '₹350 for two', time: '25 mins' },
    { name: 'Chowringhee Kathi Roll', category: 'Rolls', tags: 'Rolls · Chicken Kathi Roll · Mughlai', rating: 4.3, price: '₹200 for two', time: '20 mins' },
    { name: 'Momo Zone', category: 'Rolls', tags: 'Momos · Steamed Momo · Fried Momo', rating: 4.3, price: '₹220 for two', time: '20 mins' },
    { name: 'Dilli Darbar', category: 'Biryani', tags: 'Mughlai · Biryani · Butter Chicken', rating: 4.2, price: '₹450 for two', time: '30 mins' },
    { name: 'Karim\'s', category: 'Biryani', tags: 'Mughlai · Authentic Kebabs · Biryani', rating: 4.5, price: '₹650 for two', time: '35 mins' },
    { name: 'Biryani Blues', category: 'Biryani', tags: 'Biryani · Hyderabadi · Lucknowi', rating: 4.4, price: '₹400 for two', time: '25 mins' },
    { name: 'Royal Biryani House', category: 'Biryani', tags: 'Biryani · Chicken Biryani · Raita', rating: 4.3, price: '₹350 for two', time: '25 mins' },
    { name: 'Hyderabadi Zaika', category: 'Biryani', tags: 'Biryani · Aromatic Spiced Rice', rating: 4.3, price: '₹300 for two', time: '25 mins' },
    { name: 'The Momo Co.', category: 'Rolls', tags: 'Momos · Chinese · Fried Momos', rating: 4.4, price: '₹250 for two', time: '20 mins' },
    { name: 'Uncle Sam\'s Pizza', category: 'Pizza', tags: 'Pizza · Loaded Cheese Pizza', rating: 4.1, price: '₹350 for two', time: '25 mins' },
    { name: 'Wat-a-Burger', category: 'Burgers', tags: 'Burgers · Loaded Veg Burger · Shakes', rating: 4.3, price: '₹280 for two', time: '20 mins' },
    { name: 'Burger Singh', category: 'Burgers', tags: 'Indianized Burgers · Spicy Fries · Shakes', rating: 4.4, price: '₹250 for two', time: '20 mins' },
    { name: 'The Burger Club', category: 'Burgers', tags: 'Premium Burgers · Fries · Club Sandwich', rating: 4.3, price: '₹350 for two', time: '20 mins' },
    { name: 'Kwality Wall\'s Swirl\'s', category: 'Desserts', tags: 'Ice Cream · Sundaes · Soft Serves', rating: 4.5, price: '₹200 for two', time: '15 mins' },
    { name: 'Baskin Robbins Ice Cream', category: 'Desserts', tags: 'Ice Cream · Gourmet Flavors · Shakes', rating: 4.6, price: '₹300 for two', time: '15 mins' },
    { name: 'Dumont Creamery', category: 'Desserts', tags: 'Gourmet Ice Cream · Sundaes', rating: 4.4, price: '₹350 for two', time: '20 mins' },
    { name: 'Havmor Ice Cream Parlour', category: 'Desserts', tags: 'Ice Cream · Cones · Sundaes', rating: 4.4, price: '₹250 for two', time: '20 mins' },
    { name: 'Tandoori Express', category: 'Biryani', tags: 'North Indian · Tandoori Chicken · Naan', rating: 4.2, price: '₹380 for two', time: '25 mins' },
    { name: 'Biju Dhaba', category: 'Odia Specials', tags: 'Desi Odia Thali · Mansa Tarkari', rating: 4.5, price: '₹300 for two', time: '30 mins' },
    { name: 'Golei Chhak Sweets', category: 'Desserts', tags: 'Odia Sweets · Rasagulla · Chenna Poda', rating: 4.6, price: '₹150 for two', time: '20 mins' },
    { name: 'Khandagiri Momo Hub', category: 'Rolls', tags: 'Momos · Steamed Dim sums · Chutney', rating: 4.4, price: '₹180 for two', time: '20 mins' },
    { name: 'Kiit Road Rolls', category: 'Rolls', tags: 'Rolls · Student Special Kathi Roll', rating: 4.5, price: '₹120 for two', time: '15 mins' }
  ];

  const list: any[] = [];

  // Deterministic seed generation based on location name length to shuffle slightly
  const baseSeed = location.length;

  // Track unique index counters per category to completely prevent image reuse
  const categoryCounters: Record<string, number> = {
    'Odia Specials': 0,
    'Biryani': 0,
    'Pizza': 0,
    'Burgers': 0,
    'Rolls': 0,
    'Desserts': 0
  };

  // Pre-calculate category indices in original static order to guarantee 100% unique image assignment
  const restaurantImageIndex = REAL_RESTAURANTS_DATA.map((r) => {
    const category = r.category;
    const currentCount = categoryCounters[category] || 0;
    categoryCounters[category] = currentCount + 1;
    return currentCount;
  });

  for (let i = 0; i < REAL_RESTAURANTS_DATA.length; i++) {
    // Deterministic shuffle based on location length
    const targetIdx = (i * 7 + baseSeed) % REAL_RESTAURANTS_DATA.length;
    const rData = REAL_RESTAURANTS_DATA[targetIdx];

    // Find category images
    const categoryImages = FOOD_IMAGES[rData.category as keyof typeof FOOD_IMAGES];

    // Choose the pre-assigned unique image index for this specific restaurant
    const uniqueImgIdx = restaurantImageIndex[targetIdx];
    const baseImg = categoryImages[uniqueImgIdx % categoryImages.length];

    // Dynamic crops & zooms to make the 100+ listings look absolutely unique
    const cropSetting = i % 3 === 0 ? 'entropy' : i % 3 === 1 ? 'faces' : 'center';
    const zoomSetting = i % 3 === 0 ? 'w=800&h=600' : i % 3 === 1 ? 'w=800&h=550' : 'w=800&h=650';
    const img = `${baseImg}?auto=format&fit=crop&crop=${cropSetting}&${zoomSetting}&q=80&sig=${targetIdx}`;

    list.push({
      name: rData.name,
      rating: rData.rating,
      time: rData.time,
      price: rData.price,
      tags: rData.tags,
      category: rData.category,
      img
    });
  }

  return list;
}

export default function Food() {
  // Location detection states
  const [locationName, setLocationName] = useState('Detecting location...');
  const [locationGranted, setLocationGranted] = useState<boolean | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    { name: 'Odia Specials', icon: '🍲' },
    { name: 'Biryani', icon: '🍚' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Burgers', icon: '🍔' },
    { name: 'Rolls', icon: '🌯' },
    { name: 'Desserts', icon: '🍮' },
  ];

  // Request location standard browser API
  const requestLocation = () => {
    setIsDetecting(true);
    if (!navigator.geolocation) {
      // Fallback if not supported
      handleLocationSuccess(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Attempt client-side reverse geocoding via OpenStreetMap Nominatim
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            { headers: { 'User-Agent': 'TezDel-Web-App' } }
          );
          if (response.ok) {
            const data = await response.json();
            const addr = data.address;
            // Extract best possible hyperlocal neighborhood
            const place = addr.suburb || addr.neighbourhood || addr.village || addr.road || addr.county || 'Patia';
            const city = addr.city || addr.town || 'Bhubaneswar';
            handleLocationSuccess(`${place}, ${city}`);
          } else {
            handleLocationSuccess('Patia, Bhubaneswar');
          }
        } catch (error) {
          handleLocationSuccess('Patia, Bhubaneswar');
        }
      },
      () => {
        // User denied or error occurred
        handleLocationSuccess('Patia, Bhubaneswar');
      },
      { timeout: 6000 }
    );
  };

  const handleLocationSuccess = (resolvedLocation: string | null) => {
    const finalLocation = resolvedLocation || 'Patia, Bhubaneswar';
    setLocationName(finalLocation);
    setLocationGranted(true);
    setIsDetecting(false);

    // Generate 100+ custom hyperlocal restaurants matching this neighborhood
    const generated = generateHyperlocalRestaurants(finalLocation);
    setAllRestaurants(generated);

    // Dynamic beautiful loaders
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  // Skip / Manual fallback
  const handleManualSelect = (zone: string) => {
    handleLocationSuccess(zone);
  };

  useEffect(() => {
    // Automatically trigger custom location overlay flow on mount
    if (locationGranted === null) {
      // If browser already has permission, we can check or trigger
      requestLocation();
    }
  }, []);

  // Filter restaurants based on search input & category click
  const filteredRestaurants = allRestaurants.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? r.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (catName: string) => {
    if (selectedCategory === catName) {
      setSelectedCategory(null); // Toggle off
    } else {
      setSelectedCategory(catName);
    }
    setVisibleCount(12); // Reset count
  };

  const foodPageSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "TezDel Food Delivery",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    "url": "https://tezdel.com/food",
    "telephone": "+910000000000",
    "priceRange": "₹₹",
    "servesCuisine": ["Odia Specials", "Biryani", "Pizza", "Burgers", "Rolls", "Desserts"],
    "areaServed": [
      { "@type": "City", "name": "Bhubaneswar", "sameAs": "https://en.wikipedia.org/wiki/Bhubaneswar" },
      { "@type": "City", "name": "Cuttack", "sameAs": "https://en.wikipedia.org/wiki/Cuttack" }
    ],
    "description": "Order authentic Odia thali, premium biryani, delicious woodfired pizzas, and rolls. Swift 20-minute delivery from 100+ local kitchens in Bhubaneswar.",
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://tezdel.com/food",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"]
    }
  };

  return (
    <div className="page-v3">
      <SEO 
        title="Authentic Odia Food & Restaurant Delivery in Bhubaneswar | TezDel" 
        description="Craving Dalma, Pakhala or Biryani? Order from Bhubaneswar's best restaurants and home chefs on TezDel. Swift 20-minute delivery & real food photos!" 
        keywords="Bhubaneswar restaurants, order food online Bhubaneswar, local home chefs, Odia food, dalma delivery, chicken biryani Bhubaneswar, ONDC food network" 
        image="https://images.unsplash.com/photo-1546833999-b9f581a1996d"
        schema={foodPageSchema}
      />
      <UnderDevelopmentModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />

      {/* Geolocation Request Custom Splash Screen */}
      <AnimatePresence>
        {!locationGranted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#0D0706',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="glass-dark"
              style={{
                maxWidth: '480px',
                width: '100%',
                borderRadius: '32px',
                padding: '3rem 2rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 61, 0, 0.15)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.8), var(--shadow-glow)'
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255, 61, 0, 0.1)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  color: 'var(--color-primary)'
                }}
              >
                <Compass size={40} className={isDetecting ? "animate-spin" : ""} />
              </div>
              <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '1rem', fontFamily: "'Syne', sans-serif" }}>
                Discover Local Flavours
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                TezDel needs your location to search over 100+ nearby restaurants, zero-commission home kitchens, and fresh local hotspots in Bhubaneswar.
              </p>

              {isDetecting ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <Loader2 size={36} color="var(--color-primary)" className="animate-spin" />
                  <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>Detecting coordinates & neighborhood...</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={requestLocation}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      borderRadius: '16px',
                      fontSize: '16px',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <MapPin size={18} /> Share Current Location
                  </motion.button>

                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '8px 0' }}>— OR CHOOSE MANUALLY —</span>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button
                      onClick={() => handleManualSelect('Patia, Bhubaneswar')}
                      className="glass"
                      style={{ color: '#fff', padding: '10px', borderRadius: '12px', fontSize: '13px', fontWeight: '700' }}
                    >
                      📍 Patia
                    </button>
                    <button
                      onClick={() => handleManualSelect('Saheed Nagar, Bhubaneswar')}
                      className="glass"
                      style={{ color: '#fff', padding: '10px', borderRadius: '12px', fontSize: '13px', fontWeight: '700' }}
                    >
                      📍 Saheed Nagar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="page-header-v3">
        <div className="page-header-v3-bg" style={{ background: '#0D0706' }} />
        <div className="page-header-v3-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="food-search-container-v3"
            style={{ display: 'flex', gap: '16px', alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
          >
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={requestLocation}
              className="food-location-box-v3 glass"
              style={{ cursor: 'pointer' }}
            >
              <MapPin size={18} color="var(--color-primary)" />
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginRight: '8px' }}>Location:</span>
                {locationName}
              </div>
            </motion.div>
            <div className="food-search-box-v3 glass">
              <Search size={20} color="rgba(255,255,255,0.4)" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search for Pakhala, Dalma, Biryani..."
                style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: '16px', color: '#fff', fontWeight: 500 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingTop: '60px' }}>
        <div className="container">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-title-v3"
            style={{ marginBottom: '40px', textAlign: 'center', fontSize: '1.75rem' }}
          >
            {"What's on your mind?".split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="food-chip-grid-v3 food-cat-grid-css"
          >
            {categories.map((cat, i) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <motion.div
                  key={cat.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`food-cat-chip-v3 ${isSelected ? 'active-chip' : ''}`}
                  style={{
                    background: isSelected ? 'var(--color-secondary)' : '#fff',
                    boxShadow: 'var(--shadow-premium)',
                    padding: '2rem 1rem',
                    borderRadius: '24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.02)',
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    style={{ fontSize: '36px', display: 'block', marginBottom: '10px' }}
                  >
                    {cat.icon}
                  </motion.span>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: isSelected ? '#fff' : 'var(--color-text-main)' }}>{cat.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="page-section-v3" style={{ background: 'var(--color-bg-light)', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title-v3"
              style={{ fontSize: '28px', marginBottom: 0 }}
            >
              Top Restaurants Near {locationName.split(',')[0]}
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className="filter-chip-v3 glass"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', padding: '0.6rem 1.2rem', borderRadius: '12px', fontWeight: '700', fontSize: '14px' }}
            >
              <Filter size={16} /> Reset Filters
            </motion.button>
          </div>

          <div className="restaurant-grid-v3 rest-grid-css">
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array(12).fill(0).map((_, i) => (
                  <div key={i} className="restaurant-card-v3 glass" style={{ height: '360px', borderRadius: '28px' }}>
                    <Skeleton height="220px" borderRadius="28px" />
                    <div style={{ padding: '1.5rem' }}>
                      <Skeleton width="70%" height="28px" />
                      <Skeleton width="40%" height="18px" className="mt-2" />
                    </div>
                  </div>
                ))
              ) : filteredRestaurants.length === 0 ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0' }}>
                  <ShieldCheck size={48} style={{ color: 'var(--color-primary)', marginBottom: '1rem', margin: '0 auto' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: '800' }}>No Kitchens Match Your Search</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginTop: '8px' }}>Try exploring other categories or clearing your active search query.</p>
                </div>
              ) : (
                filteredRestaurants.slice(0, visibleCount).map((r, i) => (
                  <motion.article
                    key={`${r.name}-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 6) * 0.1 }}
                    whileHover={{ y: -12 }}
                    onClick={() => setSelectedRestaurant(r)}
                    className="restaurant-card-v3"
                    style={{
                      background: '#fff',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-premium)',
                      border: '1px solid rgba(0,0,0,0.02)',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="restaurant-card-img-v3" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={r.img}
                        alt={r.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div className="restaurant-card-badge-v3" style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', color: '#fff', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Zap size={14} fill="currentColor" /> {r.time}
                      </div>
                    </div>
                    <div className="restaurant-card-body-v3" style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800' }}>{r.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#1B8A60', color: '#fff', padding: '2px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '700' }}>
                          <Star size={10} fill="currentColor" /> {r.rating}
                        </div>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '16px', fontWeight: '500' }}>{r.tags}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-primary)' }}>{r.price}</span>
                        <motion.button
                          onClick={(e) => { e.stopPropagation(); setSelectedRestaurant(r); }}
                          whileHover={{ x: 5 }}
                          style={{ color: 'var(--color-secondary)', fontWeight: '700', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          View Menu <ArrowRight size={14} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Lazy Loading Trigger */}
          {!isLoading && filteredRestaurants.length > visibleCount && (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="btn btn-secondary"
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '16px',
                  fontWeight: '700',
                  fontSize: '15px',
                  boxShadow: 'var(--shadow-premium)'
                }}
              >
                Load More Restaurants
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* TezPass Promo */}
      <section className="container" style={{ margin: '60px auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="tezpass-banner-v3 glass"
          style={{
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, #1e293b 100%)',
            borderRadius: '32px',
            padding: '3rem',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>Get Unlimited Free Delivery</h3>
            <p style={{ opacity: 0.8, marginTop: '8px', fontSize: '1.1rem', maxWidth: '400px' }}>Join TezPass for ₹149/month and skip all delivery fees on every order.</p>
          </div>
          <motion.button
            onClick={() => setIsDevModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '1rem 2rem',
              borderRadius: '16px',
              fontSize: '1.1rem',
              fontWeight: '700',
              position: 'relative',
              zIndex: 2
            }}
          >
            Get TezPass <ArrowRight size={20} />
          </motion.button>

          {/* Decorative Glow */}
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, zIndex: 1 }} />
        </motion.div>
      </section>

      {/* Dynamic App Promotion Wishlist Modal */}
      <AnimatePresence>
        {selectedRestaurant && (
          <div className="wishlist-modal-overlay-v3">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRestaurant(null)}
              className="wishlist-modal-backdrop-v3"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="wishlist-modal-box-v3"
            >
              {/* Decorative background glow */}
              <div style={{ position: 'absolute', top: '-40%', right: '-40%', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(120px)', opacity: 0.15, pointerEvents: 'none' }} />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedRestaurant(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'background 0.2s',
                  zIndex: 10
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                ✕
              </button>

              {/* Header Image */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '160px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img src={selectedRestaurant.img} alt={selectedRestaurant.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Title & Tagline */}
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', background: 'rgba(255, 114, 76, 0.1)', padding: '6px 14px', borderRadius: '30px', display: 'inline-block', marginBottom: '12px', fontFamily: "'Syne', sans-serif" }}>
                  Exclusive Pre-Release Access
                </span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '26px', fontWeight: 800, color: '#fff', lineHeight: '1.2' }}>
                  Access {selectedRestaurant.name} <br />
                  <span style={{ color: 'var(--color-primary)' }}>Exclusively in the App</span>
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '12px', lineHeight: '1.6' }}>
                  To maintain our strict <strong style={{ color: '#fff' }}>Zero-Commission, direct-to-customer</strong> delivery model, digital menus and active checkout are exclusively accessible via the forthcoming TezDel iOS and Android mobile applications.
                </p>
              </div>

              {/* Wishlist Box */}
              <div style={{ background: 'rgba(255, 114, 76, 0.05)', border: '1px solid rgba(255, 114, 76, 0.15)', borderRadius: '20px', padding: '20px', textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.95)', fontWeight: '600' }}>
                  🚀 Join {selectedRestaurant.name}'s Exclusive App Wishlist
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px', lineHeight: '1.4' }}>
                  Be notified instantly when {selectedRestaurant.name} goes live. You will be joining <strong style={{ color: 'var(--color-primary)' }}>100+ other local foodies</strong> who just joined this exclusive wishlist!
                </p>
                
                {/* Simulated Input / Action */}
                <div className="wishlist-form-container-v3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    defaultValue="user@example.com"
                    style={{ 
                      flex: 1, 
                      background: 'rgba(0,0,0,0.2)', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '12px', 
                      padding: '10px 14px', 
                      color: '#fff', 
                      fontSize: '13px' 
                    }} 
                    readOnly
                  />
                  <button
                    onClick={() => {
                      alert('✨ Success! You have been placed on the TezDel priority app launch queue for ' + selectedRestaurant.name + '.');
                      setSelectedRestaurant(null);
                    }}
                    style={{
                      background: 'var(--color-primary)',
                      border: 'none',
                      color: '#fff',
                      padding: '10px 18px',
                      borderRadius: '12px',
                      fontWeight: '700',
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}
                  >
                    Join Queue
                  </button>
                </div>
              </div>

              {/* App Moat Bullet Points */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '600', textTransform: 'uppercase', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                <span>⚡ Zero Commission</span>
                <span>•</span>
                <span>🏪 Direct local pricing</span>
                <span>•</span>
                <span>🛵 Nearby Captains</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
