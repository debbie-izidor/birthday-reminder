import React from 'react';

const Lists = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name} </h4>
              <h4>{age}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Lists;
