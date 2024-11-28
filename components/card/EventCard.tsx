"use client";
import React from "react";
import moment from "moment";
import Link from "next/link";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const {
    title,
    description,
    startDate,
    endDate,
    location,
    _count,
    isDeleted,
  } = event;

  // Format dates
  const start = new Date(startDate).toLocaleString();
  const end = new Date(endDate).toLocaleString();

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 max-w-sm mx-auto p-6">
      <span
        className={`inline-block py-1 px-3 text-xs font-bold ${
          isDeleted ? "bg-red-500 text-white" : "bg-green-500 text-white"
        } rounded-full`}
      >
        {isDeleted ? "Cancelled" : "Active"}
      </span>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-purple-600">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">{description}</p>

        <div className="mt-4">
          <p className="text-md font-semibold text-gray-700">
            Location: {location}
          </p>
          <p className="text-md text-gray-600">
            Start Date: {moment(start).format("LL")}
          </p>
          <p className="text-md text-gray-600">
            End Date: {moment(end).format("LL")}
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Students Registered: {_count.Students}
          </p>
          <Link
            href={`/workshops/${event.id}`}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
