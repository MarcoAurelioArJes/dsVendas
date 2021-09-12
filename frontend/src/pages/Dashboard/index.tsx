import NavBar from "components/NavBar/navbar";
import Footer from "components/Footer/footer";
import DataTable from "components/DataTable/datatable";
import BarChart from "components/BarChart/barchart";
import DonutChart from "components/DonutChart/donutchart";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <>
                <NavBar />
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
                        <Link to="/" className="btn btn-primary btn-lg">
                            Voltar ao Ínicio
                        </Link>
                    </div>
                    <div className="row px-3">
                        <div className="col-sm-6">
                            <h5 className="text-secondary">Taxa de sucesso (%)</h5>
                            <BarChart />
                        </div>
                        <div className="col-sm-6">
                            <h5 className="text-secondary">Todas vendas</h5>
                            <DonutChart />
                        </div>
                    </div>

                    <h2 className="text-primary py-3">Todas vendas</h2>
                    <DataTable />
                </div>
                <Footer />
            </>
        </div>
    );
}

export default Dashboard;
