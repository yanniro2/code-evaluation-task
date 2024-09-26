import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io"; // Import star icon from react-icons

type Profile = {
  name: string;
  star: number;
  sub: string;
  details: string;
  profile_avatar: string;
};

const Card: React.FC<Profile> = ({
  name,
  star,
  sub,
  details,
  profile_avatar,
}) => {
  return (
    <div className="bg-[#fff] p-5 border border-gray-200 rounded-lg shadow-sm w-[50vw] h-full block drop-shadow">
      <div className="flex items-center gap-3 w-full">
        <Image
          src={profile_avatar}
          alt={profile_avatar}
          width={120}
          height={120}
          className="rounded-full w-[3rem] h-[3rem] object-cover object-center"
        />
        <div className="flex items-start flex-col">
          <div className="flex items-center gap-3">
            <h2 className="font-bold font-recoleta">{name}</h2>
            <div className="flex text-secound">
              {Array.from({ length: star }, (_, index) => (
                <IoIosStar key={index} /> // Render a star for each value in the array
              ))}
            </div>
          </div>
          <p className="text-sm text-[#0A0F09B2] font-poppins">{sub}</p>
        </div>
      </div>
      <p className="text-gray-700 font-poppins mt-4">{details}</p>
    </div>
  );
};

export default Card;
