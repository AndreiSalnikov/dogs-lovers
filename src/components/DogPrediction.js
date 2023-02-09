import {useState} from 'react';
import {getPrediction} from "../utils/api"

const DogPrediction = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [prediction, setPrediction] = useState('The prediction will be here')

  const handePredictionClick = () => {
    setIsLoading(true)
    getPrediction().then(({reading}) => {
      setPrediction(reading)
      }
    ).catch((err) => console.log(err)).finally(() => setIsLoading(false))
  }

  return (
    <div className="dogfacts">
      <h1 className="dogfacts__fact">{prediction}</h1>
      <button className="dogfacts__button" onClick={handePredictionClick}>{isLoading ? "Load..." : "Give me a fact"}</button>
    </div>
  );
};

export default DogPrediction;
