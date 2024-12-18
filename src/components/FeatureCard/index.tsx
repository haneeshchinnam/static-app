import Image from "next/image";

const FeatureCard = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col sm::flex-col md:lg:xl:flex-row gap-2">
    <Image src={src} alt={title} width={50} height={50} loading="lazy" />
    <div className="max-w-xs flex flex-col justify-start">
      <h4 className="font-bold text-lg text-start text-deepTeal">
        {title}
      </h4>
      <p className="text-sm text-gray-600 text-start">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
