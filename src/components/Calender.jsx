import React from "react";

const Calender = () => {
  const currentDate = new Date();
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const daysOfWeek = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const emptyDays = Array(firstDay === 0 ? 6 : firstDay - 1).fill(null);
  const days = [
    ...emptyDays,
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="bg-transparent shadow-md rounded-2xl">
      <div className="text-center bg-[#1F4918] mb-4 rounded-tr-2xl rounded-tl-2xl py-2">
        <h2 className="text-xl font-bold text-white">
          {monthNames[month]} {year}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center px-10 text-[#006B05]">
        {daysOfWeek.map((day, index) => (
          <div
            key={day}
            className={`font-extrabold ${index === 6 ? "text-red-500" : ""}`}
          >
            {day}
          </div>
        ))}
        {days.map((day, index) => {
          const dayOfWeek = index % 7;

          return (
            <div
              key={index}
              className={`
                p-2 font-bold
                ${day === null ? "bg-gray-100" : ""}
                ${
                  day === currentDate.getDate() &&
                  month === currentDate.getMonth()
                    ? "bg-green-500 text-white font-bold"
                    : "hover:bg-gray-200"
                }
                ${dayOfWeek === 6 ? "text-red-500" : ""}
              `}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calender;
