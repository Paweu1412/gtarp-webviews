import { useState, useEffect } from 'react';
import './Greeting.scss';

export const Greeting = () => {
  const [text, setText] = useState('Cześć!');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setText('GTA:RP');
        setFadeOut(false);
      }, 1000);
    }, 3000);
  }, []);

  return (
    <div className={`greeting${fadeOut ? ' fade-out' : ''}`}>
      <h1>{text}</h1>
    </div>
  );
};
