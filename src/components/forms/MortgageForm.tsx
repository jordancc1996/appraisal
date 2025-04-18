'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function MortgageForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Here we would handle form submission, e.g., sending data to an API
    alert('Form submitted successfully! We will contact you shortly.')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="(123) 456-7890"
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="loanPurpose">Loan Purpose</Label>
          <select
            id="loanPurpose"
            className="w-full p-2 border rounded-md"
            {...register('loanPurpose', { required: 'Loan purpose is required' })}
          >
            <option value="">Select purpose</option>
            <option value="purchase">Purchase</option>
            <option value="refinance">Refinance</option>
            <option value="homeEquity">Home Equity</option>
            <option value="construction">Construction</option>
          </select>
          {errors.loanPurpose && (
            <p className="text-sm text-red-500">{errors.loanPurpose.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyAddress">Property Address (if applicable)</Label>
        <Input
          id="propertyAddress"
          placeholder="123 Main St, City, State, ZIP"
          {...register('propertyAddress')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="estimatedValue">Estimated Property Value</Label>
          <Input
            id="estimatedValue"
            placeholder="$300,000"
            {...register('estimatedValue', { required: 'Estimated value is required' })}
          />
          {errors.estimatedValue && (
            <p className="text-sm text-red-500">{errors.estimatedValue.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="desiredLoanAmount">Desired Loan Amount</Label>
          <Input
            id="desiredLoanAmount"
            placeholder="$240,000"
            {...register('desiredLoanAmount', { required: 'Loan amount is required' })}
          />
          {errors.desiredLoanAmount && (
            <p className="text-sm text-red-500">{errors.desiredLoanAmount.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="creditScore">Credit Score Range</Label>
          <select
            id="creditScore"
            className="w-full p-2 border rounded-md"
            {...register('creditScore', { required: 'Credit score range is required' })}
          >
            <option value="">Select range</option>
            <option value="excellent">Excellent (740+)</option>
            <option value="good">Good (700-739)</option>
            <option value="fair">Fair (650-699)</option>
            <option value="below">Below 650</option>
            <option value="unknown">Not Sure</option>
          </select>
          {errors.creditScore && (
            <p className="text-sm text-red-500">{errors.creditScore.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <select
            id="timeline"
            className="w-full p-2 border rounded-md"
            {...register('timeline', { required: 'Timeline is required' })}
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (within 30 days)</option>
            <option value="soon">Soon (1-3 months)</option>
            <option value="planning">Planning Phase (3-6 months)</option>
            <option value="future">Future (6+ months)</option>
          </select>
          {errors.timeline && (
            <p className="text-sm text-red-500">{errors.timeline.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Additional Information</Label>
        <Textarea
          id="comments"
          placeholder="Please provide any additional details about your financing needs..."
          rows={4}
          {...register('comments')}
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Submit Request
      </Button>
    </form>
  )
}
