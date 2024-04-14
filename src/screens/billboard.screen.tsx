import React from 'react';

export const BillboardScreen = () => {
  return (
    <div>
      <p>Billboard</p>
      <p>
        Здесь отображаются теги для бистрого поиска событий или мест или артистов, чем больше размер экрана, тем больше
        тегов
      </p>
      <p className='text-h5'>Дата</p>
      <p>сегодня, завтра, выходные, календарь</p>
      <p className='text-h5'>События</p>
      <p>кино, концерты, театр, детям, стендап, шоу</p>
      <p className='text-h5'>Места</p>
      <p>кинотеатр, Концертный зал, театр, галерея, музей</p>
      <p className='text-h5'>Артисты</p>
    </div>
  );
};
