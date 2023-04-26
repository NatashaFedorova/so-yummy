const useTime = (startValue, endValue, step) => {
  const timeArray = [];
  let counter = startValue;

  do {
    timeArray.push(counter);
    counter += step;
  } while (counter < endValue);

  timeArray.push(counter);
  counter += step;

  const initialData = timeArray.map((item, index) => ({
    id: `${item}${index}`,
    value: item,
    label: `${item} min`,
  }));

  return { initialData };
};

export default useTime;
