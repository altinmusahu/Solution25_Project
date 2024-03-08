import { useState } from "react";
import { LuSearch, LuUser, LuShoppingCart } from "react-icons/lu";

export default function Header() {
    const [buttonHoverState, setButtonHoverState] = useState({
        home: false,
        product: false,
        solutions: false,
        about: false,
        contact: false
    });

    function handleMouseEnter(buttonName) {
        setButtonHoverState(prevState => ({
            ...prevState,
            [buttonName]: true
        }));
    }

    function handleMouseLeave(buttonName) {
        setButtonHoverState(prevState => ({
            ...prevState,
            [buttonName]: false
        }));
    }

    return (
        <div className="flex items-center justify-between text-white">
            <div className="mt-16 items-center ml-44">
                <h1 className="font-bold text-4xl">LOGO</h1>
            </div>

            <ul className="flex items-center gap-14 mt-16 ml-32 relative">
                <li>
                    <button
                        onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={() => handleMouseLeave('home')}
                        className="flex flex-col justify-center items-center"
                    >
                        Home
                        {buttonHoverState.home && (
                            <div className="w-8 h-0.5 bg-white duration-75 transform translate-y-full"></div>
                        )}
                    </button>
                </li>
                <li>
                    <button
                        onMouseEnter={() => handleMouseEnter('product')}
                        onMouseLeave={() => handleMouseLeave('product')}
                        className="flex flex-col justify-center items-center"

                    >
                        Product
                        {buttonHoverState.product && (
                            <div className="w-8 h-0.5 bg-white duration-75 transform translate-y-full"></div>
                            )}
                    </button>
                </li>
                <li>
                    <button
                        onMouseEnter={() => handleMouseEnter('solutions')}
                        onMouseLeave={() => handleMouseLeave('solutions')}
                        className="flex flex-col justify-center items-center"

                    >
                        Solutions
                        {buttonHoverState.solutions && (
                            <div className="w-8 h-0.5 bg-white duration-75 transform translate-y-full"></div>
                            )}
                    </button>
                </li>
                <li>
                    <button
                        onMouseEnter={() => handleMouseEnter('about')}
                        onMouseLeave={() => handleMouseLeave('about')}
                        className="flex flex-col justify-center items-center"

                    >
                        About
                        {buttonHoverState.about && (
                            <div className="w-8 h-0.5 bg-white duration-75 transform translate-y-full"></div>
                            )}
                    </button>
                </li>
                <li>
                    <button
                        onMouseEnter={() => handleMouseEnter('contact')}
                        onMouseLeave={() => handleMouseLeave('contact')}
                        className="flex flex-col justify-center items-center"

                    >
                        Contact
                        {buttonHoverState.contact && (
                            <div className="w-8 h-0.5 bg-white duration-75 transform translate-y-full"></div>
                            )}
                    </button>
                </li>


            </ul>

            <div className="flex items-center gap-6 mt-16 mr-16 cursor-pointer">
                <LuUser size={30} />
                <LuSearch size={30}/>
                <LuShoppingCart size={30}/>
            </div>
        </div>
    );
}
