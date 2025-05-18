'use client';

import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface AnalyticsData {
  websiteTraffic: {
    labels: string[];
    values: number[];
  };
  conversionRates: {
    labels: string[];
    values: number[];
  };
  revenueData: {
    labels: string[];
    values: number[];
  };
  trafficSources: {
    labels: string[];
    values: number[];
  };
}

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AnalyticsData>({
    websiteTraffic: { labels: [], values: [] },
    conversionRates: { labels: [], values: [] },
    revenueData: { labels: [], values: [] },
    trafficSources: { labels: [], values: [] },
  });

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      const response = await fetch('/api/analytics');
      const analyticsData = await response.json();
      setData(analyticsData);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const websiteTrafficOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Website Traffic',
      },
    },
  };

  const websiteTrafficData = {
    labels: data.websiteTraffic.labels,
    datasets: [
      {
        label: 'Visitors',
        data: data.websiteTraffic.values,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const conversionRatesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Conversion Rates',
      },
    },
  };

  const conversionRatesData = {
    labels: data.conversionRates.labels,
    datasets: [
      {
        label: 'Conversion Rate',
        data: data.conversionRates.values,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const revenueDataOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };

  const revenueData = {
    labels: data.revenueData.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueData.values,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const trafficSourcesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Traffic Sources',
      },
    },
  };

  const trafficSourcesData = {
    labels: data.trafficSources.labels,
    datasets: [
      {
        data: data.trafficSources.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
      },
    ],
  };

  if (loading) {
    return <div>Loading analytics data...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <Line options={websiteTrafficOptions} data={websiteTrafficData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <Bar options={conversionRatesOptions} data={conversionRatesData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <Line options={revenueDataOptions} data={revenueData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <Doughnut options={trafficSourcesOptions} data={trafficSourcesData} />
        </div>
      </div>
    </div>
  );
} 