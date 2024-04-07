import { useState } from 'react';
import './App.css';
import seedrandom from 'seedrandom';

function App() {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const generateLottoNumbers = () => {
    const n = 45; // Nombre total d'éléments
    const k = 6; // Nombre d'éléments à choisir
    const rng = seedrandom(); // Utilisation d'un générateur de nombres aléatoires
    let numbers = [];

    // Création d'un tableau de nombres de 1 à n
    let allNumbers = Array.from({ length: n }, (_, index) => index + 1);

    // Sélection des six premiers nombres
    for (let i = 0; i < k; i++) {
      const selectedNumber = selectNumber(allNumbers, rng());
      numbers.push(selectedNumber);

      // Suppression du numéro sélectionné du tableau de tous les nombres
      allNumbers = allNumbers.filter(num => num !== selectedNumber);
    }

    setLottoNumbers(numbers.sort((a, b) => a - b));
  };

  const selectNumber = (numbers, random) => {
    const currentIndex = Math.floor(random * numbers.length);
    return numbers[currentIndex];
  };

  const handleGenerateNumbersClick = () => {
    generateLottoNumbers();
  };

  return (
    <div>
      <h1>Lotto Number Predictor</h1>
      <button onClick={handleGenerateNumbersClick}>Generate Lotto Numbers</button>
      <h2>Mes numéros gagnants: {lottoNumbers.join('- ')}</h2>
    </div>
  );
}

export default App;
