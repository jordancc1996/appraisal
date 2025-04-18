import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MortgageForm } from '@/components/forms/MortgageForm'

export default function MortgagePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="font-bold">Mortgage Financing</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Personalized mortgage solutions with competitive rates and expert guidance
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#mortgage-form">Get Financing Options</a>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/mortgage-financing.jpg" 
                alt="Mortgage Financing - House made of money" 
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
              <h2>Comprehensive Mortgage Financing Solutions</h2>
              <p className="text-muted-foreground">
                Our mortgage financing services provide personalized solutions to help you secure the best possible terms for your home purchase or refinance. We work with multiple lenders to find competitive rates and financing options tailored to your specific financial situation and goals.
              </p>
              
              <h3 className="text-xl font-medium mt-8">Our Mortgage Services</h3>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Home Purchase Loans</h4>
                  <p className="text-muted-foreground">Financing options for buying a new home, including conventional loans with flexible terms.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Refinancing</h4>
                  <p className="text-muted-foreground">Options to lower your interest rate, reduce monthly payments, or access equity in your home.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">First-Time Homebuyer Programs</h4>
                  <p className="text-muted-foreground">Special programs and assistance for first-time homebuyers, including down payment assistance.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Rate Comparison</h4>
                  <p className="text-muted-foreground">We shop multiple lenders to find the most competitive rates and terms for your situation.</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium">Mortgage Consultation</h4>
                  <p className="text-muted-foreground">Expert guidance to help you understand your options and make informed decisions.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mt-8">Loan Types We Offer</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Conventional Loans (Fixed and Adjustable Rate)</li>
                <li>Construction Loans</li>
                <li>Home Equity Loans and Lines of Credit</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-8">Our Mortgage Process</h3>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Initial consultation to understand your needs and financial situation</li>
                <li>Pre-qualification to determine your borrowing capacity</li>
                <li>Loan options comparison from multiple lenders</li>
                <li>Application assistance and document preparation</li>
                <li>Loan processing and underwriting coordination</li>
                <li>Closing preparation and guidance</li>
              </ol>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Why Choose Our Mortgage Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Access to multiple lenders and loan programs</span>
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
                    <span className="text-muted-foreground">Personalized guidance throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Transparent communication and no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">Streamlined application process</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-4">Current Mortgage Rates</h3>
                <p className="text-muted-foreground mb-4">Sample rates as of today (rates subject to change based on market conditions and individual qualifications):</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>30-Year Fixed</span>
                    <span className="font-medium">5.125%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>15-Year Fixed</span>
                    <span className="font-medium">4.375%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5/1 ARM</span>
                    <span className="font-medium">4.250%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Rates shown are for illustrative purposes only. Actual rates may vary based on credit score, loan amount, down payment, and other factors.
                </p>
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
              <h3 className="text-lg font-medium mb-2">How much down payment do I need?</h3>
              <p className="text-muted-foreground">Down payment requirements vary by loan type. Conventional loans typically require 3-20% down payment, though specific requirements depend on your financial situation and the property being purchased.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">What factors affect my mortgage rate?</h3>
              <p className="text-muted-foreground">Several factors influence your rate, including credit score, loan-to-value ratio, loan type, loan term, loan amount, property type, and current market conditions.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">How long does the mortgage process take?</h3>
              <p className="text-muted-foreground">The typical mortgage process takes 30-45 days from application to closing, though this can vary based on loan type, property issues, and current lender volume.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">What's the difference between pre-qualification and pre-approval?</h3>
              <p className="text-muted-foreground">Pre-qualification is an informal estimate of what you might qualify for based on self-reported information. Pre-approval involves a formal application, credit check, and document verification, resulting in a more reliable indication of your borrowing capacity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="mortgage-form" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Request Mortgage Financing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to request mortgage financing options. We'll contact you promptly to discuss your needs.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <MortgageForm />
          </div>
        </div>
      </section>
    </main>
  )
}
