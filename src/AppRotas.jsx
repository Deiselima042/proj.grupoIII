// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import AppHome from './AppHome';




function AppRotas() {

  return (
    <div className="App">
      <header className="App-header">

     <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<AppHome />}></Route>


        
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default AppRotas;
