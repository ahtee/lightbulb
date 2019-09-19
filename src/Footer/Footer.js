/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'Card/node_modules/Button/node_modules/styled-components';
import { version } from '../../package.json';
import { colors } from '../../theme';

const StyledFooter = styled.footer`
  margin-top: 20px;
  background-color: ${colors.darkGray};
  min-height: 100px;
  padding: 20px 0px;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * The Footer component may serve multiple use cases. For now it may display
 * the version running from package.json, provide important links, or display company
 * policies.
 */

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

Footer.propTypes = {
  company: PropTypes.string,
  copyrightYear: PropTypes.string,
  license: PropTypes.string,
  siteVersion: PropTypes.number
};

Footer.defaultProps = {
  company: 'My Company',
  copyrightYear: new Date().getUTCFullYear(),
  license: '',
  siteVersion: version
};

export default Footer;
