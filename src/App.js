import './App.css';
import Navbar from './component/navbar';
import { Routes, Route } from "react-router-dom";
import Reservations from './component/reservations';
import Confirm from './component/confirm';
import Menu from './component/menu';
import Mergecompinetn from './component/mergecompinetn';
import Footer from './component/footer';
import Feedback from './component/feedbak';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Mergecompinetn />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/confirm' element={<Confirm />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>



      <Footer />



    </div>
  );
}

export default App;
