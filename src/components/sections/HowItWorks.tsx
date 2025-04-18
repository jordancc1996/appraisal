import { ClipboardList, Search, FileCheck, Send } from 'lucide-react'

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple process makes it easy to get the services you need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <ClipboardList className="h-6 w-6 text-primary" />
            </div>
            <div className="text-xl font-medium mb-2">Step 1</div>
            <h3 className="text-lg font-medium mb-2">Request Service</h3>
            <p className="text-muted-foreground">
              Fill out our simple online form with your information and service needs.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <div className="text-xl font-medium mb-2">Step 2</div>
            <h3 className="text-lg font-medium mb-2">Initial Consultation</h3>
            <p className="text-muted-foreground">
              Our experts will contact you to discuss your specific requirements.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <div className="text-xl font-medium mb-2">Step 3</div>
            <h3 className="text-lg font-medium mb-2">Service Execution</h3>
            <p className="text-muted-foreground">
              We perform the requested service with attention to detail and quality.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <div className="text-xl font-medium mb-2">Step 4</div>
            <h3 className="text-lg font-medium mb-2">Delivery</h3>
            <p className="text-muted-foreground">
              Receive your completed appraisal, support, or financing solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
