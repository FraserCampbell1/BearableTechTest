/**
 * This is mock data for factor entries which is similar to the data used in the Bearable app.
 * 
 * timePeriodData - this shows whether the factor occurred at this point in time  
 * cumulativeData - this shows whether the factor occurred at or before this point in time
 * earliest - the earliest time the factor occurred
 */
export const getFactorEntries = (): Record<string, any> => ({
  "20250101": {
    "factor-1": {
      timePeriodData: {
        0: false,
        600: true,
        1200: false,
        1800: false
      },
      cumulativeData: {
        0: false,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 600,
    },
    "factor-9": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
    "factor-10": {
      timePeriodData: {
        0: false,
        600: false,
        1200: false,
        1800: true
      },
      cumulativeData: {
        0: false,
        600: false,
        1200: false,
        1800: true
      },
      earliest: 1800,
    },
  },
  "20250102": {
    "factor-1": {
      timePeriodData: {
        0: false,
        600: true,
        1200: false,
        1800: false
      },
      cumulativeData: {
        0: false,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 600,
    },
    "factor-4": {
      timePeriodData: {
        0: false,
        600: false,
        1200: true,
        1800: false
      },
      cumulativeData: {
        0: false,
        600: false,
        1200: true,
        1800: true
      },
      earliest: 1200,
    },
    "factor-9": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
  },
  "20250103": {
    "factor-4": {
      timePeriodData: {
        0: false,
        600: true,
        1200: false,
        1800: true
      },
      cumulativeData: {
        0: false,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 600,
    },
    "factor-7": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
    "factor-9": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
  },
  "20250104": {
    "factor-1": {
      timePeriodData: {
        0: false,
        600: true,
        1200: false,
        1800: false
      },
      cumulativeData: {
        0: false,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 600,
    },
    "factor-7": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
    "factor-9": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
    "factor-10": {
      timePeriodData: {
        0: false,
        600: true,
        1200: false,
        1800: false
      },
      cumulativeData: {
        0: false,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 600,
      entryType: "FACTOR_V2",
    },
  },
  "20250105": {
    "factor-4": {
      timePeriodData: {
        0: false,
        600: true,
        1200: true,
        1800: false
      },
      cumulativeData: {
        0: false,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 600,
    },
    "factor-9": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
    "factor-10": {
      timePeriodData: {
        0: false,
        600: true,
        1200: false,
        1800: false
      },
      cumulativeData: {
        0: false,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 600,
    },
  },
  "20250106": {
    "factor-7": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
    "factor-9": {
      timePeriodData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      cumulativeData: {
        0: true,
        600: true,
        1200: true,
        1800: true
      },
      earliest: 0,
    },
  },
})