import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")

  const levenshteinDistance= (str1 = '', str2 = '') =>{
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(track[j][i - 1] + 1, // deletion
            track[j - 1][i] + 1, // insertion
            track[j - 1][i - 1] + indicator, // substitution
        );
      }
    }
    return track[str2.length][str1.length];
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Levenshtein Distance</h1>
          <label htmlFor="1">Word 1</label>
          <input type="text" id="1" onChange={(e) => {
            setValue1(e.target.value)
            console.log(e.target.value)
          }}/>
          <label form="2">Word 2</label>
          <input type="text" id="2" onChange={(e) => {
            setValue2(e.target.value)
            console.log(e.target.value)
          }}/>
          <br/>
          <br/>
          <label for="distance">Statistics</label>
          <p id="distance">{levenshteinDistance(value1,value2)}</p>
      </header>
    </div>
  );
}

export default App;
