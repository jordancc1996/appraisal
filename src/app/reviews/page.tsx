'use client'

import { Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Philadelphia, PA',
      text: 'Jordan at GG Appraisals provided an incredibly thorough and professional appraisal for our home refinance. The report was detailed, delivered on time, and exactly what our lender needed. Highly recommend!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'Montgomery County, PA',
      text: 'We needed an appraisal quickly for a time-sensitive purchase, and GG Appraisals came through for us. Jordan was responsive, professional, and provided a comprehensive report that helped us make an informed decision.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jennifer Williams',
      location: 'Delaware County, PA',
      text: 'As a real estate agent, I rely on accurate appraisals to close deals. GG Appraisals consistently delivers reliable, well-researched reports that stand up to scrutiny. They\'ve become my go-to appraisal service in the Philadelphia area.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Philadelphia, PA',
      text: 'Jordan\'s experience in both Arizona and Philadelphia markets gave us confidence in his valuation of our investment property. The appraisal was detailed, fair, and helped us secure financing. Excellent service!',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Chen',
      location: 'Montgomery County, PA',
      text: 'GG Appraisals provided exceptional service for our home appraisal. The process was smooth, communication was clear, and the final report was comprehensive and delivered ahead of schedule. Would definitely use again!',
      rating: 5,
    },
    {
      id: 6,
      name: 'Robert Garcia',
      location: 'Delaware County, PA',
      text: 'I needed an appraisal for a property tax appeal, and Jordan at GG Appraisals delivered a detailed, well-supported report that helped me successfully reduce my assessment. Professional, knowledgeable, and worth every penny.',
      rating: 5,
    },
  ]

  return (
    <main className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="mb-6">Client Reviews</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients in Philadelphia, Delaware County, and Montgomery County have to say about our appraisal services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-4 italic">"{review.text}"</blockquote>
              <div className="text-sm">
                <p className="font-semibold">{review.name}</p>
                <p className="text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Experience Our 5-Star Service?</h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
