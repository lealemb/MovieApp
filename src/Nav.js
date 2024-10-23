import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import './Nav.css';  

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <nav className="navbar">
      <h3 className="title">Dev Ed</h3>
      <p className="movie-list">List of Movies: {movies.length}</p>
    </nav>
  );
};

export default Nav;
