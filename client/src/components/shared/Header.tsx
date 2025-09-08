import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '//' //update style page link

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hideUserActionsOn = ['/login', 'signup'];
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <header className='header'>
      <div
        className='header-logo-group'
        onClick={() => navigate('/')}
        aria-label="Crocheted Mushroom"
        role='img'
      />
      {!hideUserActionsOn.includes(location.pathname) && (
        <div className='user-actions'>
          {!isAuthenticated ? (
            <button
              className='login-btn'
              onClick={() => navigate('/login')}
            >
              Login
            </button>

          ) : (
            <button
              className='logout-btn'
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
            >
              LogOut
            </button>
          )}
        </div>
      )}
    </header>
  );
};
export default Header;