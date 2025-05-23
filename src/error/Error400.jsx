import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';

export default function Error400() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Arahkan ke halaman beranda
  };

  return (
    <Error
      code="400"
      title="Bad Request"
      reason="Permintaan tidak dapat diproses karena formatnya tidak valid."
      navigateBack={handleBack} // Kirim fungsi navigateBack untuk tombol kembali
    />
  );
}
