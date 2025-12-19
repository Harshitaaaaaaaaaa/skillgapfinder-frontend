import { useState } from "react";

function SkillResult({ result }) {
  if (!result || typeof result !== "object") return null;

  const aiSuggestions = result.aiSuggestions || {};

  const {
    evaluation,
    prioritySkills = [],
    roadmap = [],
    resumeTips = [],
  } = aiSuggestions;

  const hasAISuggestions =
    Boolean(evaluation) ||
    prioritySkills.length > 0 ||
    roadmap.length > 0 ||
    resumeTips.length > 0;

  return (
    <div
      className="bg-white dark:bg-gray-900
      rounded-2xl shadow-xl p-6 mb-8
      border border-gray-100 dark:border-gray-800"
    >
      {/* ================= TITLE ================= */}
      <h2 className="text-2xl font-semibold mb-6 text-indigo-700 dark:text-indigo-400">
        Skill Match Result
      </h2>

      {/* ================= PERCENTAGE ================= */}
      <p className="mb-3 font-medium text-gray-800 dark:text-gray-200">
        Match Percentage:{" "}
        <span className="font-semibold">
          {result.finalMatchPercentage}%
        </span>
      </p>

      {/* ================= PROGRESS BAR ================= */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-8 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-green-600
          h-4 rounded-full transition-all duration-500"
          style={{ width: `${result.finalMatchPercentage}%` }}
        />
      </div>

      {/* ================= MATCHED SKILLS ================= */}
      <h3 className="text-green-600 dark:text-green-400 font-semibold mb-3">
        Matched Skills
      </h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {result.matchedSkills?.map((s, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full text-sm font-medium
            bg-green-100 dark:bg-green-900/40
            text-green-800 dark:text-green-300
            border border-green-200 dark:border-green-800"
          >
            {s}
          </span>
        ))}
      </div>

      {/* ================= MISSING SKILLS ================= */}
      <h3 className="text-red-600 dark:text-red-400 font-semibold mb-3">
        Missing Skills
      </h3>
      <div className="flex flex-wrap gap-2 mb-8">
        {result.missingSkills?.map((s, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full text-sm font-medium
            bg-red-100 dark:bg-red-900/40
            text-red-800 dark:text-red-300
            border border-red-200 dark:border-red-800"
          >
            {s}
          </span>
        ))}
      </div>

      {/* ================= AI SUGGESTIONS (INLINE) ================= */}
      {hasAISuggestions && (
        <div
          className="mt-6 bg-indigo-50 dark:bg-gray-800
          rounded-2xl shadow-inner p-6
          border border-indigo-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
            AI Career Suggestions
          </h2>

          {/* Evaluation */}
          {evaluation && (
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {evaluation}
            </p>
          )}

          {/* Priority Skills */}
          {prioritySkills.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Skills to Focus On
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                {prioritySkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Learning Roadmap */}
          {roadmap.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Suggested Learning Path
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                {roadmap.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Resume Tips */}
          {resumeTips.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Resume Improvement Tips
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                {resumeTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SkillResult;
