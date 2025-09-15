import Footer from "../layouts/Footer";
import SideBar from "../layouts/SideBar";
import TopBar from "../layouts/TopBar";
import HomePage from "./homePage";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-12 col-md-4 col-lg-2 bg-dark">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-8 col-lg-10 d-flex flex-column min-vh-100">
          {/* TopBar */}
          <TopBar />

          {/* Page Content */}
          <div className="flex-grow-1 px-2 px-md-4">
            <HomePage />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
