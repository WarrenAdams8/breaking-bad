import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Link to="details" key={item.char_id}>
          <CharacterItem item={item} />
        </Link>
      ))}
    </section>
  );
};

export default CharacterGrid;
