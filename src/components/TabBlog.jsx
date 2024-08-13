import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoadingState from './LoadingState';
import BlogCard from './BlogCard';


const TabBlog = () => {
    const [blog, setBlog] = useState([]);
    const [health, setHealth] = useState([]);
    const [employment, setEmployment] = useState([]);
    const [gender, setGender] = useState([]);
    const [agriculture, setAgriculture] = useState([]);
    const [foodSecurity, setFoodSecurity] = useState([]);
    const [environment, setEnvironment] = useState([]);
    const [energy, setEnergy] = useState([]);
    const [urban, setUrban] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [economy, setEconomy] = useState([]);
    const [education, setEducation] = useState([]);
    const [human, setHuman] = useState([]);
    const [social, setSocial] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://mindful-mosaic-server.onrender.com/blog')
            .then(res => res.json())
            .then(data => {
                setBlog(data);

                setHealth(data.filter(blog => blog.category === 'Health'));
                setEmployment(data.filter(blog => blog.category === 'Employment'));
                setGender(data.filter(blog => blog.category === 'Gender'));
                setAgriculture(data.filter(blog => blog.category === 'Agriculture'));
                setFoodSecurity(data.filter(blog => blog.category === 'Food Security'));
                setEnvironment(data.filter(blog => blog.category === 'Environment'));
                setEnergy(data.filter(blog => blog.category === 'Energy'));
                setUrban(data.filter(blog => blog.category === 'Urban Development'));
                setTechnology(data.filter(blog => blog.category === 'Technology'));
                setEconomy(data.filter(blog => blog.category === 'Economy'));
                setEducation(data.filter(blog => blog.category === 'Education'));
                setHuman(data.filter(blog => blog.category === 'Human Rights'));
                setSocial(data.filter(blog => blog.category === 'Social Issues'));

                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching :", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingState/>
    }

    return (
        <div className='my-12 p-3 max-w-screen-xl mx-auto'>
            <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Explore Blogs by Category</h1>
            <Tabs>
                <div className='flex text-white items-center justify-center '>
                    <TabList>
                        <Tab>Human</Tab>
                        <Tab>Health</Tab>
                        <Tab>Environment</Tab>
                        <Tab>Energy</Tab>
                        <Tab>Technology</Tab>
                        <Tab>Economy</Tab>
                        <Tab>Education</Tab>
                        <Tab>Food Security</Tab>
                        <Tab>Employment</Tab>
                        <Tab>Gender</Tab>
                        <Tab>Agriculture</Tab>
                        <Tab>Urban </Tab>
                        <Tab>Social </Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div>
                        <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Human Rights</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                human.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Health</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                health.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center  text-white font-cinzel font-bold my-3 text-xl'>Environment</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                environment.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Emergy</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                energy.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white  font-cinzel font-bold my-3 text-xl'>Technology</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                               technology.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Economy</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                economy.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Education</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                education.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Food Security</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                foodSecurity.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Employment</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                employment.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Gender</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                gender.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Agriculture</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                agriculture.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Urban Development</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                urban.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                    <h1 className='text-center text-white font-cinzel font-bold my-3 text-xl'>Social Issues</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {
                                social.map(b => (
                                    <BlogCard key={b._id} b={b}/>
                                ) )
                            }
                        </div>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default TabBlog;