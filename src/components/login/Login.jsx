import {useContext, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { appContext } from '../../context/HerosContext';
import {getToken} from '../../api/apiAjax'
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import "./login.css"

function Login() {
let {setAuth,auth} = useContext(appContext)
const [error,setError] = useState(false)

const navigate = useNavigate()
let location = useLocation()
let target = "/"

if (location.state){
  target = location.state.memory
}
if(auth){
  return(<Navigate to="/"/>)
}

    return (
        <div className="d-flex justify-content-center container login">
            <div>
              <h1>You must log in first!</h1>
              <Formik 
                initialValues={{ email: '', password: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  getToken(values)
                    .then(res=>{
                      setSubmitting(true)
                      localStorage.setItem("token",res.data.token)
                      setAuth(true)
                    }
                    )
                    .then(res=>{
                      navigate(target)
                    })
                    .catch(err=>{
                      setSubmitting(false)
                      setError(true)
                    })
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    { !isSubmitting ?
                      <>
                        <div className="mb-3">
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="mb-3">
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                            Log in
                        </button>
                        {error && 
                        <p>Failed to authenticate properly, please try again later!</p>
                        }
                      </>
                        :
                        <>
                          <p>Cargando..</p>
                        
                        </>
                      }
                  </Form>
                )}
              </Formik>
            </div>
    
        </div>
    )
}

export default Login
