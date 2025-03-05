//HOOKS
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Comments({ planId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useContext(UserContext);

  const handleDetails = (e) => setNewComment(e.target.value);

  const getComments = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plans/${planId}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleCreateComment = (e) => {
    e.preventDefault();
    const requestBody = {
      user: user._id,
      details: newComment,
    };

    console.log(user);
    
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/plans/${planId}/comments`,
        requestBody,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        setNewComment("");
        getComments();
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage("Error al comentar:", errorDescription);
      });
  };

  const handleDeleteComment = (commentId) => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        getComments();
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage("Error al borrar el comentario:", errorDescription);
      });
  };

  return (
    <>
      <h3>Comentarios</h3>

      <form onSubmit={handleCreateComment}>
        <input
          type="text"
          name="Details"
          value={newComment}
          onChange={handleDetails}
          placeholder="Añade tu comentario"
        />
        <button type="submit">⬆︎</button>
      </form>

      {comments.length === 0 ? (
        <p>Aún no hay comentarios</p>
      ) : (
        <>
          {comments
            .slice(0, showComments ? comments.length : 3)
            .map((comment) => (
              <div key={comment._id}>
                <img
                  src={comment.user.image}
                  alt={`Foto de ${comment.user.name}`}
                />
                <b>{comment.user.name}</b>
                <p>{comment.details}</p>
                {comment.user._id === user._id && (
                  <button onClick={() => handleDeleteComment(comment._id)}>
                    🗑️
                  </button>
                )}
              </div>
            ))}
          {comments.length > 3 && (
            <button onClick={() => setShowComments(!showComments)}>
              {showComments ? "Ver menos" : "Ver comentarios"}
            </button>
          )}
        </>
      )}
    </>
  );
}
export default Comments;
