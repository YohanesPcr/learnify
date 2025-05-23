import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';

export default function Error401() {
 
      const navigate = useNavigate();
    
      const handleBack = () => {
        navigate('/'); // Arahkan ke halaman beranda
      };
      return (  
    <Error
      code="401"
      title="Unauthorized"
      reason="Anda tidak memiliki izin untuk mengakses halaman ini. Silakan login terlebih dahulu."
      navigateBack={handleBack} 
    />
  );
}
