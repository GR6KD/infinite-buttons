import React, { useState } from "react";

function Button() {
  const [buttons, setButtons] = useState([]);

  const messages = [
    "Click me again!",
    "Try again!",
    "Keep going!",
    "Another one!",
    "You found me!",
    "Don't stop!",
    "More buttons!",
    "Catch me!",
  ];

  const randomColor = () => {
    const colors = [
      "#ff6b6b",
      "#6bc5ff",
      "#ffd93d",
      "#6bff95",
      "#c77dff",
      "#ff9f1c",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleClick = () => {
    const newButton = {
      id: Math.random(),
      x: Math.random() * (window.innerWidth - 140),
      y: Math.random() * (window.innerHeight - 60),
      text: messages[Math.floor(Math.random() * messages.length)],
      color: randomColor(),
    };

    setButtons((prevButtons) => [...prevButtons, newButton]);
    console.log("Button clicked!");
  };

  return (
    <div>
      <button className="mainButton" onClick={handleClick}>
        Click Me
      </button>

      {buttons.map((btn) => (
        <button
          key={btn.id}
          className="randomButton"
          style={{
            position: "absolute",
            left: `${btn.x}px`,
            top: `${btn.y}px`,
            backgroundColor: btn.color,
          }}
          onClick={handleClick}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default Button;
