import React from "react";
import Header from "./Header";

const App = ({ children }) => (
  <main>
    <Header pathname={undefined} />
    {children}
  </main>
);

export default App;
