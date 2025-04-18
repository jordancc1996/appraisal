'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "What is a residential appraisal?",
      answer: "A residential appraisal is a professional assessment of a property's value. Our certified appraisers evaluate factors like location, size, condition, and recent comparable sales to determine the fair market value of your property."
    },
    {
      question: "How long does an appraisal take?",
      answer: "Most residential appraisals are completed within 3-5 business days after the property inspection. Rush services are available for time-sensitive situations at an additional fee."
    },
    {
      question: "What services are included in real estate sales support?",
      answer: "Our real estate sales support includes market analysis, pricing strategy, marketing recommendations, negotiation assistance, and guidance throughout the selling process to help you maximize your property's value."
    },
    {
      question: "How do I know which mortgage financing option is right for me?",
      answer: "Our mortgage financing experts will assess your financial situation, goals, and preferences to recommend the best options. We consider factors like interest rates, loan terms, down payment requirements, and your long-term financial plans."
    },
    {
      question: "Do you offer services for commercial properties?",
      answer: "Currently, we specialize in residential properties. However, we can refer you to trusted partners who provide commercial property services if needed."
    },
    {
      question: "What information do I need to provide for an appraisal?",
      answer: "For an appraisal, we'll need basic property information (address, property type, size), your contact details, and the reason for the appraisal. Any additional documentation like recent renovations or improvements is helpful but not required."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b">
              <button
                className="flex justify-between items-center w-full py-4 text-left font-medium"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 text-muted-foreground">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
