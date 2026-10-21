import {
  CalendarDays,
  Check,
  Circle,
} from "lucide-react";

export default function TaskCard({
  title,
  project,
  priority = "Medium",
  due,
  completed = false,
  assignee,
  onToggle,
}) {
  const priorityClass = priority.toLowerCase();

  return (
    <div className={`task-card ${completed ? "task-completed" : ""}`}>
      <button
        type="button"
        className={`task-check ${completed ? "checked" : ""}`}
        onClick={onToggle}
        aria-label={
          completed
            ? `Mark ${title} as incomplete`
            : `Mark ${title} as complete`
        }
      >
        {completed ? (
          <Check size={14} strokeWidth={3} />
        ) : (
          <Circle size={18} strokeWidth={1.8} />
        )}
      </button>

      <div className="task-card-content">
        <div className="task-card-title-row">
          <h4>{title}</h4>

          <span className={`task-priority ${priorityClass}`}>
            {priority}
          </span>
        </div>

        <div className="task-card-meta">
          <span className="task-project">
            {project}
          </span>

          <span className="task-meta-separator">
            •
          </span>

          <span className="task-due">
            <CalendarDays size={13} />
            {due}
          </span>
        </div>
      </div>

      {assignee && (
        <div className="task-assignee">
          {assignee}
        </div>
      )}
    </div>
  );
}