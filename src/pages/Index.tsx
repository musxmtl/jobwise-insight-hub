import { JobUrlInput } from "@/components/JobUrlInput";
import { JobCard, JobData } from "@/components/JobCard";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileTextIcon, BriefcaseIcon, BarChartIcon, HeartHandshakeIcon } from "lucide-react";

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

  const features = [
    {
      href: "/resume",
      icon: FileTextIcon,
      title: "Resume Analysis",
      description: "Get AI-powered insights on your resume",
    },
    {
      href: "/job-tracking",
      icon: BriefcaseIcon,
      title: "Job Tracking",
      description: "Track your job applications",
    },
    {
      href: "/analytics",
      icon: BarChartIcon,
      title: "Analytics",
      description: "View your application statistics",
    },
    {
      href: "/ai-counselor",
      icon: HeartHandshakeIcon,
      title: "AI Counselor",
      description: "Get personalized career advice",
    },
  ];

  return (
    <div className="min-h-screen bg-job-background">
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-job-primary">Job Application Tracker</h1>
          <p className="text-job-secondary text-lg">
            Your all-in-one platform for job search and career growth
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <Link key={feature.href} to={feature.href}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;