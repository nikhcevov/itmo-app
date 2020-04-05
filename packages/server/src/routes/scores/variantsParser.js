function checkIfExist(arr, codename) {
  return !!arr.find((item) => item.codename === codename);
}

export default function getVariants(scores) {
  const years = scores.years.filter((year) => year.studyyear.length === 9);
  const result = [];

  for (const year of years) {
    const { group } = year;
    for (const { semester } of year.subjects) {
      const codename = `${group} ${semester} семестр`;
      if (!checkIfExist(result, codename)) {
        result.push({
          semester,
          group,
          codename,
        });
      }
    }
  }

  return result;
}
