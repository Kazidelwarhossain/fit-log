import Image from 'next/image';
import React from 'react';

 
const LibraryCard = ({library}: ILibrayCardProps) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    
  } = library;
    return (
        <section className="Container mx-auto px-4 py-10"> 
      <div className="bg-slate-950 text-white rounded-xl overflow-hidden">
 
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
  <Image 
  src={library.image}
  alt={library.name}
  width={600}
  height={450}
  />
   <div className="p-4">

        <div className="flex gap-4 mb-5">
          {muscleGroups.map((muscle, index) => (
            <div
              key={index}
              className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full"
            >
              {muscle}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-bold uppercase">
          {name}
        </h3>
        <p className="text-gray-200 text-sm mt-3">
          {equipment}
        </p>

        <hr className="border-gray-600 my-4" />

        <div className="flex justify-between text-sm text-gray-400">

              <span>◷ {duration} min</span>

            <span>🔥 {caloriesBurned} kcal</span>

          <span>☆ {rating}</span>

        </div>

      </div>
    </div>
    </section>
  );
};


export default LibraryCard;