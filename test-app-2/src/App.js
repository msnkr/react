// const fruits = ["apple", "grapes", "mango"];

// const listItems = fruits.map((fruit) => (
//   <li className="text-gray-400">{fruit}</li>
// ));

// export default function Hello() {
//   return (
//     <div className="container mt-[100px] ml-[100px]">
//       <h1 className="text-4xl font-bold text-red-400">Hello, World!</h1>
//       <ul className="space-y-2 mt-6">{listItems}</ul>
//     </div>
//   );
// }

// export default function Images() {
//   return (
//     <div className="flex space-x-8 justify-center mt-20">
//       <img
//         className="w-[200px] rounded-xl"
//         src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />
//       <img
//         className="w-[200px] rounded-xl"
//         src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />
//       <img
//         className="w-[200px] rounded-xl"
//         src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />
//     </div>
//   );
// }

// let year = new Date();
// const name = "msn";

// export default function App() {
//   return (
//     <div className="mt-20 ml-20">
//       <h1 className="text-2xl font-semibold">
//         Created by <span className="text-red-300">{name}</span>
//       </h1>
//       <p className="font-xs text-gray-400">Copyright: {year.getFullYear()}</p>
//     </div>
//   );
// }

// import { ShowDate } from "./ShowDate";

// export default function App() {
//   return (
//     <div>
//       <p>
//         <ShowDate />
//       </p>
//     </div>
//   );
// }

// import { Add, Multiply, Subtract, Divide } from "./Math";

// export default function App() {
//   return (
//     <ul>
//       <li>{Add(1, 2)}</li>
//       <li>{Multiply(2, 3)}</li>
//       <li>{Subtract(7, 2)}</li>
//       <li>{Divide(5, 2)}</li>
//     </ul>
//   );
// }

// function Card(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img src={props.img} className="w-[300px]" alt="avatar_img" />
//       <p>{props.number}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="mt-16 ml-16">
//       <h1>My Contacts</h1>
//       <div className="flex space-x-8">
//         <Card
//           name="Beyonce"
//           img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//           number="+123 456 789"
//           email="b@beyonce.com"
//         />
//         <Card
//           name="Gustavo"
//           img="https://avatars.githubusercontent.com/u/93255737"
//           number="+23 123 7262"
//           email="Gustavo@testmail.com"
//         />
//       </div>
//     </div>
//   );
// }

// import "./styles.css";
// import { Card } from "./components/Card";
// import { contacts } from "./components/Contact";

// export default function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       <Card
//         name={contacts[0].name}
//         image={contacts[0].imgURL}
//         number={contacts[0].phone}
//         email={contacts[0].email}
//       />
//       <Card
//         name={contacts[1].name}
//         image={contacts[1].imgURL}
//         number={contacts[1].phone}
//         email={contacts[1].email}
//       />
//       <Card
//         name={contacts[2].name}
//         image={contacts[2].imgURL}
//         number={contacts[2].phone}
//         email={contacts[2].email}
//       />
//     </div>
//   );
// }

// function SayHello() {
//   return (
//     <div>
//       <h1 className="text-5xl font-bold text-gray-500">Hello, World!</h1>
//     </div>
//   );
// }

// export default SayHello;

// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;

// import "./styles.css";
// import { Card } from "./components/Card";
// import { contact, contacts } from "./components/Contact";

// function CreateCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       id={contact.id}
//       name={contact.name}
//       image={contact.imgURL}
//       number={contact.phone}
//       email={contact.email}
//     />
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       {contacts.map(CreateCard)}
//     </div>
//   );
// }

// import { DisplayEmoji } from "./components/DisplayEmoji";
// import { emojipedia } from "./components/emojipedia";

// function App() {
//   return (
//     <div>
//       <DisplayEmoji />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// const numbers = [3, 5, 7, 45, 775, 34, 234, 656, 34, 775, 86];
// const newArr = numbers.reduce((total, number) => total + number);

// console.log(newArr);

// export default App;

// import { useState } from "react";

// function App() {
//   let time = new Date().toLocaleTimeString();

//   const [currentTime, setCurrentTime] = useState(time);

