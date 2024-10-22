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

import { persons } from "./data/person";

function ShowProfile() {
  return (
    <div className="space-y-3 md:space-y-0 md:grid grid-cols-2 lg:grid-cols-3">
      {persons.map((person, index) => (
        <div
          key={index}
          className="cursor-pointer flex items-center border rounded-xl border-2 shadow-sm p-8 space-x-8 md:w-[350] md:h-[200px] hover:shadow-xl"
        >
          <div>
            <img
              className="w-[120px] h-[120px] rounded-full"
              src={person.avatarGitHub}
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">{person.fullName}</h1>
            <p>{person.gender}</p>
            <p className="text-gray-400">{person.jobTitle}</p>
            <p className="capitalize">{person.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex">
      <ShowProfile />
    </div>
  );
}
