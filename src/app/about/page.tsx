'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="mb-6">About Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              At GG Appraisals, we provide reliable, objective, and professional residential real estate appraisal services. Founded by Jordan Chaplin, a seasoned appraiser with vast experience in both the Arizona and Philadelphia markets, our firm is built on a foundation of integrity, precision, and market expertise.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-8">
              <div className="w-full md:w-1/2 max-w-md">
                <Image 
                  src="/images/phoenix_skyline.webp" 
                  alt="Downtown Phoenix, Arizona" 
                  width={400} 
                  height={267} 
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2">Downtown Phoenix, Arizona</p>
              </div>
              <div className="w-full md:w-1/2 max-w-md">
                <Image 
                  src="/images/philadelphia_skyline.webp" 
                  alt="Downtown Philadelphia, Pennsylvania" 
                  width={400} 
                  height={267} 
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2">Downtown Philadelphia, Pennsylvania</p>
              </div>
            </div>
            
            <p className="text-lg mb-6">
              Jordan brings years of hands-on valuation experience across a wide range of property types, neighborhoods, and market conditions. His background in appraising properties in diverse regions—from the desert landscapes of Arizona to the dense urban fabric of Philadelphia—gives him a unique perspective and a deep understanding of value across markets.
            </p>
            
            <p className="text-lg mb-6">
              At GG Appraisals, we're committed to delivering high-quality appraisal reports that meet industry standards and support confident decision-making for lenders, homeowners, investors, and developers. Whether you're purchasing, refinancing, or planning a development, we bring a level of care and local knowledge that ensures accuracy and credibility in every report.
            </p>
            
            <p className="text-lg mb-8">
              Your trust is our priority. Let our expertise guide your next real estate decision.
            </p>
            
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
