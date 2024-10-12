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

let year = new Date();
const name = "msn";

export default function App() {
  return (
    <div className="mt-20 ml-20">
      <h1 className="text-2xl font-semibold">
        Created by <span className="text-red-300">{name}</span>
      </h1>
      <p className="font-xs text-gray-400">Copyright: {year.getFullYear()}</p>
    </div>
  );
}
