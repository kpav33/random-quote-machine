import React, { useContext } from "react";
import { Context } from "../Context";

function Quote() {
  // Get desired values from Context with object destructuring
  const { quote } = useContext(Context);
  const { author } = useContext(Context);

  return (
    <>
      <p id="text" key={Math.random()}>
        <i className="ri-double-quotes-l"></i>
        {quote}
      </p>
      <p id="author" key={Math.random()}>
        - {author}
      </p>
    </>
  );
}

export default Quote;
