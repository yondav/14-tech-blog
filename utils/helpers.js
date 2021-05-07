module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },

  format_date: (date) => {
    const postDate = date.toDateString();
    const postTime = date.toLocaleTimeString();

    return `${postDate}, ${postTime}`;
  },

  if_equal: (x, y) => {
    return x === y;
  },

  capitalize_first: (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
};
