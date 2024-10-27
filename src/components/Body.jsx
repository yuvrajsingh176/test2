import Card from "./Card";

import { Data } from "../../Data";

const Body = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {Data.map((val) => (
        <Card value={val} />
      ))}
    </div>
  );
};
export default Body;
