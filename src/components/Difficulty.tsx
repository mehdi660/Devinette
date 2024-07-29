function Difficulty() {
  const easyBtn = () => {
    console.log("Facile");
  };

  const mediumBtn = () => {
    console.log("Moyen");
  };

  const hardBtn = () => {
    console.log("Difficile");
  };

  return (
    <div className="difficult flex items-center justify-center space-x-9">
      <h2 className="text-lg font-bold">Choisissez un niveau de difficulté:</h2>
      <button
        onClick={easyBtn}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      >
        Facile
      </button>
      <button
        onClick={mediumBtn}
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
      >
        Moyen
      </button>
      <button
        onClick={hardBtn}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
      >
        Difficile
      </button>
    </div>
  );
}

export default Difficulty;
