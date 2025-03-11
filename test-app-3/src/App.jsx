import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <ul>
        {user.map((comment, index) => (
          <Link to={`${comment.id}`}>
            <div>
              <li key={comment.id}>
                {comment.email} ||
                {comment.id}
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default App;
