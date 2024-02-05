import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
