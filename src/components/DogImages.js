import {useState} from 'react';
import {getPrediction} from "../utils/api"

const DogImages = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg')

  const handePredictionClick = () => {
    setIsLoading(true)
    getPrediction().then(({message}) => {
      setImage(message)
      }
    ).catch((err) => console.log(err)).finally(() => setIsLoading(false))
  }

  return (
    <div className="dog-images">
      <h1 className="dog-images__title">{"Dog image:"}</h1>
      <img className={"dog-images__image"} src={image} alt={"dog"}/>

      <button className="dogfacts__button" onClick={handePredictionClick}>{isLoading ? "Load..." : "Show me pictures"}</button>
    </div>
  );
};

export default DogImages;
