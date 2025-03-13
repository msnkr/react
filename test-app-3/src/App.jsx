// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data.users));
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="grid grid-cols-3">
//         {users.map((user) => (
//           <div key={user.id} className="p-8">
//             <div className="flex flex-col justify-center items-center">
//               <img src={user.image} />
//             </div>
//             <div>
//               <Link to={`${user.id - 1}`}>
//                 <p className="text-center font-2xl font-mono">
//                   {user.firstName} {user.lastName}
//                 </p>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");

  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch(value);
  };

  const handleClick = () => {
    setSearched(search);
  };

  const filteredItems = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searched.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <div className="flex justify-center items-center">
        <div>
          <input
            placeholder="Search"
            className="border-2 px-2 py-1"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="border-2 px-2 py-1" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      {filteredItems.map((item, index) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default App;
