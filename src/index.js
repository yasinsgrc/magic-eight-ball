import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles.css";
import { Container, Row } from "reactstrap";
import Asked from "./Asked";

function App() {
  const [question, setQuestion] = useState("");
  const [allData, setAllData] = useState([]);
  const [asked, setAsked] = useState([]);
  var cardObject = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.charAt(question.length - 1) !== "?") {
      alert(" Oopss !!! You forgot something like '?' ");
    } else {
      setAsked((asked) => [...asked, question]);

      const opt = {
        method: "GET"
      };
      fetch("https://yesno.wtf/api", opt)
        .then((res) => res.json())
        .then((data) => {
          setAllData((allData) => [...allData, data]);
        });
    }
  };
  cardObject = allData.map((data, index) => {
    return (
      <Asked
        question={asked[index]}
        answer={data.answer}
        getImage={data.image}
      />
    );
  });
  return (
    <div className="App">
      <h1>Magic Eight Ball</h1>
      <h2>Ask your question?</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          placeholder="Ask Something with end '?' "
        />
        <button type="submit"> Submit </button>
      </form>
      <Container>
        <Row sm="2" md="3">
          {cardObject}
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
Implementation steps
***1) Add input element to JSX 
***2) Input should be controlled with state (implement proper event handler)
***3) Add a button to submit the question to JSX
***4) Add event handler of the button
***5) As a result of submitting: show the question, answer in text, and answer as image at below
***6) API endpoint is: https://yesno.wtf/api and example output:
  {
    "answer":"yes",
    "forced":false,
    "image":"https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif"
  }
***7) Make asked question, answer and answer image as new component in different file.
***8) Display an error message ("You didn't ask a question"), if user didn't write "?"(question mark) in the input.

Good to have:
- Make your code ES6 compatible
- Prefer stateless functional components over class components if you can
- Using React Hooks instead of class components
*/
