"use client";

import React, { useState } from 'react';


const Challenge = () => {
    const [started, setStarted] = useState(false);

  return (
    <div className='text-center py-16'>
        {!started ? (
            <button 
                onClick={() => setStarted(true)}
                className='px-6 py-6 bg-pink-500 text-white rounded-full shadow-xl'
            >
                Começar Surpresa ❤
            </button>
        ) : (
            <div className='text-lg'>
                <p>Levante-se, fique de costas e feche os olhos...</p>
            </div>
        )}
    </div>
  )
}

export default Challenge