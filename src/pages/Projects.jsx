import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FolderKanban,
  Grid2X2,
  List,
  MoreHorizontal,
  Plus,
  Search,
  Users,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects as initialProjects } from "../data/data";

export default function Projects() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showCreate, setShowCreate] = useState(false);

  const [projectItems, setProjectItems] = useState(initialProjects);

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    category: "Product Design",
  });

  const filteredProjects = useMemo(() => {
    return projectItems.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || project.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [projectItems, search, filter]);

  const handleCreateProject = (event) => {
    event.preventDefault();

    if (!newProject.name.trim()) {
      return;
    }

    const project = {
      id: Date.now(),
      name: newProject.name.trim(),
      description:
        newProject.description.trim() ||
        "New project created in Nexora.",
      category: newProject.category,
      status: "Planning",
      progress: 0,
      due: "Not scheduled",
      members: ["AM"],
    };

    setProjectItems((current) => [project, ...current]);

    setNewProject({
      name: "",
      description: "",
      category: "Product Design",
    });

    setShowCreate(false);
  };

  return (
    <div className="app-shell">
      <Sidebar
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-area">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="projects-page page-container">
          {/* HEADER */}
          <section className="page-header projects-page-header">
            <div>
              <span className="page-header-kicker">
                <FolderKanban size={14} />
                Workspace
              </span>

              <h1>Projects</h1>

              <p>
                Organize your team's work and keep every project
                moving forward.
              </p>
            </div>

            <button
              type="button"
              className="primary-button"
              onClick={() => setShowCreate(true)}
            >
              <Plus size={18} />
              New Project
            </button>
          </section>

          {/* PROJECT STATS */}
          <section className="project-overview-grid">
            <div className="project-overview-card">
              <div className="project-overview-icon">
                <FolderKanban size={20} />
              </div>

              <div>
                <span>Total projects</span>
                <strong>{projectItems.length}</strong>
              </div>
            </div>

            <div className="project-overview-card">
              <div className="project-overview-icon">
                <CheckCircle2 size={20} />
              </div>

              <div>
                <span>Completed</span>
                <strong>
                  {
                    projectItems.filter(
                      (project) => project.status === "Completed"
                    ).length
                  }
                </strong>
              </div>
            </div>

            <div className="project-overview-card">
              <div className="project-overview-icon">
                <Users size={20} />
              </div>

              <div>
                <span>Team members</span>
                <strong>32</strong>
              </div>
            </div>

            <div className="project-overview-card">
              <div className="project-overview-icon">
                <CalendarDays size={20} />
              </div>

              <div>
                <span>Due this month</span>
                <strong>8</strong>
              </div>
            </div>
          </section>

          {/* TOOLBAR */}
          <section className="projects-toolbar">
            <div className="projects-search">
              <Search size={18} />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search projects..."
              />
            </div>

            <div className="projects-toolbar-right">
              <div className="project-filter">
                <span>Status</span>

                <div className="project-filter-select">
                  <select
                    value={filter}
                    onChange={(event) =>
                      setFilter(event.target.value)
                    }
                  >
                    <option value="All">All projects</option>
                    <option value="In Progress">
                      In Progress
                    </option>
                    <option value="Planning">Planning</option>
                    <option value="Completed">Completed</option>
                  </select>

                  <ChevronDown size={15} />
                </div>
              </div>

              <div className="project-view-switcher">
                <button
                  type="button"
                  className={view === "grid" ? "active" : ""}
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                >
                  <Grid2X2 size={17} />
                </button>

                <button
                  type="button"
                  className={view === "list" ? "active" : ""}
                  onClick={() => setView("list")}
                  aria-label="List view"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </section>

          {/* RESULTS */}
          {filteredProjects.length > 0 ? (
            <section
              className={
                view === "grid"
                  ? "projects-grid projects-page-grid"
                  : "projects-list-view"
              }
            >
              {view === "grid" ? (
                filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                  />
                ))
              ) : (
                filteredProjects.map((project) => (
                  <article
                    className="project-list-card"
                    key={project.id}
                  >
                    <div className="project-list-main">
                      <div className="project-list-icon">
                        <FolderKanban size={20} />
                      </div>

                      <div>
                        <div className="project-list-title">
                          <h3>{project.name}</h3>

                          <span
                            className={`project-status ${
                              project.status
                                ?.toLowerCase()
                                .replace(/\s+/g, "-") || ""
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>

                        <p>{project.description}</p>

                        <div className="project-list-meta">
                          <span>{project.category}</span>

                          <span>
                            <CalendarDays size={14} />
                            {project.due}
                          </span>

                          <span>
                            <Users size={14} />
                            {project.members.length} members
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="project-list-progress">
                      <span>Progress</span>

                      <strong>{project.progress}%</strong>

                      <div className="project-progress-track">
                        <div
                          className="project-progress-fill"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="project-list-open"
                      title="Open project"
                    >
                      <ArrowUpRight size={18} />
                    </button>

                    <button
                      type="button"
                      className="project-list-more"
                      title="More options"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </article>
                ))
              )}
            </section>
          ) : (
            <section className="projects-empty-state">
              <div className="projects-empty-icon">
                <Search size={26} />
              </div>

              <h2>No projects found</h2>

              <p>
                Try changing your search or status filter.
              </p>

              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
              >
                Clear filters
              </button>
            </section>
          )}

          {/* CREATE PROJECT MODAL */}
          {showCreate && (
            <div
              className="modal-overlay"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setShowCreate(false);
                }
              }}
            >
              <div className="project-modal">
                <div className="project-modal-header">
                  <div>
                    <span className="page-header-kicker">
                      <FolderKanban size={14} />
                      New project
                    </span>

                    <h2>Create a project</h2>

                    <p>
                      Add a new project to your workspace.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="modal-close"
                    onClick={() => setShowCreate(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <form
                  className="project-create-form"
                  onSubmit={handleCreateProject}
                >
                  <div className="form-group">
                    <label htmlFor="project-name">
                      Project name
                    </label>

                    <input
                      id="project-name"
                      type="text"
                      value={newProject.name}
                      onChange={(event) =>
                        setNewProject((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      placeholder="e.g. Mobile App Redesign"
                      autoFocus
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="project-category">
                      Category
                    </label>

                    <select
                      id="project-category"
                      value={newProject.category}
                      onChange={(event) =>
                        setNewProject((current) => ({
                          ...current,
                          category: event.target.value,
                        }))
                      }
                    >
                      <option>Product Design</option>
                      <option>Development</option>
                      <option>Design</option>
                      <option>Analytics</option>
                      <option>Marketing</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="project-description">
                      Description
                    </label>

                    <textarea
                      id="project-description"
                      rows="4"
                      value={newProject.description}
                      onChange={(event) =>
                        setNewProject((current) => ({
                          ...current,
                          description: event.target.value,
                        }))
                      }
                      placeholder="What is this project about?"
                    />
                  </div>

                  <div className="project-modal-actions">
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={() => setShowCreate(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="primary-button"
                    >
                      <Plus size={17} />
                      Create project
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}