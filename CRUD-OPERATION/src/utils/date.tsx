export function getCurrentVietnameseWeek() {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - today.getDay() + 1); 

  const days = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');

    const dateStr = `${yyyy}-${mm}-${dd}`; 

    days.push({
      dayLabel: i === 6 ? 'CN' : `Thứ ${i + 2}`,
      date: dateStr,
      displayDate: `${d.getDate()}/${d.getMonth() + 1}`,
    });
  }

  return days;
}
