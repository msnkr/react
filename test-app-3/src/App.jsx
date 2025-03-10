import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div className="m-8 cursor-pointer" key={user.id}>
          <Link to={`${user.id}`}>{user.email}</Link>
          <p>{user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