//   function GetTime() {
//     setInterval(() => {
//       time = new Date().toLocaleTimeString();
//       setCurrentTime(time);
//     }, 1000);
//   }

//   return (
//     <div>
//       <div className="text-center space-y-4 mt-[200px]">
//         <h1 className="text-4xl font-bold">{currentTime}</h1>
//         <button
//           className="bg-black text-white font-semibold px-6 py-2"
//           onClick={GetTime}
//         >
//           Get Time
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// export default function App() {
//   const [slide, setSlide] = useState(false);
//   const [fade, setFade] = useState(false);

//   function handleClickFade() {
//     setFade(true);
//     setInterval(() => setFade(false), 2000);
//   }

//   function handleClickSlide() {
//     setSlide(true);
//     setInterval(() => setSlide(false), 2000);
//   }
//   return (
//     <div className="text-center mt-[100px]">
//       <div
//         className={`${
//           slide ? "animate-slide" : null
//         } border-2 rounded-xl inline-block p-8`}
//       >
//         <p className="">Hi. I'm Mikyle</p>
//       </div>
//       <div className="mt-8">
//         <button
//           onClick={handleClickSlide}
//           className="border-2 px-4 py-1 rounded-xl"
//         >
//           Phew!
//         </button>
//       </div>
//       <div className="mt-20">
//         <button className="bg-green-300 rounded-xl px-4 py-2 text-xl font-semibold w-40 hover:w-96 duration-1000 ease-linear">
//           Test Button
//         </button>
//       </div>
//       <div
//         className={`${
//           fade ? "animate-fadeItem" : null
//         } border-2 rounded-xl inline-block p-8 mt-12`}
//       >
//         <p className="">Hi. I'm Mikyle</p>
//       </div>
//       <div className="mt-8">
//         <button
//           onClick={handleClickFade}
//           className="border-2 px-4 py-1 rounded-xl"
//         >
//           Phew!
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useInView } from "react-intersection-observer";

// export default function App() {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//   });
//   const [ref2, inView2] = useInView({ threshold: 0.1 });
//   return (
//     <div>
//       <div className="mt-8 text-center h-screen">
//         <p>Test</p>
//       </div>
//       <div className="mt-8 text-center h-screen">
//         <p>Test</p>
//       </div>
//       <div ref={ref2} className="mt-8 text-center h-screen">
//         <img
//           className={`${
//             inView2
//               ? "translate-x-0 scale-100 opacity-100"
//               : "-translate-x-1/2 opacity-0"
//           } duration-1000 rounded-xl`}
//           src="https://images.pexels.com/photos/8721339/pexels-photo-8721339.jpeg"
//           alt="test"
//         />
//       </div>
//       <div className="mt-8 text-center h-screen">
//         <p>Test</p>
//       </div>
//       <div
//         ref={ref}
//         className={`${
//           inView
//             ? "scale-100 translate-x-0 opacity-100"
//             : "-translate-x-1/2 scale-50 opacity-0"
//         } mt-8 text-center h-screen flex duration-1000`}
//       >
//         <div>
//           <img
//             className="p-2 hover:scale-95 duration-500 rounded-x hover:border-2"
//             src="https://images.pexels.com/photos/2128042/pexels-photo-2128042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="test"
//           />
//         </div>
//         <div>
//           <img
//             className="p-2 hover:scale-95 duration-500 rounded-xl hover:border-2"
//             src="https://images.pexels.com/photos/1083807/pexels-photo-1083807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="test"
//           />
//         </div>
//         <div>
//           <img
//             className="p-2 hover:scale-95 duration-500 rounded-xl hover:border-2"
//             src="https://images.pexels.com/photos/3389817/pexels-photo-3389817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="test"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useInView } from "react-intersection-observer";
// import { useState } from "react";

// import imageOne from "./images/1.png";
// import imageTwo from "./images/2.png";
// import imageThree from "./images/3.png";
// import imageFour from "./images/4.png";
// import imageFive from "./images/5.png";
// import imageSix from "./images/6.png";

// export default function Grid() {
//   const { ref, inView } = useInView({
//     threshold: 0.3,
//   });

