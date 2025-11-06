export const formatDateSafe = (
  dateString: string | null | undefined
): string => {
  if (!dateString) {
    return "Date unavailable";
  }

  try {
    // Try parsing as ISO string first
    let date = new Date(dateString);

    // If invalid, try common date formats
    if (isNaN(date.getTime())) {
      // Try removing timezone issues by splitting on 'T'
      if (dateString.includes("T")) {
        date = new Date(dateString.split("T")[0]);
      }

      // If still invalid, try parsing as timestamp
      if (isNaN(date.getTime())) {
        const timestamp = Date.parse(dateString);
        if (!isNaN(timestamp)) {
          date = new Date(timestamp);
        }
      }
    }

    // Final check if date is valid
    if (isNaN(date.getTime())) {
      return "Date unavailable";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    console.error("Date formatting error:", error);
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
    let date = new Date(dateString);

    if (isNaN(date.getTime())) {
      if (dateString.includes("T")) {
        date = new Date(dateString.split("T")[0]);
      }

      if (isNaN(date.getTime())) {
        const timestamp = Date.parse(dateString);
        if (!isNaN(timestamp)) {
          date = new Date(timestamp);
        }
      }
    }

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
    console.error("Date formatting error:", error);
    return "Date unavailable";
  }
};
