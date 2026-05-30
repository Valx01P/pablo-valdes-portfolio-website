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

type EmailForm = z.infer<typeof emailFormSchema>;

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
      if (res.status === 429) {
        toast.error('Too many requests. Please try again later.');
      }
    } catch (error: z.ZodError | any) {
      toast.error('Validation error:', error);
      toast.error('Please fill in the form correctly.');
    }
  };

  const githubIconFileName = props.darkMode ? 'github-light-2.svg' : 'github-dark-2.svg';
  const linkedinIconFileName = props.darkMode ? 'linkedin-light.svg' : 'linkedin-dark.svg';

  return (
    <section id='contact' className='pt-12 pb-24 section-surface w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center mb-8'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Contact</h1>
        </div>
        {/* Contact content */}
        <div className={`${props.swagMode && "swag-bg"} glass flex flex-col h-auto w-full mb-4 p-[clamp(1.1rem,2.6vw,2rem)] rounded-xl gap-4`}>
          <div className='flex flex-1 text-black flex-col'>
            <div className='flex max-[1200px]:flex-col flex-row gap-8'>
              {/* CTA */}
              <div className='flex flex-col max-[1200px]:w-full max-[1200px]:pb-4 max-[1200px]:text-center max-[1200px]:pr-0 w-1/2 pr-8 gap-2'>
                <h1 className='text-black dark:text-white text-xl roboto-bold'>Get In Touch</h1>
                <p className='dark:text-white text-sm leading-relaxed'>Have a question or want to work together? Send me a message and let&apos;s talk!</p>
                <h1 className='text-black dark:text-white text-xl roboto-bold pt-5'>Availability</h1>
                <p className='dark:text-white text-sm leading-relaxed'>Currently available for freelance or full-time positions. Contact me for any inquiries.</p>
                <div>
                  <h1 className='text-black dark:text-white text-xl roboto-bold flex-1 pt-5'>Let&apos;s Connect!</h1>
                  <div className='flex max-[1200px]:justify-center justify-start items-center gap-4 pt-3'>
                    <a href='https://github.com/Valx01P' target="_blank" rel="noopener noreferrer" title='View my Github profile' className='flex text-black'>
                      <Image src={`/svg/${githubIconFileName}`} width={30} height={30} alt="github icon" className='hover:scale-125 opacity-85 hover:opacity-100' />
                    </a>
                    <a href='https://www.linkedin.com/in/pablovaldes01/' target="_blank" rel="noopener noreferrer" title='View my LinkedIn profile' className='flex text-black'>
                      <Image src={`/svg/${linkedinIconFileName}`} width={32} height={32} alt="linkedin icon" className='hover:scale-125 opacity-85 hover:opacity-100' />
                    </a>
                  </div>
                </div>
              </div>
              {/* Form Start */}
              <div className='flex flex-1 justify-center items-center'>
                <form onSubmit={handleSubmit(sendEmail)} autoComplete="off" className={`${props.swagMode ? "swag-bg-contact" : "chip"} flex max-[1200px]:w-full w-full max-w-[460px] p-[clamp(1rem,2.2vw,1.5rem)] rounded-xl`}>
                  <div className='flex flex-1 flex-col gap-4 max-[200px]:w-1/5 max-[250px]:w-1/4 max-[290px]:w-1/3 max-[420px]:w-1/2 max-[380px]:w-2/3 max-[440px]:w-4/5'>
                    {/* First Name & Last Name Inputs */}
                    <div className='flex gap-4 max-[720px]:flex-col'>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-black dark:text-white text-sm mb-1'>First Name</p>
                        <input
                          autoComplete="off"
                          type="text"
                          {...register('firstName')}
                          disabled={isSubmitting}
                          placeholder="First Name"
                          className={`p-2 text-sm rounded-md border bg-white/80 dark:bg-black/30 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:border-black/45 dark:focus:border-white/40 transition-colors ${errors.firstName ? 'border-red-500' : 'border-black/20 dark:border-white/15'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                        <div>
                          {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
                        </div>
                      </div>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-black dark:text-white text-sm mb-1'>Last Name</p>
                        <input
                          autoComplete="off"
                          type="text"
                          {...register('lastName')}
                          disabled={isSubmitting}
                          placeholder="Last Name" className={`p-2 text-sm rounded-md border bg-white/80 dark:bg-black/30 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:border-black/45 dark:focus:border-white/40 transition-colors ${errors.lastName ? 'border-red-500' : 'border-black/20 dark:border-white/15'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                        <div>
                          {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Email & Phone Inputs */}
                    <div className='flex gap-4 max-[720px]:flex-col'>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-black dark:text-white text-sm mb-1'>Email</p>
                        <input
                          autoComplete="off"
                          type="text"
                          {...register('email')}
                          disabled={isSubmitting}
                          placeholder="Email"
                          className={`p-2 text-sm rounded-md border bg-white/80 dark:bg-black/30 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:border-black/45 dark:focus:border-white/40 transition-colors ${errors.email ? 'border-red-500' : 'border-black/20 dark:border-white/15'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                        <div>
                          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                      </div>
                      <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                        <p className='text-black dark:text-white text-sm mb-1'>Phone (optional)</p>
                        <input
                          autoComplete="off"
                          type="text"
                          {...register('phone')}
                          disabled={isSubmitting}
                          placeholder="Phone"
                          className={`p-2 text-sm rounded-md border bg-white/80 dark:bg-black/30 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:border-black/45 dark:focus:border-white/40 transition-colors border-black/20 dark:border-white/15 ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                      <p className='text-black dark:text-white text-sm mb-1'>Subject</p>
                      <input
                        autoComplete="off"
                        type="text"
                        {...register('subject')}
                        disabled={isSubmitting}
                        placeholder="Subject"
                        className={`p-2 text-sm rounded-md border bg-white/80 dark:bg-black/30 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:border-black/45 dark:focus:border-white/40 transition-colors ${errors.subject ? 'border-red-500' : 'border-black/20 dark:border-white/15'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
                      />
                      <div>
                        {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className='flex flex-1 flex-col max-[420px]:text-sm'>
                      <p className='text-black dark:text-white text-sm mb-1'>Message</p>
                      <textarea
                        autoComplete="off"
                        {...register('message')}
                        disabled={isSubmitting}
                        placeholder="Message"
                        rows={5}
                        className={`p-2 text-sm rounded-md border bg-white/80 dark:bg-black/30 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:border-black/45 dark:focus:border-white/40 transition-colors ${errors.message ? 'border-red-500' : 'border-black/20 dark:border-white/15'} ${isSubmitting ? 'bg-gray-600 border-gray-600' : ''}`}
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
