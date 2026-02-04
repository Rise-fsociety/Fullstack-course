import Content from "@/components/Content";
import Header from "./../../components/Header";
import Total from "@/components/Total";
import Counter from "@/components/Counter";

const page = () => {
  const course = "half stack development";
  const part1 = "Fundamental1";
  const part2 = "Fundamental2";
  const part3 = "Fundamental3";
  return (
    <>
      <Header course={course} />
      <Content data={[part1, part2, part3]} />
      <Total data={{part1, part2, part3}} />
      <br />


      <Counter />
    </>
  );
};

export default page;
