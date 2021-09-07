import NavBar from "components/NavBar/navbar";
import Footer from "components/Footer/footer";
import DataTable from "components/DataTable/datatable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
