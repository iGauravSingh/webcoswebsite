import Image from "next/image"


interface CardProps {
    id: number;
    title: string;
    image: string;
    description: string
}

const Card = ({ id, title, image, description}: CardProps) => {
  return (
    <div className="">
        <div className="p-4 sm:w-[300px] lg:w-[350px]">
        <div className="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105 py-4">
            <div className=" flex justify-center items-center">
            <Image className="rounded-t-lg" alt="article image"
                src={image} width={150} height={80} />
            </div>
            <div className="px-6 pt-4 mb-2 text-2xl text-logoblack font-bold text-center">
                <span>{title}</span>
            </div>
            <div className="px-6 pt-2">
                
                <div className=" text-wrap text-center">{description}</div>
            </div>
            {/* <p className=" text-center">Learn More</p> */}
            
        </div>
    </div>
    </div>
  )
}

export default Card