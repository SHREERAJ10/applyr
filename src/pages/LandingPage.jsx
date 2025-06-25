import React from 'react'

function LandingPage() {
    return (
        <div className="h-screen flex flex-col-reverse justify-around items-left p-4 lg:grid lg:grid-cols-[1fr_1fr] bg-white">

            <div className="flex flex-col justify-center gap-4 lg:gap-12">
                <div className="flex flex-col lg:justify-around gap-4 lg:gap-6">
                    <h1 className="text-6xl lg:text-8xl font-bold">Applyr</h1>
                    <h2 className="text-2xl lg:text-4xl font-medium text-gray-900">Track your job applications. Nothing more.</h2>
                    <p className="text-gray-800 lg:text-lg">Tired of messy spreadsheets and forgetting where you applied?
                        Applyr helps you stay organized during your job hunt — fast, simple, and distraction-free.</p>
                </div>
                {/* CTA */}
                <div className="bg-blue-800 rounded-xl w-32 text-xl text-white cursor-pointer p-2 ease-in-out transition-transform hover:brightness-105 hover:scale-90">
                    <span>Get Started</span>
                </div>
            </div>


            <div className="w-full flex justify-center">
                <img src="src/assets/hero-image.jpg" alt="" className="object-cover" />
            </div>

        </div>
    )
}

export default LandingPage