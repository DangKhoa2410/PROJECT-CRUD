interface DayItem {
  dayLabel: string;
  date: string;
  displayDate: string;
}

interface BoxDaySide {
  boxItems: DayItem[];
  onSelectDate: (date: string) => void;
  selectedDate: string;
}

const BoxDays = ({ boxItems, onSelectDate, selectedDate }: BoxDaySide) => {
  return (
    <div className="flex mt-10">
      {boxItems.map((item) => {
        const isSelected = selectedDate === item.date;
        return (
          <div
            key={item.date}
            onClick={() => onSelectDate(item.date)}
            className={`
              mr-7 flex flex-col items-center cursor-pointer w-14 py-3 rounded-lg
              ${isSelected ? "bg-black text-white" : "bg-pale-white hover:bg-black hover:text-white"}
            `}
          >
            <h6 className="font-bold">{item.dayLabel}</h6>
            <p>{item.displayDate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BoxDays