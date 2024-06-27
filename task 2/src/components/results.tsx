function Results() {
  return (
      <div className="h-screen flex flex-col items-center">

      <div className="w-[570px] h-[420px] mt-[150px] relative flex flex-col p-[70px] rounded-[15px] bg-white drop-shadow-2xl">
        <div>
          <p className="text-[22px] mb-[10px]">Total energy consumed</p>
          <h3 className="text-[110px] mb-[20px]">57299</h3>
        </div>

        <div className="flex flex-row gap-10">
          <div>
            <p className="text-[13px]">Max demand</p>
            <h4 className="text-[20px]">220 kWh</h4>
          </div>
          <div>
            <p className="text-[13px]">Actual demand</p>
            <h4 className="text-[20px]">77 kWh</h4>
          </div>
          <div>
            <p className="text-[13px]">Concurrency factor</p>
            <h4 className="text-[20px]">0.35%</h4>
          </div>
     </div>

        <div className="w-[250px] h-[68px] m-auto left-0 right-0 bottom-[-34px] flex flex-row justify-center items-center rounded-[15px] bg-green-400 absolute">
            <p>23,344 kWh</p>
        </div>
      </div>

    </div>
  );
}

export default Results;
