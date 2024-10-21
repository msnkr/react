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

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
