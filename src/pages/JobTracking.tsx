import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const JobTracking = () => {
  return (
    <div className="container py-8 space-y-8">
      <h1 className="text-4xl font-bold text-job-primary">Job Applications Tracker</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Feature coming soon: Track and manage your job applications in one place.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobTracking;