export const stats = [
  {
    id: 1,
    title: "Active Projects",
    value: "24",
    change: "+12.5%",
    description: "from last month",
    icon: "folder",
  },
  {
    id: 2,
    title: "Completed Tasks",
    value: "186",
    change: "+18.2%",
    description: "from last month",
    icon: "check",
  },
  {
    id: 3,
    title: "Productivity",
    value: "87.4%",
    change: "+8.4%",
    description: "from last month",
    icon: "zap",
  },
  {
    id: 4,
    title: "Team Members",
    value: "32",
    change: "+4.6%",
    description: "from last month",
    icon: "users",
  },
];

export const projects = [
  {
    id: 1,
    name: "Nexora Mobile App",
    description: "Redesign the mobile productivity experience.",
    category: "Product Design",
    status: "In Progress",
    progress: 78,
    due: "Oct 12, 2026",
    members: ["AM", "JD", "SK", "RL"],
  },
  {
    id: 2,
    name: "Marketing Website",
    description: "Build the new Nexora marketing website.",
    category: "Development",
    status: "In Progress",
    progress: 64,
    due: "Oct 18, 2026",
    members: ["AM", "MK", "TS"],
  },
  {
    id: 3,
    name: "Design System",
    description: "Create reusable components and guidelines.",
    category: "Design",
    status: "Completed",
    progress: 100,
    due: "Sep 28, 2026",
    members: ["JD", "SK", "RL"],
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    description: "Advanced analytics and reporting experience.",
    category: "Analytics",
    status: "Planning",
    progress: 28,
    due: "Nov 02, 2026",
    members: ["AM", "MK"],
  },
];

export const tasks = [
  {
    id: 1,
    title: "Finalize dashboard wireframes",
    project: "Nexora Mobile App",
    priority: "High",
    due: "Today",
    completed: false,
    assignee: "AM",
  },
  {
    id: 2,
    title: "Review homepage animations",
    project: "Marketing Website",
    priority: "Medium",
    due: "Tomorrow",
    completed: false,
    assignee: "JD",
  },
  {
    id: 3,
    title: "Update button components",
    project: "Design System",
    priority: "Low",
    due: "Oct 04",
    completed: true,
    assignee: "SK",
  },
  {
    id: 4,
    title: "Prepare analytics presentation",
    project: "Analytics Dashboard",
    priority: "High",
    due: "Oct 06",
    completed: false,
    assignee: "RL",
  },
];

export const activities = [
  {
    id: 1,
    type: "completed",
    title: "Jordan completed a task",
    description: "Update button components",
    time: "12 min ago",
    avatar: "JD",
  },
  {
    id: 2,
    type: "comment",
    title: "Sarah commented on a project",
    description: "Nexora Mobile App",
    time: "38 min ago",
    avatar: "SK",
  },
  {
    id: 3,
    type: "project",
    title: "New project created",
    description: "Analytics Dashboard",
    time: "1 hour ago",
    avatar: "AM",
  },
  {
    id: 4,
    type: "member",
    title: "Alex joined a workspace",
    description: "Product Team",
    time: "2 hours ago",
    avatar: "RL",
  },
];

export const chartData = [
  { name: "Mon", completed: 28, created: 18 },
  { name: "Tue", completed: 35, created: 24 },
  { name: "Wed", completed: 32, created: 28 },
  { name: "Thu", completed: 46, created: 30 },
  { name: "Fri", completed: 42, created: 34 },
  { name: "Sat", completed: 54, created: 38 },
  { name: "Sun", completed: 61, created: 42 },
];

export const productivityData = [
  {
    name: "Deep Work",
    value: 42,
  },
  {
    name: "Meetings",
    value: 24,
  },
  {
    name: "Planning",
    value: 18,
  },
  {
    name: "Other",
    value: 16,
  },
];