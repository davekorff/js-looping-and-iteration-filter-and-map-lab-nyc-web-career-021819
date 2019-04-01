// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (driver) {
    return driver.revenue > revenue;
  });
};

function driverNamesWithRevenueOver(arr, revenue) {
  const newArr = driversWithRevenueOver(arr, revenue).map(function (driver) {
    return driver.name
  });
  return newArr;
};

function exactMatch(arr, obj) {
  return arr.filter(function (driver) {
    return driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]
  });
};

function exactMatchToList(arr, obj) {
  const newArr = exactMatch(arr, obj).map(function (driver) {
    return driver.name
  });
  return newArr;
};
