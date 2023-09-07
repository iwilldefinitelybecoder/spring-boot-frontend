import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Router,Route,Routes, } from 'react-router-dom';
import AddQuestions from './components/AddQuestions';
import DeleteQuestions from './components/DeleteQuestions';
import DisplayQuestions from './components/displayQuestions/DisplayQuestions';
import BrandModels from './components/displayQuestions/BrandModels';
import Brands from './components/displayQuestions/Brands';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddQuestions/>}/>
        <Route path="/delete" element={<DeleteQuestions/>}/>
        <Route path="/" element={<DisplayQuestions/>}/>
        <Route path = "/brands" element={<Brands/>}/>
        <Route path="/cars/:brand" element={<BrandModels/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
