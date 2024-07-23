import { NavLink, Route, Routes } from "react-router-dom";

import NotConfirming from "src/components/Conforming/NotConfirming/NotConfirming";
import Notifications from "src/components/Notificate/Notifications/Notifications";
import useProtectedConf from "src/hooks/useProtectedConf";
import AddInfo from "src/components/Conforming/AddInfo/AddInfo";
import Posts from "src/components/Posts/Posts";
import PostDetails from "src/components/Posts/PostDetails/PostDetails";
import Checkout from "src/components/Checkout/Checkout";
import Help from "src/components/Help/Help";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const isVetification = useProtectedConf();

  return (
    <div className={styles.mainPage}>
      <h2 className={styles.mainPage__hello}>
        Hello, <span>John</span>
      </h2>

      <div className={styles.grid}>
        <div className={styles.grid__left}>
          <nav className="menu">
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    [isActive ? "active" : ""].join(" ") +
                    " " +
                    `${!isVetification ? "disabled" : ""} `
                  }
                >
                  My job posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    [isActive ? "active" : ""].join(" ")
                  }
                >
                  Profile settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help"
                  className={({ isActive }) =>
                    [isActive ? "active" : ""].join(" ")
                  }
                >
                  Help
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className={({ isActive }) =>
                    [isActive ? "active" : ""].join(" ")
                  }
                >
                  Notifications
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.grid__right}>
          <Routes>
            <Route
              path="/"
              element={isVetification ? <Posts /> : <NotConfirming />}
            />

            <Route
              path="posts/*"
              element={isVetification ? <Posts /> : <NotConfirming />}
            />

            <Route
              path="posts/:id"
              element={isVetification ? <PostDetails /> : <NotConfirming />}
            />

            <Route
              path="profile"
              element={isVetification ? <>Profile</> : <NotConfirming />}
            />

            <Route path="addinfo" element={<AddInfo />} />

            <Route path="checkout" element={<Checkout />} />

            <Route path="help" element={<Help />} />

            <Route path="notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
