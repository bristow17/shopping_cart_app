import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './components/AddProducts';
import SearchProducts from './components/SearchProducts';
import DeleteProducts from './components/DeleteProducts';
import ViewAll from './components/ViewAll';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProducts/>}/>
      <Route path='/search' element={<SearchProducts/>}/>
      <Route path='/delete' element={<DeleteProducts/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
