import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const backgroundImageUrl = 'bg.jpg';


  const handleToggleState = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <div className='h-full' style={{
      background: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover', // You can adjust this based on your requirements
      backgroundPosition: 'center', // You can adjust this based on your requirements
      width: '100vw',
      height: '100vh',
    }}>
      {isSignUp ? <SignUp onToggle={handleToggleState} /> : <Login onToggle={handleToggleState} />}
    </div>
  );
}

export default App;

