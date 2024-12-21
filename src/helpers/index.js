export const truncateText = (text, length) => {
    if (text.length > length + 1) {
      return `${text.slice(0, length)}...`;
    } else return text;
  };
  