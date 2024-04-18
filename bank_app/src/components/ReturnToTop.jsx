import React, { useState, useEffect } from 'react';
import { LiaArrowUpSolid } from "react-icons/lia";

const ArrowBtn = (props) => (
    <div className={`fixed bottom-[15%] right-[2%] z-10 rounded-full border-[2.5px] border-gray-500 hover:border-secondary ${props.styles}`}>
        <a href="#home">
            <LiaArrowUpSolid
                className="bg-primary text-[5rem] p-4 rounded-full cursor-pointer text-gray-500 hover:text-secondary" 
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
        {(scrollPosition > 300 ) && (
                <ArrowBtn styles='max_lg:hidden' />
        )}

        {(scrollPosition > 1000) && (
                <ArrowBtn styles='lg:hidden max_sm:hidden' />
        )}
        </>
    )
}

export default ReturnToTop