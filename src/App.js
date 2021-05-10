import "./App.css";
import Highcharts from "highcharts";
import HighChartReact from "highcharts-react-official";

function App() {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Consumo de frutas",
    },
    xAxis: {
      categories: ["Maçãs", "Bananas", "Laranjas"],
    },
    yAxis: {
      title: {
        text: "Frutas Consumidas",
      },
    },
    series: [
      {
        name: "Jane",
        data: [1, 2, 4],
      },
      {
        name: "John",
        data: [5, 7, 3],
      },
    ],
  };
  return (
    <div className="App">
      <p>Trabalhando com gráficos</p>
      <HighChartReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;
