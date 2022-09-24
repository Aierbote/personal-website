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
        <Parent0 childrenAge="0"/>
        <Parent1 childrenAge="0"/>
        <Parent2 childrenAge="0"/>
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

function SummaExpr (props  /* , {children} */) {  /* It's redundant to call children like this, it's already inside props */
  return (
    <>
      {props.a} {props.children} {props.b} =
    </>
  )
};


// data flows just in parent-to-child direction
function Parent0 ( props ){
  // // WE CANNOT DO THIS
  // props.childrenAge += 1
  return (
    <>
      <p>The age of children is {props.childrenAge}</p>
    </>
  )
};

function Parent1 ( props ){
  // // we CAN do this
  // using a storing variable
  let stor_var = parseInt(props.childrenAge) + 1
  return (
    <>
      <p>The age of children is {stor_var}</p>
    </>
  )
};

function Parent2 ( props ){
  // using a storing variable
  let stor_var = parseInt(props.childrenAge) + 2
  return (
    <>
      <p>The age of children is {stor_var}</p>
    </>
  )
};
