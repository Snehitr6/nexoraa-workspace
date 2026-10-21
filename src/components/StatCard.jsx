import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  FolderKanban,
  Users,
  Zap,
} from "lucide-react";

const iconMap = {
  folder: FolderKanban,
  check: CheckCircle2,
  zap: Zap,
  users: Users,
};

export default function StatCard({
  title,
  value,
  change,
  description,
  icon = "folder",
}) {
  const Icon = iconMap[icon] || FolderKanban;

  const isPositive =
    change?.startsWith("+") || change?.includes("up");

  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon">
          <Icon size={20} strokeWidth={2} />
        </div>

        <div
          className={`stat-change ${
            isPositive ? "positive" : "negative"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          <span>{change}</span>
        </div>
      </div>

      <div className="stat-card-content">
        <span className="stat-title">{title}</span>

        <strong className="stat-value">{value}</strong>

        <span className="stat-description">
          {description}
        </span>
      </div>
    </article>
  );
}