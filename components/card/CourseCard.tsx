import Image from "next/image";

interface CourseCardProps {
  id: number;
  title: string;
  tech: string[];
  desc: string;
  image: string;
}

const CourseCard = ({ title, tech, desc, image }: CourseCardProps) => {
  return (
    <div className="w-full h-full">
      <div className="h-full flex flex-col transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
        <div className="relative w-full h-56">
          <Image
            className="rounded-t-lg"
            alt={`${title} image`}
            src={image}
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="mt-3 text-sm text-gray-600 line-clamp-3">{desc}</p>
        </div>
        <div className="px-6 py-4 mt-auto">
          <div className="flex flex-wrap">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 mr-2 mb-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
