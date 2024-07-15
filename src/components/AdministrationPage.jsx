import React from 'react';
import TaskList from './TaskList';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/loginSlice';

const AdministrationPage = () => {

    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout());
    }

    return (
        <div className='administration-page'>
            <div className='administration-page__navbar'>
                <div className='login-page__title'>
                    <span>powered by</span>
                    <h1>SEEB</h1>
                </div>
                <i className='pi pi-sign-out' onClick={handleLogout}></i>
            </div>
            <div className='administration-page__content'>
                <div className='administration-page__content-space'>
                    <TaskList />
                </div>
            </div>
        </div>
    );
};

export default AdministrationPage;
