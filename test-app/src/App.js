// import { people } from "./faker";

// function Person({ people }) {
//   return (
//     <div className="grid grid-cols-4 gap-20 text-center">
//       {people.map((p, index) => (
//         <div key={index}>
//           <img className="rounded-xl" src={p.avatar} alt="None" />
//           <h1 className="text-md font-semibold">{p.displayName}</h1>
//           <p className="text-xs text-gray-400">
//             {p.firstName} {p.lastName}
//           </p>
//           <p className="text-xs text-gray-400">{p.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="p-8">
//       <Person people={people} />
//     </div>
//   );
// }

// import { people } from "./faker";

// function Person({ people }) {
//   return (
//     <div className="grid md:grid-cols-4 gap-12 text-center">
//       {people.map((p, index) => (
//         <div key={index} className="border p-8 rounded-xl space-y-1">
//           <img className="rounded-xl shadow-lg" src={p.avatar} alt="Profile Image" />
//           <h1>{p.displayName}</h1>
//           <p className="text-xs text-gray-400">
//             {p.firstName} {p.lastName}
//           </p>
//           <p>{p.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="p-8">
//       <div>
//         <h1 className="text-4xl font-semibold text-center">Contacts</h1>
//         <Person people={people} />
//       </div>hings into a javascript array
//     </div>
//   );
// }

// import { vehicle } from "./data/fakerVehicle";

// function VehicleItems({ vehicle }) {
//   return (
//     <div className="grid grid-cols-2 text-center gap-12">
//       {vehicle.map((v, index) => (
//         <div key={index}>
//           <h1 className="text-xl font-semibold">{v.manufacturer}</h1>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="p-8">
//       <VehicleItems vehicle={vehicle} />
//     </div>
//   );
// }

// let imageArr = [];

// for (let index = 0; index < 100; index++) {
//   let random = Math.floor(Math.random() * 1000);
//   let image = "https://picsum.photos/300/300?random=" + random;
//   imageArr.push(image);
// }

// function ShowImages({ imageArr }) {
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-10">
//         {imageArr.map((image, index) => (
//           <div key={index}>
//             <img
//               className="rounded-xl hover:shadow-2xl transistion duration-500 ease-in-out"
//               src={image}
//               alt="random"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="p-8">
//       <ShowImages imageArr={imageArr} />
//     </div>
//   );
// }

// import { products } from "./data/productsFaker";

// function NameProducts() {
//   return (
//     <div className="p-8 space-y-4">
//       {products.map((product, index) => (
//         <div key={index} className="border p-4 rounded-xl space-y-4 shadow-md">
//           <h1 className="text-2xl cursor-pointer font-semibold tracking-widest">
//             {product.productName}
//           </h1>
//           <div className="flex items-center space-x-4">
//             <p className="text-gray-600 w-[250px] tracking-tighter">
//               {product.productDescription}
//             </p>
//             <p className="text-2xl font-semibold">R {product.price}</p>
//           </div>
//           <div className="text-gray-400 flex space-x-4">
//             <p>{product.department}</p>
//             <p>{product.productMaterial}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <NameProducts />
//     </div>
//   );
// }

// import { persons } from "./data/person";

// function Avatar({ prop }) {
//   return <img className="w-[120px] h-[120px] rounded-full" src={prop} />;
// }

