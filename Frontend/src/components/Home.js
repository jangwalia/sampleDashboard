import React from "react";
import Button from "./shared/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>My App</h1>
      <Link to="/teachers">
        {" "}
        <Button primary>Our Teachers</Button>
      </Link>
      <Link to="/students">
        {" "}
        <Button info>Our Recent Grads</Button>
      </Link>
    </div>
  );
}

export default Home;
