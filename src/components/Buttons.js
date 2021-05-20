import React, { useContext } from "react";
import { Context } from "../Context";

function Buttons() {
  // Get desired values from Context with object destructuring
  const { previousQuote, setClick, quote, author } = useContext(Context);

  // Link that enables sharing the quote and its author over Twitter
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  return (
    <div id="buttons-bar">
      <div className="buttons-bar-left">
        <a href={twitterLink} id="tweet-quote">
          <i className="ri-twitter-fill"></i>
          <span className="visually-hidden">Tweet the quote</span>
        </a>
      </div>
      <div className="buttons-bar-right">
        <button id="prev-quote" onClick={previousQuote}>
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
