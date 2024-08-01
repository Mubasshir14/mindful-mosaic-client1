import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { AuthContext } from "./AuthProvider";
import LoadingState from './LoadingState';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReadTimeChart = () => {
    const [chartData, setChartData] = useState(null);
    const [totalReadTime, setTotalReadTime] = useState(0);
    const [totalLeftTime, setTotalLeftTime] = useState(0);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                // Fetch total blog time
                const blogsResponse = await fetch('http://localhost:5000/blog');
                const blogs = await blogsResponse.json();

                // Fetch saved blog times for the user
                const savedBlogsResponse = await axios.get(`http://localhost:5000/savedBlogs?userId=${user.uid}`);
                const savedBlogs = savedBlogsResponse.data;

                // Create a map to track total read time for each blog ID
                const readTimeMap = new Map();
                savedBlogs.forEach(blog => {
                    if (readTimeMap.has(blog._id)) {
                        readTimeMap.set(blog._id, readTimeMap.get(blog._id) + parseFloat(blog.time_to_read));
                    } else {
                        readTimeMap.set(blog._id, parseFloat(blog.time_to_read));
                    }
                });

                // Prepare data for the chart
                const titles = [];
                const readTimes = [];
                const leftTimes = [];
                let totalRead = 0;
                let totalLeft = 0;

                blogs.forEach(blog => {
                    titles.push(blog.title.substring(0, 20));
                    const readTime = readTimeMap.get(blog._id) || 0;
                    readTimes.push(readTime);
                    const leftTime = parseFloat(blog.time_to_read) - readTime;
                    leftTimes.push(leftTime);

                    totalRead += readTime;
                    totalLeft += leftTime;
                });

                setChartData({
                    labels: titles,
                    datasets: [
                        {
                            label: 'Read Time',
                            data: readTimes,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                        {
                            label: 'Left Time',
                            data: leftTimes,
                            backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        },
                    ],
                });

                setTotalReadTime(totalRead);
                setTotalLeftTime(totalLeft);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        if (user) {
            fetchChartData();
        }
    }, [user]);

    return (
        <div className='my-12 max-w-screen-lg mx-auto p-5 min-h-[calc(100vh-150px)] '>
            {chartData ? (
                <>
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Read Time vs Left Time',
                                },
                            },
                        }}
                    />
                    <div className='p-6 md:flex gap-6'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-[#93D9D9]  h-4 w-4'>

                            </div>
                            <p>Total Read Time: {totalReadTime.toFixed(0)} Minutes</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#FFA1B5]  h-4 w-4'>

                            </div>
                            <p>Total Left Time: {totalLeftTime.toFixed(0)} Minutes</p>
                        </div>
                    </div>
                </>
            ) : (
                <LoadingState />
            )}
        </div>
    );
};

export default ReadTimeChart;
