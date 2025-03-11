import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="p-8">
            <div className="flex flex-col justify-center items-center">
              <img src={user.image} />
            </div>
            <div>
              <Link to={`${user.id}`}>
                <p className="text-center font-2xl font-mono">
                  {user.firstName} {user.lastName}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
