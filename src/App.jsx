import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Hero from "./components/landing/LandingPage";
import LandingPage from "./components/landing/LandingPage";

function App() {

  return (
    <main>
    {/* To navigate to the requested page if it is not on the landing page. */}
      {window.location.pathname === '/' ? (
        <LandingPage />
      ) : (
        <Outlet />
      )}
    </main>
  );
}

export default App;
