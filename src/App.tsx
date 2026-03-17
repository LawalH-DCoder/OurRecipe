import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppLayout from "./component/Layout";
import MealDetail from "./pages/MealDetail";
import SearchListPage from "./pages/searchList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="searchList" element={<SearchListPage />} />
        <Route path="meal/:id" element={<MealDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
