import { useState } from "react";
import "./CountState.css";
const btnStyle = {
  padding: "10px 20px",
  margin: "10px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  color: "white",
  backgroundColor: "blue",
};

const CountState = () => {
  // count
  const [count, setCount] = useState(0);

  // text-change
  const [name, setName] = useState("projoy naidu");

  // toogle on off

  const [isON, setIsON] = useState(false);

  // inputfield
  const [inputValue, setInputValue] = useState("");

  // like button

  const [likes, setLikes] = useState("786");
  const [isLiked, setIsLiked] = useState(false);

  const handleLikes = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleToogle = () => {
    setIsON(!isON);
  };
  return (
    <>
      <div className="container">
        {/* count */}
        <h1 style={{ color: "red" }}>{count}</h1>
        <button className="increment" onClick={handleClick}>
          increment
        </button>

        {/* text change */}

        {/* button change name  */}
        <h2>হ্যালো {name}!</h2>
        <button onClick={() => setName("Saju")} className="btn">
          নাম দেখাও
        </button>
        <button onClick={() => setName("বন্ধু")} style={btnStyle}>
          বন্ধু বলো
        </button>

        {/* toogle btn */}
        <br />
        <div style={{ margin: "30px" }}>
          <h2>Light {isON ? "ON " : "OFF"}</h2>
          <div
            className="toggle-circle"
            style={{
              background: isON ? "yellow" : "gray",
              boxShadow: isON ? "0 0 60px yellow" : "none",
            }}
          ></div>
          <button className="btn" onClick={handleToogle}>
            {isON ? "ON" : "OFF"}
          </button>
        </div>

        {/* input text */}

        <div style={{ margin: "30px" }}>
          <h2> You Write :{inputValue}</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            className="text-input"
            placeholder="enter your text"
          />
        </div>

        {/* like button */}
        <div style={{ margin: "30px" }}>
          <h2>এই পোস্টে লাইক: {likes}</h2>
          <button onClick={handleLikes} className="like-btn">
            {isLiked ? "❤️" : "♡"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CountState;
