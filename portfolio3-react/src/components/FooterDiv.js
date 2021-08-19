import React from 'react';
import './style.css'

export default function FooterDiv() {
    return (
        <div className="footer">
        <div class="social_links">
          <a href="https://github.com/m-car">
            <span className="fa-stack fa-lg gt combo">
              <i className="fa fa-circle fa-stack-2x circle">github</i>
              <i className="fa fa-github fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/markocaric/">
            <span className="fa-stack fa-lg tw combo">
              <i className="fa fa-circle fa-stack-2x circle">linkedin</i>
              <i className="fa fa-linkedin fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
        </div>
      </div>
    );
  }
    
