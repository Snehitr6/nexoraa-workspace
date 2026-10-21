import {
  CheckCircle2,
  MessageCircle,
  FolderKanban,
  UserPlus,
  Clock3,
} from "lucide-react";

const activityIcons = {
  completed: CheckCircle2,
  comment: MessageCircle,
  project: FolderKanban,
  member: UserPlus,
};

export default function ActivityCard({
  type = "completed",
  title,
  description,
  time,
  avatar,
}) {
  const Icon = activityIcons[type] || Clock3;

  return (
    <div className="activity-card">
      <div className={`activity-icon activity-${type}`}>
        <Icon size={17} strokeWidth={2} />
      </div>

      <div className="activity-content">
        <div className="activity-title-row">
          <h4>{title}</h4>
          <span>{time}</span>
        </div>

        <p>{description}</p>
      </div>

      {avatar && (
        <div className="activity-avatar">
          {avatar}
        </div>
      )}
    </div>
  );
}