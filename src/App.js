
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardDetails from './components/cards/cardDetails';
import Main from './components/main/main';


function App() {
  return(
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
      </div>
      
  )

}

export default App;
