import React, { useState, useEffect, useRef } from "react";
import randomColor from "randomcolor";

// Create Context
const Context = React.createContext();

function ContextProvider({ children }) {
  // Create necessary state
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [click, setClick] = useState(false);
  const [color, setColor] = useState("");
  // Ref used to get access to previous state items
  const prevQuoteRef = useRef();
  const prevAuthorRef = useRef();

  const root = document.querySelector(":root");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        setColor(randomColor({ luminosity: "dark" }));
        // Change the primary color
        root.style.setProperty("--primary", color);
        // Save the quote and author in the Ref so the user can get the previous quote
        prevQuoteRef.current = quote;
        prevAuthorRef.current = author;
      });
  }, [click]);

  // Enables returning to the previous quote
  function previousQuote() {
    let prevQuote = prevQuoteRef.current;
    let prevAuthor = prevAuthorRef.current;
    setQuote(prevQuote);
    setAuthor(prevAuthor);
    setColor(randomColor({ luminosity: "dark" }));
    root.style.setProperty("--primary", color);
  }

  return (
    <Context.Provider
      value={{
        quote,
        author,
        previousQuote,
        setClick,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
