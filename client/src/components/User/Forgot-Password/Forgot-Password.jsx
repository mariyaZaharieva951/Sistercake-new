import { useState, useContext} from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/authContex";
import { useNavigate, Link } from "react-router-dom";

import * as authService from '../../../services/authService';
import styles from '../Forgot-Password/Forgot-Password.module.css';


export const ForgotPassword = () => {

    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({email: ""});
    const [errors,setErrors] = useState({});
    const [serverErrors,setServerErrors] = useState({})
    const [hasError,setHasError] = useState(false);

    const resetFormHandler = () => {
        setFormValues({email: ""});
        setErrors({})
      };


      const submitHandler = (values) => {

        const { email } = values;
        authService.resetPass(email)
        
        .then(authData => {   
            console.log(authData)
            navigate('/login');
        })
        .catch(error => {
          setServerErrors(error.message);
          setHasError(true)
          navigate('/register')
            
        })

        resetFormHandler();
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      const emailValidator = () => {

        if(!validateEmail(values.email)) {
          setErrors(state => ({
            ...state,
            email: 'Въведете валиден формат на ел. поща'
          }))
        }
    
        if(values.email.length < 5) {
          setErrors(state => ({
            ...state, email: 'Ел. поща трябва да съдържа минимум 5 символа'
          })) 
        } else {
          if(errors.email) {
            setErrors(state => ({
              ...state, email: ''
            }))
          }
        }
    }


    const { values, onChange, onSubmit} = useForm(submitHandler,formValues)


    return (
        <div className={styles.container}>
      <div className={styles.row}>
        
          <div className={styles.card}>
            <form className={styles.box} onSubmit={onSubmit}>
              <h1>Възстановяване</h1>

              <div className={styles.columnn}>
              <input 
              type="text" 
              name="email" 
              placeholder="Имейл" 
              id="email"
              value={values.email}
              onChange={onChange}
              onBlur={emailValidator}
              />
              {errors.email && (<p className={styles.error}>{errors.email}</p>)}
              </div>

              <div>
              {hasError && (<p className={styles.error}>{Object.values(serverErrors).map(err => err)}</p>)}
              </div>

              {/* <div>
                 <Link className={styles.forgot} to="/register">Forgot password?</Link>
              </div> */}

              <div className={styles.buttons}>
              <input type="submit" name="Възстанови" value='Възстанови' href="#" />
              <Link className={styles.back} to={'/login'}>Назад</Link>
              </div>

            </form>
          </div>
        
      </div>
    </div>
    )
}