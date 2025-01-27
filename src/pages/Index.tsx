import { useState } from "react";
import { JobUrlInput } from "@/components/JobUrlInput";
import { JobCard, JobData } from "@/components/JobCard";

const Index = () => {
  const [jobData, setJobData] = useState<JobData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyzeUrl = async (url: string) => {
    setIsAnalyzing(true);
    // In a real app, this would call your API
    // Simulating API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setJobData({
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$150,000 - $180,000",
      type: "Full-time",
      description: "We're looking for a Senior Frontend Developer to join our growing team. You'll be working on cutting-edge web applications using React, TypeScript, and modern web technologies.",
    });
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-job-background">
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-job-primary">Job Application Tracker</h1>
          <p className="text-job-secondary text-lg">
            Paste a job posting URL to analyze and track your applications
          </p>
        </div>
        
        <div className="flex justify-center">
          <JobUrlInput onSubmit={handleAnalyzeUrl} />
        </div>

        {(isAnalyzing || jobData) && (
          <div className="max-w-2xl mx-auto">
            <JobCard job={jobData as JobData} isLoading={isAnalyzing} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;