import React from 'react';

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <div className={`${props.darkMode ? 'dark' : ''}`}>
      Header
      <div className="flex justify-center items-center">
          <button onClick={props.toggleDarkMode} className="bg-yellow-300 dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg">
            {props.darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
    </div>
    
  );
};

export default Header;


