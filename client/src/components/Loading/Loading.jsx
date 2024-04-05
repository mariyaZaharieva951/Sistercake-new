import styles from '../Loading/Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.loader}>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  );
};