// function ShowProfile() {
//   return (
//     <div className="space-y-8 md:space-y-0 md:grid grid-cols-2 lg:grid-cols-3 gap-8">
//       {persons.map((person, index) => (
//         <div
//           key={index}
//           className="cursor-pointer flex items-center border rounded-xl border-2 shadow-sm p-8 space-x-8 md:w-[350] md:h-[200px] hover:shadow-xl"
//         >
//           <div>
//             <Avatar prop={person.avatarGitHub} />
//           </div>
//           <div className="space-y-2">
//             <h1 className="text-xl font-semibold">{person.fullName}</h1>
//             <p>{person.gender}</p>
//             <p className="text-gray-400">{person.jobTitle}</p>
//             <p className="capitalize">
//               <span className="text-gray-400">About:</span>{" "}
//               <span className="font-semibold">{person.bio}</span>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="p-8">
//       <ShowProfile />
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="text-center">
//       <h1 className=" mt-[200px] text-8xl font-semibold mb-20">{count}</h1>
//       <div className="space-x-4">
//         <button
//           className="text-xl font-semibold bg-red-100 px-5 py-3 rounded-xl"
//           onClick={decrease}
//         >
//           Decrease
//         </button>
//         <button
//           className="text-xl font-semibold bg-green-100 px-5 py-3 rounded-xl"
//           onClick={increase}
//         >
//           Increase
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("No Name");

//   function HandleClick(newName) {
//     setName(newName);
//   }

//   return (
//     <div className="p-8 text-center mt-[200px]">
//       <h1 className="text-4xl font-semibold">Hello, {name}!</h1>
//       <div className="flex space-x-8 mt-28 justify-center mb-28">
//         <h1 className="cursor-pointer" onClick={() => HandleClick("John Swim")}>
//           John Swim
//         </h1>
//         <h1
//           className="cursor-pointer"
//           onClick={() => HandleClick("John Swimmers")}
//         >
//           John Swimmers
//         </h1>
//         <h1 className="cursor-pointer" onClick={() => HandleClick("Swim Burn")}>
//           Swim Burn
//         </h1>
//       </div>
//       <h1 className="cursor-pointer" onClick={() => HandleClick("No Name")}>
//         Reset
//       </h1>
//     </div>
//   );
// }

// import { useState } from "react";

// let imageArr = [];

// for (let index = 0; index < 5; index++) {
//   let random = Math.floor(Math.random() * 1000);
//   let image = "https://picsum.photos/300/300?random=" + random;
//   imageArr.push(image);
// }

// export default function App() {
//   const [count, changeCount] = useState(0);

//   function ChangeImageNext(image) {
//     if (count >= imageArr.length - 1) {
//       changeCount(0);
//     } else {
//       changeCount(count + 1);
//     }
//   }

//   function ChangeImagePrev() {
//     if (count <= 0) {
//       changeCount(imageArr.length - 1);
//     } else {
//       changeCount(count - 1);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <img
//           className="mx-auto mt-[200px] rounded-xl"
//           src={imageArr[count]}
//           alt="random"
//         />
//       </div>
//       <div className="mt-8 space-x-4 text-center">
//         <button
//           onClick={ChangeImagePrev}
//           className="text-2xl font-semibold bg-black text-white p-4 rounded-xl"
//         >
//           prev
//         </button>
//         <button
//           onClick={ChangeImageNext}
//           className="text-2xl font-semibold bg-black text-white p-4 rounded-xl"
//         >
//           next
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [greeting, setGreeting] = useState("Greeting");

//   function HandleClick(greeting) {
//     return setGreeting(greeting);
//   }

//   return (
//     <div>
//       <div>
//         <h1 className="text-4xl font-bold text-center mt-72">
//           {greeting} there!
//         </h1>
//       </div>
//       <div className="flex space-x-4 justify-center">
//         <p
//           className="text-xl font-semibold mt-12 cursor-pointer"
//           onClick={() => HandleClick("Hey")}
//         >
//           Hey
//         </p>
//         <p
//           className="text-xl font-semibold mt-12 cursor-pointer"
//           onClick={() => HandleClick("Hi")}
//         >
//           Hi
//         </p>
//         <p
//           className="text-xl font-semibold mt-12 cursor-pointer"
//           onClick={() => HandleClick("Ho")}
//         >
//           Ho
//         </p>
//       </div>
//       <div>
//         <p
//           className="text-center font-semibold text-xl mt-8 text-gray-400 cursor-pointer"
//           onClick={() => HandleClick("")}
//         >
//           Reset
//         </p>
//       </div>
//     </div>
//   );
// }

