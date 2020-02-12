import Head from "next/head";
import AppLayout from "../components/AppLayout";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title> Data Pipelining </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.9/antd.min.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default App;
