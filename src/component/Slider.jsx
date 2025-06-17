import React from 'react';
import { NavLink } from 'react-router';

const Slider = () => {
  return (
    <div className="w-full">
      <div className="carousel w-full lg:h-[70vh]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src="./2.jpg" className="w-full h-full object-cover" />
          {/* Overlay content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
            <h2 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Welcome to Our Event</h2>
            <p className="text-md md:text-xl mb-6 w-[80%] md:w-[40%] text-gray-200">Instead of viewing training as a chore, reframe it as a privilege and an opportunity to improve your physical and mental health. </p>
            <NavLink to="/allmarathon"> <button className="btn bg-gradient-to-r from-green-400 to-blue-500 border-none text-white px-6">Explore More</button></NavLink>
          </div>
          {/* Navigation */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle bg-transparent border-none text-white">❮</a>
            <a href="#slide2" className="btn btn-circle bg-transparent border-none text-white">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src="./3.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
            <h2 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Challenge Yourself</h2>
            <p className="text-md md:text-xl mb-6 w-[80%] md:w-[40%] text-gray-200">Every mile you run is a step toward becoming stronger, more disciplined, and more unstoppable—keep moving forward.</p>
            <NavLink to="/allmarathon"> <button className="btn bg-gradient-to-r from-green-400 to-blue-500 border-none text-white px-6">Explore More</button></NavLink>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle bg-transparent border-none text-white">❮</a>
            <a href="#slide3" className="btn btn-circle bg-transparent border-none text-white">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="./4.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
            <h2 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Feel the Energy</h2>
            <p className="text-md md:text-xl mb-6 w-[80%] md:w-[40%] text-gray-200">Training for a marathon isn’t just about finishing a race—it’s about discovering what you’re truly capable of.</p>
            <NavLink to="/allmarathon"> <button className="btn bg-gradient-to-r from-green-400 to-blue-500 border-none text-white px-6">Explore More</button></NavLink>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle bg-transparent border-none text-white">❮</a>
            <a href="#slide4" className="btn btn-circle bg-transparent border-none text-white">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src="./1.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
            <h2 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Ready. Set. Go!</h2>
            <p className="text-md md:text-xl mb-6 w-[80%] md:w-[40%] text-gray-200">The road may be long, but every drop of sweat, every breath, and every step brings you closer to your greatest self.</p>
            <NavLink to="/allmarathon"> <button className="btn bg-gradient-to-r from-green-400 to-blue-500 border-none text-white px-6">Explore More</button></NavLink>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle bg-transparent border-none text-white">❮</a>
            <a href="#slide1" className="btn btn-circle bg-transparent border-none text-white">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
