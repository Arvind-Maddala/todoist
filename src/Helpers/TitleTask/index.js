import React from 'react';

const TitleTask = ({text}) => {
  return (
      <div className="header__caption">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#141416" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="172 104 113.333 160 84 132" fill="none" stroke="#141416" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></polyline><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" stroke="#141416" strokeLinecap="round" strokeLinejoin="round" fill="none"></rect></svg>
        <p >{text}</p>
        </div>
  )
}

export default TitleTask;
