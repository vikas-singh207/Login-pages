import React from 'react';
import './hotstar.scss';
import Form from './form';
function HotStar(){

  return(
    <div className="hotstar">
      <div className="hotstar__logo">
        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"/>
      </div>
      <Form/>
    </div>
  )
}

export default HotStar;