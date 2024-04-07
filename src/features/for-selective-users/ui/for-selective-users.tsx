import React from 'react';

const cards = [
  { color: 'bg-selective-one' },
  { color: 'bg-selective-two' },
  { color: 'bg-selective-three' },
  { color: 'bg-selective-four' },
  { color: 'bg-selective-five' },
  { color: 'bg-selective-six' },
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
          <div key={node.color} className={`${node.color} rounded-2xl h-[220px] basis-1/6`} />
        ))}
      </div>
    </div>
  );
};
