import { useState } from 'react';
import Data from './components/Data.jsx';
import Button from './components/Button.jsx';
import './App.css'


function App() {
  const [activeSlderIndex, setActiveSliderIndex] = useState(0)

  const imageUrls = Data();

  const handlePrevClick = () => {
    setActiveSliderIndex(activeSlderIndex - 1);
  }

  const handleNextClick = () => {
    setActiveSliderIndex(activeSlderIndex + 1);
  }

  return (
    <>
      <section className="customs-slider container">
        <div className='flex justify-center'>
          <Button className="prev" onClick={handlePrevClick}>Previous</Button>
          {imageUrls.map((url, i) => (
            <img key={url} src={url} alt="" className={"w-[700px] h-[500px] object-contain " + (activeSlderIndex === i ? "block" : "hidden")}/>
          ))}
          <Button className="next" onClick={handleNextClick}>Next</Button>
        </div>
      </section>
    </>
  )
}

export default App
