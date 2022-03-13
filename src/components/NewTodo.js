import React from "react";
import { TodoContext } from "./TodoContext";

import TextareaAutosize from "@mui/base/TextareaAutosize";

import "./TodoItem.css";
import "Library/common/css/cleanInput.css";

function NewTodo() {
  const random = (array) => array[Math.floor(Math.random() * array.length)];

  const placeholders = [
    "Call mommy",
    "Buy GTA 7",
    "Reform the Gran Colombia",
    "Fix the global economy",
    "Install amongus on my microwave oven",
    "Memorize Never gonna give you up Url",
    "Find Perry",
    "Fight alone against all Olympus gods",
    "Include a new fighter in Smash",
    "Nerf miner",
    "Complain about a tweet posted 8 years ago",
    "Visit Neptune",
    "Spam in a Discord server",
    "Predict the future",
    "Go to gym with The Rock",
    "Make a Whatsapp sticker with my friend's photo",
    "Hug gammy",
    "Take a selfie with Wiston Churchill",
    "Buy Venezuela",
    "Build a tank in my garage",
    "Learn how to play Megalovania on guitar",
    'Nominate "The Backyardigans" for Oscar Awards',
    "Launch an animal toothbrushes startup",
    "Make an NFT and sell it for 0.8 cents",
    "We're no strangers to love, You know the rules and so do I",
    "Buy Daft Punk LEGO set",
    "Search the meaning of kakorrhaphiophobia",
    "Talk about Bruno, no, no, no!",
    "Try to speedrun Undertale for the 62th time",
    "Become an economist with just 4 youtube videos",
  ];

  const { newTodo, setNewTodo, onNewTodoFocusOut } =
    React.useContext(TodoContext);

  const onNewTodoValueChange = (event) => {
    const textarea = event.target;
    if (textarea.value.slice(-1) === "\n") {
      return textarea.blur();
    }

    setNewTodo({
      text: textarea.value,
      completed: newTodo.completed,
      date: newTodo.date,
    });

    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const randomPlaceholder = random(placeholders);

  return (
    <div className="gridLayout">
      <span className="TodoItem__circle">X</span>
      {/* <textarea
        autoFocus
        onBlur={onNewTodoFocusOut}
        className="cleanInput"
        rows={1}
        placeholder={randomPlaceholder}
        onChange={onNewTodoValueChange}
        value={newTodo.text}
      /> */}
      <TextareaAutosize
        autoFocus
        onBlur={onNewTodoFocusOut}
        className="cleanInput"
        placeholder={randomPlaceholder}
        onChange={onNewTodoValueChange}
        value={newTodo.text}
      />
    </div>
  );
}

export { NewTodo };
