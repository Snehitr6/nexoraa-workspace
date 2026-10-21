import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Plus,
  Search,
  X,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

import { tasks as initial } from "../data/data";

export default function Tasks() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initial);
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");

  const [newTask, setNewTask] = useState({
    title: "",
    project: "Nexora Mobile App",
    priority: "Medium",
  });

  const toggle = (id) => {
    setItems((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const addTask = (e) => {
    e.preventDefault();

    if (!newTask.title.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask.title.trim(),
      project: newTask.project,
      priority: newTask.priority,
      due: "New",
      completed: false,
      assignee: "AM",
    };

    setItems((current) => [task, ...current]);

    setNewTask({
      title: "",
      project: "Nexora Mobile App",
      priority: "Medium",
    });

    setOpen(false);
  };

  const list = useMemo(() => {
    return items.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(q.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        (filter === "Completed" && task.completed) ||
        (filter === "Open" && !task.completed) ||
        task.priority === filter;

      return matchesSearch && matchesFilter;
    });
  }, [items, filter, q]);

  return (
    <div className="app-shell">
      <Sidebar
        mobileOpen={open}
        onClose={() => setOpen(false)}
      />

      <div className="main-area">
        <Navbar
          onMenuClick={() => setOpen(true)}
        />

        <main className="page-content">
          <div className="page-title-row">
            <div>
              <span className="eyebrow">
                MY WORK
              </span>

              <h2>Tasks</h2>

              <p>
                Stay on top of priorities and keep
                momentum.
              </p>
            </div>

            <button
              className="primary-btn"
              type="button"
              onClick={() => setOpen(true)}
            >
              <Plus size={18} />
              Add task
            </button>
          </div>

          <div className="task-overview">
            <div>
              <CheckCircle2 />

              <strong>
                {items.filter((t) => t.completed).length}
              </strong>

              <span>Completed</span>
            </div>

            <div>
              <CalendarDays />

              <strong>
                {items.filter((t) => !t.completed).length}
              </strong>

              <span>Open tasks</span>
            </div>

            <div>
              <span className="priority-dot high" />

              <strong>
                {
                  items.filter(
                    (t) =>
                      t.priority === "High" &&
                      !t.completed
                  ).length
                }
              </strong>

              <span>High priority</span>
            </div>
          </div>

          <div className="tasks-toolbar">
            <div className="toolbar-search">
              <Search size={17} />

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search tasks..."
              />
            </div>

            <div className="filter-tabs">
              {[
                "All",
                "Open",
                "Completed",
                "High",
                "Medium",
                "Low",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    filter === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setFilter(item)
                  }
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="secondary-btn"
              type="button"
              onClick={() => {
                setQ("");
                setFilter("All");
              }}
            >
              Reset
            </button>
          </div>

          <div className="tasks-page-list">
            {list.length ? (
              list.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={toggle}
                />
              ))
            ) : (
              <div className="empty-state">
                <Search size={28} />
                <h3>No tasks found</h3>
                <p>
                  Try another search or filter.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {open && (
        <div
          className="modal-backdrop"
          onClick={() => setOpen(false)}
        >
          <div
            className="project-modal panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <span className="eyebrow">
                  NEW TASK
                </span>

                <h2>Add task</h2>
              </div>

              <button
                className="icon-btn"
                type="button"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={addTask}>
              <label>
                Task title

                <input
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter task name"
                  autoFocus
                />
              </label>

              <label>
                Project

                <select
                  value={newTask.project}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      project: e.target.value,
                    })
                  }
                >
                  <option>
                    Nexora Mobile App
                  </option>
                  <option>
                    Marketing Website
                  </option>
                  <option>
                    Design System
                  </option>
                  <option>
                    Analytics Dashboard
                  </option>
                </select>
              </label>

              <label>
                Priority

                <select
                  value={newTask.priority}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      priority: e.target.value,
                    })
                  }
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </label>

              <button
                className="primary-btn"
                type="submit"
              >
                <Plus size={17} />
                Create task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}