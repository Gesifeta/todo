import { Outlet } from "react-router-dom";

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
