import img from '../assets/planet.jpg';

const GetTouch = () => {
    return (
        <div className="my-12">
            <section id="about" className="mt-6 mb-12">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <h1 className="md:text-3xl text-xl  font-cinzel font-semibold text-center">About Us</h1>
                    <h1 className='text-center font-cinzel font-bold my-3 text-sm md:text-xl'>
                        Empowering Communities, Inspiring Hope</h1>
                </div>
                <header className="mt-4">
                    <div className="w-full bg-center bg-cover lg:h-[400px] rounded-xl"
                        style={{ backgroundImage: `url(${img})` }}>
                        <div className="flex items-center  justify-center  w-full h-full rounded-xl p-5">
                            <div className="items-center text-center flex flex-col lg:flex-row justify-around gap-6">
                                <div className=" p-5 bg-base-300/85 rounded-xl">

                                    <div className="flex  flex-col items-center justify-center text-center">
                                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </span>

                                        <h2 className="mt-4 text-lg font-medium font-cinzel text-gray-800 dark:text-white">Email</h2>
                                        <p className="mt-2 font-cinzel text-gray-800 dark:text-gray-400">Our team is here to help.</p>
                                        <p className="mt-2 text-blue-500 dark:text-blue-400">mindful@mosaic.com</p>
                                    </div>

                                </div>





                                <div className="bg-base-300/85 p-5 rounded-xl">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>

                                        <h2 className="mt-4 text-lg font-medium font-cinzel text-gray-800 dark:text-white">Office</h2>
                                        <p className="mt-2 font-cinzel text-gray-800 dark:text-gray-400">Say hello at our office MM.</p>
                                        <p className="mt-2 text-blue-500 dark:text-blue-400">100 Smith St, Collingwood VIC</p>
                                    </div>

                                </div>




                                <div className="bg-base-300/85 p-5 rounded-xl">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>

                                        <h2 className="mt-4 text-lg font-medium font-cinzel text-gray-800 dark:text-white">Phone</h2>
                                        <p className="mt-2 font-cinzel text-gray-800 dark:text-gray-400">Everyday from 8am to 5pm.</p>
                                        <p className="mt-2 text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </div>
    );
};

export default GetTouch;
