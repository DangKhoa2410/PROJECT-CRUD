interface BoxDaysProps {
  dayLabel: string,
  date: string
}

interface BoxDaySide {
  boxItems: BoxDaysProps[]
}

const BoxDays = ({ boxItems }: BoxDaySide) => {
  return (
    <div className="flex mt-10">
      {boxItems.map((item) => (
        <div className="mr-7 flex flex-col hover:text-white  items-center hover:bg-black cursor-pointer bg-pale-white w-14 py-3 rounded-lg">
          <h6 className="font-bold">{item.dayLabel}</h6>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  )
}

export default BoxDays