//   return (
//     <div className="xl:px-80 px-4">
//       <div className="h-screen">
//         <p>This is a test</p>
//       </div>
//       <div
//         ref={ref}
//         className={`${
//           inView
//             ? "translate-x-0 opacity-100 scale-100"
//             : "-translate-x-1/2 opacity-0 scale-0"
//         } xl:grid grid-cols-3 gap-4 items-center duration-1000 space-y-8 xl:space-y-0`}
//       >
//         <div>
//           <img className="border-2 p-2 rounded-lg" src={imageOne} />
//         </div>
//         <div>
//           <img className="border-2 p-2 rounded-lg" src={imageTwo} />
//         </div>
//         <div>
//           <img className="border-2 p-2 rounded-lg" src={imageThree} />
//         </div>
//         <div>
//           <img className="border-2 p-2 rounded-lg" src={imageFour} />
//         </div>
//         <div>
//           <img className="border-2 p-2 rounded-lg" src={imageFive} />
//         </div>
//         <div>
//           <img className="border-2 p-2 rounded-lg" src={imageSix} />
//         </div>
//       </div>
//       <div className="h-screen">
//         <p>This is a test</p>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [value, setValue] = useState("");
//   const [arr, setArr] = useState([]);

//   function deleteName({ id }) {
//     setArr((prev) => [
//       ...prev.filter((name, index) => {
//         return index !== id;
//       }),
//     ]);
//   }

//   function ShowName({ name, id, clickedItem }) {
//     return (
//       <li
//         className="cursor-pointer"
//         onClick={() => {
//           clickedItem({ id });
//         }}
//       >
//         {name}
//       </li>
//     );
//   }

//   function handleValue(e) {
//     const { name, value } = e.target;
//     setValue(value);
//   }

//   function submitValue() {
//     setArr((prev) => {
//       return [...prev, value];
//     });
//     setValue("");
//   }

//   return (
//     <div className="p-20">
//       <div className="space-x-8">
//         <input
//           type="text"
//           value={value}
//           onChange={handleValue}
//           className="border"
//         />
//         <button onClick={submitValue}>Click me</button>
//       </div>
//       <div>
//         <ul>
//           {arr.map((a, index) => (
//             <ShowName
//               key={index}
//               id={index}
//               name={a}
//               clickedItem={deleteName}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// export default function App() {
//   const [isState, setIsState] = useState(false);
//   function handleClick() {
//     setIsState((prev) => !prev);
//   }
//   return (
//     <div className="mt-40 flex justify-center items-center space-x-20">
//       <div>
//         <p className="text-4xl uppercase"> {String(isState)} </p>
//       </div>
//       <button className="border p-1" onClick={handleClick}>
//         Change state
//       </button>
//     </div>
//   );
// }

// import { useState, UseState } from "react";
// import DecreaseButton from "./components/DecreaseButton";
// import IncreaseButton from "./components/IncreaseButton";

// export default function App() {
//   const [count, setCount] = useState(0);

//   function decreaseCount() {
//     setCount(count - 1);
//   }

//   function increaseCount() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <div className="text-center mt-40">
//         <p className="text-2xl font-semibold text-gray-400">Counter</p>
//         <p className="text-4xl font-bold mt-4">{count}</p>
//       </div>
//       <div className="flex justify-center space-x-4 mt-4">
//         <DecreaseButton itemCount={count} clicked={decreaseCount} />
//         <IncreaseButton itemCount={count} clicked={increaseCount} />
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// const fruits = {
//   apple: {
//     fruit: "Apple",
//     quantity: 5,
//   },
//   mango: {
//     fruit: "Mango",
//     quantity: 3,
//   },
// };

// export default function App() {
//   const [fruitQuantities, setFruitQuantities] = useState(fruits);

//   const handleClick = (fruitName) => {
//     setFruitQuantities((prev) => {
//       return {
//         ...prev, // Spread the previous state to keep other fruit data unchanged
//         [fruitName]: {
//           ...prev[fruitName], // Spread the current fruit data
//           quantity: prev[fruitName].quantity + 1, // Increment the quantity
//         },
//       };
//     });
//   };

//   const decreaseValue = (fruitName) => {
//     setFruitQuantities((prev) => {
//       return {
//         ...prev,
//         [fruitName]: {
//           ...prev[fruitName],
//           quantity: prev[fruitName].quantity - 1,
//         },
//       };
//     });
//   };

