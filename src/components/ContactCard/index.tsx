import { JSX } from "react";

const ContactCard = ({
  children,
  label,
  description,
}: {
  children: JSX.Element;
  label: string;
  description: string;
}) => {
  return (
    <div className="bg-lightTeal flex pl-4 gap-6 text-white w-full rounded-lg py-2">
      {children}
      <div className="flex flex-col">
        <p className="font-medium text-base">{label}</p>
        <p className="font-semibold text-base">{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
