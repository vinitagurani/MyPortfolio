import React, { useEffect, useState } from 'react'
import { memo } from 'react';

// id, size, x, y, opacity, animationDuration

const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteor, setMeteor] = useState([]);

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleResize = () =>{
        generateStars();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
    },[]);

    const generateStars = () =>{
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight)/1000);

        const newStars = [];

        for (let i = 0; i< numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 +1,
                x: Math.random() *100,
                y: Math.random() *100, 
                opacity: Math.random()*0.5 + 0.5,
                animationDuration: Math.random() *4 +2,
            })
        }

        setStars(newStars);

    };

    const generateMeteors = () =>{
        const numberOfMeteors = 4;

        const newMeteors = [];

        for (let i = 0; i< numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() *100,
                y: Math.random() * 20,
                delay: Math.random() *15, 
                animationDuration: Math.random() *3+3,
            })
        }

        setMeteor(newMeteors);

    };

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0 '>
        {stars.map((star)=>{
            return (
            <div key = {star.id} className='star animate-pulse-subtle' style = {{width: star.size + "px",
            height: star.size +"px", 
            left: star.x + "%", 
            top: star.y + "%", 
            opacity: star.opacity, 
            animationDuration:star.animationDuration + "s",}} />
            )
        })}

        {meteor.map((m)=>{
            return (
            <div key = {m.id} className='meteor animate-meteor' style = {{width: m.size*50 + "px",
            height: m.size*2 +"px", 
            left: m.x + "%", 
            top: m.y + "%", 
            animationDelay: m.delay+"s", 
            animationDuration:m.animationDuration + "s",}} />
            )
        })}
    </div>
  )
}

export default StarBackground