import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

type ContactProps = {
  darkMode: boolean;
};

const ContactSection = (props: ContactProps) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(data);
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.status === 200) {
      setData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }); // Clear form
      toast.success(`Hey ${data.firstName}, your message has been sent!`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className='pb-16 light-2 dark:background-2 w-full text-black dark:text-white flex justify-center'>
      <div className='h-auto layout-container flex flex-col justify-center align-middle px-4'>
        <div className='h-auto w-full flex flex-1 max-[850px]:justify-center'>
          <h1 className='text-black dark:text-white text-section-title merriweather-bold'>Contact</h1>
        </div>
        {/* Contact content */}
        <div className='flex flex-col h-auto w-full mt-16 mb-4 p-8 pb-12 light-card dark:background-card rounded-lg gap-4'>

          <div className='flex flex-1 text-black'>
            <h1 className='dark:text-white'>Contact Us</h1>
            <form action="post">
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                  <input type="text" name="firstName" value={data.firstName} onChange={handleChange} placeholder="First Name" className='p-2 rounded-md w-1/2'/>
                  <input type="text" name="lastName" value={data.lastName} onChange={handleChange} placeholder="Last Name" className='p-2 rounded-md w-1/2'/>
                </div>
                <div className='flex gap-4'>
                  <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" className='p-2 rounded-md w-1/2'/>
                  <input type="tel" name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" className='p-2 rounded-md w-1/2'/>
                </div>
                <input type="text" name="subject" value={data.subject} onChange={handleChange} placeholder="Subject" className='p-2 rounded-md'/>
                <textarea name="message" value={data.message} onChange={handleChange} placeholder="Message" className='p-2 rounded-md'/>
                <button type="submit" onClick={sendEmail} className='p-2 rounded-md bg-blue-500 text-white'>Send</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
