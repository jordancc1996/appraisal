import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          We provide comprehensive services to meet all your residential property needs, from professional appraisals to real estate support and mortgage financing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Residential Appraisals</h2>
            <p className="text-muted-foreground mb-6">
              Professional property valuations for homes, condos, and multi-family properties with detailed reports.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Certified professional appraisers</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Detailed, accurate reports</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Fast turnaround times</span>
              </li>
            </ul>
            <Link href="/services/appraisals" className="text-primary font-medium hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Real Estate Sales Support</h2>
            <p className="text-muted-foreground mb-6">
              Expert guidance for buying or selling properties, including market analysis and negotiation support.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Market analysis and pricing strategy</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Property preparation guidance</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Negotiation and transaction support</span>
              </li>
            </ul>
            <Link href="/services/real-estate" className="text-primary font-medium hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Mortgage Financing</h2>
            <p className="text-muted-foreground mb-6">
              Comprehensive mortgage solutions with competitive rates and personalized financing options.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Access to multiple lenders</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Competitive rates and terms</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Personalized guidance</span>
              </li>
            </ul>
            <Link href="/services/mortgage" className="text-primary font-medium hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
