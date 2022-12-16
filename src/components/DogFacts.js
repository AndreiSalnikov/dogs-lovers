import {useState} from 'react';
import {getFact} from "../utils/api"

const DogFacts = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [fact, setFact] = useState('The fact will be here')
  const handeFactClick = () => {
    setIsLoading(true)
    getFact().then((data) => {
        setFact(data.facts)
      }
    ).catch((err) => console.log(err)).finally(() => setIsLoading(false))
  }
  return (
    <div className="dogfacts">
      <h1 className="dogfacts__fact">{fact}</h1>
      <button className="dogfacts__button" onClick={handeFactClick}>{isLoading ? "Load..." : "Give me a fact"}</button>
    </div>
  );
};

export default DogFacts;