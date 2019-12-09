export const fonts = isDesktop =>
  isDesktop
    ? {
        headline: 32,
        firstLetter: 40,
        body: 24,
        headerText: 14,
        identity: 32,
      }
    : {
        headline: 24,
        firstLetter: 32,
        body: 16,
        headerText: 10,
        identity: 16,
      }
