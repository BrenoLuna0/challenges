import React from "react";
import "./style.css";

export default function Component({ logs }) {
  return (
    <div className="logs">
      {logs.map((log) => {
        return <p key={log.id}>{log.message}</p>;
      })}
    </div>
  );
}
