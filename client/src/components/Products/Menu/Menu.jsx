import styles from "../Menu/Menu.module.css";
import { useState, useEffect } from 'react'
import * as cakeService from '../../../services/cakeService'
import { MenuItem } from "../MenuItem/MenuItem";
import { Loading } from "../../Loading/Loading";


export const Menu = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [birthdayCakes, setBirthdayCakes] = useState([]);
  const [weddingCakes, setWeddingCakes] = useState([]);
  const [kidsCakes, setKidsCakes] = useState([]);
  const [individualCakes, setIndividualCakes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 
  const currentBirthDay = birthdayCakes.slice(indexOfFirstItem, indexOfLastItem);
  const currentWedding = weddingCakes.slice(indexOfFirstItem, indexOfLastItem);
  const currentKids = kidsCakes.slice(indexOfFirstItem, indexOfLastItem);
  const currentIndividual = individualCakes.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    cakeService.getAllBirthdayCake()
    .then(result => {
      setBirthdayCakes(result)
    
      
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));


    cakeService.getAllWeddingCake()
    .then(result => {
      setWeddingCakes(result)
    
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));


    cakeService.getAllKidsCake()
    .then(result => {
      setKidsCakes(result)
    
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));


    cakeService.getAllIndividualCake()
    .then(result => {
      setIndividualCakes(result)
  
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));

  },[])





  return (
    <div className="container-fluid">
      <div className="container">
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: 600 }}
        >
          <h2 className={styles.menuTitle}>Меню</h2>
          {/* <h3 className={styles.menuText}>Разгледайте нашите предложения</h3> */}
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
            <li className="nav-item">
              <a
                className="nav-link text-white active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                Рожден ден
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                Сватба
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                Детски
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                data-bs-toggle="pill"
                href="#tab-4"
              >
                По желание на клиента
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-3">
                {isLoading && <Loading/>}
                {currentBirthDay?.length > 0 ?
                currentBirthDay.map(cake => <MenuItem  key={cake._id} {...cake} menuId={'birthday'} />):
                <div>Error</div> }     
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-3">
              {isLoading && <Loading/>}
              {currentWedding?.length > 0 ?
                currentWedding.map(cake => <MenuItem key={cake._id} {...cake} menuId={'wedding'}/>):
                <div>Error</div> }  
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-3">
            {isLoading && <Loading/>}
            {currentKids?.length > 0 ?
                currentKids.map(cake => <MenuItem key={cake._id} {...cake} menuId={'kids'}/>):
                <div>Error</div> 
                } 
            </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-3">
              {isLoading && <Loading/>}
              {currentIndividual?.length > 0 ?
                currentIndividual.map(cake => <MenuItem key={cake._id} {...cake} menuId={'individual'}/>):
                <div>Error</div> }  
              </div>
            </div>
            <div className={styles.pagination}>
        <button className={styles.controls}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
           &lt;&lt;&lt;
        </button>
        <span>
          {currentPage} от {Math.ceil(birthdayCakes.length / itemsPerPage)}
        </span>
        <button className={styles.controls}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(birthdayCakes.length / itemsPerPage)}
        >
          &gt;&gt;&gt;
        </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};
