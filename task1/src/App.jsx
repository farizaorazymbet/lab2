import React from 'react';
import FragmentLayout from './FragmentLayout';
import ItemList from './ItemList';
import CombinedFragment from './CombinedFragment';

function App() {
  return (
    <div>
      <h1>Lab 2.1: Fragment & Lists</h1>

      {/* Task 1 */}
      <FragmentLayout />
      <hr />

      {/* Task 2 */}
      <ItemList />
      <hr />

      {/* Task 3 */}
      <CombinedFragment />

    </div>
  );
}

export default App;