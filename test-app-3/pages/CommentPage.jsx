import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CommentPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.users[id]));
  }, []);

  return (
    <div className="p-8">
      <div>
        <Link to={"/"}>
          <button className="font-mono">Go Home</button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={user.image} alt="" />
        </div>
        <div>
          <p className="text-center">
            {user.firstName} {user.maidenName} {user.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
