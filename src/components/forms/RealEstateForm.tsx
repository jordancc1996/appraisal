'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function RealEstateForm() {
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
          <Label htmlFor="propertyType">Property Type</Label>
          <select
            id="propertyType"
            className="w-full p-2 border rounded-md"
            {...register('propertyType', { required: 'Property type is required' })}
          >
            <option value="">Select property type</option>
            <option value="single-family">Single-Family Home</option>
            <option value="condo">Condominium</option>
            <option value="townhouse">Townhouse</option>
            <option value="multi-family">Multi-Family</option>
            <option value="vacant-land">Vacant Land</option>
            <option value="other">Other</option>
          </select>
          {errors.propertyType && (
            <p className="text-sm text-red-500">{errors.propertyType.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyAddress">Property Address</Label>
        <Input
          id="propertyAddress"
          placeholder="123 Main St, City, State, ZIP"
          {...register('propertyAddress', { required: 'Property address is required' })}
        />
        {errors.propertyAddress && (
          <p className="text-sm text-red-500">{errors.propertyAddress.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Services Needed</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="marketAnalysis"
              className="mr-2"
              {...register('services.marketAnalysis')}
            />
            <Label htmlFor="marketAnalysis" className="cursor-pointer">Market Analysis</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="listingSupport"
              className="mr-2"
              {...register('services.listingSupport')}
            />
            <Label htmlFor="listingSupport" className="cursor-pointer">Listing Support</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="buyerRepresentation"
              className="mr-2"
              {...register('services.buyerRepresentation')}
            />
            <Label htmlFor="buyerRepresentation" className="cursor-pointer">Buyer Representation</Label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="negotiationSupport"
              className="mr-2"
              {...register('services.negotiationSupport')}
            />
            <Label htmlFor="negotiationSupport" className="cursor-pointer">Negotiation Support</Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <select
            id="timeline"
            className="w-full p-2 border rounded-md"
            {...register('timeline', { required: 'Timeline is required' })}
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (within 1 week)</option>
            <option value="soon">Soon (1-4 weeks)</option>
            <option value="planning">Planning Phase (1-3 months)</option>
            <option value="future">Future (3+ months)</option>
          </select>
          {errors.timeline && (
            <p className="text-sm text-red-500">{errors.timeline.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range (if applicable)</Label>
          <Input
            id="budget"
            placeholder="e.g., $300,000 - $400,000"
            {...register('budget')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Additional Information</Label>
        <Textarea
          id="comments"
          placeholder="Please provide any additional details about your real estate needs..."
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
