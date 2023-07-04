import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
    for each web dev skill that you have,
    customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img classname="avatar " src="img.jpeg" alt="user" width="440px" />;
}
function Intro() {
  return (
    <div>
      <p>
        Hi I am Saurabh,I am a react developer.This is a card application built
        with react with a Image of Lord Hanuman.
      </p>
    </div>
  );
}
function Skill(props) {
  return (
    <p className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.emoji}
    </p>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Html + Css" emoji="👍" color="blue" />
      <Skill name="JavaScript" emoji="💪" color="red" />
      <Skill name="Web Design" emoji="👍" color="yellow" />
      <Skill name="Git and Github" emoji="💪" color="green" />
      <Skill name="React" emoji="💪" color="red" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
