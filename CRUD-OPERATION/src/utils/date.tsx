export function getCurrentVietnameseWeek() {
  const today = new Date();
  const first = today.getDate() - today.getDay() + 1; 
  const days = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(today.setDate(first + i));
    const dateStr = d.toISOString().split('T')[0]; 
    days.push({
      dayLabel: i === 6 ? 'CN' : `Thứ ${i + 2}`,
      date: dateStr,
      displayDate: `${d.getDate()}/${d.getMonth() + 1}`,
    });
  }

  return days;
}
