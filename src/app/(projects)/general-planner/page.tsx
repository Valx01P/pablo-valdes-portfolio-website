"use client";
import { useTheme } from "@/app/lib/store";

export default function General_Planner() {

  const { darkMode } = useTheme();

  const currentYear = new Date().getFullYear();

  return ( //if darkMode is true, add the dark class to the main element
    <main className={`${darkMode && "dark"} w-auto dark:bg-yt light-gradient text-black dark:text-white h-auto`}>
      <div className="dark:bg-yt light py-8 h-full flex flex-col flex-1 justify-center items-center max-[430px]:ml-[0px] ml-[70px] max-[430px]:pt-[70px]">
        <div>
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-balance text-center text-3xl">General Planner Project</h1>
        </div>
        <div>
          <h1 className="max-[420px]:text-lg text-black dark:text-white text-2xl">Video Preview</h1>
        </div>
        <div className="flex flex-auto py-2">
          <iframe className="yt-img" width="1120" height="630" src="https://www.youtube.com/embed/pfGWJuYSSbE" title="General Planner Website - Project 1 - By Pablo Valdes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Description</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">My first Full Stack project, a seemingly simple general planner where you can keep track of info, income, contacts, and users if your an Admin. This website has a frontend and backend each deployed separately using onRender. On logging in a user receives an access token that lets them access the website&apos;s protected routes and if their role is a user then they can only see their own content and nothing from other users. However, if the current user has the role of an admin they can see other user data and even create new users. Now a user upon logging in also receives a refresh token, so when their access token runs out they can get a new one, and when that refresh token runs out, then and only then will they be required to login again. The purpose of a refresh token is to implement persisted login, so if a user doesn&apos;t want to stay logged in for a long duration they can choose to opt out of persisted login and not receive a refresh token, this is helpful when using a computer you regularly don&apos;t use. Both the user and admin roles can create content and both can edit or delete their own content, but only the admin can edit or delete user content besides their own.</p>
        </div>
        <div className="text-wrap px-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Tech Used</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">I mainly used React, Redux, CSS, Javascript, Node, Express, and MongoDB for this project. I took advantage of many useful npm packages, such as ones for encrypting passwords and creating cookies. I used Mongoose to simply working with MongoDB schemas. And in the frontend I used Redux to manage auth state and RTK query to communicate with my backend API. The login form I have uses Regex (Regular Expressions) for username and password validation. Unlike most of my recent projects, for this one I simply used pure CSS and my (at the time) poor design skills. For making the backend server API, I made use of the MVC design pattern, that is Model View Controller, simply put, I&apos;d make my database model and abstract the API route logic in a controller which would then process API requests and this would typically make changes to the frontend or views, depending on the http request.</p>
        </div>
        <div className="text-wrap px-4 py-4">
          <h1 className="max-[420px]:text-xl text-black dark:text-white text-3xl">Key take away</h1>
          <p className="max-[420px]:text-sm text-black dark:text-white">This was a tough one, while making this application would be simple enough for me now and would likely only take me a week or two, when I made this website I didn&apos;t have any experience creating a full stack application and much less deploying it. Needless to say I was in tutorial hell making this project and drilling in my brain all the frontend and backend concepts to create this website until I finally understood those crucial concepts enough to make something remotely similar to what I was thinking of, this took me a little over a month to complete. This project was my hardest simply because I lacked so many crucial skills at the time of making it, likewise this project was crucial in my foundational knowledge for that very same reason, and while it isn&apos;t too responsive or very complex in terms of functionality for users, I believe this was my best project in terms of learning. It&apos;s helped me rethink my way of learning, that is to say I now believe learning should be challenging, out of the frying pan and into the fire, that&apos;s truly how you learn the best.</p>
        </div>
        <div className="flex max-[850px]:justify-center max-[850px]:items-center w-full px-4 pb-4 pt-8 flex-row items-start gap-6">
          <div>
            <a href="https://general-planner.onrender.com/" target="_blank" rel="noopener noreferrer" title='Go to the deployed live site' >
              <h1 className="max-[420px]:text-xl text-blue-500 underline text-2xl grow">Live Site</h1>
            </a>
          </div>
          <div>
            <a href="https://github.com/Valx01P/generalplanner" target="_blank" rel="noopener noreferrer" title='View the Github Repository for this project' >
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