import React, { useContext } from "react";
import { Context } from "../Context";

function Buttons() {
  const { previousQuote } = useContext(Context);
  const { setClick } = useContext(Context);
  const { quote } = useContext(Context);
  const { author } = useContext(Context);

  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  return (
    <div id="buttons-bar">
      <div className="buttons-bar-left">
        <a href={twitterLink} id="tweet-quote">
          <i className="ri-twitter-fill"></i>
        </a>
      </div>
      <div className="buttons-bar-right">
        <button id="prev-quote" onClick={() => previousQuote()}>
          Previous Quote
        </button>
        <button id="new-quote" onClick={() => setClick((state) => !state)}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Buttons;
