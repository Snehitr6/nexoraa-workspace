import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  MoreHorizontal,
  FolderKanban,
} from "lucide-react";

export default function ProjectCard({ project }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent the whole application from crashing
  // if an undefined project reaches this component.
  if (!project) {
    return null;
  }

  const {
    id,
    name = "Untitled Project",
    description = "No project description available.",
    category = "Project",
    progress = 0,
    status = "Planning",
    due = "No deadline",
    members = [],
    color = "purple",
  } = project;

  const safeProgress = Math.min(
    100,
    Math.max(0, Number(progress) || 0)
  );

  const isRisk = status.toLowerCase() === "at risk";
  const isCompleted =
    status.toLowerCase() === "completed" ||
    safeProgress === 100;

  const handleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const handleOpenProject = () => {
    // No project-details route exists yet,
    // so keep this button functional without an alert.
    const element = document.getElementById(`project-${id}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <article
      id={`project-${id}`}
      className={`project-card ${color}`}
    >
      {/* TOP */}
      <div className="project-card-top">
        <span className="project-tag">
          {category}
        </span>

        <div className="project-menu-wrap">
          <button
            type="button"
            className="mini-btn"
            onClick={handleMenu}
            aria-label={`More options for ${name}`}
          >
            <MoreHorizontal size={18} />
          </button>

          {menuOpen && (
            <div className="project-menu">
              <button
                type="button"
                onClick={handleOpenProject}
              >
                Open project
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
              >
                Close menu
              </button>
            </div>
          )}
        </div>
      </div>

      {/* TITLE */}
      <div className="project-title-area">
        <div className="project-title-icon">
          <FolderKanban size={17} />
        </div>

        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      {/* STATUS */}
      <div className="project-status-row">
        <span
          className={`status ${
            isRisk
              ? "risk"
              : isCompleted
              ? "completed"
              : ""
          }`}
        >
          {status}
        </span>
      </div>

      {/* PROGRESS */}
      <div className="progress-meta">
        <span>Progress</span>
        <strong>{safeProgress}%</strong>
      </div>

      <div className="progress">
        <span
          style={{
            width: `${safeProgress}%`,
          }}
        />
      </div>

      {/* FOOTER */}
      <div className="project-footer">
        <div className="avatar-stack">
          {members.length > 0 ? (
            members.slice(0, 4).map((member, index) => (
              <span
                key={`${member}-${index}`}
                style={{
                  zIndex: 10 - index,
                }}
              >
                {member}
              </span>
            ))
          ) : (
            <span>--</span>
          )}
        </div>

        <span className="due">
          <CalendarDays size={14} />
          {due}
        </span>

        <button
          type="button"
          className="open-project"
          onClick={handleOpenProject}
          aria-label={`Open ${name}`}
        >
          Open project
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}