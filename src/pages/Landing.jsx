
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  Command,
  Layers3,
  Menu,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const features = [
  {
    icon: Sparkles,
    number: "01",
    title: "AI-powered planning",
    text: "Turn ambitious goals into clear, achievable steps with intelligent planning tools.",
    color: "purple",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Project management",
    text: "Organize projects, manage priorities, and keep every milestone on track.",
    color: "blue",
  },
  {
    icon: Users,
    number: "03",
    title: "Team collaboration",
    text: "Bring your team together with shared workspaces and clear responsibilities.",
    color: "orange",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Smart analytics",
    text: "Understand performance, track progress, and make better decisions with data.",
    color: "green",
  },
];

const steps = [
  {
    number: "01",
    title: "Bring your work together",
    text: "Organize your projects, tasks, and priorities in one workspace.",
  },
  {
    number: "02",
    title: "Plan your next move",
    text: "Break big goals into manageable tasks and assign responsibilities.",
  },
  {
    number: "03",
    title: "Make progress visible",
    text: "Track milestones and celebrate meaningful results with your team.",
  },
];

const testimonials = [
  {
    quote:
      "Nexora brings structure to our busiest weeks. Everyone knows what matters and what needs to happen next.",
    name: "Olivia Bennett",
    role: "Product Manager",
    initials: "OB",
    color: "lavender",
  },
  {
    quote:
      "We finally have a clear picture of our projects. Planning feels simpler, and our team spends more time doing.",
    name: "Daniel Brooks",
    role: "Startup Founder",
    initials: "DB",
    color: "peach",
  },
  {
    quote:
      "The clean workspace and thoughtful organization make it much easier to stay focused on important work.",
    name: "Sophia Carter",
    role: "Creative Lead",
    initials: "SC",
    color: "mint",
  },
];

const faqs = [
  {
    question: "What is Nexora?",
    answer:
      "Nexora is a productivity and project management workspace for organizing projects, managing tasks, collaborating, and tracking progress.",
  },
  {
    question: "Can I create a free account?",
    answer:
      "Yes. Use the Sign Up page to explore the demo workspace. This frontend demo uses browser storage rather than a production account service.",
  },
  {
    question: "Can I manage multiple projects?",
    answer:
      "Yes. Use the Projects and Tasks pages in your application to organize your work and track progress.",
  },
  {
    question: "Does Nexora support dark mode?",
    answer:
      "Yes. Use the theme toggle in the navigation to switch between light and dark appearances.",
  },
  {
    question: "Does Nexora use a real AI service?",
    answer:
      "The current page demonstrates the frontend experience. A real AI service can be connected later through an API.",
  },
];

