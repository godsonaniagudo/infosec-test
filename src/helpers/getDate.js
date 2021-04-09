//Helper function for formatting date

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDate = (date) => {
  const theDate = new Date(date);
  return `${theDate.getDate()} ${
    months[theDate.getMonth()]
  } ${theDate.getFullYear()}`;
};

export default getDate;
