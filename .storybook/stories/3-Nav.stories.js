import React from 'react';
import Nav from '../../src/Nav';
import NavBrand from '../../src/NavBrand';
import Breadcrumb from '../../src/Breadcrumb';

export default {
  title: 'Nav'
};

export const defaultNav = () => <Nav />;

export const defaultNavBrand = () => (
  <Nav>
    <NavBrand />
  </Nav>
);

export const blueNav = () => (
  <Nav blue>
    <NavBrand />
  </Nav>
);

const breadcrumbs = [
  {
    key: 1,
    href: '/',
    label: 'Home'
  },
  {
    key: 2,
    href: '/notfound',
    label: 'About'
  }
];

export const blueNavWithBreadcrumbs = () => (
  <>
    <Nav blue>
      <NavBrand brandName="Lightbulb" />
    </Nav>
    <Breadcrumb>
      <ul>
        {breadcrumbs.map(bc => {
          <li key={bc.key}>
            <a href={bc.href}>{bc.label}</a>
          </li>;
        })}
      </ul>
    </Breadcrumb>
  </>
);
