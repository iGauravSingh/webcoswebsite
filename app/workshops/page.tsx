"use client";

import EventCard from "@/components/card/EventCard";
import Loader from "@/components/Loader";
import { useGetWorkShops } from "@/hooks/api/useWorkShops";
import React from "react";

const Workshops = () => {
  const { data, isLoading } = useGetWorkShops();

  if (isLoading) {
    return (
      <section className="w-full py-16 font-Poppins container mx-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl leading-9 font-bold text-gray-900 mb-8 text-center">
            Workshops
          </h2>
        </div>

        <div className="w-full">
          <Loader />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 font-Poppins container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-bold text-gray-900 mb-8 text-center">
          Workshops
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.data.result.workshops &&
        data?.data.result.workshops.length > 0 ? (
          data?.data.result.workshops.map((workshop) => (
            <EventCard key={workshop.id} event={workshop} />
          ))
        ) : (
          <p className="w-full text-center col-span-full">
            There is not any active workshop.
          </p>
        )}
      </div>
    </section>
  );
};

export default Workshops;
