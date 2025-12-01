import { useState } from "react";

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
      <h1>{count}</h1>
      <button onClick={handleClick}>increment</button>

      {/* text change */}

      {/* button change name  */}
      <h2>হ্যালো {name}!</h2>
      <button onClick={() => setName("Saju")} style={btnStyle}>
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
          style={{
            width: "150px",
            height: "150px",
            background: isON ? "yellow" : "gray",
            borderRadius: "50%",
            margin: "20px auto",
            boxShadow: isON ? "0 0 60px yellow" : "none",
          }}
        ></div>
        <button onClick={handleToogle}>{isON ? "ON" : "OFF"}</button>
      </div>

      {/* input text */}

      <div style={{ margin: "30px" }}>
        <h2> You Write :{inputValue}</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          style={{ padding: "12px", fontSize: "18px", width: "300px" }}
          placeholder="enter your text"
        />
      </div>

      {/* like button */}
      <div style={{ margin: "30px" }}>
        <h2>এই পোস্টে লাইক: {likes}</h2>
        <button
          onClick={handleLikes}
          style={{
            fontSize: "40px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isLiked ? "❤️" : "♡"}
        </button>
      </div>
    </>
  );
};

export default CountState;
