import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Election from './pages/Election';
import Result from './pages/Result';
import NoPage from './pages/NoPage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App(props) {
  return (
    <div className="App">

        {<Navbar />}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/election" element={<Election />} />
            <Route path="/result" element={<Result />} />
            <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;