import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RealEstateForm } from '@/components/forms/RealEstateForm'

export default function RealEstatePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="font-bold">Real Estate Sales Support</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Expert guidance and support for buying or selling your residential property
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#real-estate-form">Get Sales Support</a>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/real-estate-sales.jpg" 
                alt="Real Estate Sales - Home with For Sale sign and financial transaction" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2>Comprehensive Real Estate Sales Support</h2>
              <p className="text-muted-foreground">
                Our real estate sales support services provide expert guidance throughout the buying or selling process. Whether you're a first-time homebuyer, looking to upgrade, or selling your property, our experienced team offers personalized support to help you achieve your real estate goals.
              </p>
              
              <h3 className="text-xl font-medium mt-8">Our Real Estate Services</h3>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Market Analysis</h4>
                  <p className="text-muted-foreground">Comprehensive analysis of local market trends, property values, and competitive positioning to help you make informed decisions.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Pricing Strategy</h4>
                  <p className="text-muted-foreground">Expert guidance on pricing your property to maximize value while ensuring competitive positioning in the current market.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Property Preparation</h4>
                  <p className="text-muted-foreground">Recommendations for property improvements, staging, and presentation to enhance appeal and value.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Negotiation Support</h4>
                  <p className="text-muted-foreground">Professional negotiation assistance to help you secure the best possible terms and price.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Transaction Guidance</h4>
                  <p className="text-muted-foreground">Step-by-step support throughout the entire transaction process, from offer to closing.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-8">For Sellers</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Comparative market analysis to determine optimal listing price</li>
                <li>Property preparation and staging recommendations</li>
                <li>Professional photography and marketing materials</li>
                <li>Listing strategy and exposure planning</li>
                <li>Offer review and negotiation support</li>
                <li>Closing coordination and documentation assistance</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-8">For Buyers</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Needs assessment and property search assistance</li>
                <li>Property viewing coordination and evaluation</li>
                <li>Market value analysis for potential purchases</li>
                <li>Offer preparation and submission</li>
                <li>Negotiation strategy and support</li>
                <li>Inspection and due diligence coordination</li>
                <li>Closing preparation and guidance</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Why Choose Our Real Estate Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Experienced real estate professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">In-depth local market knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Personalized service and support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Strong negotiation skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Transparent communication</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-4">Our Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-medium">Initial Consultation</h4>
                      <p className="text-sm text-muted-foreground">We discuss your goals, timeline, and specific needs.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-medium">Strategy Development</h4>
                      <p className="text-sm text-muted-foreground">We create a customized plan based on your situation.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-medium">Implementation</h4>
                      <p className="text-sm text-muted-foreground">We execute the plan with regular updates and guidance.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-medium">Transaction Completion</h4>
                      <p className="text-sm text-muted-foreground">We ensure a smooth closing process and successful outcome.</p>
                    </div>
                  </li>
                </ol>
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
              <h3 className="text-lg font-medium mb-2">How is your service different from a traditional real estate agent?</h3>
              <p className="text-muted-foreground">We provide specialized support services that complement traditional real estate transactions. Our focus is on providing expert guidance, market analysis, and negotiation support without the full commission structure of traditional agents.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">What fees do you charge for real estate support services?</h3>
              <p className="text-muted-foreground">Our fees vary based on the specific services you need. We offer both package options and hourly consulting rates. During our initial consultation, we'll discuss your needs and provide transparent pricing information.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">How long does the selling process typically take?</h3>
              <p className="text-muted-foreground">The timeline varies depending on market conditions, property type, location, and pricing strategy. On average, homes sell within 30-60 days in our market, but we'll provide a more specific estimate based on your property and current market conditions.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Can you help with both buying and selling simultaneously?</h3>
              <p className="text-muted-foreground">Yes, we offer comprehensive support for clients who are selling their current home while purchasing a new one. We'll help coordinate the timing and logistics to make the transition as smooth as possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="real-estate-form" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Request Real Estate Sales Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to request our real estate sales support services. We'll contact you promptly to discuss your needs.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <RealEstateForm />
          </div>
        </div>
      </section>
    </main>
  )
}
