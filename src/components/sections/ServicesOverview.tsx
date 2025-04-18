import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, FileText, DollarSign } from 'lucide-react'

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive services to meet all your residential property needs in Philadelphia, Delaware County, and Montgomery County
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Residential Appraisals */}
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Residential Appraisals</h3>
            <p className="text-muted-foreground mb-4">
              Professional property valuations for homes, condos, and multi-family properties with detailed reports.
            </p>
            <Button asChild variant="link" className="p-0 mt-auto">
              <Link href="/services/appraisals">Learn More →</Link>
            </Button>
          </div>
          
          {/* Real Estate Sales Support */}
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Home className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Real Estate Sales Support</h3>
            <p className="text-muted-foreground mb-4">
              Expert guidance for buying or selling properties, including market analysis and negotiation support.
            </p>
            <Button asChild variant="link" className="p-0 mt-auto">
              <Link href="/services/real-estate">Learn More →</Link>
            </Button>
          </div>
          
          {/* Mortgage Financing */}
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Mortgage Financing</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive mortgage solutions with competitive rates and personalized financing options.
            </p>
            <Button asChild variant="link" className="p-0 mt-auto">
              <Link href="/services/mortgage">Learn More →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
