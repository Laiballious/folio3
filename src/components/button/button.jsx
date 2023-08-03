import React from 'react';

const Button = ({ color,BGcolor, onClick, children ,width,height}) => {
  const buttonStyle = {
    width: width,
    height:height,
    backgroundColor: BGcolor,
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none', 
    color: color,
    cursor: 'pointer',
    display: 'flex', 
    alignItems: "center",
    justifyContent: "center" 
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
