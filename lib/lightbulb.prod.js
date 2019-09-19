'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    })
  );
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(
    props,
    propName,
    componentName,
    location,
    propFullName,
    secret
  ) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function(module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var colors = {
  darkGray: '#3a4851',
  darkThemeGray: '#212121',
  secondary: '#3a4851',
  white: '#ffffff',
  black: '#000000',
  primaryBlue: '#005eb8',
  lightBlue: '#00b5e2',
  info: '#17a2b8',
  green: '#28a745',
  success: '#28a745',
  danger: '#dc3545',
  red: '#dc3545',
  error: '#dc3545',
  warning: '#ffc107',
  yellow: '#ffc107'
};

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n    background-color: ',
    ';\n    color: ',
    ';\n    border: ',
    ';\n    border-radius: 50px;\n    letter-spacing: 1px;\n    max-height: 40px;\n    display: inline-block;\n    font-size: 14px;\n    outline: none;\n    padding: 9px 45px;\n    margin: 10px 0px;\n\n    &:hover {\n      background-color: ',
    ';\n      border-color: ',
    ';\n      color: ',
    ';\n      cursor: pointer;\n    }\n  '
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Button Component based on ge.com. Colors included: `white`, `blue`, and `outline`
 * (transparent but Blue border and font color).
 * It is recommended to not use more than one of these, as it may introduce
 * render bugs (while this is still in development stage).
 *
 * By default, the button is GE Blue with white text.
 */

function Button(props) {
  var StyledButton = styled.button(
    _templateObject(),
    'outline' in props
      ? 'transparent'
      : 'white' in props
      ? colors.white
      : colors.primaryBlue,
    'outline' in props
      ? colors.primaryBlue
      : 'white' in props
      ? colors.primaryBlue
      : colors.white,
    'outline' in props ? '2px solid '.concat(colors.primaryBlue) : 'none',
    colors.lightBlue,
    colors.lightBlue,
    colors.white
  );
  var onClick = props.onClick,
    children = props.children;
  return React.createElement(
    StyledButton,
    {
      onClick: onClick
    },
    children
  );
}

Button.propTypes = {
  /** The function that will be executed each time you click the button. */
  onClick: propTypes.func,

  /** The name of the button. In \<Button>Click Me!\<Button>, children is _Click Me!_ */
  children: propTypes.string
};
Button.defaultProps = {
  onClick: function onClick() {},
  children: 'Button'
};

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n    color: ',
    ';\n    box-shadow: 0 0 4px rgba(165, 165, 165, 0.5);\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 4px;\n    background-color: ',
    "};\n    &:hover {\n      border-color: 'rgba(0, 0, 0, 0.125)';\n    }\n    & > h3 {\n      margin: 0;\n      font-size: 18px;\n    }\n    & > p {\n      margin: 0;\n      padding: 12px 0;\n      font-size: 13px;\n    }\n  "
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  padding: 18px 18px 24px;\n  text-align: left;\n  text-decoration: none;\n'
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral([
    '\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.07);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n'
  ]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * The Card component is served to be multipurpose to support informational
 * text as well Graphs to represent data. The Card is purposed to be flexible,
 * based on the current size of the grid and the contents will be resized/reorganized
 *  to fit on most screens.
 *
 * You may render text only, Graphs, buttons, and even make the entire card a button.
 */

var StyledCardHeader = styled.div(_templateObject$1());
var StyledChildren = styled.div(_templateObject2()); // TODO useRef to resize the graph based on the size of the Card

function Card(props) {
  var status = props.status,
    title = props.title,
    children = props.children;
  var StyledCard = styled.div(
    _templateObject3(),
    'status' in props ? colors.white : colors.black,
    status === 'danger'
      ? colors.danger
      : status === 'error'
      ? colors.error
      : status === 'warning'
      ? colors.warning
      : status === 'stable'
      ? colors.green
      : status === 'success'
      ? colors.success
      : colors.white
  );
  return React.createElement(
    StyledCard,
    null,
    title && React.createElement(StyledCardHeader, null, title),
    React.createElement(StyledChildren, null, children)
  );
}

Card.propTypes = {
  status: propTypes.string,
  title: propTypes.string,
  children: propTypes.element.isRequired
};
Card.defaultProps = {
  status: 'nostatus',
  title: ''
};

var version = '0.4.11';

function _templateObject$2() {
  var data = _taggedTemplateLiteral([
    '\n  margin-top: 20px;\n  background-color: #3a4851;\n  min-height: 100px;\n  padding: 20px 0px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'
  ]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter = styled.footer(_templateObject$2());
/**
 * The Footer component may serve multiple use cases. For now it may display
 * the version running from package.json, provide important links, or display company
 * policies.
 */

function Footer(_ref) {
  var company = _ref.company,
    copyrightYear = _ref.copyrightYear,
    license = _ref.license,
    siteVersion = _ref.siteVersion;
  return React.createElement(
    StyledFooter,
    null,
    React.createElement(
      'div',
      {
        className: 'column'
      },
      company && React.createElement('span', null, company),
      copyrightYear &&
        React.createElement('span', null, ' \xA9 ', copyrightYear),
      license && React.createElement('h3', null, license),
      siteVersion && React.createElement('small', null, siteVersion)
    )
  );
}

Footer.propTypes = {
  company: propTypes.string,
  copyrightYear: propTypes.string,
  license: propTypes.string,
  siteVersion: propTypes.number
};
Footer.defaultProps = {
  company: 'My Company',
  copyrightYear: new Date().getUTCFullYear(),
  license: '',
  siteVersion: version
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral([
    '\n  padding: 0px 20px 0px 10px;\n  color: #ffffff;\n  text-decoration: none;\n'
  ]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  font-size: 22px;\n  margin: 0px 15px;\n'
  ]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledNavBrandImage = styled.div(_templateObject$3());
var StyledNavBrandText = styled.a(_templateObject2$1());

function NavBrand(_ref) {
  var name = _ref.name,
    children = _ref.children;
  return React.createElement(
    StyledNavBrandImage,
    null,
    children,
    React.createElement(
      StyledNavBrandText,
      {
        to: '/'
      },
      name
    )
  );
}

NavBrand.propTypes = {
  name: propTypes.string,
  children: propTypes.element.isRequired
};
NavBrand.defaultProps = {
  name: 'My Company'
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral([
    "\n  background-color: #f8f8f8;\n  height: 50px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n  color: #3a4851;\n  .breadcrumb-link {\n    color: #005eb8;\n  }\n  div > ul {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  li {\n    list-style-type: none;\n    margin-left: 10px;\n  }\n  li:after {\n    content: '>';\n    margin-left: 10px;\n  }\n  a {\n    color: #fff;\n    font-size: 16px;\n    text-decoration: none;\n  }\n"
  ]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBreadcrumb = styled.div(_templateObject$4());

function NavBreadcrumbs(_ref) {
  var breadcrumbs = _ref.breadcrumbs;
  return React.createElement(
    StyledBreadcrumb,
    null,
    React.createElement(
      'div',
      {
        className: 'container'
      },
      React.createElement(
        'ul',
        null,
        breadcrumbs.map(function(breadcrumb) {
          return React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              {
                href: breadcrumb.href,
                className: 'breadcrumb-link'
              },
              breadcrumb.label
            )
          );
        })
      )
    ),
    React.createElement('style', {
      jsx: true
    })
  );
}

NavBreadcrumbs.propTypes = {
  breadcrumbs: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.number.isRequired,
      href: propTypes.string.isRequired,
      label: propTypes.string.isRequired
    })
  )
};
NavBreadcrumbs.defaultProps = {
  breadcrumbs: []
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(['\n    margin-left: 20px;\n  ']);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral([
    '\n    min-height: 75px;\n    text-align: center;\n    background-color: ',
    ';\n    color: #ffffff;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    ',
    '\n  '
  ]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral([
    '\n  width: 970px;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: row;\n  & > ul {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0px 10px;\n  }\n  & > ul > li {\n    display: flex;\n  }\n  & > ul > li > a {\n    color: #fff;\n    font-size: 16px;\n    text-decoration: none;\n  }\n'
  ]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledNavContainer = styled.div(_templateObject$5());
/**
 * `<Nav />` is the root component that renders `<NavBrand />`, and `<NavBreadcrumbs />`.
 * `Nav` component is to be rendered on all the pages, so it is added into
 * `./pages/index.js` to prevent duplication.
 * `src/Nav/index.js` exports the `<Nav />` component by default to prevent import Duplication.
 */

function Nav(props) {
  var name = props.name,
    blue = props.blue,
    fixed = props.fixed,
    pages = props.pages,
    breadcrumbs = props.breadcrumbs;
  var StyledNav = styled.nav(
    _templateObject2$2(),
    blue ? colors.primaryBlue : colors.darkGray,
    fixed &&
      'position: fixed;\n    width: 100%; \n    top: 0; \n    z-index: 999;\n    transition: background-color .6s ease-in;'
  );
  var StyledListItem = styled.li(_templateObject3$1());
  return React.createElement(
    StyledNav,
    null,
    React.createElement(
      StyledNavContainer,
      null,
      React.createElement(NavBrand, {
        name: name
      }),
      React.createElement(
        'ul',
        null,
        pages.map(function(_ref) {
          var key = _ref.key,
            href = _ref.href,
            label = _ref.label;
          return React.createElement(
            StyledListItem,
            {
              key: key
            },
            React.createElement(
              'a',
              {
                href: href
              },
              label.toUpperCase()
            )
          );
        })
      )
    ),
    breadcrumbs &&
      React.createElement(NavBreadcrumbs, {
        breadcrumbs: true
      })
  );
}

Nav.propTypes = {
  blue: propTypes.bool,
  fixed: propTypes.bool,
  name: propTypes.string,
  pages: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.number.isRequired,
      href: propTypes.string.isRequired,
      label: propTypes.string.isRequired
    })
  ),
  breadcrumbs: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.number.isRequired,
      href: propTypes.string.isRequired,
      label: propTypes.string.isRequired
    })
  )
};
Nav.defaultProps = {
  blue: false,
  fixed: false,
  name: 'My Company',
  pages: [],
  breadcrumbs: []
};

exports.Button = Button;
exports.Card = Card;
exports.Footer = Footer;
exports.Nav = Nav;
