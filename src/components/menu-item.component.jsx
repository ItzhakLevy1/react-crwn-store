import React from "react";
import './menu-item/menu-item.styles.scss';
// Destructuring title,enabling imageUrl so we will be able to use it below, enabling th "size" value.
const MenuItem = ({title, imageUrl, size}) => ( 
  <div className={`${size} menu-item`}>
    <div
    className="background-image"
    style={{ // Dynamically updating the style background image on our components according to which ever value we set it to be.
      backgroundImage: `url(${imageUrl})`   
    }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;