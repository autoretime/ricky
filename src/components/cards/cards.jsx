import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Cards = ({ card }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`${card.id}`}
      key={card.id}
      className=""
    >
      <div className={`${styles.cards}`}>
        <img className={`${styles.img}`} src={card.image} alt="" />
        <div className={`${styles.contents}`}>
          <h3>{card.name}</h3>
          <div>{card.species}</div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
