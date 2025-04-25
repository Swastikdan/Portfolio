export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString().slice(-2);
  let endMonth = "";
  let endYear = "";

  if (endDate) {
    if (typeof endDate === "string") {
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString().slice(-2);
    }

    if (endMonth && endYear) {
      return `${startMonth} '${startYear} - ${endMonth} '${endYear}`;
    }
    return `${startMonth} '${startYear} - ${endYear}`;
  }

  return `${startMonth} '${startYear} - Present`;
}
