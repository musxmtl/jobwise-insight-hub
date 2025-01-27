import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  return (
    <div className="container py-8 space-y-8">
      <h1 className="text-4xl font-bold text-job-primary">Resume Analysis</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload Your Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Feature coming soon: Upload your resume for AI-powered analysis and job matching.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resume;