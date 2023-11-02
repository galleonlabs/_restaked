import { useState, useEffect } from 'react';

// Define the structure of the data we expect to receive
interface StakingData {
  elCbETHBalance: string;
  elNumPods: string;
  elRETHBalance: string;
  elStETHBalance: string;
}

const fetchStakingData = async () => {
  const cachedData = sessionStorage.getItem('ethStakingData');
  if (cachedData) {
    return JSON.parse(cachedData) as StakingData;
  }

  const response = await fetch('https://u--1.com/eth-staking.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const fetchedData = await response.json();
  const properties = ['elCbETHBalance', 'elNumPods', 'elRETHBalance', 'elStETHBalance'];
  const filteredData: Partial<StakingData> = {};

  properties.forEach((property) => {
    filteredData[property as keyof StakingData] = fetchedData.values[property]?.displayValue;
  });

  sessionStorage.setItem('ethStakingData', JSON.stringify(filteredData));
  return filteredData as StakingData;
};

const infoStyle = "inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-[#1a0c6d]";

const EthStakingInfo = () => {
  const [data, setData] = useState<StakingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchStakingData()
      .then(setData)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null; // or some fallback UI

  return (
    <div className='pt-2'>
      <span className={infoStyle}>Pods: {data.elNumPods}</span>
      <span className={`${infoStyle} ml-3`}>cbETH: {data.elCbETHBalance}</span>
      <span className={`${infoStyle} ml-3`}>RETH: {data.elRETHBalance}</span>
      <span className={`${infoStyle} ml-3`}>stETH: {data.elStETHBalance}</span>
      <p className='text-gray-400 text-xs mt-2 italic'>
        <svg className="mr-2 animate-pulse h-1.5 w-1.5 fill-gray-400 inline-flex " viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} />
        </svg>
        u--1.com/eth-staking
      </p>
    </div>
  );
};

export default EthStakingInfo;
