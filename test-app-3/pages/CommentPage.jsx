import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CommentPage = () => {
  const { id } = useParams();
  const [currentComment, setCurrentComment] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((json) => setCurrentComment(json));
  }, []);

  return (
    <>
      <p>{currentComment.body}</p>
    </>
  );
};

export default CommentPage;
