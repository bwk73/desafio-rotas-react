import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/Home/About";
import Products from "./routes/Home/Products";
import HomeBody from "./routes/Home/HomeBody";
import NotFound from "./routes/Home/NotFound";
import Prod1 from "./routes/Home/Products/Prod1";
import Prod2 from "./routes/Home/Products/Prod2";
import Prod3 from "./routes/Home/Products/Prod3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="prod" element={<Products />}>
            <Route index element={<Navigate to="/prod" />} />
            <Route path="/prod/1" element={<Prod1 />} />
            <Route path="/prod/2" element={<Prod2 />} />
            <Route path="/prod/3" element={<Prod3 />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
