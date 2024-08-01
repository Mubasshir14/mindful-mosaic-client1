
import img from '../assets/online-blog .jpg'
import img1 from '../assets/technology.jpg'
import img2 from '../assets/43170.jpg'
import img3 from '../assets/travel.jpg'
import img4 from '../assets/life.jpg'
import img5 from '../assets/planet.jpg'
import img6 from '../assets/20943561.jpg'
import img7 from '../assets/ps.jpg'
const About = () => {
  return (
    <div className="font-cinzel py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">Welcome to Mindful Mosaic</h1>
        <div className="flex justify-center mb-8">
          <img 
            src={img} 
            alt="Mindful Mosaic Hero" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-600 mb-8">
          A space where thoughts are shared, stories are told, and ideas come to life. Our blog is dedicated to exploring a wide array of topics, bringing you insightful content that inspires, educates, and entertains.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Mindful Mosaic, our mission is to create a platform that fosters meaningful conversations and offers valuable perspectives. We believe in the power of words to connect people, spark curiosity, and drive positive change. Whether you're here to find inspiration, gain knowledge, or simply enjoy a good read, we aim to provide content that resonates with you.
        </p>

        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-4">What We Cover</h2>
        <div className="space-y-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={img1} 
              alt="Technology" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Technology</h3>
              <p className="text-lg text-gray-600">
                Explore the latest trends and innovations shaping our digital world. From cutting-edge gadgets to in-depth analyses of tech advancements, we delve into the fascinating realm of technology.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={img2} 
              alt="Health and Wellness" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Health and Wellness</h3>
              <p className="text-lg text-gray-600">
                Discover tips, advice, and insights on living a healthier, more balanced life. We cover everything from physical fitness and mental well-being to holistic health practices.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={img3} 
              alt="Travel and Adventure" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Travel and Adventure</h3>
              <p className="text-lg text-gray-600">
                Join us as we embark on journeys to captivating destinations around the globe. Get travel tips, destination guides, and stories that fuel your wanderlust.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={img4}  
              alt="Lifestyle and Culture" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Lifestyle and Culture</h3>
              <p className="text-lg text-gray-600">
                Dive into the diverse tapestry of human experiences. We explore cultural phenomena, lifestyle trends, and personal growth, offering a window into the myriad ways people live and thrive.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={img5}  
              alt="Environment and Sustainability" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Environment and Sustainability</h3>
              <p className="text-lg text-gray-600">
                Learn about the pressing environmental issues of our time and the steps we can take to create a sustainable future. We highlight green initiatives, eco-friendly practices, and the importance of preserving our planet.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={img6} 
              alt="Personal Development" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Personal Development</h3>
              <p className="text-lg text-gray-600">
                Empower yourself with insights and strategies for personal growth. From self-improvement tips to motivational stories, we provide tools to help you become the best version of yourself.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={img7} 
              alt="Creative Expressions" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Creative Expressions</h3>
              <p className="text-lg text-gray-600">
                Celebrate the beauty of creativity in all its forms. We feature art, literature, music, and more, showcasing the talents and passions that enrich our lives.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-4">Join the Conversation</h2>
        <p className="text-lg text-gray-600 mb-8">
          We believe that our readers are an integral part of our community. We encourage you to share your thoughts, engage in discussions, and connect with us through comments and social media. Your voice matters, and we are excited to hear your perspectives.
        </p>

        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-4">Stay Connected</h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay up-to-date with our latest posts and updates by subscribing to our newsletter. Follow us on social media to join our growing community and be a part of our journey.
        </p>

        <p className="text-lg text-gray-600">
          Thank you for visiting Mindful Mosaic. We hope you find our content engaging, insightful, and inspiring. Together, let's explore the world, one story at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
