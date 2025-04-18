import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center text-center md:text-left">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h1 className="font-bold">Professional Residential Appraisal Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Expert appraisals, real estate support, and mortgage financing serving Philadelphia, Delaware County, and Montgomery County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/services/appraisals">Get an Appraisal</Link>
              </Button>
              <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground">
                <Link href="/services/real-estate">Real Estate Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services/mortgage">Mortgage Financing</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative h-[200px] md:h-[280px] w-[80%] overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/four_seasons_philadelphia.jpeg" 
                alt="Four Seasons Hotel Philadelphia - Luxury Residential Property" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
