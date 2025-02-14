import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { CountdownProps } from '../types/index';
import TimeCard from '../components/new-comp/TimeCard';

const Countdown: React.FC<CountdownProps> = () => {
  const location = useLocation();
  const selectedDate = location.state?.date || '12-02-2024';

  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date(selectedDate.split('-').reverse().join('-'));
    const now = new Date().getTime();
    const elapsed = now - startDate.getTime();

    setTimeSince({
      days: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
      hours: Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((elapsed % (1000 * 60)) / 1000),
    });
  }, [selectedDate]);

  return (
    <div
      className="flex items-center text-center gap-4 sm:gap-6 md:gap-8 p-4"
      style={{ fontFamily: 'Lobster Two, cursive' }}
    >
      <div className="max-w-[400px] w-full mx-auto">
        <TimeCard time={timeSince} title="Sudah Berjalan Selama" style="bg-pink-200 bg-opacity-75 text-pink-800 flex flex-col justify-center" />
      </div>
    </div>
  );
};

export default Countdown;
