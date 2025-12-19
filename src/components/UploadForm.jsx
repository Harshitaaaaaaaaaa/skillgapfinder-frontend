function UploadForm({
  onSubmit,
  setResume,
  setJobDescription,
  loading,
  message,
}) {
  return (
    <div
      className="bg-white dark:bg-gray-900
      rounded-2xl shadow-xl p-6 mb-8
      border border-gray-100 dark:border-gray-800
      transition-colors"
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Upload Resume & Job Description
      </h2>

      {/* Resume Upload */}
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Resume (PDF)
      </label>
      <input
        type="file"
        accept=".pdf"
        className="w-full mb-4
        border border-gray-300 dark:border-gray-700
        bg-gray-50 dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        p-2.5 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => setResume(e.target.files[0])}
      />

      {/* Job Description */}
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Job Description
      </label>
      <textarea
        className="w-full h-32 mb-6
        border border-gray-300 dark:border-gray-700
        bg-gray-50 dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        p-3 rounded-lg
        resize-none
        focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Paste job description here..."
        onChange={(e) => setJobDescription(e.target.value)}
      />

      {/* Analyze Button */}
      <button
        type="button" // ⭐ CRITICAL FIX
        onClick={onSubmit}
        disabled={loading}
        className="w-full py-3 rounded-xl font-medium
        bg-indigo-600 hover:bg-indigo-700
        text-white transition
        disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {/* Message */}
      {message && (
        <p className="mt-4 text-center text-sm font-medium text-green-600 dark:text-green-400">
          {message}
        </p>
      )}
    </div>
  );
}

export default UploadForm;
