import { Link } from "react-router-dom";
import styles from "../Comment/Comment.module.css";

export const Comment = ({ imageUrl, cream, _createdOn, user, _id }) => {
  return (
    <div className="col-lg-3 mb-4">
      <div className="card">
        <div className={styles.cardComment}>
        <Link to={`${_id}`}>
          <img src={imageUrl} alt="..." className={styles.imgComment} />
          </Link>
        </div>
        <div className="card-body">
          <p className="card-text">С вкус на {cream}</p>
          <div className={styles.btnComment}>
            
              <Link
                to={`${_id}`}
                className="btn btn-custom border-inner py-3 px-5"
              >
                Детайли
              </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};