//   return (
//     <div>
//       <div className="text-center mt-40 select-none">
//         {Object.values(fruitQuantities).map((fruit, index) => (
//           <div key={index}>
//             <span>{fruit.fruit}: </span>
//             <span>{fruit.quantity}</span>
//             <span>
//               <button
//                 onClick={() => decreaseValue(fruit.fruit.toLowerCase())}
//                 className="font-bold text-xl ml-2"
//               >
//                 -
//               </button>
//             </span>
//             <span>
//               <button
//                 onClick={() => handleClick(fruit.fruit.toLowerCase())}
//                 className="font-bold text-xl ml-2"
//               >
//                 +
//               </button>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [user, setUser] = useState({
//     name: "Alice",
//     age: 25,
//     address: {
//       city: "New York",
//       zip: "10001",
//     },
//   });

//   const updateCity = (newCity) => {
//     setUser((prev) => {
//       return {
//         ...prev,
//         address: {
//           ...prev.address,
//           city: newCity,
//         },
//       };
//     });
//   };

//   return (
//     <div className="text-center mt-40">
//       <div>
//         <p>Name: {user.name}</p>
//         <p>Age: {user.age} </p>
//         <p>
//           City: {user.address.city}{" "}
//           <button
//             onClick={() => updateCity("San Franciso")}
//             className="font-bold ml-2"
//           >
//             +
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// const fruitItems = {
//   apple: {
//     name: "apple",
//     count: 5,
//   },

//   mango: {
//     name: "mango",
//     count: 4,
//   },
// };

// export default function App() {
//   const [fruits, setFriuts] = useState(fruitItems);

//   const increaseCount = (name) => {
//     setFriuts((prevState) => {
//       return {
//         ...prevState,
//         [name]: {
//           ...prevState[name],
//           count: prevState[name].count + 1,
//         },
//       };
//     });
//   };

//   const decreaseCount = (name) => {
//     setFriuts((prevState) => {
//       return {
//         ...prevState,
//         [name]: {
//           ...prevState[name],
//           count: prevState[name].count - 1,
//         },
//       };
//     });
//   };
//   return (
//     <div>
//       <div className="mt-40">
//         {Object.values(fruits).map((fruit, index) => (
//           <div
//             className="flex justify-center items-center space-x-4"
//             key={index}
//           >
//             <div className="flex">
//               <p>
//                 Name: <span className="font-bold capitalize">{fruit.name}</span>
//               </p>
//               <p className="ml-4">
//                 Quantity: <span className="font-bold">{fruit.count}</span>
//               </p>
//             </div>
//             <div className="space-x-2">
//               <button
//                 className="font-bold text-xl"
//                 onClick={() => decreaseCount(fruit.name.toLocaleLowerCase())}
//               >
//                 -
//               </button>
//               <button
//                 className="font-bold text-xl"
//                 onClick={() => increaseCount(fruit.name.toLowerCase())}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import IncreaseButton from "./components/IncreaseButton";
// import DecreaseButton from "./components/DecreaseButton";
// const fruitDict = {
//   apple: {
//     name: "Apple",
//     count: 0,
//   },
//   mango: {
//     name: "Mango",
//     count: 0,
//   },
//   pineapple: {
//     name: "Pineapple",
//     count: 0,
//   },
// };
// const App = () => {
//   const [fruits, setFruits] = useState(fruitDict);

