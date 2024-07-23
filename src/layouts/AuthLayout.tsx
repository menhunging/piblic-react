import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AuthLayout = () => {
  return (
    <div className="siteWrapper authPage">
      <Header authLayout={true} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
