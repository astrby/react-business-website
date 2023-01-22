import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './components/Index'
import NB from './components/NB'
import Footer from './components/Footer'
import './components/css/App.css'

function App() {
  return (
    <div className="App">
      <NB/>
      <div className='content-wrap'>
        <div className='body'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Index></Index>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
