import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar";

export function LayoutMain({ children }) {
  return (
    <div>
      <Navbar />
      <main className="px-page-px pt-4 flex flex-col items-center bg-main text-text">
        <Outlet />
      </main>
    </div>
  );
}
