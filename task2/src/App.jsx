import React from "react";
import Section from "./Section";
import ProductList from "./ProductList";

// Main App component for Lab 2.2
function App() {
  return (
    <div>
      <h1>Lab 2.2: Custom JSX Elements & Dynamic Props</h1>

      <Section title="Products">
        <ProductList />
      </Section>
    </div>
  );
}

export default App;