import Image from "next/image"
import { title } from "process";

interface CourseCardProps {
    id: number;
    title: string;
    tech: string[];
    desc: string;
    image: string;
}

 const CourseCard = ({title,tech,desc,image}:CourseCardProps) => {
    return (
      <div className=" w-[300px]">
          <div className="flex flex-col  transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
              <Image className="h-56 rounded-t-lg" alt="ss"
                  src={image} width={300} height={200} />
              <div className="px-6 pt-4 mb-2 text-xl font-bold">
                  <span>{title}</span>
              </div>
              <div className="px-6 pt-2">
                  
                  <div className=" h-16 ...">{desc}</div>
              </div>
              <div className="px-6 pb-4 h-[90px]">
                  {tech.map((item,index)=> (
                    <p key={index}
                    className="inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white bg-purple-400 rounded-full">{item}</p>
                  ))}
                  
              </div>
          </div>
      </div>
    )
  }

  export default CourseCard