import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Election from './pages/Election';
import Result from './pages/Result';
import NoPage from './pages/NoPage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import UseAuthContext from "./component/Context/UseAuthContext";
import "./App.css";

function App(props) {

  const { user } = UseAuthContext();

  return (
    <div className="App min-w-80">

        {<Navbar />}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/election" element={user ? <Election /> : <Navigate to="/" />} />
            <Route path="/result" element={user ? <Result /> : <Navigate to="/" />} />
            <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;