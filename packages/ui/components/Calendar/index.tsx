'use client';

export const Calendar = () => {
  // const { startDate, endDate } = useTypeSelector(calendarSelector);
  //
  // const [day, setDay] = useState<Date | number>(startDate);
  // const [week, setWeek] = useState<Date[]>(() => getWeek(startDate));

  return (
    <div className='pt-7 px-2 -mx-2'>
      {/*<div className='text-turquoise'>*/}
      {/*  календарь <ArrowCircleDownIcon className='h-5 w-5 stroke-1 inline-block text-raspberry cursor-pointer' />*/}
      {/*</div>*/}
      {/*<Month date={day} setDay={setDay} setWeek={setWeek} />*/}
      {/*<Week week={week} startDate={startDate} endDate={endDate} />*/}
      {/*<Weekends setDay={setDay} setWeek={setWeek} />*/}
    </div>
  );
};
