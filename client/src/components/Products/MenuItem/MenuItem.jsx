import { Link } from "react-router-dom";
import styles from "../MenuItem/MenuItem.module.css";


export const MenuItem = ({ _id, imgUrl,menuId}) => {
  
  return (
    
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div className="bg-white rounded shadow-sm">
        <Link to={`${menuId}/${_id}`} className={styles.cakeTitle}>
          <img src={imgUrl} alt="" className="img-fluid card-img-top" />
        </Link>
        <div className="p-4">
          <div className={styles.text}>
            <div className={styles.btnItem}>
              <Link to={`${menuId}/${_id}`} >Детайли</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
