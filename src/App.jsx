import React from 'react';
import Home from "./pages/Home";

function App() {
  // const [inputValue ,setlnputValue]=useState('')
  const count=useRef(0)
  const text =useRef();
  console.log(text.current)
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className="App">
     <Home/>
      
    </div>
  );
}

export default App;
