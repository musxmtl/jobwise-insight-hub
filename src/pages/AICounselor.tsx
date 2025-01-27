import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AICounselor = () => {
  return (
    <div className="container py-8 space-y-8">
      <h1 className="text-4xl font-bold text-job-primary">AI Career Counselor</h1>
      <Card>
        <CardHeader>
          <CardTitle>Career Guidance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Feature coming soon: Get personalized career advice from our AI counselor.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AICounselor;