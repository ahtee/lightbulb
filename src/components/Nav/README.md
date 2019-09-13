# Nav

`<Nav />` is the root component that renders `<NavBrand />`, and `<NavBreadcrumbs />`.

`Nav` component is to be rendered on all the pages, so it is added into `./pages/index.js` to prevent duplication.

`src/Nav/index.js` exports the `<Nav />` component by default to prevent import Duplication.

```js
// Old
import Nav from '.src/components/Nav/Nav';

// New
import Nav from './src/components/Nav';
```

## Props

| Prop Name   |       Type       |                                                         Note |
| ----------- | :--------------: | -----------------------------------------------------------: |
| name        |      String      |                                   Example: "Glow", "GE Glow" |
| links       | Array of Objects | An array of objects will be mapped to a new navigation link. |
| breadcrumbs | Array of Objects |                                                              |
| blue        |                  |                               Turns the Navbar color GE Blue |
| fixed       |                  |                   Makes the navbar sticky to the top of page |
| children    |    Component     |                                  Add a Logo SVG, image, etc. |

## Usage

```jsx
// Nav.js

function Nav({ name, links, breadcrumbs }) {
  return (
    <nav>
      <div className="container">
        <NavBrand name={name} />
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <NavBreadcrumbs breadcrumbs={breadcrumbs} />
    </nav>
  );
}

// > Use in index.js

// ./pages/index.js
const navName = 'Glow';
const navBreadcrumbs = ['breadcrumb 1', 'breadcrumb 2'];
const navLinks = [{ key: 1, label: 'Home', href: '/' }];

function App() {
  return <Nav name={navName} links={navLinks} breadcrumbs={navBreadcrumbs} />;
}
```

# NavBrand

| prop name |   type |
| --------- | -----: |
| name      | String |

## Usage

```jsx
<NavBrand name="Glow" />
```

# NavBreadcrumbs

> Breadcrumbs is a separate navigation bar that is shown below the main navigation bar (showing the Brand and links). This should be placed adjacent to the main nav. See the [Nav](#Nav) section for examples on placement.

> If no breadcrumb prop is given, the `<NavBreadcrumbs />` component will not be loaded.

| prop name   |  type |
| ----------- | ----: |
| breadcrumbs | Array |

## Usage

```jsx
<NavBreadcrumbs breadcrumbs={['breadcrumb 1', 'breadcrumb 2']} />
```
