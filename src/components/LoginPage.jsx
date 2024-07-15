import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import React, { useState, useRef } from 'react';
import useLogin from '../services/loginService.js';

const LoginPage = () => {

  const { login } = useLogin();
  const toast = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogging, setIsLogging] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogging(true);
    try {
      await login(username, password);
      toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    } finally{
      setIsLogging(false);
    }
  };

  return (
    <div className='login-page'>
        <Toast ref={toast} />
        <div className='login-page__overlay'></div>
        <div className='login-page__title'>
          <span>powered by</span>
          <h1>SEEB</h1>
        </div>
        <form className='login-page__form' onSubmit={handleSubmit}>
          <h2 className='form-title'>Welcome</h2>
          <div className='form-input'>
            <label htmlFor="username">Username</label>
            <InputText placeholder='Enter your username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='form-input'>
            <label htmlFor="password">Password</label>
            <Password placeholder='Enter your password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} toggleMask feedback={false}/>
          </div>
          <Button className='form-button' label="Sign In" icon="pi pi-sign-in" loading={isLogging} onClick={handleSubmit} />
        </form>
    </div>
  );
};

export default LoginPage;
