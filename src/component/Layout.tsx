import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default AppLayout;