//   const DecreaseCount = (fruit) => {
//     setFruits((prevState) => {
//       if (prevState[fruit].count > 0) {
//         return {
//           ...prevState,
//           [fruit]: {
//             ...prevState[fruit],
//             count: prevState[fruit].count - 1,
//           },
//         };
//       } else {
//         return prevState;
//       }
//     });
//   };
//   const IncreaseCount = (fruit) => {
//     setFruits((prevState) => {
//       return {
//         ...prevState,
//         [fruit]: {
//           ...prevState[fruit],
//           count: prevState[fruit].count + 1,
//         },
//       };
//     });
//   };
//   return (
//     <div>
//       <div className="text-center mt-40 space-y-8 select-none">
//         {Object.values(fruits).map((fruit, index) => (
//           <div key={index}>
//             <div>
//               <p className="font-bold text-xl">{fruit.name}</p>
//             </div>
//             <div className="flex justify-center space-x-8 items-center">
//               <div>
//                 <DecreaseButton
//                   handleClick={() =>
//                     DecreaseCount(fruit.name.toLocaleLowerCase())
//                   }
//                 />
//               </div>
//               <div>
//                 <p className="font-semibold text-lg mt-2">{fruit.count}</p>
//               </div>
//               <div>
//                 <IncreaseButton
//                   handleClick={() =>
//                     IncreaseCount(fruit.name.toLocaleLowerCase())
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
// import IncreaseButtonNew from "./components/IncreaseButtonNew";
// import DecreaseButtonNew from "./components/DecreaseButtonNew";

// import { useState } from "react";
// const fruitDict = {
//   apple: {
//     name: "Apple",
//     count: 0,
//     price: 2.0,
//     total: 0,
//   },
//   mango: {
//     name: "Mango",
//     count: 0,
//     price: 3.0,
//     total: 0,
//   },
//   coconut: {
//     name: "Coconut",
//     count: 0,
//     price: 4.0,
//     total: 0,
//   },
//   kiwi: {
//     name: "Kiwi",
//     count: 0,
//     price: 1.0,
//     total: 0,
//   },
// };

// export default function App() {
//   const [fruitArr, setFruitArr] = useState(fruitDict);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const DecreaseCount = (name) => {
//     setFruitArr((prevState) => {
//       if (prevState[name].count > 0) {
//         return {
//           ...prevState,
//           [name]: {
//             ...prevState[name],
//             count: prevState[name].count - 1,
//           },
//         };
//       } else {
//         return prevState;
//       }
//     });
//   };

//   const IncreaseCount = (name) => {
//     setFruitArr((prevState) => {
//       return {
//         ...prevState,
//         [name]: {
//           ...prevState[name],
//           count: prevState[name].count + 1,
//         },
//       };
//     });
//   };

//   const DeleteItem = (fruit) => {
//     setFruitArr((prevState) => ({
//       ...prevState,
//       [fruit]: {
//         ...prevState[fruit],
//         count: (prevState[fruit].count = 0),
//       },
//     }));
//   };

//   return (
//     <div>
//       <div className="mt-12">
//         {Object.values(fruitArr).map((fruit, index) => (
//           <div key={index} className="text-center mt-12 select-none">
//             <div>
//               <div className="flex justify-center space-x-6">
//                 <p className="font-bold text-2xl">{fruit.name}</p>
//                 <p className="font-bold text-2xl">R{fruit.price}.00</p>
//               </div>
//             </div>
//             <div className="flex space-x-4 items-center justify-center mt-4">
//               <div>
//                 <DecreaseButtonNew
//                   handleClick={() =>
//                     DecreaseCount(fruit.name.toLocaleLowerCase())
//                   }
//                 />
//               </div>
//               <div>
//                 <p>{fruit.count}</p>
//               </div>
//               <div>
//                 <IncreaseButtonNew
//                   handleClick={() =>
//                     IncreaseCount(fruit.name.toLocaleLowerCase())
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div>
//         <div>
//           <p className="text-2xl text-center my-12">Your Basket</p>
//         </div>
//         {Object.values(fruitArr).map((fruit, index) => {
//           if (fruit.count > 0) {
//             return (
//               <div
//                 key={index}
//                 className="grid grid-cols-4 xl:px-[600px] px-8 mb-4 items-center"
//               >
//                 <div>
//                   <p>{fruit.name}</p>
//                 </div>
//                 <div>
//                   <p>{fruit.count}</p>
//                 </div>
//                 <div>
//                   <p>Total: R{fruit.count * fruit.price}.00</p>
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => DeleteItem(fruit.name.toLocaleLowerCase())}
//                     className="text-sm text-gray-400 font-bold border-2 px-3 py-1 rounded-full border-black"
//                   >
//                     X
//                   </button>
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className="text-center">
//         <p>Full amount: R{totalPrice}.00</p>
//       </div>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
}
