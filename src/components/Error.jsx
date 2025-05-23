import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Error.css';

export default function Error({ code = "", title = "", reason = "" }) {
  const navigate = useNavigate();

  return (
    <div className="error403-container">
      <h1 className="error-code">{code}</h1>
      <p className="error-message">
        {title}<span className="blinking-underscore">_</span>
      </p>
      <p className="error-reason">
        {reason}
      </p>
      <button className="back-button" onClick={() => navigate('/')}>
        Kembali ke Beranda
      </button>
    </div>
  );
}
