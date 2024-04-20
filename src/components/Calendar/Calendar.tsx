import AddIcon from '@/assets/add.svg';

function Calendar() {
  return (
    <div className="flex gap-2  h-full ">
      <div className="max-w-[15.5rem] p-6 w-full gap-4 rounded-3xl bg-blueMoon h-full">
        sidebar
      </div>
      <div className=" flex p-2 flex-col flex-1 rounded-3xl bg-blueMoon">
        <div className="flex justify-between p-6">
          <h4>Calendar</h4>
          <button className="btn-black bg-black rounded-full w-10 h-10 flex items-center justify-center">
            <img src={AddIcon} />
          </button>
        </div>
        <div className="bg-white p-6 h-full rounded-3xl">
          <div className="flex justify-between items-center">
            <h4>June 2023</h4>
            <div className="flex gap-2">
              <button className="btn-gray">Today</button>
              <button className="btn-gray">Week</button>
            </div>
          </div>
          <div className="mt-3.5">
            <div className="bg-blueMoon rounded-lg p-2">Panel calendar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
