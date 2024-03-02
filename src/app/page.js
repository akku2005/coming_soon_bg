"use client";
import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Access the video element and set the playback rate
      videoRef.current.playbackRate = 0.6; // Adjust the speed as needed
    }
  }, []);

  return (
    <>
    <main className="h-screen">
      <div className="relative">
        <div className="bg-hero-section bg-no-repeat h-auto bg-center bg-cover relative">
          <video
            autoPlay
            loop
            muted
            ref={videoRef}
            className="absolute inset-0 object-cover h-3/6 xl:h-screen w-full"
            playsInline // For mobile browsers
            speed="0.5"
          >
            <source src="homepage/bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0">
            <Navbar />
            <div className="sm:text-5xl my-36 mx-16 text-left text-white animate__animated animate__fadeIn">
              <div className="flex items-center mb-5">
                <hr className="border-t-2 border-blue-500 w-16 my-2 mx-0" />
                <p className="ml-4 text-lg">It's almost time .</p>
              </div>

              <div className="">
                <p className="text-8xl font-extrabold">
                  COMING <br />
                </p>
                <p>SOON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section>
    <Hero/>
    </section>
    </> 
  );
}
