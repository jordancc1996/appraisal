import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GG Appraisals</h3>
            <p className="text-sm opacity-80">
              Expert residential appraisals, real estate support, and mortgage financing serving Philadelphia, Delaware County, and Montgomery County.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-80 hover:opacity-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm opacity-80 hover:opacity-100">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/appraisals" className="text-sm opacity-80 hover:opacity-100">
                  Residential Appraisals
                </Link>
              </li>
              <li>
                <Link href="/services/real-estate" className="text-sm opacity-80 hover:opacity-100">
                  Real Estate Sales Support
                </Link>
              </li>
              <li>
                <Link href="/services/mortgage" className="text-sm opacity-80 hover:opacity-100">
                  Mortgage Financing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Subscribe</h4>
            <p className="text-sm opacity-80 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-foreground bg-background"
              />
              <Button className="bg-cta hover:bg-cta/90 text-cta-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} GG Appraisals. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm opacity-80 hover:opacity-100">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm opacity-80 hover:opacity-100">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
