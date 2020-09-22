import React, { useState } from "react";
import "./style.css";

import Button from "../Button";
import HeroForm from "../HeroForm";

export default function Component({ addHero }) {
  const [status, setStatus] = useState(["display", "hide"]);

  const changeView = () => {
    const copy = status.map((item) => item);
    setStatus(copy.reverse());
  };
  return (
    <>
      <div className={status[0]}>
        <Button
          onClick={() => {
            changeView();
          }}
        />
      </div>
      <div className={status[1]}>
        <HeroForm
          onSend={(hero) => {
            addHero(hero);
            changeView();
          }}
          onClickOutside={() => {
            changeView();
          }}
        />
      </div>
    </>
  );
}
