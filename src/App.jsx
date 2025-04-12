
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return(
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App
