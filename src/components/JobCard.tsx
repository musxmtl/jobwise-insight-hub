import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export interface JobData {
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  description: string;
}

interface JobCardProps {
  job: JobData;
  isLoading?: boolean;
}

export const JobCard = ({ job, isLoading }: JobCardProps) => {
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-job-primary">{job.title}</h3>
            <p className="text-job-secondary mt-1">{job.company}</p>
          </div>
          <Badge variant="secondary">{job.type}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">{job.location}</span>
            {job.salary && (
              <span className="text-job-accent font-medium">{job.salary}</span>
            )}
          </div>
          <p className="text-job-secondary line-clamp-3">{job.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};