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
import { useInView } from "react-intersection-observer";

export default function App() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <div>
      <div className="h-screen text-center mt-36">
        <h1>This is a test</h1>
      </div>
      <div className="px-8 text-center">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Enim duis
          condimentum ut sed velit erat ornare. Viverra torquent vestibulum
          curae efficitur vestibulum ultrices placerat habitasse curabitur.
          Penatibus ante conubia semper quisque diam. Sapien etiam ligula
          sodales iaculis maecenas auctor cursus porttitor. Mi facilisis nisl
          euismod; interdum suscipit efficitur in lacinia. Mi ultricies
          fermentum a scelerisque phasellus rhoncus pretium euismod. At enim
          aliquet pellentesque auctor malesuada commodo nibh maximus ad. Aptent
          maecenas ut habitasse vel eget. Metus iaculis tempor et placerat
          aliquam ante tristique sapien quis. Curae ligula cubilia diam
          torquent; habitant volutpat. Volutpat at rhoncus ad posuere parturient
          proin torquent vehicula. Ipsum facilisi dis duis placerat nullam
          scelerisque torquent aenean. Praesent egestas duis mus nam nascetur
          litora tortor metus orci. Vitae duis ullamcorper sed hendrerit
          parturient venenatis fermentum. Vitae eget placerat sed donec donec
          semper. Est phasellus nullam lacinia sed consequat sollicitudin eu.
          Vehicula tellus aptent; nunc tellus ante quam. Curabitur tellus
          maecenas at dui senectus leo. Viverra nisl parturient faucibus quisque
          pulvinar non accumsan. Nam id venenatis, pulvinar sagittis inceptos
          rhoncus semper. Penatibus ultricies accumsan donec nisi tincidunt
          proin semper egestas convallis. Lacinia eget urna purus justo tempor
          cubilia facilisi. Blandit lorem ex nostra, nam tellus diam. Sodales
          adipiscing finibus ac aliquam fringilla ut volutpat iaculis. Torquent
          vulputate enim; mattis dapibus montes ridiculus. Finibus senectus
          velit a per conubia velit sit metus. Elit sapien lectus mauris
          phasellus rutrum placerat integer congue auctor. Nascetur scelerisque
          sed nascetur condimentum dolor. Nam dui luctus cras semper egestas
          senectus. Fames curabitur senectus ligula conubia accumsan sapien
          lacus. Conubia nam cras sociosqu suspendisse integer morbi
          sollicitudin. Tellus sed tortor sociosqu elementum integer. Velit
          elementum cubilia vel commodo tincidunt habitasse condimentum diam
          conubia. Facilisi amet mus mattis ultricies adipiscing mattis facilisi
          mi. Laoreet ad scelerisque, facilisi habitant at nullam lobortis
          ridiculus. Est ornare ipsum potenti magnis dui imperdiet. Euismod dui
          auctor proin dis diam integer risus dictum. Lacinia vivamus tortor
          dignissim ante finibus accumsan tempus. Massa praesent pellentesque
          potenti placerat amet? Efficitur ac tempus class eros fringilla
          euismod nec per.
        </p>
      </div>
      <div className="h-screen text-center mt-36">
        <h1
          ref={ref}
          className={`${
            inView ? "translate-x-0" : "-translate-x-1/2"
          } duration-1000 text-4xl`}
        >
          This is a test
        </h1>
      </div>
      <div className="px-8 text-center">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Enim duis
          condimentum ut sed velit erat ornare. Viverra torquent vestibulum
          curae efficitur vestibulum ultrices placerat habitasse curabitur.
          Penatibus ante conubia semper quisque diam. Sapien etiam ligula
          sodales iaculis maecenas auctor cursus porttitor. Mi facilisis nisl
          euismod; interdum suscipit efficitur in lacinia. Mi ultricies
          fermentum a scelerisque phasellus rhoncus pretium euismod. At enim
          aliquet pellentesque auctor malesuada commodo nibh maximus ad. Aptent
          maecenas ut habitasse vel eget. Metus iaculis tempor et placerat
          aliquam ante tristique sapien quis. Curae ligula cubilia diam
          torquent; habitant volutpat. Volutpat at rhoncus ad posuere parturient
          proin torquent vehicula. Ipsum facilisi dis duis placerat nullam
          scelerisque torquent aenean. Praesent egestas duis mus nam nascetur
          litora tortor metus orci. Vitae duis ullamcorper sed hendrerit
          parturient venenatis fermentum. Vitae eget placerat sed donec donec
          semper. Est phasellus nullam lacinia sed consequat sollicitudin eu.
          Vehicula tellus aptent; nunc tellus ante quam. Curabitur tellus
          maecenas at dui senectus leo. Viverra nisl parturient faucibus quisque
          pulvinar non accumsan. Nam id venenatis, pulvinar sagittis inceptos
          rhoncus semper. Penatibus ultricies accumsan donec nisi tincidunt
          proin semper egestas convallis. Lacinia eget urna purus justo tempor
          cubilia facilisi. Blandit lorem ex nostra, nam tellus diam. Sodales
          adipiscing finibus ac aliquam fringilla ut volutpat iaculis. Torquent
          vulputate enim; mattis dapibus montes ridiculus. Finibus senectus
          velit a per conubia velit sit metus. Elit sapien lectus mauris
          phasellus rutrum placerat integer congue auctor. Nascetur scelerisque
          sed nascetur condimentum dolor. Nam dui luctus cras semper egestas
          senectus. Fames curabitur senectus ligula conubia accumsan sapien
          lacus. Conubia nam cras sociosqu suspendisse integer morbi
          sollicitudin. Tellus sed tortor sociosqu elementum integer. Velit
          elementum cubilia vel commodo tincidunt habitasse condimentum diam
          conubia. Facilisi amet mus mattis ultricies adipiscing mattis facilisi
          mi. Laoreet ad scelerisque, facilisi habitant at nullam lobortis
          ridiculus. Est ornare ipsum potenti magnis dui imperdiet. Euismod dui
          auctor proin dis diam integer risus dictum. Lacinia vivamus tortor
          dignissim ante finibus accumsan tempus. Massa praesent pellentesque
          potenti placerat amet? Efficitur ac tempus class eros fringilla
          euismod nec per.
        </p>
      </div>
    </div>
  );
}
