import React, {useState} from 'react';

function Menu({ menuObject }) {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick =  (index) =>{
        setActiveLink(index === activeLink ? null : index)
    }

  return (
    <div>
      <h4 className='menu-text'>menu</h4>
      <ul className='rightbar-menu-list'>
        {menuObject && menuObject.map((menu, index) => (
          <li key={menu.id} className={`rightmenu-item-list ${index === activeLink ? 'active' : ''}`}>
            <a href="#"  onClick={() => handleLinkClick(index)}
              className={index === activeLink ? 'active' : ''}>
              <i className='global-icon'>{menu.icon}</i>
              <span>{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export {Menu};