function DashboardPreview() {
  const bars = [36, 54, 43, 69, 57, 80, 64, 91, 72, 84, 62, 96];

  return (
    <div className="nx-window">
      <div className="nx-window-top">
        <div className="nx-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="nx-window-address">
          app.nexora / workspace
        </span>
        <div className="nx-window-avatar">AM</div>
      </div>

      <div className="nx-dashboard-preview">
        <aside className="nx-preview-side">
          <div className="nx-preview-logo">
            <span>
              <Zap size={15} fill="currentColor" />
            </span>
            <b>Nexora</b>
          </div>

          <small>WORKSPACE</small>
          <div className="nx-side-active">▦ &nbsp; Overview</div>
          <div>▣ &nbsp; Projects</div>
          <div>◉ &nbsp; My tasks</div>
          <div>♧ &nbsp; Team</div>

          <small className="nx-side-bottom">PERSONAL</small>
          <div>◷ &nbsp; Schedule</div>
          <div>⚙ &nbsp; Settings</div>

          <div className="nx-side-profile">
            <div className="nx-mini-avatar">AM</div>
            <span>
              <b>Alex Morgan</b>
              <small>Workspace owner</small>
            </span>
          </div>
        </aside>

        <div className="nx-preview-content">
          <div className="nx-preview-heading">
            <div>
              <span>YOUR WORKSPACE</span>
              <h3>
                Good morning, Alex <span>✦</span>
              </h3>
              <p>Here&apos;s what&apos;s happening today.</p>
            </div>
            <div className="nx-preview-date">This week⌄</div>
          </div>

          <div className="nx-preview-metrics">
            <div className="nx-metric">
              <span>Active projects</span>
              <strong>12</strong>
              <small>↗ 3 this month</small>
              <div className="nx-metric-icon purple">
                <Layers3 size={15} />
              </div>
            </div>

            <div className="nx-metric">
              <span>Tasks completed</span>
              <strong>84</strong>
              <small>↗ 12% this week</small>
              <div className="nx-metric-icon blue">
                <CheckCircle2 size={15} />
              </div>
            </div>

            <div className="nx-metric">
              <span>Team progress</span>
              <strong>78%</strong>
              <small>↗ Looking good</small>
              <div className="nx-metric-icon orange">
                <Target size={15} />
              </div>
            </div>
          </div>

          <div className="nx-preview-chart-card">
            <div className="nx-chart-title">
              <div>
                <b>Productivity overview</b>
                <p>Your team&apos;s weekly progress</p>
              </div>
              <span>Last 12 weeks⌄</span>
            </div>

            <div className="nx-chart">
              <div className="nx-chart-labels">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
              </div>

              <div className="nx-chart-plot">
                <div className="nx-chart-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="nx-chart-bars">
                  {bars.map((height, index) => (
                    <div
                      key={index}
                      className={
                        index === 7
                          ? "nx-chart-bar highlighted"
                          : "nx-chart-bar"
                      }
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="nx-preview-tasks">
            <div>
              <span className="nx-task-check">
                <Check size={12} />
              </span>
              <span>
                <b>Website redesign</b>
                <small>Design team · Today</small>
              </span>
              <span className="nx-task-status">In progress</span>
            </div>

            <div>
              <span className="nx-task-check complete">
                <Check size={12} />
              </span>
              <span>
                <b>Product launch plan</b>
                <small>Marketing · Completed</small>
              </span>
              <span className="nx-task-status done">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const dark = theme === "dark";
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`nx-landing ${dark ? "nx-dark" : ""}`}>
      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar,
        #root::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        html, body, #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        .nx-landing {
          --nx-bg: #f8f9fc;
          --nx-card: #ffffff;
          --nx-soft: #f0efff;
          --nx-border: #e7e8f0;
          --nx-text: #15162b;
          --nx-muted: #73768b;
          --nx-purple: #7555f7;
          --nx-shadow: 0 24px 75px rgba(41, 32, 96, .12);
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          overflow-x: clip;
          background: var(--nx-bg);
          color: var(--nx-text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.6;
        }

        .nx-landing.nx-dark {
          --nx-bg: #090b13;
          --nx-card: #11141e;
          --nx-soft: #1b1930;
          --nx-border: #292d3c;
          --nx-text: #f4f5fc;
          --nx-muted: #a2a8ba;
          --nx-purple: #9b86ff;
          --nx-shadow: 0 24px 75px rgba(0, 0, 0, .3);
        }

        .nx-landing * {
          box-sizing: border-box;
        }

        .nx-landing button,
        .nx-landing input {
          font: inherit;
        }

        .nx-landing button {
          cursor: pointer;
        }

        .nx-landing a {
          color: inherit;
          text-decoration: none;
        }

        .nx-landing section {
          scroll-margin-top: 80px;
        }

        /* FULL-WIDTH CONTAINER: removes large left/right gaps */
        .nx-container {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding-left: 24px;
          padding-right: 24px;
        }

        .nx-nav-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          border-bottom: 1px solid var(--nx-border);
          background: var(--nx-bg);
          background: color-mix(in srgb, var(--nx-bg) 90%, transparent);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .nx-landing-inner {
          width: 100%;
          padding-top: 76px;
        }

        .nx-nav {
          width: 100%;
          max-width: 100%;
          height: 76px;
          margin: 0;
          padding-left: 24px;
          padding-right: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .nx-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          font-size: 22px;
          font-weight: 850;
          letter-spacing: -1px;
        }

        .nx-brand-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          color: #fff;
          background: linear-gradient(140deg, #9778ff, #6743ed);
          border-radius: 12px;
          box-shadow: 0 5px 15px #7555f73b;
        }

        .nx-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(16px, 2.4vw, 32px);
          color: var(--nx-muted);
          font-size: 13px;
          font-weight: 650;
        }

        .nx-nav-links a,
        .nx-footer-links a {
          transition: color .2s ease;
        }

        .nx-nav-links a:hover,
        .nx-footer-links a:hover {
          color: var(--nx-purple);
        }

        .nx-nav-actions {
          display: flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
        }

        .nx-theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          height: 39px;
          padding: 0 11px;
          border: 1px solid var(--nx-border);
          border-radius: 11px;
          background: var(--nx-card);
          color: var(--nx-text);
          font-size: 12px;
          font-weight: 700;
          transition: .2s ease;
        }

        .nx-theme-toggle:hover {
          border-color: var(--nx-purple);
        }

        .nx-button {
          min-height: 45px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 19px;
          border: 1px solid transparent;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 750;
          white-space: nowrap;
          transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
        }

        .nx-button:hover {
          transform: translateY(-2px);
        }

        .nx-button-primary {
          color: white !important;
          background: linear-gradient(135deg, #8666ff, #6844ee);
          box-shadow: 0 9px 24px #7555f72b;
        }

        .nx-button-primary:hover {
          background: linear-gradient(135deg, #7956fa, #5e39df);
          box-shadow: 0 12px 28px #7555f744;
        }

        .nx-button-secondary {
          color: var(--nx-text) !important;
          background: var(--nx-card);
          border-color: var(--nx-border);
        }

        .nx-button-secondary:hover {
          border-color: var(--nx-purple);
        }

        .nx-menu-button {
          display: none;
          place-items: center;
          width: 42px;
          height: 42px;
          color: var(--nx-text);
          background: var(--nx-card);
          border: 1px solid var(--nx-border);
          border-radius: 11px;
        }

        .nx-hero {
          position: relative;
          padding: 85px 0 86px;
          background:
            radial-gradient(ellipse at 83% 22%, #a58cff21, transparent 36%),
            radial-gradient(ellipse at 14% 80%, #66a5ff12, transparent 30%);
        }

        .nx-hero-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 45px;
        }

        .nx-hero-content {
          min-width: 0;
        }

        .nx-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 11px;
          border: 1px solid #8e79f438;
          border-radius: 999px;
          color: var(--nx-purple);
          background: var(--nx-soft);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .25px;
        }

        .nx-eyebrow-dot {
          width: 7px;
          height: 7px;
          background: #7c5cff;
          border-radius: 50%;
          box-shadow: 0 0 0 4px #7c5cff20;
        }

        .nx-hero h1 {
          max-width: 590px;
          margin: 24px 0 20px;
          font-size: clamp(43px, 5.2vw, 69px);
          line-height: 1.07;
          letter-spacing: -4px;
          font-weight: 850;
        }

        .nx-gradient-text {
          background: linear-gradient(105deg, #8e6bff, #6847eb 50%, #4594ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .nx-hero-copy {
          max-width: 485px;
          color: var(--nx-muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .nx-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 29px;
        }

        .nx-trust-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 13px;
          margin-top: 30px;
          color: var(--nx-muted);
          font-size: 11px;
        }

        .nx-trust-avatars {
          display: flex;
          padding-left: 3px;
        }

        .nx-trust-avatars span {
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          margin-left: -4px;
          border: 2px solid var(--nx-bg);
          border-radius: 50%;
          color: white;
          background: linear-gradient(140deg, #8e6bff, #3d8dff);
          font-size: 9px;
          font-weight: 800;
        }

        .nx-trust-avatars span:nth-child(2) {
          background: linear-gradient(140deg, #ffae84, #f36d8b);
        }

        .nx-trust-avatars span:nth-child(3) {
          background: linear-gradient(140deg, #51bca4, #268cbb);
        }

        .nx-trust-avatars span:nth-child(4) {
          background: linear-gradient(140deg, #c77cf5, #7450e8);
        }

        .nx-trust-stars {
          color: #f4aa38;
          letter-spacing: 2px;
        }

        .nx-hero-visual {
          min-width: 0;
          position: relative;
        }

        .nx-orb {
          position: absolute;
          width: 180px;
          height: 180px;
          top: -45px;
          right: -30px;
          border-radius: 50%;
          background: radial-gradient(circle, #a28aff3b, transparent 70%);
          pointer-events: none;
        }

        .nx-window {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border: 1px solid var(--nx-border);
          border-radius: 19px;
          background: var(--nx-card);
          box-shadow: var(--nx-shadow);
          transform: perspective(1400px) rotateY(-3deg) rotateX(1deg);
          animation: nx-float 7s ease-in-out infinite;
        }

        @keyframes nx-float {
          0%, 100% {
            transform: perspective(1400px) rotateY(-3deg) rotateX(1deg) translateY(0);
          }
          50% {
            transform: perspective(1400px) rotateY(-1deg) rotateX(0) translateY(-9px);
          }
        }

        .nx-window-top {
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 13px;
          border-bottom: 1px solid var(--nx-border);
        }

        .nx-window-dots {
          display: flex;
          gap: 5px;
        }

        .nx-window-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff847b;
        }

        .nx-window-dots span:nth-child(2) {
          background: #f5c65e;
        }

        .nx-window-dots span:nth-child(3) {
          background: #57c993;
        }

        .nx-window-address {
          color: var(--nx-muted);
          font-size: 9px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .nx-window-avatar,
        .nx-mini-avatar {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: white;
          background: linear-gradient(140deg, #8f75f8, #4d9bf6);
          font-size: 8px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .nx-dashboard-preview {
          display: grid;
          grid-template-columns: 142px minmax(0, 1fr);
          min-height: 350px;
        }

        .nx-preview-side {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 9px;
          padding: 17px 10px;
          border-right: 1px solid var(--nx-border);
          color: var(--nx-muted);
          font-size: 9px;
        }

        .nx-preview-logo {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 13px;
          color: var(--nx-text);
          font-size: 13px;
        }

        .nx-preview-logo > span {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          color: white;
          background: #7855f4;
          border-radius: 7px;
        }

        .nx-preview-side > small {
          margin: 8px 0 2px;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: .8px;
        }

        .nx-preview-side > div:not(.nx-preview-logo):not(.nx-side-profile) {
          padding: 9px 7px;
          border-radius: 6px;
        }

        .nx-preview-side .nx-side-active {
          color: var(--nx-purple);
          background: var(--nx-soft);
          font-weight: 800;
        }

        .nx-side-profile {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--nx-border);
        }

        .nx-side-profile > span {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .nx-side-profile b {
          color: var(--nx-text);
          font-size: 8px;
        }

        .nx-side-profile small {
          font-size: 7px;
        }

        .nx-preview-content {
          min-width: 0;
          padding: 17px 14px;
        }

        .nx-preview-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 17px;
        }

        .nx-preview-heading > div:first-child > span {
          color: var(--nx-muted);
          font-size: 7px;
          letter-spacing: .7px;
        }

        .nx-preview-heading h3 {
          margin: 4px 0;
          color: var(--nx-text);
          font-size: 15px;
          letter-spacing: -.5px;
        }

        .nx-preview-heading h3 span {
          color: #f4ad38;
        }

        .nx-preview-heading p {
          margin: 0;
          color: var(--nx-muted);
          font-size: 8px;
        }

        .nx-preview-date {
          padding: 6px 7px;
          border: 1px solid var(--nx-border);
          border-radius: 6px;
          color: var(--nx-muted);
          font-size: 7px;
          white-space: nowrap;
        }

        .nx-preview-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 7px;
        }

        .nx-metric {
          position: relative;
          min-width: 0;
          padding: 11px 8px;
          border: 1px solid var(--nx-border);
          border-radius: 9px;
        }

        .nx-metric > span {
          display: block;
          color: var(--nx-muted);
          font-size: 7px;
        }

        .nx-metric > strong {
          display: block;
          margin: 4px 0;
          color: var(--nx-text);
          font-size: 20px;
          line-height: 1.2;
        }

        .nx-metric > small {
          color: #269a74;
          font-size: 7px;
        }

        .nx-metric-icon {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 6px;
        }

        .nx-metric-icon.purple {
          color: #7855f4;
          background: #7855f419;
        }

        .nx-metric-icon.blue {
          color: #3e92fa;
          background: #3e92fa19;
        }

        .nx-metric-icon.orange {
          color: #ed9c3c;
          background: #ed9c3c19;
        }

        .nx-preview-chart-card {
          margin-top: 10px;
          padding: 12px;
          border: 1px solid var(--nx-border);
          border-radius: 10px;
        }

        .nx-chart-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .nx-chart-title b {
          color: var(--nx-text);
          font-size: 9px;
        }

        .nx-chart-title p {
          margin: 3px 0 0;
          color: var(--nx-muted);
          font-size: 7px;
        }

        .nx-chart-title > span {
          color: var(--nx-muted);
          font-size: 7px;
          white-space: nowrap;
        }

        .nx-chart {
          display: grid;
          grid-template-columns: 25px minmax(0, 1fr);
          gap: 5px;
          height: 95px;
          margin-top: 12px;
        }

        .nx-chart-labels {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: var(--nx-muted);
          font-size: 7px;
        }

        .nx-chart-plot {
          position: relative;
          min-width: 0;
        }

        .nx-chart-lines {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .nx-chart-lines i {
          display: block;
          border-top: 1px dashed var(--nx-border);
        }

        .nx-chart-bars {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          gap: 5px;
          padding: 0 5px;
        }

        .nx-chart-bar {
          width: 100%;
          max-width: 20px;
          min-height: 8px;
          border-radius: 4px 4px 0 0;
          background: linear-gradient(180deg, #a68cff, #7858ee);
          opacity: .7;
        }

        .nx-chart-bar.highlighted {
          opacity: 1;
          background: linear-gradient(180deg, #8a68ff, #5d3ee0);
        }

        .nx-preview-tasks {
          display: grid;
          gap: 7px;
          margin-top: 10px;
        }

        .nx-preview-tasks > div {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .nx-task-check {
          display: grid;
          place-items: center;
          width: 19px;
          height: 19px;
          flex-shrink: 0;
          border: 1px solid var(--nx-border);
          border-radius: 6px;
          color: var(--nx-purple);
        }

        .nx-task-check.complete {
          color: #259d76;
          background: #259d7612;
        }

        .nx-preview-tasks > div > span:nth-child(2) {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }

        .nx-preview-tasks b {
          overflow: hidden;
          color: var(--nx-text);
          font-size: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .nx-preview-tasks small {
          color: var(--nx-muted);
          font-size: 7px;
        }

        .nx-task-status {
          padding: 4px 6px;
          border-radius: 5px;
          color: #bd8330;
          background: #f8c96e21;
          font-size: 6px;
          white-space: nowrap;
        }

        .nx-task-status.done {
          color: #249c74;
          background: #249c7417;
        }

        .nx-float-note {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border: 1px solid var(--nx-border);
          border-radius: 13px;
          background: var(--nx-card);
          box-shadow: 0 12px 36px #28204d1b;
          animation: nx-float-note 5s ease-in-out infinite;
        }

        .nx-float-note.one {
          right: -12px;
          top: 13%;
        }

        .nx-float-note.two {
          left: -12px;
          bottom: 11%;
          animation-delay: -2s;
        }

        @keyframes nx-float-note {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .nx-float-icon {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border-radius: 9px;
          color: #7855f4;
          background: #7855f419;
        }

        .nx-float-note > span:last-child {
          display: flex;
          flex-direction: column;
        }

        .nx-float-note b {
          font-size: 10px;
        }

        .nx-float-note small {
          color: var(--nx-muted);
          font-size: 9px;
        }

        .nx-trust-strip {
          padding: 25px 0;
          border-top: 1px solid var(--nx-border);
          border-bottom: 1px solid var(--nx-border);
        }

        .nx-trust-strip p {
          margin: 0 0 18px;
          text-align: center;
          color: var(--nx-muted);
          font-size: 11px;
          font-weight: 650;
        }

        .nx-brand-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 22px;
          color: var(--nx-muted);
        }

        .nx-brand-row span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: clamp(13px, 1.5vw, 18px);
          font-weight: 850;
          letter-spacing: -.5px;
          opacity: .75;
        }

        .nx-section {
          padding: 94px 0;
        }

        .nx-section-soft {
          background: var(--nx-card);
          border-top: 1px solid var(--nx-border);
          border-bottom: 1px solid var(--nx-border);
        }

        .nx-section-heading {
          max-width: 660px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .nx-section-kicker {
          color: var(--nx-purple);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .nx-section-heading h2 {
          margin: 13px 0;
          font-size: clamp(31px, 4vw, 46px);
          line-height: 1.16;
          letter-spacing: -2px;
          font-weight: 850;
        }

        .nx-section-heading p {
          margin: 0;
          color: var(--nx-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .nx-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .nx-feature-card {
          min-width: 0;
          padding: 24px 20px;
          border: 1px solid var(--nx-border);
          border-radius: 17px;
          background: var(--nx-card);
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }

        .nx-feature-card:hover {
          transform: translateY(-6px);
          border-color: #8a6aff75;
          box-shadow: 0 15px 35px #5b42bf10;
        }

        .nx-feature-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          margin-bottom: 24px;
          border-radius: 13px;
        }

        .nx-feature-icon.purple {
          color: #7857f5;
          background: #7857f51a;
        }

        .nx-feature-icon.blue {
          color: #3e92fa;
          background: #3e92fa1a;
        }

        .nx-feature-icon.orange {
          color: #ed9c3c;
          background: #ed9c3c1a;
        }

        .nx-feature-icon.green {
          color: #26a77c;
          background: #26a77c1a;
        }

        .nx-feature-number {
          color: var(--nx-muted);
          font-size: 10px;
          font-weight: 750;
        }

        .nx-feature-card h3 {
          margin: 9px 0;
          font-size: 16px;
          letter-spacing: -.4px;
        }

        .nx-feature-card p {
          margin: 0;
          color: var(--nx-muted);
          font-size: 12px;
          line-height: 1.85;
        }

        .nx-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;
        }

        .nx-split-visual {
          position: relative;
          min-width: 0;
          padding: 25px;
          border: 1px solid var(--nx-border);
          border-radius: 23px;
          background: linear-gradient(145deg, var(--nx-card), var(--nx-soft));
        }

        .nx-plan-card {
          padding: 21px;
          border: 1px solid var(--nx-border);
          border-radius: 15px;
          background: var(--nx-card);
          box-shadow: 0 14px 38px #34265b0c;
        }

        .nx-plan-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .nx-plan-head h3 {
          margin: 0;
          font-size: 14px;
        }

        .nx-plan-head span {
          padding: 5px 8px;
          border-radius: 6px;
          color: #269a74;
          background: #269a7415;
          font-size: 9px;
          font-weight: 800;
        }

        .nx-plan-subtitle {
          margin: 5px 0 19px;
          color: var(--nx-muted);
          font-size: 11px;
        }

        .nx-plan-row {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 0;
          border-top: 1px solid var(--nx-border);
        }

        .nx-plan-check {
          display: grid;
          place-items: center;
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          border-radius: 8px;
          color: #7656f4;
          background: var(--nx-soft);
        }

        .nx-plan-row > span:nth-child(2) {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .nx-plan-row b {
          font-size: 11px;
        }

        .nx-plan-row small {
          color: var(--nx-muted);
          font-size: 9px;
        }

        .nx-plan-tag {
          padding: 4px 7px;
          border-radius: 5px;
          color: var(--nx-muted);
          background: var(--nx-bg);
          font-size: 8px;
        }

        .nx-progress-box {
          margin-top: 13px;
          padding: 17px;
          border: 1px solid var(--nx-border);
          border-radius: 13px;
          background: var(--nx-card);
        }

        .nx-progress-head {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          font-size: 10px;
        }

        .nx-progress-head span {
          color: var(--nx-purple);
          font-weight: 800;
        }

        .nx-progress-track {
          height: 7px;
          margin-top: 12px;
          overflow: hidden;
          border-radius: 99px;
          background: var(--nx-border);
        }

        .nx-progress-track span {
          display: block;
          height: 100%;
          width: 78%;
          border-radius: inherit;
          background: linear-gradient(90deg, #9a7cff, #6c48f1);
        }

        .nx-split-copy .nx-section-kicker {
          display: block;
        }

        .nx-split-copy h2 {
          margin: 15px 0;
          font-size: clamp(32px, 4vw, 45px);
          line-height: 1.16;
          letter-spacing: -2px;
        }

        .nx-split-copy > p {
          color: var(--nx-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .nx-check-list {
          display: grid;
          gap: 13px;
          margin: 24px 0 28px;
          padding: 0;
          list-style: none;
        }

        .nx-check-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--nx-text);
          font-size: 13px;
        }

        .nx-check-list li svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #2ba77b;
        }

        .nx-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .nx-step {
          position: relative;
          padding: 25px;
          border: 1px solid var(--nx-border);
          border-radius: 16px;
          background: var(--nx-bg);
        }

        .nx-step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          border-radius: 13px;
          color: white;
          background: linear-gradient(135deg, #9676ff, #6846e8);
          font-size: 12px;
          font-weight: 850;
        }

        .nx-step h3 {
          margin: 20px 0 8px;
          font-size: 17px;
        }

        .nx-step p {
          margin: 0;
          color: var(--nx-muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .nx-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          padding: 33px 25px;
          border: 1px solid var(--nx-border);
          border-radius: 20px;
          background: var(--nx-card);
        }

        .nx-stat {
          text-align: center;
        }

        .nx-stat strong {
          display: block;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.2;
          letter-spacing: -1.5px;
        }

        .nx-stat span {
          display: block;
          margin-top: 8px;
          color: var(--nx-muted);
          font-size: 12px;
        }

        .nx-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .nx-testimonial {
          padding: 24px;
          border: 1px solid var(--nx-border);
          border-radius: 17px;
          background: var(--nx-card);
          transition: transform .2s ease, border-color .2s ease;
        }

        .nx-testimonial:hover {
          transform: translateY(-4px);
          border-color: #8c70f76b;
        }

        .nx-testimonial-stars {
          color: #f5ae3c;
          letter-spacing: 3px;
          font-size: 13px;
        }

        .nx-testimonial blockquote {
          min-height: 110px;
          margin: 18px 0 22px;
          color: var(--nx-text);
          font-size: 13px;
          line-height: 1.9;
        }

        .nx-person {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .nx-person-avatar {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 850;
        }

        .nx-person-avatar.lavender {
          color: #7554ef;
          background: #7554ef20;
        }

        .nx-person-avatar.peach {
          color: #d46d43;
          background: #f5a78036;
        }

        .nx-person-avatar.mint {
          color: #19876d;
          background: #5cc4a52e;
        }

        .nx-person > span:last-child {
          display: flex;
          flex-direction: column;
        }

        .nx-person b {
          font-size: 12px;
        }

        .nx-person small {
          color: var(--nx-muted);
          font-size: 10px;
        }

        .nx-faq-layout {
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 70px;
          align-items: start;
        }

        .nx-faq-intro h2 {
          margin: 13px 0;
          font-size: clamp(31px, 4vw, 43px);
          line-height: 1.2;
          letter-spacing: -2px;
        }

        .nx-faq-intro p {
          color: var(--nx-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .nx-faq-item {
          border-bottom: 1px solid var(--nx-border);
        }

        .nx-faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          padding: 19px 0;
          text-align: left;
          color: var(--nx-text);
          background: transparent;
          border: 0;
          font-size: 13px;
          font-weight: 750;
        }

        .nx-faq-question svg {
          flex-shrink: 0;
          color: var(--nx-muted);
          transition: transform .2s ease;
        }

        .nx-faq-question[aria-expanded="true"] svg {
          transform: rotate(180deg);
          color: var(--nx-purple);
        }

        .nx-faq-answer {
          padding: 0 25px 18px 0;
          color: var(--nx-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .nx-cta {
          padding: 0 0 90px;
        }

        .nx-cta-panel {
          position: relative;
          overflow: hidden;
          padding: 57px 35px;
          border-radius: 24px;
          text-align: center;
          color: white;
          background:
            radial-gradient(ellipse at 90% 10%, #b4a0ff65, transparent 35%),
            linear-gradient(125deg, #7250ed, #5032c9 65%, #3f39b9);
        }

        .nx-cta-panel::before,
        .nx-cta-panel::after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          border: 1px solid #ffffff19;
          border-radius: 50%;
          pointer-events: none;
        }

        .nx-cta-panel::before {
          top: -150px;
          left: -50px;
        }

        .nx-cta-panel::after {
          right: -60px;
          bottom: -180px;
          width: 340px;
          height: 340px;
        }

        .nx-cta-panel > * {
          position: relative;
          z-index: 1;
        }

        .nx-cta-panel h2 {
          max-width: 650px;
          margin: 0 auto 15px;
          font-size: clamp(31px, 4.4vw, 48px);
          line-height: 1.15;
          letter-spacing: -2px;
        }

        .nx-cta-panel p {
          max-width: 530px;
          margin: 0 auto 25px;
          color: #ffffffc9;
          font-size: 13px;
          line-height: 1.9;
        }

        .nx-cta-panel .nx-button {
          color: #6242e7 !important;
          background: white;
        }

        .nx-cta-panel .nx-button:hover {
          box-shadow: 0 10px 25px #0002;
        }

        .nx-footer {
          padding: 48px 0 23px;
          border-top: 1px solid var(--nx-border);
          background: var(--nx-card);
        }

        .nx-footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 35px;
          padding-bottom: 38px;
        }

        .nx-footer-about p {
          max-width: 300px;
          margin: 14px 0;
          color: var(--nx-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .nx-footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }

        .nx-footer-column h4 {
          margin: 0 0 5px;
          font-size: 12px;
        }

        .nx-footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: var(--nx-muted);
          font-size: 11px;
        }

        .nx-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          padding-top: 20px;
          border-top: 1px solid var(--nx-border);
          color: var(--nx-muted);
          font-size: 10px;
        }

        .nx-footer-bottom p {
          margin: 0;
        }

        .nx-footer-socials {
          display: flex;
          gap: 13px;
        }

        .nx-footer-socials a {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid var(--nx-border);
          border-radius: 9px;
          transition: .2s ease;
        }

        .nx-footer-socials a:hover {
          color: var(--nx-purple);
          border-color: var(--nx-purple);
        }

        @media (min-width: 1500px) {
          .nx-hero {
            padding-block: 105px;
          }
        }

        @media (max-width: 1050px) {
          .nx-nav {
            gap: 14px;
          }

          .nx-nav-links {
            gap: 15px;
            font-size: 12px;
          }

          .nx-hero-grid {
            gap: 25px;
          }

          .nx-feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .nx-split {
            gap: 38px;
          }
        }

        @media (max-width: 760px) {
          .nx-container {
            width: 100%;
            max-width: 100%;
            padding-left: 16px;
            padding-right: 16px;
          }

          .nx-nav {
            width: 100%;
            max-width: 100%;
            height: 68px;
            padding-left: 16px;
            padding-right: 16px;
            gap: 8px;
          }

          .nx-brand {
            font-size: 20px;
          }

          .nx-brand-icon {
            width: 33px;
            height: 33px;
          }

          .nx-menu-button {
            display: grid;
          }

          .nx-nav-actions {
            gap: 7px;
          }

          .nx-theme-toggle {
            width: 38px;
            min-width: 38px;
            padding: 0;
          }

          .nx-theme-toggle span {
            display: none;
          }

          .nx-nav-actions > .nx-button-primary {
            display: none;
          }

          .nx-nav-actions > .nx-button-secondary {
            display: inline-flex;
            min-height: 38px;
            padding: 0 10px;
            font-size: 11px;
          }

          .nx-nav-links {
            position: absolute;
            top: 61px;
            left: 12px;
            right: 12px;
            display: none;
            align-items: stretch;
            gap: 0;
            padding: 9px;
            border: 1px solid var(--nx-border);
            border-radius: 15px;
            background: var(--nx-card);
            box-shadow: var(--nx-shadow);
          }

          .nx-nav-links.is-open {
            display: flex;
            flex-direction: column;
          }

          .nx-nav-links a {
            padding: 12px;
            border-radius: 8px;
          }

          .nx-nav-links a:hover {
            background: var(--nx-soft);
          }

          .nx-hero {
            padding: 54px 0 61px;
          }

          .nx-hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .nx-hero-copy {
            font-size: 14px;
          }

          .nx-hero h1 {
            max-width: 600px;
            font-size: clamp(43px, 9vw, 64px);
            letter-spacing: -2.8px;
          }

          .nx-hero-visual {
            width: 100%;
            max-width: 600px;
            margin-inline: auto;
          }

          .nx-window {
            transform: none;
            animation: none;
          }

          .nx-dashboard-preview {
            grid-template-columns: 105px minmax(0, 1fr);
            min-height: 320px;
          }

          .nx-preview-side {
            padding: 13px 7px;
          }

          .nx-preview-content {
            padding: 13px 9px;
          }

          .nx-float-note.one {
            right: -5px;
            top: -22px;
          }

          .nx-float-note.two {
            left: -4px;
            bottom: -22px;
          }

          .nx-float-note {
            padding: 8px 10px;
          }

          .nx-float-note b {
            font-size: 9px;
          }

          .nx-float-note small {
            font-size: 8px;
          }

          .nx-section {
            padding: 69px 0;
          }

          .nx-section-heading {
            margin-bottom: 31px;
          }

          .nx-section-heading h2 {
            letter-spacing: -1.5px;
          }

          .nx-split {
            grid-template-columns: 1fr;
            gap: 33px;
          }

          .nx-split-visual {
            order: 2;
            padding: 14px;
          }

          .nx-split-copy {
            order: 1;
          }

          .nx-steps-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .nx-step {
            padding: 21px;
          }

          .nx-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 26px 12px;
          }

          .nx-testimonial-grid {
            grid-template-columns: 1fr;
          }

          .nx-testimonial blockquote {
            min-height: 0;
          }

          .nx-faq-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .nx-cta {
            padding-bottom: 65px;
          }

          .nx-cta-panel {
            padding: 44px 22px;
            border-radius: 19px;
          }

          .nx-footer-top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 18px;
          }

          .nx-footer-about {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 420px) {
          .nx-container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .nx-nav {
            padding-left: 12px;
            padding-right: 12px;
          }

          .nx-nav-actions {
            gap: 5px;
          }

          .nx-brand {
            gap: 7px;
            font-size: 18px;
          }

          .nx-brand-icon {
            width: 31px;
            height: 31px;
          }

          .nx-hero h1 {
            font-size: 43px;
          }

          .nx-hero-actions {
            align-items: stretch;
          }

          .nx-hero-actions .nx-button {
            flex: 1;
            padding-inline: 12px;
          }

          .nx-trust-row {
            gap: 8px;
          }

          .nx-brand-row {
            gap: 15px 22px;
          }

          .nx-feature-grid {
            grid-template-columns: 1fr;
          }

          .nx-feature-card {
            padding: 22px;
          }

          .nx-dashboard-preview {
            grid-template-columns: 82px minmax(0, 1fr);
          }

          .nx-preview-side {
            font-size: 8px;
          }

          .nx-preview-side .nx-preview-logo b {
            font-size: 10px;
          }

          .nx-preview-side > div:not(.nx-preview-logo):not(.nx-side-profile) {
            padding: 7px 4px;
          }

          .nx-preview-heading h3 {
            font-size: 12px;
          }

          .nx-preview-date {
            display: none;
          }

          .nx-metric {
            padding: 8px 5px;
          }

          .nx-metric > span {
            font-size: 6px;
          }

          .nx-metric > strong {
            font-size: 17px;
          }

          .nx-metric-icon {
            display: none;
          }

          .nx-metric > small {
            font-size: 6px;
          }

          .nx-preview-chart-card {
            padding: 8px;
          }

          .nx-float-note.two {
            left: 0;
          }

          .nx-footer-top {
            gap: 25px 14px;
          }

          .nx-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nx-landing *,
          .nx-landing *::before,
          .nx-landing *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="nx-landing-inner">
        <div className="nx-nav-wrap">
          <nav className="nx-nav" aria-label="Main navigation">
            <Link to="/" className="nx-brand" onClick={closeMenu}>
              <span className="nx-brand-icon">
                <Zap size={20} fill="currentColor" />
              </span>
              Nexora
            </Link>

            <div className={`nx-nav-links ${menuOpen ? "is-open" : ""}`}>
              <a href="#features" onClick={closeMenu}>Features</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#how-it-works" onClick={closeMenu}>How it works</a>
              <a href="#reviews" onClick={closeMenu}>Reviews</a>
              <a href="#faq" onClick={closeMenu}>FAQ</a>
            </div>

            <div className="nx-nav-actions">
              <button
                type="button"
                className="nx-theme-toggle"
                onClick={toggleTheme}
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                title={dark ? "Switch to light theme" : "Switch to dark theme"}
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
                <span>{dark ? "Light" : "Dark"}</span>
              </button>

              <Link to="/login" className="nx-button nx-button-secondary">
                Sign in
              </Link>

              <Link to="/signup" className="nx-button nx-button-primary">
                Get started <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                className="nx-menu-button"
                onClick={() => setMenuOpen((value) => !value)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>

        <main>
          <section className="nx-hero">
            <div className="nx-container nx-hero-grid">
              <div className="nx-hero-content">
                <span className="nx-eyebrow">
                  <span className="nx-eyebrow-dot" />
                  YOUR WORKSPACE, REIMAGINED
                  <Sparkles size={13} />
                </span>

                <h1>
                  Big ideas deserve
                  <br />
                  <span className="nx-gradient-text">better execution.</span>
                </h1>

                <p className="nx-hero-copy">
                  Meet the workspace that brings your projects, tasks,
                  and team together. Plan with clarity, stay focused,
                  and turn your next big idea into meaningful progress.
                </p>

                <div className="nx-hero-actions">
                  <Link to="/signup" className="nx-button nx-button-primary">
                    Start for free <ArrowRight size={17} />
                  </Link>

                  <a href="#features" className="nx-button nx-button-secondary">
                    Explore features <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="nx-trust-row">
                  <div className="nx-trust-avatars">
                    <span>OB</span>
                    <span>DB</span>
                    <span>SC</span>
                    <span>AM</span>
                  </div>

                  <span>Built for teams that want to do more</span>
                  <span className="nx-trust-stars">★★★★★</span>
                </div>
              </div>

              <div className="nx-hero-visual">
                <div className="nx-orb" />

                <div className="nx-float-note one">
                  <span className="nx-float-icon">
                    <CheckCircle2 size={17} />
                  </span>
                  <span>
                    <b>Task completed</b>
                    <small>Your team is on track</small>
                  </span>
                </div>

                <DashboardPreview />

                <div className="nx-float-note two">
                  <span className="nx-float-icon">
                    <BarChart3 size={17} />
                  </span>
                  <span>
                    <b>Productivity up 24%</b>
                    <small>Great progress this week</small>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="nx-trust-strip">
            <div className="nx-container">
              <p>Everything your team needs to move forward</p>
              <div className="nx-brand-row">
                <span><Layers3 size={18} /> WORKFLOW</span>
                <span><Command size={18} /> PRODUCTIVE</span>
                <span><ShieldCheck size={18} /> SECURE SPACE</span>
                <span><Target size={18} /> FOCUS FIRST</span>
                <span><Zap size={18} /> NEXORA</span>
              </div>
            </div>
          </section>

          <section className="nx-section" id="features">
            <div className="nx-container">
              <div className="nx-section-heading">
                <span className="nx-section-kicker">Everything in one place</span>
                <h2>
                  Less busywork.
                  <br />
                  <span className="nx-gradient-text">More meaningful work.</span>
                </h2>
                <p>
                  Replace scattered tools and unclear priorities with one
                  connected workspace designed to keep your team moving.
                </p>
              </div>

              <div className="nx-feature-grid">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <article className="nx-feature-card" key={feature.number}>
                      <div className={`nx-feature-icon ${feature.color}`}>
                        <Icon size={22} />
                      </div>
                      <span className="nx-feature-number">{feature.number}</span>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="nx-section nx-section-soft" id="about">
            <div className="nx-container nx-split">
              <div className="nx-split-visual">
                <div className="nx-plan-card">
                  <div className="nx-plan-head">
                    <h3>Website redesign</h3>
                    <span>On track</span>
                  </div>
                  <p className="nx-plan-subtitle">
                    Product team · Q4 launch
                  </p>

                  {[
                    ["Research and discovery", "Completed", true],
                    ["Design system", "In progress", false],
                    ["Build main pages", "Upcoming", false],
                    ["Final review", "Upcoming", false],
                  ].map(([title, status, complete]) => (
                    <div className="nx-plan-row" key={title}>
                      <span className="nx-plan-check">
                        {complete ? <Check size={14} /> : <Layers3 size={13} />}
                      </span>
                      <span>
                        <b>{title}</b>
                        <small>{status}</small>
                      </span>
                      <span className="nx-plan-tag">{complete ? "Done" : "Task"}</span>
                    </div>
                  ))}

                  <div className="nx-progress-box">
                    <div className="nx-progress-head">
                      <b>Overall progress</b>
                      <span>78%</span>
                    </div>
                    <div className="nx-progress-track">
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="nx-split-copy">
                <span className="nx-section-kicker">A better way to work</span>
                <h2>
                  Bring clarity to
                  <br />
                  your everyday work.
                </h2>
                <p>
                  Nexora helps you move from scattered tasks to a clear plan.
                  Keep your team aligned, understand priorities, and see the
                  progress behind every project.
                </p>

                <ul className="nx-check-list">
                  <li><CheckCircle2 size={17} /> Keep all your projects organized</li>
                  <li><CheckCircle2 size={17} /> Give everyone clear responsibilities</li>
                  <li><CheckCircle2 size={17} /> Track deadlines and team progress</li>
                  <li><CheckCircle2 size={17} /> Spend less time switching between tools</li>
                </ul>

                <Link to="/signup" className="nx-button nx-button-primary">
                  Explore your workspace <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          <section className="nx-section" id="how-it-works">
            <div className="nx-container">
              <div className="nx-section-heading">
                <span className="nx-section-kicker">Simple by design</span>
                <h2>From idea to done in three steps.</h2>
                <p>
                  Start with a goal, organize the work, and make progress
                  visible to everyone.
                </p>
              </div>

              <div className="nx-steps-grid">
                {steps.map((step) => (
                  <article className="nx-step" key={step.number}>
                    <span className="nx-step-number">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="nx-section nx-section-soft">
            <div className="nx-container">
              <div className="nx-stats">
                <div className="nx-stat">
                  <strong>24%</strong>
                  <span>More focused work</span>
                </div>
                <div className="nx-stat">
                  <strong>3.2x</strong>
                  <span>Clearer workflows</span>
                </div>
                <div className="nx-stat">
                  <strong>80%</strong>
                  <span>Better visibility</span>
                </div>
                <div className="nx-stat">
                  <strong>1 place</strong>
                  <span>For your team's work</span>
                </div>
              </div>
            </div>
          </section>

          <section className="nx-section" id="reviews">
            <div className="nx-container">
              <div className="nx-section-heading">
                <span className="nx-section-kicker">Team stories</span>
                <h2>Work feels better when it clicks.</h2>
                <p>
                  A workspace built around clarity, collaboration, and
                  meaningful progress.
                </p>
              </div>

              <div className="nx-testimonial-grid">
                {testimonials.map((item) => (
                  <article className="nx-testimonial" key={item.initials}>
                    <div className="nx-testimonial-stars">★★★★★</div>
                    <blockquote>“{item.quote}”</blockquote>
                    <div className="nx-person">
                      <span className={`nx-person-avatar ${item.color}`}>
                        {item.initials}
                      </span>
                      <span>
                        <b>{item.name}</b>
                        <small>{item.role}</small>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="nx-section nx-section-soft" id="faq">
            <div className="nx-container nx-faq-layout">
              <div className="nx-faq-intro">
                <span className="nx-section-kicker">Got questions?</span>
                <h2>
                  Good to know
                  <br />
                  before you begin.
                </h2>
                <p>
                  Find answers to common questions about the Nexora
                  workspace and its features.
                </p>

                <Link to="/signup" className="nx-button nx-button-secondary">
                  Try Nexora <ArrowRight size={15} />
                </Link>
              </div>

              <div className="nx-faq-list">
                {faqs.map((item, index) => (
                  <div className="nx-faq-item" key={item.question}>
                    <button
                      type="button"
                      className="nx-faq-question"
                      onClick={() =>
                        setOpenFaq((current) =>
                          current === index ? -1 : index
                        )
                      }
                      aria-expanded={openFaq === index}
                    >
                      {item.question}
                      <ChevronDown size={17} />
                    </button>

                    {openFaq === index && (
                      <div className="nx-faq-answer">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="nx-cta">
            <div className="nx-container">
              <div className="nx-cta-panel">
                <h2>Your next great project starts here.</h2>
                <p>
                  Bring your ideas, projects, and priorities into one
                  workspace. Get organized and take the next step with Nexora.
                </p>
                <Link to="/signup" className="nx-button">
                  Create your free account <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="nx-footer">
          <div className="nx-container">
            <div className="nx-footer-top">
              <div className="nx-footer-about">
                <Link to="/" className="nx-brand">
                  <span className="nx-brand-icon">
                    <Zap size={19} fill="currentColor" />
                  </span>
                  Nexora
                </Link>

                <p>
                  A clearer way to organize projects, collaborate with
                  your team, and make meaningful progress.
                </p>

                <Link to="/signup" className="nx-button nx-button-primary">
                  Get started <ArrowRight size={15} />
                </Link>
              </div>

              <div className="nx-footer-column">
                <h4>Explore</h4>
                <div className="nx-footer-links">
                  <a href="#features">Features</a>
                  <a href="#about">About Nexora</a>
                  <a href="#how-it-works">How it works</a>
                  <a href="#reviews">Reviews</a>
                </div>
              </div>

              <div className="nx-footer-column">
                <h4>Workspace</h4>
                <div className="nx-footer-links">
                  <Link to="/login">Sign in</Link>
                  <Link to="/signup">Create account</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/tasks">Tasks</Link>
                </div>
              </div>

              <div className="nx-footer-column">
                <h4>Help</h4>
                <div className="nx-footer-links">
                  <a href="#faq">Frequently asked questions</a>
                  <a href="mailto:hello@nexora.example">Contact</a>
                  <a href="#about">Our approach</a>
                </div>
              </div>
            </div>

            <div className="nx-footer-bottom">
              <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>

              <div className="nx-footer-socials">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Users size={15} />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Command size={15} />
                </a>

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
