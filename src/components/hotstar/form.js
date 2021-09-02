import React, { useState } from 'react';
import './loginform.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

function Form() {
  const [initialForm, setinitialForm] = useState(true);
  const [mobileForm, setmobileForm] = useState(false);
  const [emailForm, setemailForm] = useState(false);
  const [continueName, setcontinueName] = useState('');
  const [labelText, setlabelText] = useState('Login to continue');
  const [showBackButton, setshowBackButton] = useState(false);
  const [showMobileError, setshowMobileError] = useState(false);
  const [mobileError, setmobileError] = useState('');
  const [showEmailError, setshowEmailError] = useState(false);
  const [emailError, setemailError] = useState('');

  const loginWithEmailForm = () => {
    setshowBackButton(true);
    setlabelText('Have an Email or Facebook account?');
    setemailForm(true);
    setinitialForm(false);
    setmobileForm(false);
    setcontinueName('emailContinue');
  };

  const mobileClick = () => {
    setshowBackButton(true);
    setlabelText('Continue using Phone');
    setemailForm(false);
    setinitialForm(false);
    setmobileForm(true);
    setcontinueName('mobileContinue');
  };

  const backButtonClick = e => {
    setshowBackButton(false);
    setlabelText('Login to continue');
    setemailForm(false);
    setinitialForm(true);
    setmobileForm(false);
    setcontinueName('');
  };

  const conitinueClick = e => {
    if (e.currentTarget.getAttribute('name') == 'mobileContinue') {
      let pattern = new RegExp('[0-9]{10}');
      let mobileValue = document.querySelector('#id_mobile_number').value;
      if (!pattern.test(mobileValue)) {
        setshowMobileError(true);
        setmobileError('Please enter valid number');
      } else {
        setshowMobileError(false);
        setmobileError('');
      }
    } else if (e.currentTarget.getAttribute('name') == 'emailContinue') {
      let emailValue = document.querySelector('#id_email').value;
      let pattern = new RegExp(
        '^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{1,4}$'
      );
      if (!pattern.test(emailValue)) {
        setshowEmailError(true);
        setemailError('Please enter valid email');
      } else {
        setshowEmailError(false);
        setemailError('');
      }
    }
  };

  return (
    <div className="loginform">
      <div>
        {showBackButton && (
          <div className="loginform__label mb-30" onClick={backButtonClick}>
            <ArrowBackIcon style={{ fill: '#1f80e0' }} />
          </div>
        )}
        <div className="loginform__label mb-60">
          <span>{labelText}</span>
        </div>
        {initialForm && (
          <div>
            <div
              className="loginform__button mb-20"
              onClick={loginWithEmailForm}
            >
              <span>Have a Facebook/Email account?</span>
            </div>
            <div className="loginform__text mb-30">
              <span>or</span>
            </div>
          </div>
        )}
        {(initialForm || mobileForm) && (
          <div className="mb-30">
            <div className="loginform__input">
              <span className="country-code space">+91</span>
              <span className="separator space">|</span>
              <span className="input-feild">
                <input
                  className="form"
                  type="text"
                  id="id_mobile_number"
                  placeholder="Enter your mobile number"
                  onClick={mobileClick}
                />
              </span>
            </div>
            {showMobileError && (
              <div className="error">
                <span className="error-text">{mobileError}</span>
                <span className="error-icon">
                  <ReportProblemIcon style={{ fontSize: 16 }} />
                </span>
              </div>
            )}
          </div>
        )}
        {emailForm && (
          <div className="mb-30">
            <div className="loginform__input ">
              <span className="input-feild">
                <input
                  className="form"
                  id="id_email"
                  type="text"
                  placeholder="Enter your Email"
                />
              </span>
            </div>
            {showEmailError && (
              <div className="error">
                <span className="error-text">{emailError}</span>
                <span className="error-icon">
                  <ReportProblemIcon style={{ fontSize: 16 }} />
                </span>
              </div>
            )}
          </div>
        )}
        {(mobileForm || emailForm) && (
          <div
            className="loginform__button continue-color mb-20"
            name={continueName}
            onClick={conitinueClick}
          >
            <span>CONTINUE</span>
            <span className="continue-icon">
              <ArrowForwardIosIcon style={{ fontSize: 12 }} />
            </span>
          </div>
        )}
      </div>
      {emailForm && (
        <div>
          <div className="loginform__text mb-20">
            <span>OR</span>
          </div>
          <div className="loginform__button fb-color">
            <span className="fb-icon">
              <FacebookIcon />
            </span>
            <span className="pt-2">LOGIN WITH FACEBOOK</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
