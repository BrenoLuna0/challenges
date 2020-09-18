import React from "react";
import "./style.css";

export default function Component({ status }) {
  const keyComponents = {
    secure: () => (
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_IgSvCd.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    ),
    warning: () => (
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_SKC4P7.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    ),

    danger: () => (
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_eSd5sJ.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
    ),
  };

  return <div className="status-display">{keyComponents[status]()}</div>;
}
