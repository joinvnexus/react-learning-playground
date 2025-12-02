import React, { useEffect, useState } from "react";
import "./jokes.css";

function JokesApp() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = () => {
    setLoading(true);
    setError(null);

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setSetup(data.setup);
        setPunchline(data.punchline);
        setLoading(false);
      })
      .catch((err) => {
        setError("❌ Failed to fetch joke. Please try again.");
        console.log(err);
        setSetup("");
        setPunchline("");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="jokes-container">
      <h1 className="title">😂 Random Jokes</h1>

      <button onClick={fetchJoke} className="btn">
        নতুন জোকস আনো
      </button>

      <div className="joke-box">
        {loading && <p className="loading">⏳ Loading...</p>}
        {error && <p className="error">{error}</p>}
        {setup && <p className="setup">{setup}</p>}
        {punchline && <p className="punchline">👉 {punchline}</p>}
      </div>
    </div>
  );
}

export default JokesApp;
