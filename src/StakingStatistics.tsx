import { useState, useEffect } from 'react';

const EthStakingInfo = () => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to get data from session storage
        const cachedData = sessionStorage.getItem('ethStakingData');

        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch('https://u--1.com/eth-staking.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const fetchedData = await response.json();
          const filteredData: any = {};

          // Extract the properties we are interested in
          const properties = ['elCbETHBalance', 'elNumPods', 'elRETHBalance', 'elStETHBalance'];
          properties.forEach((property) => {
            filteredData[property] = fetchedData.values[property]?.displayValue;
          });

          // Cache data in session storage
          sessionStorage.setItem('ethStakingData', JSON.stringify(filteredData));

          setData(filteredData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div className='pt-2'>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-[#1a0c6d]">

        Pods: {data.elNumPods}
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-[#1a0c6d] ml-3">

        cbETH: {data.elCbETHBalance}
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-[#1a0c6d] ml-3">

        RETH: {data.elRETHBalance}
      </span>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-[#1a0c6d] ml-3">

        stETH: {data.elStETHBalance}
      </span>
      <p className='text-gray-400  text-xs mt-2 italic'>    <svg className="mr-2 animate-pulse h-1.5 w-1.5 fill-gray-400 inline-flex " viewBox="0 0 6 6" aria-hidden="true">
        <circle cx={3} cy={3} r={3} />
      </svg>u--1.com/eth-staking</p>
    </div>
  );
};

export default EthStakingInfo;
