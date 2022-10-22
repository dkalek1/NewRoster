import useUuid from './hooks/useUuid';

function calenderData(workers = []) {
  const date = new Date();

  //년도, 월, 일 변수
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  //월의 첫번째 요일 구하기
  const firstDate = new Date(year, date.getMonth(), 1);
  const firstDay = firstDate.getDay();

  //월의 마지막 일 구하기
  const lastDate = new Date(year, month, 0);
  const lastDateDay = lastDate.getDate();

  //달력의 주 수(행의 값) 구하기
  const calenderWeekCount = Math.ceil((firstDay + lastDateDay) / 7);
  let calenderDay = 0;
  let calenderPos = 0;

  const resultMonth = [];
  for (let row = 0; row < calenderWeekCount; row++) {
    const dayList = [];
    for (let col = 0; col < 7; col++) {
      if (firstDay <= calenderPos) {
        calenderDay++;
        const today = new Date(
          date.getFullYear(),
          date.getMonth(),
          calenderDay
        );
        if (calenderDay > 31) {
          dayList.push({
            date: null,
            day: col,
            worker: null,
          });
        } else {
          const nextWorker = getNextWorker(workers, calenderDay);
          dayList.push({
            date: calenderDay,
            day: today.getDay(),
            worker: nextWorker?.name,
            id: useUuid(),
          });
        }
      } else {
        dayList.push({
          date: null,
          day: col,
          worker: null,
        });
      }
      calenderPos++;
    }
    resultMonth.push(dayList);
  }
  return resultMonth;
}

function getNextWorker(workers, calenderDay) {
  const remainder = calenderDay % workers.length;
  switch (remainder) {
    case 0:
      return workers[workers.length - 1];
    default:
      return workers[remainder - 1];
  }
}

export default calenderData;

// 금-토 -> 다음날 getDay 값이 6
// 휴일-휴일 이 두가지 알고리즘 짜기->다음날 getDay 값이 0
