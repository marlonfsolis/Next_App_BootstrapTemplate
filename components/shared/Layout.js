import styles from "styles/Layout.module.css";
import Head from "next/head";
import Footer from "./Footer";
import SideNavbar from "./SideNavBar";
import TopNavbar from "./TopNavbar";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta name="description" content="Next application template using Bootstrap css framework." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="d-block d-sm-flex flex-sm-row vh-100">
				<SideNavbar></SideNavbar>

				<div className={styles.leftContent + " d-block d-sm-flex flex-sm-column flex-fill"}>
					<TopNavbar></TopNavbar>
					<section id="content" className={styles.content + " flex-fill"}>
						{children}
					</section>
					<Footer></Footer>
				</div>
			</div>

			<ToastContainer position="bottom-right" autoClose={20000} hideProgressBar={true} closeOnClick theme={"colored"} />
		</>
	);
}
