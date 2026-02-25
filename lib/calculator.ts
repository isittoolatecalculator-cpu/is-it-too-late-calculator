// Calculator Logic
// Follows CALCULATOR_SPEC.md formulas exactly

type CalculatorInputs = {
  currentAge: number;
  dailyHoursAvailable: number;
  targetAge: number;
  requiredHours: number;
  sleepHoursPerDay?: number;
  screenHoursPerDay?: number;
};

export function calculateProjection({
  currentAge,
  dailyHoursAvailable,
  targetAge,
  requiredHours,
  sleepHoursPerDay = 0,
  screenHoursPerDay = 0,
}: CalculatorInputs) {
  
  // Years Remaining
  const yearsRemaining = targetAge - currentAge;

  // Annual Hours Available
  const annualHours = dailyHoursAvailable * 365;

  // Total Available Hours
  const totalAvailableHours = yearsRemaining * annualHours;

  // Years Needed to Reach Goal
  const yearsToGoal = requiredHours / annualHours;

  // Delay Cost (5 Years)
  const delayCostYears = 5;
  const delayCostHours = delayCostYears * annualHours;

  // Life Allocation Modeling
  const annualSleepHours = sleepHoursPerDay * 365;
  const annualScreenHours = screenHoursPerDay * 365;

  const lifetimeSleepHours = annualSleepHours * yearsRemaining;
  const lifetimeScreenHours = annualScreenHours * yearsRemaining;

  const productiveWindowRemaining =
    totalAvailableHours - lifetimeScreenHours;

  // Reallocation Scenario (reduce 1 hour screen time)
  const additionalAnnualHours = 365;
  const adjustedYearsToGoal =
    requiredHours / (annualHours + additionalAnnualHours);

  return {
    yearsRemaining,
    annualHours,
    totalAvailableHours,
    yearsToGoal,
    delayCostHours,
    lifetimeSleepHours,
    lifetimeScreenHours,
    productiveWindowRemaining,
    adjustedYearsToGoal,
  };
}