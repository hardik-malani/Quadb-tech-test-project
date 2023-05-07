import Home from "./Pages/home";
import Collection from "./components/collection";
import Detail from "./Pages/DetailPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
