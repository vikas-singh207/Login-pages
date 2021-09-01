import React from 'react';
import './footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppleIcon from '@material-ui/icons/Apple';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="nav-copyright">
          <ul className="footer-navigation">
            <li className="footer-links">About Disney+ Hotstar</li>
            <li className="footer-links">Terms of Use</li>
            <li className="footer-links">Privacy Policy</li>
            <li className="footer-links">FAQ</li>
            <li className="footer-links">Feedback</li>
            <li className="footer-links">Careers</li>
          </ul>
          <div className="footer-copyright">
            <span>
              &copy; 2021 STAR. All Rights Reserved. HBO, Home Box Office and
              all related channel and programming logos are service marks of,
              and all related programming visuals and elements are the property
              of, Home Box Office, Inc. All rights reserved.
            </span>
          </div>
        </div>
        <div className="social-links">
          <div className="social-label">
            <span>Connect with us</span>
          </div>
          <div className="social-icons">
            <span className="icon">
              <FacebookIcon style={{ fill: '#909999', fontSize: '28' }} />
            </span>
            <span className="icon">
              <TwitterIcon style={{ fill: '#909999', fontSize: '28' }} />
            </span>
          </div>
        </div>
        <div className="appstore">
          <div className="appstore__label">
            <span>Disney+ Hotstar App</span>
          </div>
          <div className="appstore__icons">
            <div className="appicons">
              <a
                className="playstore"
                href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
              />
              <a
                className="playstore"
                href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
