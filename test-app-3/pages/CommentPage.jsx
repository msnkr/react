import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CommentPage = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [id]);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.id}</p>
    </div>
  );
};

export default CommentPage;