// function Item({ name, isPacked }) {
//   return <p>{isPacked ? <del>{name + " ✅"}</del> : name}</p>;
// }

// function App() {
//   return (
//     <div>
//       <div className=" ml-[40px] mt-[200px] space-y-5">
//         <Item name={"Chicken"} isPacked={true} />
//         <Item name={"Pasta"} isPacked={true} />
//         <Item name={"Oregano"} isPacked={false} />
//       </div>
//     </div>
//   );
// }

// export default App;

// function Item({ name, isPacked }) {
//   let itemConteent = name;
//   if (isPacked) {
//     itemConteent = name + " ✅";
//   }
//   return <p>{itemConteent}</p>;
// }

// function App() {
//   return (
//     <div>
//       <div className=" ml-[40px] mt-[200px] space-y-5">
//         <Item name={"Chicken"} isPacked={true} />
//         <Item name={"Pasta"} isPacked={true} />
//         <Item name={"Oregano"} isPacked={false} />
//       </div>
//     </div>
//   );
// }

// export default App;

// const people = [
//   {
//     id: 0, // Used in JSX as a key
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//     accomplishment: "spaceflight calculations",
//     imageId: "MK3eW3A",
//   },
//   {
//     id: 1, // Used in JSX as a key
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "chemist",
//     accomplishment: "discovery of Arctic ozone hole",
//     imageId: "mynHUSa",
//   },
//   {
//     id: 2, // Used in JSX as a key
//     name: "Mohammad Abdus Salam",
//     profession: "physicist",
//     accomplishment: "electromagnetism theory",
//     imageId: "bE7W1ji",
//   },
//   {
//     id: 3, // Used in JSX as a key
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//     accomplishment:
//       "pioneering cortisone drugs, steroids and birth control pills",
//     imageId: "IOjWm71",
//   },
//   {
//     id: 4, // Used in JSX as a key
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "astrophysicist",
//     accomplishment: "white dwarf star mass calculations",
//     imageId: "lrWQx8l",
//   },
// ];

// export function getImageUrl(person) {
//   return "https://i.imgur.com/" + person.imageId + "s.jpg";
// }

// function App() {
//   const chemArr = people.filter((person) => person.profession === "chemist");
//   const nonChemArr = people.filter((person) => person.profession !== "chemist");

//   return (
//     <div>
//       {chemArr.map((person) => (
//         <div>
//           <li>
//             {person.name} {person.profession}
//           </li>
//         </div>
//       ))}
//       {nonChemArr.map((person) => (
//         <div>
//           <li>
//             {person.name} {person.profession}
//           </li>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// const recipes = [
//   {
//     id: "greek-salad",
//     name: "Greek Salad",
//     ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//   },
//   {
//     id: "hawaiian-pizza",
//     name: "Hawaiian Pizza",
//     ingredients: [
//       "pizza crust",
//       "pizza sauce",
//       "mozzarella",
//       "ham",
//       "pineapple",
//     ],
//   },
//   {
//     id: "hummus",
//     name: "Hummus",
//     ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
//   },
// ];

// function App() {
//   return (
//     <div>
//       <div className="p-8 space-y-8">
//         <h1 className="text-4xl font-semibold">Recipes</h1>
//         {recipes.map((recipe) => (
//           <div key={recipe.id}>
//             <h1 className="text-2xl font-semibold text-gray-400">
//               {recipe.name}
//             </h1>
//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ],
// };

// export default function App() {
//   return (
//     <div>
//       {poem.lines.map((line, index) => (
//         <div key={index}>
//           {index > 0 && <hr />}
//           <p>{line}</p>
//           <br />
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useState } from "react";

// function App() {
//   const [greeting, setGreeting] = useState("Hello");

//   function HandleMouseLeave() {
//     setGreeting("Hello");
//   }

//   function HandleMouseOver() {
//     setGreeting("Hello, World!");
//   }

