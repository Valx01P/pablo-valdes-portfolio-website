import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast';
import { emailFormSchema } from './../app/lib/validator';
import Image from 'next/image'
import Link from 'next/link'
import * as z from 'zod'

type ContactProps = {
  darkMode: boolean;
  swagMode: boolean;
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

  const githubIconFileName = props.darkMode ? 'github-light-2.svg' : 'github-dark-2.svg';
  const linkedinIconFileName = props.darkMode ? 'linkedin-light.svg' : 'linkedin-dark.svg';

  return (
    <section id='contact' className='pt-12 pb-24 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold max-[420px]:text-4xl'>Contact</h1>
        </div>
        {/* Contact content */}
        <div className={`${props.swagMode && "swag-bg"} flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-4`}>
          <div className='flex flex-1 text-black flex-col'>
            <div className='flex max-[1200px]:flex-col flex-row'>
              {/* CTA */}
              <div className='flex flex-col max-[1200px]:w-full max-[1200px]:pb-12 max-[1200px]:text-center max-[1200px]:pr-0 w-1/2 pr-16 gap-2'>
                <h1 className='text-black dark:text-white text-4xl roboto-bold max-[420px]:text-2xl'>Get In Touch</h1>
                <p className='dark:text-white flex text-2xl max-[420px]:text-lg'>Have a question or want to work together? Send me a message and let&apos;s talk!</p>
                <h1 className='text-black dark:text-white text-4xl roboto-bold pt-8 max-[420px]:text-xl'>Availability</h1>
                <p className='dark:text-white flex text-2xl max-[420px]:text-lg'>Currently available for freelance or full-time positions. Contact me for any inquiries.</p>
                <div>
                  <h1 className='text-black dark:text-white text-4xl roboto-bold flex-1 pt-8 max-[420px]:text-xl'>Let&apos;s Connect!</h1>
                  <div className='flex max-[1200px]:justify-center justify-start items-center gap-4 pt-3'>
                    <Link href='https://github.com/Valx01P' title='View my Github profile' className='flex text-black max-[420px]:hidden'>
                      <Image src={`/${githubIconFileName}`} width={45} height={45} alt="github icon" className='hover:scale-125' />
                    </Link>
                    <Link href='https://linkedin.com/in/your-linkedin-profile' title='View my LinkedIn profile' className='flex text-black max-[420px]:hidden'>
                      <Image src={`/${linkedinIconFileName}`} width={48} height={48} alt="linkedin icon" className='hover:scale-125' />
                    </Link>
                    <Link href='https://github.com/Valx01P' className='flex text-black min-[420px]:hidden'>
                      <Image src={`/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125' />
                    </Link>
                    <Link href='https://linkedin.com/in/your-linkedin-profile' className='flex text-black min-[420px]:hidden'>
                      <Image src={`/${linkedinIconFileName}`} width={32} height={32} alt="linkedin icon" className='hover:scale-125' />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Form Start */}
              <div className='flex flex-1 justify-center items-center'>
                <form onSubmit={handleSubmit(sendEmail)} className={`${props.swagMode && "swag-bg-contact"} flex max-[1200px]:w-full w-min background-contact p-8 rounded-lg`}>
                  <div className='flex flex-1 flex-col gap-4 max-[200px]:w-1/5 max-[250px]:w-1/4 max-[290px]:w-1/3 max-[420px]:w-1/2 max-[380px]:w-2/3 max-[440px]:w-4/5'>
                    {/* First Name & Last Name Inputs */}
                    <div className='flex gap-4 max-[720px]:flex-col'>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-white text-lg max-[420px]:text-sm'>First Name</p>
                        <input
                          type="text"
                          {...register('firstName')}
                          disabled={isSubmitting}
                          placeholder="First Name"
                          className={`p-2 rounded-md border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                        <div>
                          {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                        </div>
                      </div>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-white text-lg max-[420px]:text-sm'>Last Name</p>
                        <input
                          type="text"
                          {...register('lastName')}
                          disabled={isSubmitting}
                          placeholder="Last Name" className={`p-2 rounded-md border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                        <div>
                          {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Email & Phone Inputs */}
                    <div className='flex gap-4 max-[720px]:flex-col'>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-white text-lg max-[420px]:text-sm'>Email</p>
                        <input
                          type="text"
                          {...register('email')}
                          disabled={isSubmitting}
                          placeholder="Email"
                          className={`p-2 rounded-md border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                        <div>
                          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                      </div>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-white text-lg max-[420px]:text-sm'>Phone (optional)</p>
                        <input
                          type="text"
                          {...register('phone')}
                          disabled={isSubmitting}
                          placeholder="Phone"
                          className={`p-2 rounded-md border-2 border-gray-200 ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                      <p className='text-white text-lg max-[420px]:text-sm'>Subject</p>
                      <input
                        type="text"
                        {...register('subject')}
                        disabled={isSubmitting}
                        placeholder="Subject"
                        className={`p-2 rounded-md border-2 ${errors.subject ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                      />
                      <div>
                        {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                      <p className='text-white text-lg max-[420px]:text-sm'>Message</p>
                      <textarea
                        {...register('message')}
                        disabled={isSubmitting}
                        placeholder="Message"
                        rows={5}
                        className={`p-2 rounded-md border-2 ${errors.message ? 'border-red-500' : 'border-gray-200'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                      />
                      <div>
                        {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" title='Do it' disabled={isSubmitting} className={`p-2 rounded-md send-btn max-[420px]:text-sm ${isSubmitting ? 'bg-gray-600 border-gray-600' : 'bg-blue-500'} text-white`}>
                      {isSubmitting ? 'Loading...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
              {/* Form End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
