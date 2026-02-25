"use client";

import { useState } from "react";
import { goals } from "../lib/goalDatabase";
import { calculateProjection } from "../lib/calculator";

export default function Calculator() {
  const [currentAge, setCurrentAge] = useState<number | null>(null);
  const [dailyHours, setDailyHours] = useState<number | null>(null);
  const [targetAge, setTargetAge] = useState<number | null>(null);
  const [sleepHours, setSleepHours] = useState<number | null>(null);
  const [screenHours, setScreenHours] = useState<number | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const [results, setResults] =
    useState<ReturnType<typeof calculateProjection> | null>(null);

  const selectedGoalData =
  selectedGoal
    ? goals[selectedGoal as keyof typeof goals]
    : null;

const requiredHours = selectedGoalData?.requiredHours ?? 0;

  const handleCalculate = () => {
    if (
      currentAge === null ||
      dailyHours === null ||
      targetAge === null ||
      selectedGoal === null
    ) {
      alert("Please fill required fields");
      return;
    }

    const projection = calculateProjection({
      currentAge: Number(currentAge),
      dailyHoursAvailable: Number(dailyHours),
      targetAge: Number(targetAge),
      requiredHours,
      sleepHoursPerDay: Number(sleepHours || 0),
      screenHoursPerDay: Number(screenHours || 0),
      
    });

    setResults(projection);
  };
  const convertYearsToMonths = (years: number) => years * 12;
const convertYearsToDays = (years: number) => years * 365;
const convertHoursToDays = (hours: number) => hours / 24;

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Time Investment Calculator
      </h2>

      {/* INPUT SECTION */}
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="block mb-1 font-medium">
            Current Age *
          </label>
          <input
            type="number"
            value={currentAge ?? ""}
            onChange={(e) =>
              setCurrentAge(
                e.target.value === "" ? null : Number(e.target.value)
              )
            }
            className="border p-3 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Daily Hours Available *
          </label>
          <input
            type="number"
            value={dailyHours ?? ""}
            onChange={(e) =>
              setDailyHours(
                e.target.value === "" ? null : Number(e.target.value)
              )
            }
            className="border p-3 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Target Age *
          </label>
          <input
            type="number"
            value={targetAge ?? ""}
            onChange={(e) =>
              setTargetAge(
                e.target.value === "" ? null : Number(e.target.value)
              )
            }
            className="border p-3 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Select Goal *
          </label>
          <select
            value={selectedGoal ?? ""}
            onChange={(e) =>
              setSelectedGoal(
                e.target.value === "" ? null : e.target.value
              )
            }
            className="border p-3 rounded w-full"
          >
            <option value="">-- Select a Goal --</option>
            {Object.entries(goals).map(([key, goal]) => (
              <option key={key} value={key}>
                {goal.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Sleep Hours Per Day (optional)
          </label>
          <input
            type="number"
            value={sleepHours ?? ""}
            onChange={(e) =>
              setSleepHours(
                e.target.value === "" ? null : Number(e.target.value)
              )
            }
            className="border p-3 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Screen Hours Per Day (optional)
          </label>
          <input
            type="number"
            value={screenHours ?? ""}
            onChange={(e) =>
              setScreenHours(
                e.target.value === "" ? null : Number(e.target.value)
              )
            }
            className="border p-3 rounded w-full"
          />
        </div>

      </div>

      {/* CALCULATE BUTTON */}
      <div className="mt-6 text-center">
        <button
          onClick={handleCalculate}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Calculate
        </button>
      </div>

      {/* RESULTS SECTION */}
     {/* RESULTS SECTION */}
    
    {results !== null && selectedGoalData && (
  <div className="mt-16">

    <h3 className="text-2xl font-bold text-center mb-8">
      Projection Summary
    </h3>

    <div className="space-y-6">

      {/* Capacity Report */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="font-semibold text-lg mb-3">Capacity Report</h4>

        <p><strong>Years Remaining:</strong> {results.yearsRemaining.toFixed(1)} years</p>

        <p className="mt-2">
          <strong>Total Available Investment Time:</strong> {results.totalAvailableHours.toFixed(0)} hours
        </p>

        <p className="text-gray-600 text-sm mt-1">
          ≈ {convertHoursToDays(results.totalAvailableHours).toFixed(0)} days
        </p>

        <p className="mt-3 text-gray-600 text-sm">
          If you maintain {dailyHours} hours per day, this is the total time that could be invested before your target age.
        </p>
      </div>

      {/* Time to Competence */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="font-semibold text-lg mb-3">
          Estimated Time to Reach {selectedGoalData.level}
        </h4>

        <p className="mt-1 text-gray-700">
          Required Investment: {requiredHours} hours
        </p>

        <p className="mt-3 text-2xl font-bold">
          {results.yearsToGoal.toFixed(2)} years
        </p>

        <p className="text-gray-600 text-sm">
          ≈ {convertYearsToMonths(results.yearsToGoal).toFixed(1)} months
        </p>

        <p className="text-gray-600 text-sm">
          ≈ {convertYearsToDays(results.yearsToGoal).toFixed(0)} days
        </p>

        <p className="mt-3 text-gray-600 text-sm">
          At {dailyHours} hours per day, accumulating {requiredHours} focused hours
          would take approximately {convertYearsToDays(results.yearsToGoal).toFixed(0)} days.
        </p>
      </div>

      {/* Delay Cost */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="font-semibold text-lg mb-3">Delay Cost Impact (5-Year Model)</h4>

        <p className="text-xl font-bold">
          {results.delayCostHours.toFixed(0)} hours
        </p>

        <p className="text-gray-600 text-sm">
          ≈ {convertHoursToDays(results.delayCostHours).toFixed(0)} days
        </p>

        <p className="mt-3 text-gray-600 text-sm">
          A five-year delay represents time that could have been invested
          at your current rate of {dailyHours} hours per day.
        </p>
      </div>

      {/* Life Allocation */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="font-semibold text-lg mb-3">Life Allocation Overview</h4>

        <p><strong>Projected Sleep Time:</strong> {results.lifetimeSleepHours.toFixed(0)} hours</p>
        <p className="text-gray-600 text-sm">
          ≈ {convertHoursToDays(results.lifetimeSleepHours).toFixed(0)} days
        </p>

        <p className="mt-2"><strong>Projected Screen Time:</strong> {results.lifetimeScreenHours.toFixed(0)} hours</p>
        <p className="text-gray-600 text-sm">
          ≈ {convertHoursToDays(results.lifetimeScreenHours).toFixed(0)} days
        </p>

        <p className="mt-3 text-gray-600 text-sm">
          These values estimate projected allocation across sleep and screen usage during the remaining years.
        </p>
      </div>

      {/* Reallocation */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="font-semibold text-lg mb-3">
          Reallocation Scenario (Reduce Screen Time by 1 Hour/Day)
        </h4>

        <p className="text-2xl font-bold">
          {results.adjustedYearsToGoal.toFixed(2)} years
        </p>

        <p className="text-gray-600 text-sm">
          ≈ {convertYearsToMonths(results.adjustedYearsToGoal).toFixed(1)} months
        </p>

        <p className="text-gray-600 text-sm">
          ≈ {convertYearsToDays(results.adjustedYearsToGoal).toFixed(0)} days
        </p>

        <p className="mt-3 text-gray-600 text-sm">
          Reallocating one hour per day toward focused effort shortens the projected timeline accordingly.
        </p>
      </div>

    </div>
  </div>
)}
    </section>
  );
}