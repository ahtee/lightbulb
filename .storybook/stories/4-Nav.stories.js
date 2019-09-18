import React from 'react';
import Nav from '../../src/Nav';
import NavBreadcrumbs from '../../src/Nav/NavBreadcrumbs';

export default {
  title: 'Nav'
};

export const defaultNav = () => <Nav />;

export const defaultNavBrand = () => <Nav name="Glow" />;

export const blueNavWithPages = () => (
  <Nav
    blue
    pages={[
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
    ]}
  />
);

export const blueNavWithBreadcrumbs = () => (
  <>
    <Nav
      blue
      pages={[
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
      ]}
    />
    <NavBreadcrumbs
      breadcrumbs={[
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
      ]}
    />
  </>
);
