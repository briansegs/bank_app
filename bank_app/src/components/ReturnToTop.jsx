import React, { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from "react-icons/pi";

const ArrowBtn = (props) => (
    <div className={`fixed bottom-[15%] right-[1%] z-10 ${props.styles}`}>
        <a href="#home">
            <PiArrowFatUpFill
                className="bg-primary hover:bg-gray-900 text-[4rem] p-4 rounded-full cursor-pointer text-gray-500 hover:text-secondary" 
            />
        </a>  
    </div>
)

const ReturnToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);    
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        {(scrollPosition > 400 ) && (
                <ArrowBtn styles='max_lg:hidden' />
        )}

        {(scrollPosition > 1000) && (
                <ArrowBtn styles='lg:hidden max_sm:hidden' />
        )}
        </>
    )
}

export default ReturnToTop