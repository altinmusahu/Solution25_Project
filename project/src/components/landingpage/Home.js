import { useState } from "react";

export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { title: "Slide 1 Title", content: "Slide 1 Content" },
        { title: "Slide 2 Title", content: "Slide 2 Content" },
        // Add more slides as needed
    ];

    return (
        <div className="flex items-center justify-center text-white flex-col">

            <div className="items-center justify-center text-center object-center mt-44 text-6xl font-bold">
                <h1 className="">Mockup to empower your </h1>
                <h1 className="mt-4">creative workflow</h1>
            </div>

            <div className="mt-8 w-2/5 text-center font-semibold text-base">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="flex mt-12 gap-10">
                <button class="bg-white hover:bg-gray-200 text-black px-7 py-4 rounded font-bold">
                        Lorem ipsum
                </button>

                <button class="bg-white hover:bg-gray-200 text-black px-7 py-4 rounded font-bold">
                        Lorem ipsum
                </button>
            </div>

            <div>

            </div>
        </div>
    );
}