import React from 'react'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[70vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="./2.jpg"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle bg-transparent border-none text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="./3.png"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-transparent border-none text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="./4.png"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle bg-transparent border-none text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-transparent border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="./1.png"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle bg-transparent border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-transparent border-none text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;
