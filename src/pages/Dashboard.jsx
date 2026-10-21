import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Plus,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";
import TaskCard from "../components/TaskCard";
import ActivityCard from "../components/ActivityCard";
import ChartCard from "../components/ChartCard";

import {
  stats,
  projects,
  tasks,
  activities,
  productivityData,
} from "../data/data";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [taskItems, setTaskItems] = useState(tasks);

  const [selectedRange, setSelectedRange] = useState("This week");

  const handleTaskToggle = (taskId) => {
    setTaskItems((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const completedTasks = taskItems.filter((task) => task.completed).length;

  const productivityTotal = productivityData.reduce(
    (total, item) => total + item.value,
    0
  );

  const productivityPercent = Math.round(
    (productivityData[0].value / productivityTotal) * 100
  );

  return (
    <div className="app-shell">
      <Sidebar
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-area">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="dashboard-page page-container">
          {/* Header */}
          <section className="dashboard-header">
            <div>
              <div className="dashboard-eyebrow">
                <Sparkles size={15} />
                <span>Workspace overview</span>
              </div>

              <h1>Good morning, Alex 👋</h1>

              <p>
                Here's what's happening with your projects and team today.
              </p>
            </div>

            <div className="dashboard-header-actions">
              <button className="secondary-button">
                <CalendarDays size={17} />
                <span>Oct 01, 2026</span>
              </button>

              <button className="primary-button">
                <Plus size={18} />
                <span>New Project</span>
              </button>
            </div>
          </section>

          {/* Stats */}
          <section className="stats-grid">
            {stats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </section>

          {/* Main analytics */}
          <section className="dashboard-grid dashboard-grid-main">
            <div className="dashboard-card chart-section-card">
              <div className="dashboard-card-header">
                <div>
                  <span className="card-kicker">
                    <TrendingUp size={14} />
                    Performance
                  </span>

                  <h2>Productivity overview</h2>

                  <p>
                    Track completed and created tasks across your workspace.
                  </p>
                </div>

                <select
                  value={selectedRange}
                  onChange={(event) => setSelectedRange(event.target.value)}
                  className="dashboard-select"
                >
                  <option>This week</option>
                  <option>This month</option>
                  <option>Last 3 months</option>
                </select>
              </div>

              <div className="dashboard-chart-wrapper">
                <ChartCard embedded />
              </div>
            </div>

            {/* Productivity */}
            <div className="dashboard-card productivity-card">
              <div className="dashboard-card-header">
                <div>
                  <span className="card-kicker">
                    <Target size={14} />
                    Focus
                  </span>

                  <h2>Productivity</h2>

                  <p>Your activity breakdown.</p>
                </div>

                <button className="icon-button" title="View analytics">
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="productivity-score">
                <div className="productivity-ring">
                  <div className="productivity-ring-inner">
                    <strong>{productivityPercent}%</strong>
                    <span>Focus</span>
                  </div>
                </div>
              </div>

              <div className="productivity-list">
                {productivityData.map((item, index) => (
                  <div className="productivity-row" key={item.name}>
                    <div className="productivity-label">
                      <span className={`productivity-dot dot-${index}`} />
                      <span>{item.name}</span>
                    </div>

                    <strong>{item.value}%</strong>
                  </div>
                ))}
              </div>

              <div className="focus-message">
                <Sparkles size={17} />

                <div>
                  <strong>Great focus today!</strong>
                  <span>
                    You're spending more time on deep work than last week.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="dashboard-section">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  <BarChart3 size={14} />
                  Workspace
                </span>

                <h2>Active projects</h2>

                <p>Keep track of your team's current priorities.</p>
              </div>

              <button className="text-button">
                View all projects
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="projects-grid">
              {projects.slice(0, 4).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>

          {/* Tasks + Activity */}
          <section className="dashboard-grid dashboard-grid-bottom">
            {/* Tasks */}
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <div>
                  <span className="card-kicker">
                    <CheckCircle2 size={14} />
                    Tasks
                  </span>

                  <h2>Today's tasks</h2>

                  <p>
                    {completedTasks} of {taskItems.length} tasks completed
                  </p>
                </div>

                <button className="text-button">
                  View all
                  <ChevronRight size={17} />
                </button>
              </div>

              <div className="task-progress">
                <div className="task-progress-info">
                  <span>Daily progress</span>

                  <strong>
                    {Math.round(
                      (completedTasks / Math.max(taskItems.length, 1)) * 100
                    )}
                    %
                  </strong>
                </div>

                <div className="task-progress-track">
                  <div
                    className="task-progress-fill"
                    style={{
                      width: `${
                        (completedTasks / Math.max(taskItems.length, 1)) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="dashboard-task-list">
                {taskItems.map((task) => (
                  <TaskCard
                    key={task.id}
                    {...task}
                    onToggle={() => handleTaskToggle(task.id)}
                  />
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <div>
                  <span className="card-kicker">
                    <Sparkles size={14} />
                    Updates
                  </span>

                  <h2>Recent activity</h2>

                  <p>Latest workspace updates.</p>
                </div>

                <button className="icon-button" title="View activity">
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="activity-list">
                {activities.map((activity) => (
                  <ActivityCard key={activity.id} {...activity} />
                ))}
              </div>

              <button className="activity-footer-button">
                View all activity
                <ArrowRight size={16} />
              </button>
            </div>
          </section>

          {/* AI Banner */}
          <section className="ai-insight-card">
            <div className="ai-insight-icon">
              <Sparkles size={25} />
            </div>

            <div className="ai-insight-content">
              <span>AI productivity insight</span>

              <h2>
                Your team is most productive between 10 AM and 1 PM.
              </h2>

              <p>
                Consider scheduling focused work during this window and moving
                recurring meetings to the afternoon.
              </p>
            </div>

            <button className="ai-insight-button">
              Explore insights
              <ArrowRight size={17} />
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}