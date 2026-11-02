
import React from "react";
import LibraryCard from "../shared/LibraryCard";
import { ILibrary } from "@/types/libraries.type";


const getLibraries = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const data = await response.json();

  return data;
};

const Libraries = async () => {
  const librariesData = await getLibraries();

  return (
    <section className="container mx-auto my-[20px] px-4">
 
        <h2 className="mb-2 text-3xl font-bold">THE LIBRARY</h2>
        <p className="mb-2 text-2xl font-bold">Twelve lifts covering every major muscle group</p>
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {librariesData.map((library: ILibrary) => (
          
          <LibraryCard
            key={library.id}
            library={library}
          />
        ))}

      </div>

    </section>
  );
};

export default Libraries;
