import { title } from "process";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    title: "Design",
    image: "/web-design.png",
    description:
      "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
  },
  {
    id: 2,
    title: "Development",
    image: "/code.png",
    description:
      "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
  },
  {
    id: 3,
    title: "Online marketing",
    image: "/megaphone.png",
    description:
      "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
  },
  {
    id: 4,
    title: "Training",
    image: "/train.png",
    description:
      "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
  },
  {
    id: 5,
    title: "Technology",
    image: "/code.png",
    description:
      "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
  },
  {
    id: 6,
    title: "Content strategy",
    image: "/strategy.png",
    description:
      "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
  },
];

const CardContainer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-7 mb-10">
      {cardData.map((item) => (
        <div key={item.id}>
          <Card
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
