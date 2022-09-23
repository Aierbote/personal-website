import "./App.css";
import logo from "./logo.svg";

// import mangekyou_Sharingan_Sasuke_Eternal from "./mangekyou_Sharingan_Sasuke_Eternal.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello, I'm Alberto!
        <Dog />
        <Dog />
        <Cat value="Miao!" />
        <Dog>
          Bark! Woof!
        </Dog>
        <SummaExpr a="1" b="2"> + </SummaExpr>
        <Summa a="1" b="2"/>
      </header>
    </div>
  );
}

export default App;

// there are differences between Props and Children

function Cat (props) {
  return (
    <p>
      {props.value}
    </p>
  )
};

function Dog ({children="Woof! Hello!"}) {
  return (
    <p>{children}</p>
  )
};

function Summa(props) {
  return (
    <>
      {/* {props.a + props.b} */} {/* LOL concatenated */}
      {parseInt(props.a) + parseInt(props.b)} {/* FINALLY A SUM */}
    </>
  )
};

function SummaExpr (props, {children}) {
  return (
    <>
      {props.a} {props.children} {props.b} =
    </>
  )
};
