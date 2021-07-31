import './Chart.css'
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {

  const valueArray = dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...valueArray)
  return (
    <div className='chart'>
      {
        dataPoints.map(dataPoint => <ChartBar dataPoint={dataPoint} maxValue={totalMaximum} key={dataPoint.label} />)
      }
    </div>
  );
};

export default Chart;