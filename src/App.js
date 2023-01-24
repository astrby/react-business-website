import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './components/Index'
import NB from './components/NB'
import Footer from './components/Footer'
import './components/css/App.css'
import Plan from './components/Plan'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NB/>
      <div className='content-wrap'>
        <div className='body'>
          
            <Routes>
              <Route path='/' element={<Index></Index>}></Route>
              <Route path='/plan/:name' element={<Plan></Plan>}></Route>
            </Routes>
          
        </div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
