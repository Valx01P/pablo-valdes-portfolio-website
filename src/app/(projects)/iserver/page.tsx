"use client";
import { useTheme } from "@/app/lib/store";

export default function IServer() {

  const { darkMode } = useTheme();

  const currentYear = new Date().getFullYear();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} w-auto dark:bg-yt light-gradient text-black dark:text-white h-auto`}>
      <div className="dark:bg-yt light py-8 h-full flex flex-col flex-1 justify-center items-center max-[430px]:ml-[0px] ml-[70px] max-[430px]:pt-[70px]">
        <div>
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">iServer Project</h1>
        </div>
        <div>
          <h1 className="max-[420px]:text-lg text-black dark:text-white text-2xl">Video Preview</h1>
        </div>
        <div className="flex flex-auto py-2">
        <iframe className="yt-img" width="1120" height="630" src="https://www.youtube.com/embed/zKs-zxrPh6E" title="iServer Website - Project 4 - By Pablo Valdes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Description</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">This project is a website all about uploading images, design inspired by imgbb.com. In this project I&apos;ve implement third party auth using clerk, so what that means is that most page routes in the website are protected and the only way to access these protected routes are to authenticate with clerk. Once you do, you&apos;ll be redirected to your dashboard where you&apos;ll be able to upload images and then be able to get the links to those saved images to use them on websites or simply share them. You can delete your own images and delete your own account if you wish, however deleting your account consequently deletes all your images. The website is mobile responsive and was made with the purpose of understanding third party auth solutions, webhooks, and image uploading to a database.</p>
        </div>
        <div className="text-wrap px-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Tech Used</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">For this project I mainly used Nextjs, Typescript, TailwindCSS, and shadcn. I also used uploadthing for image uploading, clerk for authentication, and mongodb as a database. The main logic of the website was done when a user makes an account with clerk, which then using webhooks would give our database the same data to make our own user which we could then use to associate images with that specific user and delete them and their images when they delete their account using our clerk auth. Doing that required creating a relatively simple serverless API, the project works as seen in the preview video, however sometimes for some unknown reasons the clerk authentication does not work for some people, I&apos;ve gone on the clerk discord and had a developer check out my app, but they haven&apos;t had a problem signing up or logging in. Unfortunately my friends have had some problems signing up using my clerk auth, my best guess is because of some google security reasons, so in the future I will likely be making my own auth from scratch or using auth providers like Github and Google directly to guarantee working auth anywhere.</p>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Key take away</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">The most crucial thing I&apos;ve learned in this project are webhooks for sure. Before this project I never even knew webhooks exist, but now I understand their importance when working with third party app solutions. On a lesser note I gained a somewhat better understanding of how image uploading works, but I still feel as I need to do just another project with images to really nail it down, likely one where I just turn uploaded images into base64 strings and store that in a database, just spit balling here though. In any case I&apos;ve also learned a bit more on auth and how third party solutions can be used, which while I do like, I feel as I should implement my own auth to have more control over it, which while some may see as a waste of time, I&apos;m certain it&apos;ll be a good learning experience. In short, this project gave me a better understanding of webhooks, image uploading, and third party auth solutions.</p>
        </div>
        <div className="flex max-[850px]:justify-center max-[850px]:items-center w-full px-4 pb-4 pt-8 flex-row items-start gap-6">
          <div>
            <a href="https://image-transfer-site-master.vercel.app/" target="_blank" rel="noopener noreferrer" title='Go to the deployed live site'>
              <h1 className="max-[420px]:text-xl text-blue-500 underline text-2xl grow">Live Site</h1>
            </a>
          </div>
          <div>
            <a href="https://github.com/Valx01P/image-transfer-site-master" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project'>
              <h1 className="max-[420px]:text-xl text-blue-500 underline text-2xl grow">Source Code</h1>
            </a>
          </div>
        </div>
        <footer className="flex w-full h-[11dvh] justify-center items-center">
          <div className="flex flex-1 max-[850px]:justify-center max-[850px]:items-center justify-start max-[560px]:flex-col flex-row px-4 pt-4">
              <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
                © {currentYear} Pablo Valdes.&nbsp;
              </h2>
              <h2 className="flex w-auto max-[420px]:text-base roboto-black text-2xl text-black dark:text-white text-wrap">
                All rights reserved.
              </h2>
          </div>
        </footer>
      </div>
    </main>
  );
}