import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

const barChartOptions = {
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
};
const fillNullValues = (data) => {
  const filledData = Array(7).fill(null);
  data.forEach((value, index) => {
    filledData[index] = value;
  });
  return filledData;
};

const DailyBarChart = ({ dailyDonationData }) => {
  const theme = useTheme();
  const { info } = theme.palette;

  const [series, setSeries] = useState([{ data: [] }]); // Initialize with an empty array

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    if (dailyDonationData) {
      const filledData = fillNullValues(dailyDonationData);
      setSeries([{ data: filledData }]);
    }
    
    setOptions((prevState) => ({
      ...prevState,
      colors: [info.light],
      // ...other options...
    }));
  }, [info, dailyDonationData]);

  if (!dailyDonationData) {
    // Return a loading state or placeholder here
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ReactApexChart options={options} series={series} type="bar" width="100%" height={365} />
    </div>
  );
};

export default DailyBarChart;
