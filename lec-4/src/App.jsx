import { use, useState } from "react";

function CounterApp() {
  let [num, setNum] = useState(0);

  function increment() {
    setNum(++num);
  }
  function decrement() {
    setNum(--num);
  }
  function reset() {
    setNum(0);
  }

  return (
    <div>
      {`Counter ${num}`}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
///////

function Toggle() {
  const [visible, setVisible] = useState("Hello World");

  return (
    <>
      <h1>{visible}</h1>
      <button
        onClick={() => {
          visible == "" ? setVisible("Hello World") : setVisible("");
        }}
      >
        {visible == "Hello World" ? "hide" : "show"}
      </button>
    </>
  );
}

function Multiple(prop) {
  let [num, setNum] = useState(prop.initial);

  function increment() {
    setNum(++num);
  }
  function decrement() {
    setNum(--num);
  }
  function reset() {
    setNum(0);
  }

  return (
    <div>
      {`${prop.label} : ${num}`}
      <br></br>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

function LightBulb() {
  let [url, setUrl] = useState(
    "https://img.icons8.com/?size=100&id=19167&format=png&color=000000",
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={url} style={{ height: "200px", width: "200px" }} />
      <button
        onClick={() => {
          url ==
          "https://img.icons8.com/?size=100&id=19167&format=png&color=000000"
            ? setUrl(
                "https://img.icons8.com/?size=100&id=19209&format=png&color=000000",
              )
            : setUrl(
                "https://img.icons8.com/?size=100&id=19167&format=png&color=000000",
              );
        }}
      >
        {url ==
        "https://img.icons8.com/?size=100&id=19167&format=png&color=000000"
          ? "Turn On"
          : "Turn Off"}
      </button>
    </div>
  );
}

// 0 - rock
// 1 - paper
// 2 - scissor
function RPS() {
  let [scoreCpu, setscoreCpu] = useState(0);
  let [scorePl, setscorePl] = useState(0);
  let [round, setRound] = useState(0);
  let [message, setMessage] = useState("Round - 1");
  let [winmsg, setWinmsg] = useState("");
  let [plwins, setPlwins] = useState(0);
  let [cpuwins, setCpuwins] = useState(0);
  let [moves, setMoves] = useState([]);

  function random() {
    let comp = Math.floor(Math.random() * 3);
    return comp;
  }

  function current(val) {
    if (val == 1) {
      return "📃";
    } else if (val == 0) {
      return "🗿";
    } else {
      return "✂️";
    }
  }

  function cpuWon() {
    setWinmsg(`CPU WON by ${scoreCpu}-${scorePl}`);
    setCpuwins(++cpuwins);
    return `CPU WON by ${scoreCpu}-${scorePl}`;
  }

  function plWon() {
    setWinmsg(`PLAYER WON by ${scorePl}-${scoreCpu}`);
    setPlwins(++plwins);
    return `PLAYER WON by ${scorePl}-${scoreCpu}`;
  }

  function trackMove() {
    let movearr = [...moves];
    scoreCpu != 3 || scorePl != 3 ? movearr.push(<li>{`${message}`}</li>) : "";
    scoreCpu == 3 || scorePl == 3
      ? movearr.push(
          <li>
            <div>
              {`Round - ${round} Ends`}
              <br />
              {`Player Wins - ${plwins} | CPU Wins - ${cpuwins}`}
            </div>
          </li>,
        )
      : "";
    setMoves(movearr);
  }

  function change(val) {
    let comp = random();
    comp == val
      ? "Draw"
      : comp == 0 && val == 1
        ? setscorePl(++scorePl)
        : comp == 1 && val == 2
          ? setscorePl(++scorePl)
          : comp == 0 && val == 2
            ? setscoreCpu(++scoreCpu)
            : comp == 1 && val == 0
              ? setscoreCpu(++scoreCpu)
              : comp == 2 && val == 1
                ? setscoreCpu(++scoreCpu)
                : comp == 2 && val == 0
                  ? setscorePl(++scorePl)
                  : "";
    scoreCpu == 3 ? cpuWon() : "";
    scorePl == 3 ? plWon() : "";

    scoreCpu == 3 || scorePl == 3 ? incRound() : "";

    setMessage(`${current(comp)} : ${current(val)}`);

    trackMove();
  }

  function reset() {
    setscoreCpu(0);
    setscorePl(0);
    setMessage("Let's play again");
  }

  function incRound() {
    setRound(++round);
    reset();
  }

  function resetGame() {
    reset();
    setRound(0);
    setCpuwins(0);
    setPlwins(0);
    setMoves([]);
  }

  return (
    <div className="game-container">
      <div className="left-panel">
        <h1 className="header">Rock, Paper, Scissors !!</h1>
        <h1 className="currentscore">{`CPU : ${scoreCpu} | Player : ${scorePl}`}</h1>
        <h2 className="message">{message}</h2>
        <h1 className="wins">{winmsg}</h1>
        <h2 className="whowon">{`Player Wins - ${plwins} | CPU Wins - ${cpuwins}`}</h2>
        <h2 className="currentround">{`Round - ${round}`}</h2>

        <div className="buttons">
          <button onClick={() => change(0)}>🗿 Rock</button>
          <button onClick={() => change(1)}>📃 Paper</button>
          <button onClick={() => change(2)}>✂️ Scissor</button>
        </div>

        <div>
          <button onClick={reset}>Reset Round</button>
          <button onClick={resetGame}>Restart</button>
        </div>
      </div>

      <div className="right-panel">
        <div className="Moves">
          <h2>Moves</h2>
          <ul>{moves}</ul>
        </div>
      </div>
    </div>
  );
}
export default RPS;
