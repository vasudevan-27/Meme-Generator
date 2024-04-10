import { useState } from "react";
import memesData from "../memesData.jsx";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState(memesData);

  function getMemeImage() {
    const memeArray = allMemeImage.data.memes;
    const randomValue = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomValue].url;
    setMeme((preState) => ({
      ...preState,
      randomImage: url,
    }));
  }

  function handleClick(event){
      const {value, type, name} = event.target
      setMeme(preState => ({
        ...preState, [name]:value
      }))

  }


  return (
    <main>
      <div className="form">
        <input type="text" 
               placeholder="Top Text"
               className="form-input"
               value={meme.topText}
               onChange={handleClick}
               name="topText" />
               
        <input type="text"
               placeholder="Bottom text"
               className="form-input"
               value={meme.bottomText}
               onChange={handleClick}
               name="bottomText" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme-Images" className="meme-igm" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;
