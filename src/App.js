import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './components/Index'
import NB from './components/NB'

function App() {
  return (
    <div className="App">
      <NB/>
      <div className='body'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index></Index>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
