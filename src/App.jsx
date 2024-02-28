


import Carosel from '../components/Carosel'
import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';


function App() {
  let slides = [
    <Slide1/>,
    <Slide2/>,
    
  ];

  return (
    <div >
      <Carosel slides={slides} />
    </div>
  );
}

export default App
