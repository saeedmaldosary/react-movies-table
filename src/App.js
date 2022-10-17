import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Notfound from "./components/notfound";

function App() {
  return (
    <main>
      <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
