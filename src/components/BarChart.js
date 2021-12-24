import { Bar } from "react-chartjs-2";
// Configuración de los elemmentos como tooltip. labels,...que usaremos en las gráficas
// eslint-disable-next-line no-unused-vars
import ChartJS from "./../configs/chartjs";

const BarChart = ({ titleChart, labels, dataValues }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: titleChart,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Characters",
        data: dataValues,
        backgroundColor: "rgba(13, 202, 240, 1)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
