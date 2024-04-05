import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContex";
import * as commentService from "../../../services/commentService";
import * as likeService from "../../../services/likeService";
import styles from "../DetailsComment/DetailsComment.module.css";
import { toast } from 'react-toastify';


export const DetailsComment = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { commentId } = useParams();

  const [currentComment, setCurrentComment] = useState({});

  useEffect(() => {
    commentService
      .getOneComment(commentId)
      .then((result) => {
        setCurrentComment(result);
      })
      .catch((err) => console.log(err));
   
   
    likeService.getAllLikes(commentId).then((result) => 
    { if(result.length !== 0) {
        setCurrentComment((state) => ({ ...state, likes: result }));
      }
      
    });
  
  }, [commentId]);

  const onDelete = (ev) => {
    ev.preventDefault();

    commentService
      .delComment(commentId, user.accessToken)
      .then((result) => {
        navigate("/comments");
      })
      .catch((err) => console.log(err));
  };

  const onLike = () => {
    if (isLiker) {
    toast.success('Вие вече сте харесали този коментар')
    }

    likeService
      .addLike(user._id, currentComment._id, user.accessToken)

      .then((result) => {
        setCurrentComment((state) => ({ ...state, likes: result }));
      });
  };

  const isOwner = currentComment._ownerId === user._id;

  const isLiker = currentComment.likes?.includes(user._id);

  let btnLike = styles.inactiveLike;
  if (isLiker) {
    btnLike = `${styles.activeLike}`;
  } else {
    btnLike = `${styles.inactiveLike}`;
  }
  
  return (
    <div className="container">
      <div className={styles.detailsBox}>
        <div className="col-md-5">
          <div className="card">
            <div className="card-img-top image-card image-card-1">
              <img src={currentComment.imageUrl} alt="..." />
            </div>
            <div className="card-body">
              <p className="card-text">{`С вкус на ${currentComment.cream}`}</p>
              <p className="card-text">{currentComment.description}</p>
              <div className="mt-4 about d-flex justify-content-between align-items-center">
                <span>{currentComment.user?.email}</span>
                {/* <span>{currentComment._createdOn}</span> */}
              </div>
              {isOwner 
              ? (
                <div className={styles.btnDetail}>
                  <div className={styles.btnEdit}>
                    <Link
                      to={`/comment/edit/${currentComment._id}`}
                      className="btn btn-custom border-inner py-3 px-5"
                    >
                      Редактиране
                    </Link>
                  </div>
                  <div className={styles.btnDelete}>
                    <Link
                      to={`/comment/delete/${currentComment._id}`}
                      className="btn btn-custom border-inner py-3 px-5"
                      onClick={onDelete}
                    >
                      Изтриване
                    </Link>
                  </div>
                </div>
              ) 
              : (
                <div className={styles.info}>
                <p className={styles.infoMail}>{currentComment.user}</p>
                <div className={btnLike}>
                  <Link
                    href=""
                    className="btn btn-outline-custom py-3"
                    onClick={onLike}
                    likes={currentComment.likes?.length}
                  >
                    <i className="fa fa-heart"></i>
                  </Link>
                  
                </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
