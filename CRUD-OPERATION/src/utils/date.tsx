import { format, addDays, startOfWeek, isSameDay } from "date-fns";

export const getCurrentVietnameseWeek = () => {
  const today = new Date();
  const monday = startOfWeek(today, { weekStartsOn: 1 });

  const vietnameseWeekdays: Record<number, string> = {
    1: "Thứ 2", 2: "Thứ 3", 3: "Thứ 4", 4: "Thứ 5", 5: "Thứ 6", 6: "Thứ 7", 7: "CN"
  };

  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(monday, i);
    const isoDay = parseInt(format(date, "i"));
    return {
      dayLabel: vietnameseWeekdays[isoDay],
      date: format(date, "dd/MM"),
      isToday: isSameDay(date, today),
    };
  });
};
