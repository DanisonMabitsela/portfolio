import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <div className="layout">
      <Header />
      {props.children}

      <style jsx>{`
        .layout {
          margin: 20px;
          padding: 20px;
          border: 1px solid #ddd;
        }
      `}</style>
    </div>
  </div>
);

export default Layout;
