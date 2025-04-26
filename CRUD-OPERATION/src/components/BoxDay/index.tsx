interface DayItem {
  dayLabel: string;
  date: string;
  displayDate: string;
}

interface BoxDaySide {
  boxItems: DayItem[];
  onSelectDate: (date: string) => void;
  selectedDate: string;
  variant?: 'default' | 'form';
}

const BoxDays = ({ boxItems, onSelectDate, selectedDate, variant = 'default' }: BoxDaySide) => {
  return (
    <div className={`flex ${variant === 'form' ? 'flex-wrap' : 'mt-10'}`}>
      {boxItems.map((item) => {
        const isSelected = selectedDate === item.date;

        const baseStyle = variant === 'form' ? 'w-20 mt-4 px-4': 'w-14 py-3';
        return (
          <div
            key={item.date}
            onClick={() => onSelectDate(item.date)}
            className={`
              ${baseStyle}
              mr-7 flex flex-col items-center cursor-pointer rounded-lg
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

export default BoxDays;
