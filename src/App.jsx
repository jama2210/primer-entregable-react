import { useState } from "react";
import "./App.css";
import QuotesBox from "./components/QuotesBox";
import quotes from "./json/quotes.json";
import colors from "./json/colors.json";

function App() {
  const getRandom = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  };

  getRandom(quotes);

  const [quoteRandom, setQuoteRandom] = useState(getRandom(quotes));
  const [colorRandom, setColorRandom] = useState(getRandom(colors));

  getRandom(quotes);

  const handleClick = () => {
    setQuoteRandom(getRandom(quotes));
    setColorRandom(getRandom(colors));
  };

  const objStyle = {
    backgroundColor: colorRandom,
  };

  return (
    <div className="App" style={objStyle}>
      <QuotesBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  );
}

export default App;
