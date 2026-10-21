import Sidebar from "./Sidebar";

export default function MobileMenu({ open, onClose }) {
  return <Sidebar mobileOpen={open} onClose={onClose} />;
}