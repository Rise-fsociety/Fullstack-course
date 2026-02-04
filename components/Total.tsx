type Props = {
  data: {
    part1: string;
    part2: string;
    part3: string;
  };
};

const Total = ({ data }: Props) => {
  return (
    <div>
      <h1>TOTAL COST</h1>
      <p>{data.part1}</p>
      <p>{data.part2}</p>
      <p>{data.part3}</p>
    </div>
  );
};

export default Total;
