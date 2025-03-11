import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div className="mt-4">
            <Link to={`${user.id}`}>
              <img src={user.image} />
            </Link>
          </div>
          <div>
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default App;
