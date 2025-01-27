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
      description: "Get AI-powered insights on your resume and receive personalized recommendations to make it stand out to employers.",
    },
    {
      href: "/job-tracking",
      icon: BriefcaseIcon,
      title: "Job Tracking",
      description: "Efficiently manage your job applications with our comprehensive tracking system. Never miss a follow-up or deadline.",
    },
    {
      href: "/analytics",
      icon: BarChartIcon,
      title: "Analytics",
      description: "Gain valuable insights into your job search progress with detailed analytics and visualization tools.",
    },
    {
      href: "/ai-counselor",
      icon: HeartHandshakeIcon,
      title: "AI Counselor",
      description: "Receive personalized career guidance and interview preparation tips from our advanced AI counselor.",
    },
  ];

  return (
    <div className="min-h-screen bg-job-background">
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-primary">Job Application Tracker</h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-primary/90">
              Your all-in-one platform for streamlining your job search journey
            </p>
            <p className="text-muted-foreground">
              Leverage the power of AI to analyze job postings, track applications, and receive personalized career guidance. 
              Our comprehensive suite of tools helps you stay organized and increases your chances of landing your dream job.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <JobUrlInput onSubmit={handleAnalyzeUrl} />
        </div>

        {(isAnalyzing || jobData) && (
          <div className="max-w-2xl mx-auto">
            <JobCard job={jobData as JobData} isLoading={isAnalyzing} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link key={feature.href} to={feature.href}>
              <Card className="h-full hover:shadow-lg transition-shadow glass-morphism border-job-border">
                <CardHeader>
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
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