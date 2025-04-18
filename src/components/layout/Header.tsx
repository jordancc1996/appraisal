'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            GG Appraisals
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <div className="relative group">
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
              <div className="bg-background rounded-md shadow-md p-2 w-48">
                <Link href="/services/appraisals" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                  Residential Appraisals
                </Link>
                <Link href="/services/real-estate" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                  Real Estate Sales Support
                </Link>
                <Link href="/services/mortgage" className="block px-3 py-2 text-sm hover:bg-muted rounded-md">
                  Mortgage Financing
                </Link>
              </div>
            </div>
          </div>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Link href="/reviews" className="text-sm font-medium hover:text-primary">
            Reviews
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button className="bg-cta hover:bg-cta/90 text-cta-foreground">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <div>
              <div className="text-sm font-medium mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link href="/services/appraisals" className="block text-sm" onClick={() => setIsMenuOpen(false)}>
                  Residential Appraisals
                </Link>
                <Link href="/services/real-estate" className="block text-sm" onClick={() => setIsMenuOpen(false)}>
                  Real Estate Sales Support
                </Link>
                <Link href="/services/mortgage" className="block text-sm" onClick={() => setIsMenuOpen(false)}>
                  Mortgage Financing
                </Link>
              </div>
            </div>
            <Link href="/about" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/reviews" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </Link>
            <Link href="/contact" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-cta hover:bg-cta/90 text-cta-foreground" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