//   return (
//     <div className="p-8">
//       <h1
//         className="text-4xl font-semibold"
//         onMouseOver={HandleMouseOver}
//         onMouseLeave={HandleMouseLeave}
//       >
//         {greeting}
//       </h1>
//     </div>
//   );
// }

// export default App;

// import "./login.css";
// function Form() {
//   return (
//     <form className="form">
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// function App() {
//   const loggedIn = false;
//   return (
//     <div className="container">{loggedIn ? <h1>Hello</h1> : <Form />}</div>
//   );
// }

// export default App;

// import { useState } from "react";

// function LogInScreen({ setIsLoggedIn }) {
//   function LogOut() {
//     setIsLoggedIn(false);
//   }
//   return (
//     <div>
//       <h1 className="text-center text-4xl font-semibold">Log in</h1>
//       <div className="p-8 space-y-2">
//         <input
//           className="w-full h-12 border-2 rounded-xl p-2"
//           type="text"
//           placeholder="Username"
//         />
//         <input
//           className="w-full h-12 border-2 rounded-xl p-2"
//           type="password"
//           placeholder="Password"
//         />
//       </div>
//       <button
//         onClick={LogOut}
//         className="bg-black text-white px-4 py-2 rounded-xl"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function LogIn() {
//     setIsLoggedIn(true);
//   }

//   return (
//     <div className="p-8">
//       <div className="text-center">
//         {isLoggedIn ? (
//           <LogInScreen setIsLoggedIn={setIsLoggedIn} />
//         ) : (
//           <button
//             onClick={LogIn}
//             className="bg-black text-white px-4 py-2 rounded-xl"
//           >
//             Log In
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="overflow-hidden x">
//       <div>
//         <h1 className="text-2xl font-semibold text-center py-20  z-50">
//           <span>Hello, World!</span>
//         </h1>
//       </div>
//       <div className="animate-fade">
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//         <div>
//           <p className="p-8  x">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <div className="p-8 flex space-x-2">
//       <div
//         className={`h-[300px] bg-yellow-300 rounded-lg cursor-pointer duration-1000 ${
//           expanded ? "w-full" : "w-8"
//         }`}
//         onClick={() => setExpanded(!expanded)}
//       ></div>
//       <div
//         className={`h-[300px] bg-blue-300 rounded-lg cursor-pointer duration-1000 ${
//           expanded ? "w-full" : "w-8"
//         }`}
//         onClick={() => setExpanded(!expanded)}
//       ></div>
//       <div
//         className={`h-[300px] bg-rose-300 rounded-lg cursor-pointer duration-1000 ${
//           expanded ? "w-full" : "w-8"
//         }`}
//         onClick={() => setExpanded(!expanded)}
//       ></div>
//       <div
//         className={`h-[300px] bg-red-300 rounded-lg cursor-pointer duration-1000 ${
//           expanded ? "w-full" : "w-8"
//         }`}
//         onClick={() => setExpanded(!expanded)}
//       ></div>
//       <div
//         className={`h-[300px] bg-green-300 rounded-lg cursor-pointer duration-1000 ${
//           expanded ? "w-full" : "w-8"
//         }`}
//         onClick={() => setExpanded(!expanded)}
//       ></div>
//     </div>
//   );
// }

// export default App;

// const cars = [
//   {
//     model: "Honda Civic",
//     //The top colour refers to the first item in the array below:
//     //i.e. hondaTopColour = "black"
//     coloursByPopularity: ["black", "silver"],
//     speedStats: {
//       topSpeed: 140,
//       zeroToSixty: 8.5,
//     },
//   },
//   {
//     model: "Tesla Model 3",
//     coloursByPopularity: ["red", "white"],
//     speedStats: {
//       topSpeed: 150,
//       zeroToSixty: 3.2,
//     },
//   },
// ];

// export default function App() {
//   const [honda, tesla] = cars;
//   const {
//     coloursByPopularity: [teslaTopColor],
//     speedStats: { topSpeed: teslaTopSpeed },
//   } = tesla;

