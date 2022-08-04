import React, { useState } from 'react';

import Lists from './lists';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className='container'>
          <h2>{people.length} birthdays today</h2>
          <Lists people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </>
  );
};

export default App;
