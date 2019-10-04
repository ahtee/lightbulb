import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../../src/Nav';
import NavBrand from '../../src/NavBrand';
import NavItems from '../../src/NavItems';
import Breadcrumb from '../../src/Breadcrumb';

export default {
  title: 'Nav'
};

const pages = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/' }
];

const breadcrumbs = [
  {
    id: 1,
    title: 'bc1',
    href: '/'
  },
  {
    id: 2,
    title: 'bc2',
    href: '/notfound'
  }
];

export const defaultNav = () => <Nav />;

export const defaultNavBrand = () => (
  <Nav>
    <NavBrand />
  </Nav>
);

export const blueNavWithPages = () => (
  <BrowserRouter>
    <Nav blue>
      <NavBrand />
      <NavItems right items={pages} />
    </Nav>
  </BrowserRouter>
);

export const blackNavWithPages = () => (
  <BrowserRouter>
    <Nav black>
      <NavBrand />
      <NavItems right items={pages} />
    </Nav>
  </BrowserRouter>
);

export const blueNavWithBreadcrumbs = () => (
  <BrowserRouter>
    <Nav blue>
      <NavBrand brandName="Lightbulb" />
      <NavItems items={pages} />
    </Nav>
    <Breadcrumb>
      <ul>
        {breadcrumbs.map(bc => (
          <li key={bc.id}>
            <a href={bc.href}>{bc.label}</a>
          </li>
        ))}
      </ul>
    </Breadcrumb>
  </BrowserRouter>
);
