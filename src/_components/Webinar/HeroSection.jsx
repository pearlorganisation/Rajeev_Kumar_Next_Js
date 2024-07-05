"use client"
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import ReactPlayer from 'react-player';

const HeroSection = () => {
    return (
        <div class="bg-pink-100">
            <div class="container mx-auto p-8">
                <div class="h-[80vh] rounded-lg flex flex-col lg:flex-row items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
                    <div class="flex-1 space-y-8">
                        <h2 class="text-xl font-bold text-gray-600 mb-2">Date: 7 July 2024, 11 AM</h2>
                        <h1 class="text-5xl font-bold mb-4">Launch Your Programming Career</h1>
                        <p class="text-gray-700 mb-4">Join our live session to explore how to start a programming career and how Thought Glow's expert-led courses can set you on the path to success.</p>
                        <ul class="space-y-2">
                            <li class="flex items-center text-base"><span class="text-indigo-500"><FaCircleCheck size={22} /></span> <span class="ml-2">Learn from an instructor with prior engineering roles at Microsoft, Amazon and startups in India and USA.</span></li>
                            <li class="flex items-center text-base"><span class="text-indigo-500"><FaCircleCheck size={22} /></span> <span class="ml-2">Discover the path to elevate your programming career to new heights.</span></li>
                            <li class="flex items-center text-base"><span class="text-indigo-500"><FaCircleCheck size={22} /></span> <span class="ml-2">Learn a step-by-step guide to land into a programming job.</span></li>
                            <li class="flex items-center text-base"><span class="text-indigo-500"><FaCircleCheck size={22} /></span> <span class="ml-2">Limited seats for each session</span></li>
                        </ul>
                        <a href="#" class="mt-4 inline-block bg-indigo-500 text-white py-2 px-4 rounded-3xl hover:bg-indigo-600">Book Your Spot @ ₹9</a>
                    </div>
                    <div class="flex-1">
                        <div class="w-full  flex items-center justify-center">
                            <ReactPlayer url='https://www.youtube.com/watch?v=Zd7sW20f020' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection