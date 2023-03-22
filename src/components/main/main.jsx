import React, { useEffect, useState } from "react";
import "./style.scss";
import "./media-styles.scss";
import Search from "../search/search";
import Cards from "../cards/cards";
import { SeachByName } from "../search/SearchByName/SearchByName";

const Main = () => {
  let [cards, setCards] = useState([]);
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=1&name=${search}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        setCards(result.results);
      });
  }, [api]);

  

  useEffect(() => {
    if (search === null) {
      return;
    }
    SeachByName(search)
      .then(data => {
        if (data === undefined) {
          return setCards([]);
        }
        setCards([...data].sort((a, b) => a.name.localeCompare(b.name)));
        setSearch(localStorage.getItem('inputValue'));
      })
      .catch(error => {
        console.error(error);
      });
  }, [search]);

  const handleChange = event => {
    setSearch(event.target.value);
    localStorage.setItem('inputValue', event.target.value);
  };

  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/bac6/059c/92dc1ac359bbffe31ce3cb3223f68e22?Expires=1679875200&Signature=ivGMnWdxQxpuvYlINivSFKtd7OoEP1qBxaLpMrNMKCxjkzhqm88oZvL0XEy~OimNZntKFCJuzcQhu0owXMHL2-l-vgn5cMD8Wd85yvyvPt5L-PpkVHxirUHXyrI4bLbjA-KbkoE~1fn-Ie22NABROHE2AX4l6T3lDCe-scxguqR2nO4fg80OA2tAxWS06hGTZrn00BjmAKMN-Knu-bS4Sor5nKYn88nUbhZchl4fu0vaGxAPg1UeuK5zESzHnkidMQX6dfGVI-tZzRQw6P3MgCOb~2ZLTUZ0pEGlnJJj~~JOQGhOSlCm4wQcIS2B2B-9noKaIhI5NwsAni8eGQDMPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="rick"
        />
      </div>
      <Search onChange={handleChange} search={search}  />
      <div className="row">
        {cards?.map((card) => (
          <Cards card={card} />
        ))}
      </div>
    </div>
  );
};

export default Main;
