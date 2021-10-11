import React from 'react'
import './style.css';
import headerImage from '../images/headerImage.jpg';
import {TitleTask} from '../../Helpers'

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={headerImage} alt="welcome-header" />
      <div className="header__title">
        <h2>TODO <span className="header__title--list">List</span></h2>
        <TitleTask text={'Create your short term goal.'}/>
        <TitleTask text={'Check your Completed tasks.'}/>
        <TitleTask text={'Restore tasks, if pending.'}/>
        <TitleTask text={'Deleted taks are stored is Trash.'}/>
      </div>
    </div>
  )
}

export default Header
