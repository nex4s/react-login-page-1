import React, { useState } from 'react';

function Login({ onToggle }) {
  const [isSignUp, setIsSignUp] = useState(true);

  const InputFields = () => {
    const arrayOfFields = ['Password', 'Email'];

    const fields = arrayOfFields.map((x) => (
      <div key={x} className="flex flex-col items-start mb-2 sm:mb-4">
        <label className="text-white mb-1 font-semibold">{x}</label>
        <input
          className='rounded-2xl h-9 w-full sm:w-64 lg:w-56 text-center'
          placeholder={x === 'Email' ? 'your@email.com' : 'Password123'}
          type={x === 'Email' ? 'email' : 'password'}
        />
      </div>
    ));

    return fields;
  };

  return (
    <div className='flex flex-col items-center justify-center fixed inset-0'>
      <div
        className='bg-opacity-20 backdrop-blur-12 backdrop-filter backdrop-blur-md rounded-xl border border-opacity-15 p-8 max-w-screen-md w-full'
        style={{
          backgroundColor: 'rgba(38,36,36,0.5)',
          borderColor: 'rgba(38,36,36,0.25)',
        }}
      >
        <h1
          className='font-semibold text-white text-2xl text-center mb-4 border-b-2 pb-4'
          style={{ borderColor: 'rgba(142,141,141,0.25)' }}
        >
          {isSignUp ? 'Login in to your account' : 'Create an account'}
        </h1>
        <div className='flex flex-col gap-3 items-center justify-center flex-grow'>
          {isSignUp ? <InputFields /> : null}
        </div>
        <div className='flex flex-col items-center'> {/* Center the buttons */}
          <button
            className='text-center flex items-center justify-center text-blue-600 mt-2 w-full sm:w-auto'
            style={{
              outline: '0',
              border: '0',
              cursor: 'pointer',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '16px',
              fontWeight: '600',
              color: 'rgb(43, 108, 176)',
              border: '1px solid rgb(66, 153, 225)',
              lineHeight: '26px',
              marginBottom: '8px', // Add some space between buttons
            }}
            onClick={() => {
              alert(isSignUp ? 'Signup Successfully...' : 'Login Successfully...');
            }}
          >
            {isSignUp ? 'Signup' : 'Login'}
          </button>
          <button
            className='text-center flex items-center justify-center text-blue-600 w-full sm:w-auto'
            style={{
              outline: '0',
              border: '0',
              cursor: 'pointer',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '16px',
              fontWeight: '600',
              color: 'rgb(43, 108, 176)',
              border: '1px solid rgb(66, 153, 225)',
              lineHeight: '26px',
              margin: '4px', // Add some space between buttons
            }}
            onClick={onToggle}
          >
            {isSignUp ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
