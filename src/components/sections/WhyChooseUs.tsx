import { CheckCircle, Clock, Award } from 'lucide-react'
import { Star } from 'lucide-react'

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, technology, and personalized service to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Experienced Appraisers */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Experienced Appraisers</h3>
            <p className="text-muted-foreground">
              Our team consists of certified professionals with years of experience in residential property appraisal and real estate.
            </p>
          </div>
          
          {/* Fast Turnaround */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Fast Turnaround</h3>
            <p className="text-muted-foreground">
              We understand the importance of timely service and strive to deliver quick results without compromising quality.
            </p>
          </div>
          
          {/* Competitive Pricing */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Competitive Pricing</h3>
            <p className="text-muted-foreground">
              We offer transparent, competitive pricing for all our services with no hidden fees or surprises.
            </p>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 bg-card rounded-lg p-8 shadow-sm max-w-3xl mx-auto text-center">
          <div className="flex mb-4 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-cta text-cta" />
            ))}
          </div>
          <p className="italic text-muted-foreground mb-4">
            "The team at GG Appraisals provided exceptional service for our home appraisal. They were professional, thorough, and delivered the report faster than expected. Highly recommended!"
          </p>
          <div className="font-medium">Sarah Johnson, Homeowner</div>
        </div>
      </div>
    </section>
  )
}
