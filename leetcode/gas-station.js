/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const length = gas.length;
  let start = 0;

  while (start < length) {
    const isValid = isValidStart(start, gas, cost, length);

    if (isValid) return start;

    start += 1;
  }

  return -1;
};

const isValidStart = (start, gas, cost, length) => {
  let tank = 0;
  const end = start + length;
  for (let i = start; i < end; i++) {
    const index = i % length;

    tank += gas[index] - cost[index];

    if (tank < 0 || (tank === 0 && i + 1 !== end)) return false;
  }

  return true;
};
