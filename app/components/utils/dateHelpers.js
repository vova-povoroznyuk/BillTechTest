export function formatTimeRange(segment) {
  if (!segment || !segment.date || !segment.duration) return "";

  const startDate = new Date(segment.date);
  const endDate = new Date(startDate.getTime() + segment.duration * 60000);

  const options = { hour: "2-digit", minute: "2-digit", hour12: false };

  const startTime = startDate.toLocaleTimeString("en-GB", options);
  const endTime = endDate.toLocaleTimeString("en-GB", options);

  return `${startTime} – ${endTime}`;
}
export function formatDuration(durationMinutes) {
  if (typeof durationMinutes !== "number" || durationMinutes < 0) return "";

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  const hoursPart = hours > 0 ? `${hours}год` : "";
  const minutesPart = minutes > 0 ? ` ${minutes}хв` : "";

  return (hoursPart + minutesPart).trim();
}
