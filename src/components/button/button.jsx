import React from 'react';

const Button = ({ color,BGcolor, onClick, children,fontSize ,width,height}) => {
  const buttonStyle = {
    width: width,
    height:height,
    fontSize:fontSize,
    backgroundColor: BGcolor,
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    color: color,
    cursor: 'pointer',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginRight: '5px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
