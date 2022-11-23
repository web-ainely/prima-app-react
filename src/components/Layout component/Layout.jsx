import Header from "../Header component/Header";
import Main from "../Main component/Main";
import Footer from "../Footer component/Footer";

function Layout() {
  let titoloMain = "il mio titolo";
  return (
    <>
      <Header />
      <Main tema="light" titolo={titoloMain} />
      <Footer>io servo per imparare a cos'è un children</Footer>
    </>
  );
}

export default Layout;