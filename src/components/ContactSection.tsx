import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast';
import { emailFormSchema } from './../app/lib/validator';
import * as z from 'zod'

type ContactProps = {
  darkMode: boolean;
};

type EmailForm = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
  subject: string;
};

const ContactSection = (props: ContactProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EmailForm>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phone: '',
      subject: ''
    },
    resolver: zodResolver(emailFormSchema),
  });

  const sendEmail = async (data: Record<string, string>) => {
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.status === 200) {
        toast.success(`Hey ${data.firstName}, your message has been sent!`);
      }
    } catch (error: z.ZodError | any) {
      toast.error('Validation error:', error);
      toast.error('Please fill in the form correctly.');
    }
  };

  return (
    <section className='pt-12 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Contact</h1>
        </div>
        {/* Contact content */}
        <div className='flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-4'>
          <div className='flex flex-1 text-black flex-col'>
            <h1 className='dark:text-white'>Contact Us</h1>
            <form onSubmit={handleSubmit(sendEmail)}>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                  <input
                    type="text"
                    {...register('firstName')}
                    disabled={isSubmitting}
                    placeholder="First Name"
                    className={`p-2 rounded-md w-1/2 border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-300' : ''}`}
                  />
                  {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                  <input
                    type="text"
                    {...register('lastName')}
                    disabled={isSubmitting}
                    placeholder="Last Name"
                    className={`p-2 rounded-md w-1/2 border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-300' : ''}`}
                  />
                  {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                </div>
                <div className='flex gap-4'>
                  <input
                    type="text"
                    {...register('email')}
                    disabled={isSubmitting}
                    placeholder="Email"
                    className={`p-2 rounded-md w-1/2 border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-300' : ''}`}
                  />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                  <input
                    type="text"
                    {...register('phone')}
                    disabled={isSubmitting}
                    placeholder="Phone (optional)"
                    className={`p-2 rounded-md w-1/2 border-2 border-gray-200 ${isSubmitting ? 'bg-gray-300' : ''}`}
                  />
                </div>
                <input
                  type="text"
                  {...register('subject')}
                  disabled={isSubmitting}
                  placeholder="Subject"
                  className={`p-2 rounded-md border-2 ${errors.subject ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-300' : ''}`}
                />
                {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                <textarea
                  {...register('message')}
                  disabled={isSubmitting}
                  placeholder="Message"
                  className={`p-2 rounded-md border-2 ${errors.message ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-300' : ''}`}
                />
                {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                <button type="submit" disabled={isSubmitting} className={`p-2 rounded-md ${isSubmitting ? 'bg-gray-300' : 'bg-blue-500'} text-white`}>
                  {isSubmitting ? 'Loading' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
