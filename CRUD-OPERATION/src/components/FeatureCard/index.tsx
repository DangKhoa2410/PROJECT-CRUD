  import { ReactNode } from "react";

  interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    subTitle: string;
  }

  interface FeatureCardSide {
    featureItems: FeatureCardProps[];
  }

  const FeatureCard = ({ featureItems }: FeatureCardSide) => {
    return (
      <div className="flex flex-wrap gap-6 mt-6 px-4">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer w-5/12 bg-white rounded-2xl shadow-md p-5 flex items-start gap-4 hover:shadow-lg transition duration-300"
          >
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 text-2xl">
              {item.icon}
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-semibold text-gray-800 mt-1">{item.title}</p>
              <span className="text-sm text-gray-500">{item.subTitle}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default FeatureCard;
