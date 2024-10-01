import ItemsContextProvider from "../context/ItemsContextProvider";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  // input: funcation and array.

  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
        
      </main>

      <Footer />
    </>
  );
}

export default App;
