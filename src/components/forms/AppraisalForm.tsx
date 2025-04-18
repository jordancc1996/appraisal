'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export function AppraisalForm() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="appraisalReason">Reason for Appraisal</Label>
          <select
            id="appraisalReason"
            className="w-full p-2 border rounded-md"
            {...register('appraisalReason', { required: 'Reason is required' })}
          >
            <option value="">Select reason</option>
            <option value="purchase">Home Purchase</option>
            <option value="refinance">Refinance</option>
            <option value="selling">Selling Property</option>
            <option value="estate">Estate Planning</option>
            <option value="tax">Tax Assessment Appeal</option>
            <option value="other">Other</option>
          </select>
          {errors.appraisalReason && (
            <p className="text-sm text-red-500">{errors.appraisalReason.message}</p>
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
            <option value="urgent">Urgent (1-2 days)</option>
            <option value="standard">Standard (3-5 days)</option>
            <option value="flexible">Flexible (1-2 weeks)</option>
          </select>
          {errors.timeline && (
            <p className="text-sm text-red-500">{errors.timeline.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Additional Comments</Label>
        <Textarea
          id="comments"
          placeholder="Please provide any additional information that might be helpful..."
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
