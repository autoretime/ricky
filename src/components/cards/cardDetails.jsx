import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./style.module.scss";

const CardDetails = () => {
  let { id } = useParams();

  let [cards, setCards] = useState([]);
  let { name, type, origin, gender, image, status, species } = cards;

  let empty = "";

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setCards(data);
    })();
  }, [api]);

  return (
    <div className={styles.DetailsContainer}>
      <div className={styles.link}>
        <Link to={"/"}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Go back
        </Link>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={image} alt="img" />
          <h1>{name}</h1>
          <h6>Informations</h6>

          <div className={styles.text}>
            <div>
              <strong>Gender </strong>
              <small>{gender}</small>
            </div>
            <div>
              <strong>Status </strong>
              <small>{status}</small>
            </div>
            <div>
              <strong>Species</strong>
              <small>{species}</small>
            </div>
            <div>
              <strong>Origin</strong>
              <small>{origin?.name}</small>
            </div>
            <div>
              <strong>Type</strong>
              {type === empty ? <small>Unknown</small> : <small>{type}</small>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
