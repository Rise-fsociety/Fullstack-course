import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

type Props = {
  data: string[];
};

const Content = ({ data }: Props) => {
  return (
    <div>
      <Part1 data={data[0]} />
      <Part2 data={data[1]} />
      <Part3 data={data[2]} />
    </div>
  );
};

export default Content;
