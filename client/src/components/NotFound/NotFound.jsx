import { Link } from 'react-router-dom'
import styles from '../NotFound/NotFound.module.css'


export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <p className={styles}>Търсената страница не съществува</p>
            <button>
                <Link to={'/'}>Начало</Link>
            </button>
        </div>
    )
}