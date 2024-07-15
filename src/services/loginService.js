import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../redux/loginSlice.js';
import api from '../axios/api';

function useLogin() {
  const dispatch = useDispatch();

  const login = async (username, password) => {
    try {
      const response = await api.post('/api/login', { username, password });
      if (response.status === 200) {
        dispatch(loginSuccess(response.data.user));
        return response.data.message;
      } 
    } catch (err) {
      if (err.response) {
        throw new Error(err.response.data.message || 'Login failed');
      } else {
        throw new Error('Unknown error occurred during login');
      }
    }
  };

  const logoutUser = async () => {
    try {
      await api.post('/api/logout');
      dispatch(logout());
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return {
    login,
    logout: logoutUser,
  };
}

export default useLogin;
