import React from 'react';

const cards = [
  { color: '#FF336D' },
  { color: '#5756A3' },
  { color: '#61A356' },
  { color: '#C069D6' },
  { color: '#252481' },
  { color: '#5756C3' },
];

export const ForSelectiveUsers = () => {
  return (
    <div
      style={{ clipPath: 'inset(0 -100vmax)' }}
      className='my-6 py-12 flex-col shadow-[0_0_0_100vmax_#22224D] bg-blue-700'
    >
      <div className='items-center mb-5'>
        <h3 className='mr-8 text-h3 text-purple font-bold'>Для избирательных</h3>
      </div>
      <div className='mt-5 flex gap-5'>
        {cards.map(node => (
          <div key={node.color} className={`bg-[${node.color}] rounded-2xl h-[220px] basis-1/6`}></div>
        ))}
      </div>
    </div>
  );
};
