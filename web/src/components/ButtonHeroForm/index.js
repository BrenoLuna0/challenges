import React, { useState } from "react";
import "./style.css";

import Button from "../Button";
import HeroForm from "../HeroForm";

export default function Component() {
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
          onSend={() => {
            changeView();
          }}
        />
      </div>
    </>
  );
}
