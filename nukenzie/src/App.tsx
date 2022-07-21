import React from "react";
import Button from "./components/button";
import Input from "./components/input";
import logo from "./img/logo.png";

function App() {
  return (
    <div>
      <Button texto="Teste" tipo="rosa" />
      <Input label="Teste" />
    </div>
  );
}

export default App;
