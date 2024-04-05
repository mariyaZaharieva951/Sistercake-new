import { useState, useContext, useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContex";

import * as commentService from "../../../services/commentService";
import styles from "../CreateComment/CreateComment.module.css";

export const CreateComment = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 
  const [comments,setComments] = useState([]);
  const [formValues, setFormValues] = useState({imageUrl: "",cream: "",description: "", user:`${user.email}`});
 

  const resetFormHandler = () => {
  setFormValues({imageUrl: "",
  cream: "",
  description: "",
});
  };

  useEffect(() => {
    commentService.getAllComments()
    .then(result => {
      setComments(result)
    })
  },[])
  

  const submitHandler = (values) => {
        commentService.createComment(values, user.accessToken)
            .then((result) => {
                setComments((state) => ([ ...state, result ]))
                },
                 navigate("/comments"))
        .catch((error) =>{ 
        console.log(error)
        })

        resetFormHandler();
}

const { values, onChange, onSubmit } = useForm(submitHandler,formValues);

  return (
    <div className={styles.createPage}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.card}>
            <form className={styles.box} onSubmit={onSubmit}>
              <h1>Създай Коментар</h1>
              <div className={styles.line}>
                <label htmlFor="game-img">Снимка:</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Качи снимка..."
                  value={values.imageUrl}
                  onChange={onChange}
                  required
                />
              </div>
              <div className={styles.line}>
                <label htmlFor="game-img">Вкус:</label>
                <input
                  type="text"
                  name="cream"
                  placeholder="Крем..."
                  value={values.cream}
                  onChange={onChange}
                  required
                />
              </div>
              <div className={styles.line}>
                <label htmlFor="game-img">Описание:</label>
                <textarea
                  name="description"
                  placeholder="Коментар..."
                  style={{ height: "100px" }}
                  value={values.description}
                  onChange={onChange}
                  required
                ></textarea>
              </div>

              <input className={styles.btnComment} type="submit" name="" defaultValue="Create" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
