import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AppraisalForm } from '@/components/forms/AppraisalForm'

export default function AppraisalsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="font-bold">Residential Appraisal Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional property valuations with detailed reports and fast turnaround times
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#appraisal-form">Request an Appraisal</a>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] bg-muted rounded-lg">
              {/* Placeholder for appraisal image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Appraisal Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2>Comprehensive Appraisal Services</h2>
              <p className="text-muted-foreground">
                Our residential appraisal services provide accurate, reliable property valuations for a variety of needs. Whether you're buying, selling, refinancing, or need a value assessment for other purposes, our certified appraisers deliver detailed reports that meet industry standards.
              </p>
              
              <h3 className="text-xl font-medium mt-8">Our Appraisal Process</h3>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">1. Initial Consultation</h4>
                  <p className="text-muted-foreground">We discuss your specific needs and timeline to ensure we provide the right appraisal service.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">2. Property Inspection</h4>
                  <p className="text-muted-foreground">Our appraiser visits the property to assess its condition, features, and characteristics.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">3. Market Analysis</h4>
                  <p className="text-muted-foreground">We research comparable properties and market trends to determine fair market value.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">4. Report Preparation</h4>
                  <p className="text-muted-foreground">A detailed appraisal report is prepared with supporting documentation and analysis.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">5. Report Delivery</h4>
                  <p className="text-muted-foreground">The final report is delivered to you, with our appraiser available to answer any questions.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-8">Types of Appraisals We Offer</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Single-family home appraisals</li>
                <li>Condominium and townhouse appraisals</li>
                <li>Multi-family property appraisals</li>
                <li>Vacant land appraisals</li>
                <li>Pre-listing appraisals</li>
                <li>Refinance appraisals</li>
                <li>Estate planning and settlement appraisals</li>
                <li>Tax assessment appeal appraisals</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Why Choose Our Appraisal Services</h3>
                <ul className="space-y-3">
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
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Local market expertise</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Competitive pricing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-4">Pricing Information</h3>
                <p className="text-muted-foreground mb-4">Our appraisal fees vary based on property type, size, and complexity. Contact us for a specific quote.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Single-family homes</span>
                    <span className="font-medium">From $350</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Condos & Townhouses</span>
                    <span className="font-medium">From $300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Multi-family properties</span>
                    <span className="font-medium">From $450</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rush service</span>
                    <span className="font-medium">+$100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">How long does an appraisal take?</h3>
              <p className="text-muted-foreground">Most residential appraisals are completed within 3-5 business days after the property inspection. Rush services are available for time-sensitive situations.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Do I need to be present for the appraisal inspection?</h3>
              <p className="text-muted-foreground">It's not required, but you're welcome to be present. We just need access to the property to conduct the inspection.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">What factors affect my property's value?</h3>
              <p className="text-muted-foreground">Location, property size, condition, features, recent improvements, and comparable sales in your area all impact your property's appraised value.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Can I get a copy of the appraisal report?</h3>
              <p className="text-muted-foreground">Yes, you'll receive a complete copy of the appraisal report, which includes detailed information about your property and the valuation process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="appraisal-form" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Request a Residential Appraisal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to request an appraisal. We'll contact you promptly to discuss your needs.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <AppraisalForm />
          </div>
        </div>
      </section>
    </main>
  )
}
