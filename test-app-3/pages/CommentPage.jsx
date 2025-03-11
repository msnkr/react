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

  console.log(user);
};

export default CommentPage;
