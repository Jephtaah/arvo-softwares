"use client";

"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar } from "@/components/ui/avatar"

export default function Nav() {
  const pathname = usePathname()

  // In a real app, this would come from session/user data
  const isAuthenticated = true // Mock for demo
  const userName = "Alex Johnson" // Mock for demo

  return (
    <nav className="flex h-14 items-center justify-between px-4 border-b">
      {/* Left Side - Brand */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
          </svg>
          <span className="font-semibold text-lg">Arvo Reach</span>
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/dashboard"
          className={`
            flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
            ${pathname === "/dashboard" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted/50"}
          `}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
          </svg>
          <span>Dashboard</span>
        </Link>

        <Link
          href="/templates"
          className={`
            flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
            ${pathname === "/templates" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted/50"}
          `}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 6v14" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Templates</span>
        </Link>

        <Link
          href="/activity"
          className={`
            flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
            ${pathname === "/activity" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted/50"}
          `}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 17l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 12l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Activity</span>
        </Link>
      </div>

      {/* Right Side - User Actions */}
      <div className="flex items-center space-x-3">
        {isAuthenticated ? (
          <>
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted/50">
                <Avatar className="h-8 w-8">
                  <Avatar.Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
                </Avatar>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="ml-3 h-9 w-9 items-center justify-center rounded-full hover:bg-muted/50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="1" fill="currentColor"/>
                      <circle cx="12" cy="5" r="1" fill="currentColor"/>
                      <circle cx="12" cy="19" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
                    </svg>
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Templates</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Account Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 text-destructive">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <span className="ml-2 font-medium">{userName}</span>
          </>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted/50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
              </svg>
            </Link>
            <Link
              href="/auth/signin"
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-primary hover:bg-primary/90"
            >
              Sign in
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}