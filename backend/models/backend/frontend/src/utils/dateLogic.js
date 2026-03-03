// Logic to calculate progress based on your start date: 2026-03-05
export const getProtocolDay = () => {
  const startDate = new Date('2026-03-05');
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays <= 0 ? 1 : diffDays > 60 ? 60 : diffDays;
};