//   const {
//     coloursByPopularity: [hondaTopColor],
//     speedStats: { topSpeed: hondaTopSpeed },
//   } = honda;

//   console.log(tesla.model);
//   console.log(teslaTopSpeed);
//   console.log(teslaTopColor);

//   console.log(honda.model);
//   console.log(hondaTopSpeed);
//   console.log(hondaTopColor);
//   return <></>;
// }

// import "./input.css";

// import { useState } from "react";

// function App() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [name, setName] = useState("");
//   const [newName, setNewName] = useState("");

//   function changeName() {
//     setNewName(name);
//   }

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleMouseEnter() {
//     setIsHovered(true);
//   }

//   function handleMouseLeave() {
//     setIsHovered(false);
//   }

//   return (
//     <div className="container">
//       <h1>Hello {newName}</h1>
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="What's your name?"
//         value={name}
//       />
//       <button
//         className={`duration-1000 ease-in-out ${
//           isHovered ? "bg-black" : "bg-white"
//         }`}
//         onMouseOver={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={changeName}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;

// import "./index2.css";

// import React from "react";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState({
//     fName: "",
//     lName: "",
//   });
//   const [fullName, setFullName] = useState("");
//   const [mouseOver, setMouseOver] = useState(false);

//   function handleMouseLeave() {
//     setMouseOver(false);
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleClear() {
//     setName({ fName: "", lName: "" });
//   }

//   function submitName(e) {
//     setFullName(`${name.fName} ${name.lName}`);
//     e.preventDefault();
//     handleClear();
//   }

//   function handleChange(e) {
//     const { value, name } = e.target;

//     setName((prevValue) => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName,
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: value,
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>Hello {fullName}</h1>
//       <form>
//         <input
//           onChange={handleChange}
//           value={name.fName}
//           name="fName"
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleChange}
//           value={name.lName}
//           name="lName"
//           placeholder="Last Name"
//         />
//         <button
//           onClick={submitName}
//           onMouseOver={handleMouseOver}
//           onMouseLeave={handleMouseLeave}
//           className={`${
//             mouseOver ? "bg-black text-white" : "bg-white"
//           } duration-1000 ease-in`}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [updateName, setUpdateName] = useState("");
//   const [updateEmail, setUpdateEmail] = useState("");

//   const [updateButton, setUpdateButton] = useState(false);
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: "",
//     email: "",
//   });

//   function handleClick(e) {
//     setUpdateName(`${fullName.fName} ${fullName.lName}`);
//     setUpdateEmail(fullName.email);
//     setFullName({
//       fName: "",
//       lName: "",
//       email: "",
//     });
//     e.preventDefault();
//   }

//   function mouseLeave() {
//     setUpdateButton(false);
//   }

//   function mouseOver() {
//     setUpdateButton(true);
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setFullName((prevValue) => ({
//       ...prevValue,
//       [name]: value,
//     }));
//   }
//   return (
//     <div className="container">
//       <h1>Hello {updateName}</h1>
//       <p className="mb-4">{updateEmail}</p>
//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholder="First Name"
//           value={fullName.fName}
//         />
//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={fullName.lName}
//         />
//         <input
//           name="email"
//           onChange={handleChange}
//           placeholder="Email"
//           value={fullName.email}
//         />
//         <button
//           className={`${updateButton ? "bg-black" : "bg-white"} duration-700`}
//           onMouseOver={mouseOver}
//           onMouseLeave={mouseLeave}
//           onClick={handleClick}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

import "./todo.css";

import React from "react";
import { useState } from "react";
import AddLi from "./components/AddLi";

function App() {
  const [item, setItem] = useState("");
  const [arr, setArr] = useState([]);

  function handleClick() {
    setArr((prevValue) => [...prevValue, item]);
  }

  function handleChange(e) {
    const value = e.target.value;
    setItem(value);
  }

  function deleteItem(id) {
    setArr((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((item, index) => (
            <div key={index}>
              <AddLi text={item} id={index} onChecked={deleteItem} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
