import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import ProviderAPI from "./context/ContextAPI";

const App = () => {    

  return (
    <div>
        <ProviderAPI>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favoritos" element={<Favorites />} />
            </Routes>
        </ProviderAPI>
    </div>
  );
};

export default App;
