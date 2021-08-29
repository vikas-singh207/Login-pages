import React, { useState } from 'react';
import './loginform.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Form() {
  const [showFacebookForm, setshowFacebookForm] = useState(true);
  const loginWithEmail = () => {
    setshowFacebookForm(!showFacebookForm);
  };

  return (
    <div className="loginform">
      {showFacebookForm ? (
        <div>
          <div className="loginform__label mb-60">
            <span>Login to continue</span>
          </div>
          <div className="loginform__button mb-20" onClick={loginWithEmail}>
            <span>Have a Facebook/Email account?</span>
          </div>
          <div className="loginform__text mb-30">
            <span>or</span>
          </div>
          <div className="loginform__input">
            <span className="country-code space">+91</span>
            <span className="separator space">|</span>
            <span className="input-feild">
              <input
                className="form"
                type="text"
                placeholder="Enter your mobile number"
              />
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className="loginform__label mb-30" onClick={loginWithEmail}>
            <ArrowBackIcon style={{ fill: '#1f80e0' }} />
          </div>
          <div className="loginform__label mb-20">
            <span>Have an Email or Facebook account?</span>
          </div>
          <div className="loginform__input mb-30">
            <span className="input-feild">
              <input
                className="form"
                type="text"
                placeholder="Enter your Email"
              />
            </span>
          </div>
          <div className="loginform__button continue-color mb-20">
            <span>CONTINUE</span>
            <span className="fb-icon">
              <ArrowForwardIosIcon style={{fontSize:12}}/>
            </span>
          </div>
          <div className="loginform__text mb-20">
            <span>OR</span>
          </div>
          <div className="loginform__button fb-color">
            <FacebookIcon />
            <span>LOGIN WITH FACEBOOK</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
