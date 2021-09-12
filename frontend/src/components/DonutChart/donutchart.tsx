import axios from 'axios';
import { BASE_URL } from 'components/utils/requests';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}

function DonutChart() {

    // FORMA ERRADA DE DECLARA VARIAVEIS
    let chartData : ChartData = { labels: [], series: []}

    // FORMA ERRADA DE CHAMAR A API
    axios.get(`${BASE_URL}/sales/sum-by-seller`).then(
        response => {
            //data é o corpo da resposta
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            chartData = {labels: myLabels, series: mySeries};
            console.log(chartData);
        }
    );
/*     const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    } */
    
    const options = {
        legend: {
            show: true
        }
    }
    
    
    return (
        <Chart 
            options={{ ...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
