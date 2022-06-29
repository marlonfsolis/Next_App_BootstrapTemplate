import { useEffect } from "react";

import Layout from "components/shared/Layout";

import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      var bootstrapImp = import("bootstrap/dist/js/bootstrap.bundle.min.js");

      bootstrapImp.then(function (params) {
         window.bootstrap = params;
      });
   }, []);

   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>

         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}

export default MyApp;
