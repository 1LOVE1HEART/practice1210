import { useState } from 'react';

import './App.css';

function App() {
  const [background, setBackground] = useState('草間彌生');
  return (
    <>
      <div className={`${background === '草間彌生' ? 'kusama' : 'don'}`}></div>
      <div className="button_area">
        <button
          onClick={() => {
            setBackground('草間彌生');
          }}
        >
          草間彌生
        </button>
        <button
          onClick={() => {
            setBackground('董至成');
          }}
        >
          董至成
        </button>
      </div>
    </>
  );
}

export default App;
