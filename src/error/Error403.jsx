import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';

export default function Error403() {
  
        const navigate = useNavigate();
      
        const handleBack = () => {
          navigate('/'); // Arahkan ke halaman beranda
        };
  return (
    <Error
      code="403"
      title="Forbidden"
      reason="Akses ditolak. Anda tidak memiliki hak untuk melihat halaman ini."
      navigateBack={handleBack} 
    />
  );
}
