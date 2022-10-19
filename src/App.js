import { Route, Routes, Navigate } from "react-router-dom";
import Menu from "./components/menu";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Notfound from "./components/notfound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <main>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
