import Image from "next/image";
import React from "react";

interface IImageCardProps {
    image: string;
    title: string;
    description: string;
}

const ImageCard = ({ description, image, title }: IImageCardProps) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={100}
        height={100}
        className="relative"
        loading="lazy"
      />
      <div className="absolute top-0 left-0 p-4 flex flex-col justify-between h-full">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-gray-500 text-xs">{description}</p>
        </div>
        <button className="underline text-xs font-semibold text-left">SEE MORE</button>
      </div>
    </div>
  );
};

export default ImageCard;
