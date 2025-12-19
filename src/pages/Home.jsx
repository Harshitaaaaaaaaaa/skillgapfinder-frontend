import { useState } from "react";
import api from "../api/axios";
import UploadForm from "../components/UploadForm";
import SkillResult from "../components/SkillResult";
import { Briefcase } from "lucide-react";

function Home() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitResume = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    const res = await api.post("/api/resume/upload", formData);
    setResult(res.data.result);
    setMessage(res.data.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors">

      {/* ================= HEADER ================= */}
      <header className="backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
            <Briefcase className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Resume Skill Gap Finder
          </h1>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12">

          {/* ===== HERO / HEADLINE ===== */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Turn Resume Rejections into Selections
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Instantly compare your resume with a job description, uncover
              missing skills, and understand exactly what recruiters are looking for.
            </p>
          </div>

          {/* ===== CONTENT CARD ===== */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8">
            <UploadForm
              onSubmit={submitResume}
              setResume={setResume}
              setJobDescription={setJobDescription}
              loading={loading}
              message={message}
            />

            <SkillResult result={result} />
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Resume Skill Gap Finder. All Rights Reserved.

        </div>
      </footer>
    </div>
  );
}

export default Home;
