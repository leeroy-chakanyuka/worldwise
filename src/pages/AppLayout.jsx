import Map from "../components/Map";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom"; // import Outlet
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />

      <div className={styles.content}></div>
    </div>
  );
}

export default AppLayout;
