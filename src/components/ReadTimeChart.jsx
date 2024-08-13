import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AuthContext } from "./AuthProvider";
import LoadingState from './LoadingState';

const ReadTimeChart = () => {
    const [chartData, setChartData] = useState(null);
    const [totalReadTime, setTotalReadTime] = useState(0);
    const [totalLeftTime, setTotalLeftTime] = useState(0);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                // Fetch total blog time
                const blogsResponse = await fetch('https://mindful-mosaic-server.onrender.com/blog');
                const blogs = await blogsResponse.json();

                // Fetch saved blog times for the user
                const savedBlogsResponse = await axios.get(`https://mindful-mosaic-server.onrender.com/savedBlogs?userId=${user.uid}`);
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
                const data = [];
                let totalRead = 0;
                let totalLeft = 0;

                blogs.forEach(blog => {
                    const readTime = readTimeMap.get(blog._id) || 0;
                    const leftTime = parseFloat(blog.time_to_read) - readTime;

                    data.push({
                        name: blog.title.substring(0, 5),
                        fullTitle: blog.title, // Store the full title for tooltip
                        readTime: readTime,
                        leftTime: leftTime,
                    });

                    totalRead += readTime;
                    totalLeft += leftTime;
                });

                setChartData(data);
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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const item = payload[0].payload;
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px' }}>
                    <p className="label">{`${item.fullTitle}`}</p>
                    <p className="intro">{`Read Time: ${item.readTime.toFixed(0)} Minutes`}</p>
                    <p className="desc">{`Left Time: ${item.leftTime.toFixed(0)} Minutes`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className='my-12 max-w-screen-lg bg-black mx-auto p-5 min-h-[calc(100vh-150px)]'>

            <h1 className="md:text-3xl text-white text-xl  font-cinzel font-semibold text-center mb-6">Comprehensive Read Time vs. Left Time Overview</h1>
            <div className='pb-6 flex gap-6 justify-center'>
                <div className='flex gap-2 items-center'>
                    <div className='bg-[#8884d8] h-4 w-4'></div>
                    <p className='text-white'>Total Read Time</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#82ca9d] h-4 w-4'></div>
                    <p className='text-white'>Total Left Time</p>
                </div>
            </div>
            {chartData ? (
                <>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
                            <XAxis dataKey="name" stroke="#fff" />
                            <YAxis stroke="#fff" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ color: '#fff' }} />
                            <Bar dataKey="readTime" barSize={20} fill="#8884d8" />
                            <Bar dataKey="leftTime" barSize={20} fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                    <div className='p-6 md:flex gap-6 justify-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-[#8884d8] h-4 w-4'></div>
                            <p className='text-white'>Total Read Time: {totalReadTime.toFixed(0)} Minutes</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#82ca9d] h-4 w-4'></div>
                            <p className='text-white'>Total Left Time: {totalLeftTime.toFixed(0)} Minutes</p>
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
