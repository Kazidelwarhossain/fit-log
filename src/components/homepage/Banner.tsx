import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/banner.png";
const Banner = () => {
    return (
        <section className=" py-20">
        <div className="container mx-auto grid grid-cols-2 gap-4 items-center
         bg-slate-950 rounded-4xl p-4">
            <div className="space-y-4">
            <h3 className="text-amber-300">WORKOUT LIBRARY</h3>
            <h2 className="text-xl font-bold uppercase text-amber-50"> train with intent.log. <br/> every set</h2>
            <p className="text-amber-100">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up</p>
            <button className="btn btn-active btn-warning">BROWSE WORKOUTS</button>
            </div>

            <div>
            <Image src={bannerImg} alt="Banner" />

            </div>
        </div>
        </section>
    );
};

export default Banner;