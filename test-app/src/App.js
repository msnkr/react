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

// import {vehicle} from "./fakerVehicle"

// function VehicleItems({vehicle}) {
//     return (
//         <div className="grid grid-cols-2 text-center gap-12">
//             {vehicle.map((v, index) => (
//                 <div key={index}>
//                     <h1 className="text-xl font-semibold">{v.manufacturer}</h1>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default function App() {
//     return (
//         <div className="p-8">
//             <VehicleItems vehicle={vehicle} />
//         </div>
//     )
// }

let imageArr = [];

for (let index = 0; index < 100; index++) {
  let random = Math.floor(Math.random() * 1000);
  let image = "https://picsum.photos/300/300?random=" + random;
  imageArr.push(image);
}

function ShowImages({ imageArr }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-10">
        {imageArr.map((image, index) => (
          <div key={index}>
            <img
              className="rounded-xl hover:shadow-2xl transistion duration-500 ease-in-out"
              src={image}
              alt="random"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="p-8">
      <ShowImages imageArr={imageArr} />
    </div>
  );
}
