"use client"

import { Home, User, Briefcase, Code, FolderOpen, Mail } from "lucide-react"
import { FloatingNav } from "./FloatingNav"

const navItems = [
  { name: "Home", link: "#home", icon: <Home size={18} /> },
  { name: "About", link: "#about", icon: <User size={18} /> },
  { name: "Experience", link: "#experience", icon: <Briefcase size={18} /> },
  { name: "Skills", link: "#skills", icon: <Code size={18} /> },
  { name: "Projects", link: "#projects", icon: <FolderOpen size={18} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={18} /> },
]

export default function Navigation() {
  return (
    <FloatingNav navItems={navItems} />
  )
}
