import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 20px;
  background-color: #3a4851;
  min-height: 100px;
  padding: 20px 0px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer({ company, copyrightYear, license, siteVersion }) {
  return (
    <StyledFooter>
      <div className="column">
        {company && <span>{company}</span>}
        {copyrightYear && <span> &copy; {copyrightYear}</span>}
        {license && <h3>{license}</h3>}
        {siteVersion && <small>{siteVersion}</small>}
      </div>
    </StyledFooter>
  );
}
export default Footer;
