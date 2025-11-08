import Cell from "./cell";

function CellGroup({ indices }) {
  return (
    <div className="border-[3px] border-black">
      <div className="flex">
        <Cell index={indices[0]} />
        <Cell index={indices[1]} />
        <Cell index={indices[2]} />
      </div>
      <div className="flex">
        <Cell index={indices[3]} />
        <Cell index={indices[4]} />
        <Cell index={indices[5]} />
      </div>
      <div className="flex">
        <Cell index={indices[6]} />
        <Cell index={indices[7]} />
        <Cell index={indices[8]} />
      </div>
    </div>
  );
}

export default CellGroup;
