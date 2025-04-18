import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">What People Are Saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Testimonial 1 */}
          <div className="bg-card rounded-lg p-6 shadow-sm text-center flex flex-col items-center w-full">
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-cta text-cta" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "The appraisal was completed quickly and professionally. The report was thorough and helped us make an informed decision about our property value."
            </p>
            <div className="font-medium">Michael T.</div>
            <div className="text-sm text-muted-foreground">Homeowner</div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-card rounded-lg p-6 shadow-sm text-center flex flex-col items-center w-full">
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-cta text-cta" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "Their real estate sales support was invaluable during our home selling process. The market analysis was spot on and helped us price our home correctly."
            </p>
            <div className="font-medium">Jennifer L.</div>
            <div className="text-sm text-muted-foreground">Home Seller</div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-card rounded-lg p-6 shadow-sm text-center flex flex-col items-center w-full">
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-cta text-cta" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "The mortgage financing options they provided were competitive and tailored to our needs. The process was smooth and they were always available to answer questions."
            </p>
            <div className="font-medium">David and Sarah K.</div>
            <div className="text-sm text-muted-foreground">First-time Homebuyers</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="/reviews" className="text-primary hover:underline">
            See all reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
