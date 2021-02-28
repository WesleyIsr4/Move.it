import styles from "../styles/components/Quote.module.css";
import React, { useState, useEffect } from "react";

export function Quote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote();
    }, 24 * 60 * 60 * 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function getQuote() {
    fetch("http://quotes.rest/qod.json?category=studentsb")
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
