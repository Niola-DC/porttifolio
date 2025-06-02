
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDisplay from './components/ProjectDisplay';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
