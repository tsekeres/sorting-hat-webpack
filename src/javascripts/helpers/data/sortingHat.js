const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortedHat = houses[Math.floor(Math.random() * houses.length)];
  return sortedHat;
};

export default sortingHat;
