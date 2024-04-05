import styles from "../EditComment/EditComment.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import * as commentService from "../../../services/commentService";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContex";

export const EditComment = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { commentId } = useParams();
  const [currentComment, setCurrentComment] = useState({
    imageUrl: "",
    cream: "",
    description: "",
  });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentService
      .getOneComment(commentId)
      .then((result) => {
        setCurrentComment(result);
      })
      .catch((err) => console.log());

    commentService.getAllComments().then((result) => {
      setComments(result);
    });
  }, [commentId]);

  const submitHandler = (values) => {

    commentService
      .editComment(commentId, user.accessToken, values)
      .then((result) => {
        setComments((state) =>
          state.map((comment) => (comment._id === commentId ? result : comment))
        );
        setCurrentComment((state) => ({ ...state, result }));
        navigate("/comments") 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { values, onChange, onSubmit } = useForm(submitHandler, currentComment);

  return (
    <div className={styles.editPage}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.card}>
            <form className={styles.box} onSubmit={onSubmit}>
              <h1>Редактирай Коментар</h1>
              <div className={styles.line}>
                <label htmlFor="game-img">Снимка:</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={values.imageUrl}
                  onChange={onChange}
                />
              </div>
              <div className={styles.line}>
                <label htmlFor="game-img">Вкус:</label>
                <input
                  type="text"
                  name="cream"
                  value={values.cream}
                  onChange={onChange}
                />
              </div>
              <div className={styles.line}>
                <label htmlFor="game-img">Описание:</label>
                <textarea
                  name="description"
                  style={{ height: "100px" }}
                  value={values.description}
                  onChange={onChange}
                ></textarea>
              </div>

              <input className={styles.btnEdit} type="submit" name="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
