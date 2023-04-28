// import moment from 'moment/moment';
import achievement from 'components/constants/achievement';

// const counter = date => {
//   let count = 4;
//   const lastVisit = moment(`${date}`, 'L').format('L');
//   const today = moment().format('L');

//   if (lastVisit !== today) {
//     return (count += 1);
//   } else {
//     return count;
//   }
// };
// const res = counter('04/26/2023');

export const visibilityModal = (type, currentValue) => {
  const value = achievement[type].find(value => value === currentValue);
  return value ? { type, value } : undefined;
};
