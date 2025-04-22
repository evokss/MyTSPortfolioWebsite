export function calculateDuration(startDateStr: string): string {
  const now = new Date();
  const startDate = new Date(startDateStr);

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

export function extractStartDate(period: string): string {
  const match = period.match(/^(\w+ \d{4})/); // e.g., "Jul 2023"
  if (!match) return "";
  return new Date(match[1] + " 01").toISOString(); // "2023-07-01T00:00:00.000Z"
}
