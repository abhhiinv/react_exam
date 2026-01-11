import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Main Page</h2>
      <p>Welcome! You have successfully logged in.</p>

      <button onClick={() => navigate('/form')} className="link-button">
        Go to Form Page
      </button>

      <button onClick={() => navigate('/login')}>
        Logout
      </button>
    </div>
  );
}

export default MainPage;