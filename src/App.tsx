import "./App.css";
import Difficulty from "./components/Difficulty";
import Questions from "./components/Questions";

function App() {
  return (
    <div>
      <div className="flex justify-end ">
        <button className=" hidden bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out">
          Difficulté
        </button>
      </div>
      <h1 className=" font-semibold text-4xl p-10 ">Quizz Game ! 🎮</h1>
      <Difficulty />
      <Questions />
    </div>
  );
}

export default App;
