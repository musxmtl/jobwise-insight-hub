import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <div className="container py-8 space-y-8">
      <h1 className="text-4xl font-bold text-job-primary">Application Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Application Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Feature coming soon: View detailed analytics about your job search journey.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;