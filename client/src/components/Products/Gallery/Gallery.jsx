import styles from '../Gallery/Gallery.module.css'
import { useState, useEffect } from 'react'
import * as cakeService from '../../../services/cakeService'
import { GalleryItem } from '../GalleryItem/GalleryItem'

export const Gallery = () => {
    const [cakes, setCakes ] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cakesLoaded, setCakesLoaded] = useState(false);
    const itemsPerPage = 6;

    useEffect(() => {
        cakeService.getAll()
        .then(result => {
           
            setCakes(result)
            setCakesLoaded(true);
            })
        .catch(err => console.log(err))
    },[])
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
       };
      
       const indexOfLastItem = currentPage * itemsPerPage;
       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
       const currentItems = cakes.slice(indexOfFirstItem,indexOfLastItem);
    
    
    return (

    <div className={styles.lightbox_gallery}>
        <div className="container">
            <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: 600 }}
          >
                <h2 className="text-primary font-secondary">Галерия</h2>
            {/* <h1 className="display-4 text-uppercase">Разгледайте нашите предложения</h1> */}
            </div>
            <div className={`${cakesLoaded ? styles.loaded : styles.noLoaded}`}>
                <div className="row">

                    {cakes.length > 0 
                        ? (
                            <>
                            {currentItems.map(cake => (
                                <GalleryItem key={cake._id} img={cake.imgUrl} />
                            ))}
                            </>
                        ) :
                        <div>Error</div>
                    
                    }
                   
                </div>
            </div>
        </div>

        <div className={styles.pagination}>
            <button className={styles.controls} onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
                Назад
            </button>
            <span>
         {currentPage} от {Math.ceil(cakes.length / itemsPerPage)}
            </span>
            <button className={styles.controls} onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(cakes.length / itemsPerPage)}>
                Напред
            </button>
        </div>
    </div>

    )
}