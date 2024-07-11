import React from 'react';
import './DoneButton.css';

function DoneButton() {
  const handleClick = () => {
    const button = document.querySelector('.done-button');
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 2000);
  };

  return (
    <button className="done-button" onClick={handleClick}>
      Done
    </button>
  );
}

export default DoneButton;
