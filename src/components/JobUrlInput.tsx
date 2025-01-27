import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const JobUrlInput = ({ onSubmit }: { onSubmit: (url: string) => void }) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a job URL");
      return;
    }

    try {
      setIsLoading(true);
      await onSubmit(url);
      setUrl("");
      toast.success("Job URL analyzed successfully!");
    } catch (error) {
      toast.error("Failed to analyze job URL");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <Input
        type="url"
        placeholder="Paste job posting URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1"
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Analyzing..." : "Analyze"}
      </Button>
    </form>
  );
};