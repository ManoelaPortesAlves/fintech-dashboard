import { Card } from "@/components/ui/card";

type Props = {
  label: string;
  value: string;
};

export function MetricCard({ label, value }: Props) {
  return (
    <Card className="p-6">
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="text-2xl font-semibold mt-2">
        {value}
      </p>
    </Card>
  );
}