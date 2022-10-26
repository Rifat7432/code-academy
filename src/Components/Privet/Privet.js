import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DataContext } from '../UserContext/UserContext';

const Privet = ({ children }) => {
    const { userData, loading } = useContext(DataContext);
  const location = useLocation();
  if (loading) {
    return (
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (userData?.uid) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default Privet;