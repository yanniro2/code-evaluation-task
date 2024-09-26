import React from 'react'
import Image from 'next/image';

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
    <div className="bg-[#ffffff] p-4 border border-gray-200 rounded-lg shadow-sm w-1/4">
      <div className="flex items-center justify-center">
        <Image
          src={profile_avatar}
          alt={profile_avatar}
          width={100} // Adjust width as needed
          height={100} // Adjust height as neededå
          className='rounded-full w-[2rem] h-[2rem] object-contain object-center'
        />
        <div>
          <div>
            <h2 className="text-xl font-bold mt-4">{name}</h2>
            <p className="text-yellow-500 mt-2">⭐ {star}</p>
          </div>
          <p className="text-sm text-gray-600">{sub}</p>
        </div>
      </div>
      <p className="text-gray-700 mt-4">{details}</p>
    </div>
  );
};
export default Card;