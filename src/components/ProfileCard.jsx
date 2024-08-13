import React from 'react';

const ProfileCard = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center font-cinzel text-2xl font-bold">T<span className="underline">e</span>a<span className="underline">m</span>s</h1>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="w-full border-2 px-8 py-4 mt-16  rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex justify-center md:justify-end -mt-16">
            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" 
              src="https://i.ibb.co/nPp4VHH/d0f42b5cf5cd.jpg" alt="Profile" />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Jonathan Doe</h2>
            <p className="text-sm text-gray-600 dark:text-gray-200">Collaborator & Editor</p>
            <p className="mt-2 text-gray-600 dark:text-gray-200">
              Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry.
            </p>
            <div className="flex justify-center md:justify-end mt-4">
              <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">Jonathan Doe</a>
            </div>
          </div>
        </div>

        <div className="w-full border-2 px-8 py-4 mt-16  rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex justify-center md:justify-end -mt-16">
            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" 
              src="https://i.ibb.co/nPp4VHH/d0f42b5cf5cd.jpg" alt="Profile" />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Jane Smith</h2>
            <p className="text-sm text-gray-600 dark:text-gray-200">Content Writer</p>
            <p className="mt-2 text-gray-600 dark:text-gray-200">
              Meet Jane Smith, a talented content writer who brings stories to life. Jane has a degree in English Literature and enjoys writing about travel and lifestyle.
            </p>
            <div className="flex justify-center md:justify-end mt-4">
              <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">Jane Smith</a>
            </div>
          </div>
        </div>

        <div className="w-full border-2 px-8 py-4 mt-16  rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex justify-center md:justify-end -mt-16">
            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" 
              src="https://i.ibb.co/nPp4VHH/d0f42b5cf5cd.jpg" alt="Profile" />
          </div>
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Alex Brown</h2>
            <p className="text-sm text-gray-600 dark:text-gray-200">Graphic Designer</p>
            <p className="mt-2 text-gray-600 dark:text-gray-200">
              Meet Alex Brown, our creative graphic designer. Alex has a keen eye for design and ensures our blog looks stunning with visually appealing graphics.
            </p>
            <div className="flex justify-center md:justify-end mt-4">
              <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">Alex Brown</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard;
