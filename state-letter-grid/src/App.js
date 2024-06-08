import logo from "./logo.svg";
import "./App.css";

const state_population_dict = {
  California: 39538223,
  Texas: 29145505,
  Florida: 21538187,
  "New York": 20201249,
  Pennsylvania: 13002700,
  Illinois: 12812508,
  Ohio: 11799448,
  Georgia: 10711908,
  "North Carolina": 10439388,
  Michigan: 10077331,
  "New Jersey": 9288994,
  Virginia: 8631393,
  Washington: 7705281,
  Arizona: 7151502,
  Massachusetts: 7029917,
  Tennessee: 6910840,
  Indiana: 6785528,
  Maryland: 6177224,
  Missouri: 6154913,
  Wisconsin: 5893718,
  Colorado: 5773714,
  Minnesota: 5706494,
  "South Carolina": 5118425,
  Alabama: 5024279,
  Louisiana: 4657757,
  Kentucky: 4505836,
  Oregon: 4237256,
  Oklahoma: 3959353,
  Connecticut: 3605944,
  Utah: 3271616,
  Iowa: 3190369,
  Nevada: 3104614,
  Arkansas: 3011524,
  Mississippi: 2961279,
  Kansas: 2937880,
  "New Mexico": 2117522,
  Nebraska: 1961504,
  Idaho: 1839106,
  "West Virginia": 1793716,
  Hawaii: 1455271,
  "New Hampshire": 1377529,
  Maine: 1362359,
  "Rhode Island": 1097379,
  Montana: 1084225,
  Delaware: 989948,
  Southdakota: 886667,
  "North Dakota": 779094,
  Alaska: 733391,
  Vermont: 643077,
  Wyoming: 576851,
};

let score = 0;

function App() {
  return (
    <div>
      {States()}
      {Grid()}
      {Achievements()}
    </div>
  );
}

function States() {
  const states = [];
  for (const [key, value] of Object.entries(state_population_dict)) {
    states.push(
      <div>
        <div class="StateRow">
          <div class="StateName">
            <p>{key}</p>
          </div>
          <div class="StatePopulation">
            <p>{value}</p>
          </div>
        </div>
      </div>
    );
  }

  return <div class="States">{states}</div>;
}

function Grid() {
  const grid = [];

  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      row.push(
        <input
          type="text"
          class="GridBox"
          maxlength="1"
          id={"grid-" + i + "-" + j}
          name={"grid-" + i + "-" + j}
          onChange={onChange}
        />
      );
    }
    grid.push(<div>{row}</div>);
  }

  return (
    <div class="Grid">
      <div>{grid}</div>
      <div>{score}</div>
    </div>
  );
}

function onChange(event) {
  score++;
  //event.target.value);
}

function Achievements() {
  return (
    <div class="Grid">
      <p>first</p>
      <p>second</p>
    </div>
  );
}

export default App;
