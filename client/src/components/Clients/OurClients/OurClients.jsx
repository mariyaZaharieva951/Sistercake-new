import styles from "../OurClients/OurClients.module.css";
import { Comment } from "../Comment/Comment";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as commentService from "../../../services/commentService";
import { Loading } from "../../Loading/Loading";

export const OurClients = () => {
  const [comments, setComments] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    commentService
      .getLatesComments()
      .then((result) => {
        if(result){
        setComments(result);
      }})
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  
  return (
    <div className="container">
      <div
        className="section-title position-relative text-center mx-auto mb-5 pb-3"
        style={{ maxWidth: 600 }}
      >
        <h2 className="text-primary font-secondary">Клиентите за нас</h2>
      </div>

      <div className="row">
        {isLoading && <Loading/>}
        {comments.length > 0 
        ? (comments.map((comment) => <Comment key={comment._id} {...comment} />))
        : (<p className={styles.noComments}>Няма добавени коментари</p>)}
      </div>
      <div className={styles.btnCreate}>
        <Link
          to={"/createComment"}
          className="btn btn-custom border-inner py-3 px-5 me-5"
        >
          Остави коментар
        </Link>
      </div>
    </div>
  );
};
