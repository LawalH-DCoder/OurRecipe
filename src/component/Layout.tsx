import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "./shared/Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
