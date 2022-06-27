import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserLoginProps = {
    email?: string,
    password?: string,
    setIsLogin:React.Dispatch<React.SetStateAction<boolean>>
  };

  export const Login =(props: UserLoginProps)=>{

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLoginProps>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserLoginProps) => {
    // login field infos
    console.log(JSON.stringify(data, null, 2));
    props.setIsLogin(true);
  };

  return(

    <div className="teammate-app">
          <header>
            <h1>
              Teammate Management App
              <br></br>
              <b> Login</b>
            </h1>
          </header>
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder='Email'
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder='Password'
                  {...register('password')}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

  )
  
  };

//   export default Login;