import "./App.css";

const myTasks = [
  "estudar",
  "jogar",
  "trabalhar",
  "gerar valor",
  "fazer networking",
  "participar da reunião da turma 10- A",
  "ajudar a família",
  "sair do Brasil",
];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>{myTasks.map((item) => task(item))}</ul>
  )
}

export default App;
