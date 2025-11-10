export const formatDateSafe = (
  dateString: string | null | undefined
): string => {
  if (!dateString) {
    return "Date unavailable";
  }

  try {
    let date = parseDateString(dateString);

    if (isNaN(date.getTime())) {
      return "Date unavailable";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    console.log("Date formatting error:", error);
    return "Date unavailable";
  }
};

export const formatDateTimeSafe = (
  dateString: string | null | undefined
): string => {
  if (!dateString) {
    return "Date unavailable";
  }

  try {
    let date = parseDateString(dateString);

    if (isNaN(date.getTime())) {
      return "Date unavailable";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    console.log("Date formatting error:", error);
    return "Date unavailable";
  }
};

// Helper function to parse various date formats from the API
const parseDateString = (dateString: string): Date => {
  // Try parsing as ISO string first
  let date = new Date(dateString);

  if (!isNaN(date.getTime())) {
    return date;
  }

  if (dateString.includes("/") && dateString.includes(":")) {
    // The API format appears to be DD/MM/YYYY HH:MM:SS (day first)
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);

    // Create date with correct order: month is 0-indexed (0 = January)
    date = new Date(year, month - 1, day, hours, minutes, seconds);

    if (!isNaN(date.getTime())) {
      return date;
    }

    date = new Date(year, day - 1, month, hours, minutes, seconds);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }

  const timestamp = Date.parse(dateString);
  if (!isNaN(timestamp)) {
    return new Date(timestamp);
  }

  if (dateString.includes("T")) {
    date = new Date(dateString.split("T")[0]);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }

  return new Date(NaN);
};
