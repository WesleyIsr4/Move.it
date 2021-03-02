import styles from "../styles/components/Quote.module.css";
import React, { useState, useEffect } from "react";

export function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote();
    }, 0.1 * 60);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function getQuote() {
    fetch("http://quotes.rest/qod.json?category=students")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
  }
  return (
    <div className={styles.QuotePerDay}>
      <h1>{quote}</h1>
      <p>- {author}</p>
    </div>
  );
}
