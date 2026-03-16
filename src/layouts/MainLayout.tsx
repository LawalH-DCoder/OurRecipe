import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
