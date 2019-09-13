'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var reactRouterDom = require('react-router-dom');

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var colors = {
  darkGray: '#3a4851',
  secondary: '#3a4851',
  white: '#ffffff',
  black: '#000000',
  blue: '#005eb8',
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
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    border: ", ";\n    border-radius: 50px;\n    letter-spacing: 1px;\n    max-height: 40px;\n    display: inline-block;\n    font-size: 14px;\n    outline: none;\n    padding: 9px 45px;\n    margin: 10px 0px;\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n      cursor: pointer;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Button Component based on ge.com. Colors included: `white`, `blue`, and `outline` (transparent but Blue border and font color).
 * It is recommended to not use more than one of these, as it may introduce render bugs (while this is still in development stage).
 *
 * By default, the button is GE Blue with white text.
 */

function Button(props) {
  var StyledButton = styled.button(_templateObject(), 'outline' in props ? 'transparent' : 'white' in props ? colors.white : colors.blue, 'outline' in props ? colors.blue : 'white' in props ? colors.blue : colors.white, 'outline' in props ? "2px solid ".concat(colors.blue) : 'none', colors.lightBlue, colors.lightBlue, colors.white);
  return React.createElement(StyledButton, {
    onClick: props.onClick
  }, props.children);
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    padding: 18px 18px 24px;\n    text-align: left;\n    text-decoration: none;\n    color: ", ";\n    box-shadow: 0 0 4px rgba(165, 165, 165, 0.5);\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 4px;\n    background-color: ", "};\n    &:hover {\n      border-color: ", ";\n    }\n    & > h3 {\n      margin: 0;\n      color: ", ";\n      font-size: 18px;\n    }\n    & > p {\n      margin: 0;\n      padding: 12px 0;\n      font-size: 13px;\n      color: ", ";\n    }\n  "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

function Card(props) {
  var StyledCard = styled.div(_templateObject$1(), props.status ? "#ffffff" : colors.black, props.status === 'danger' ? colors.danger : props.status === 'error' ? colors.error : props.status === 'warning' ? colors.warning : props.status === 'stable' ? colors.green : props.status === 'success' ? colors.success : colors.white, props.status ? "rgba(0, 0, 0, 0.125)" : colors.blue, props.status ? "#ffffff" : colors.blue, props.status ? "#ffffff" : colors.darkGray);
  return React.createElement(StyledCard, null, React.createElement(React.Fragment, null, React.createElement("h3", null, props.header), React.createElement("p", null, props.body)), props.children);
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  background-color: #3a4851;\n  min-height: 100px;\n  padding: 20px 0px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter = styled.footer(_templateObject$2());

function Footer(_ref) {
  var company = _ref.company,
      copyrightYear = _ref.copyrightYear,
      license = _ref.license,
      siteVersion = _ref.siteVersion;
  return React.createElement(StyledFooter, null, React.createElement("div", {
    className: "column"
  }, company && React.createElement("span", null, company), copyrightYear && React.createElement("span", null, " \xA9 ", copyrightYear), license && React.createElement("h3", null, license), siteVersion && React.createElement("small", null, siteVersion)));
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 20px 0px 10px;\n  color: #ffffff;\n  text-decoration: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  font-size: 22px;\n  margin: 0px 15px;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledNavBrandImage = styled.div(_templateObject$3());
var StyledNavBrandText = styled(reactRouterDom.Link)(_templateObject2());

function NavBrand(_ref) {
  var name = _ref.name,
      children = _ref.children;
  return React.createElement(StyledNavBrandImage, null, children, React.createElement(StyledNavBrandText, {
    to: "/"
  }, name));
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  background-color: #f8f8f8;\n  height: 50px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);\n  color: #3a4851;\n  .breadcrumb-link {\n    color: #005eb8;\n  }\n  div > ul {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  li {\n    list-style-type: none;\n    margin-left: 10px;\n  }\n  li:after {\n    content: '>';\n    margin-left: 10px;\n  }\n  a {\n    color: #fff;\n    font-size: 16px;\n    text-decoration: none;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBreadcrumb = styled.div(_templateObject$4());

function NavBreadcrumbs(_ref) {
  var _ref$breadcrumbs = _ref.breadcrumbs,
      breadcrumbs = _ref$breadcrumbs === void 0 ? [] : _ref$breadcrumbs;
  return React.createElement(StyledBreadcrumb, null, React.createElement("div", {
    className: "container"
  }, React.createElement("ul", null, breadcrumbs.map(function (breadcrumb) {
    return React.createElement("li", null, React.createElement(reactRouterDom.Link, {
      to: breadcrumb.link,
      className: "breadcrumb-link"
    }, breadcrumb));
  }))), React.createElement("style", {
    jsx: true
  }, ""));
}

var GELogoSvg = function GELogoSvg(_ref) {
  var _ref$innerFill = _ref.innerFill,
      innerFill = _ref$innerFill === void 0 ? '#FFFFFF' : _ref$innerFill,
      _ref$outerFill = _ref.outerFill,
      outerFill = _ref$outerFill === void 0 ? 'transparent' : _ref$outerFill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '47px' : _ref$width,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '47px' : _ref$height,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 500 500' : _ref$viewBox;
  return React.createElement("svg", {
    version: "1.1",
    id: "gelogosvg",
    width: width,
    height: height,
    x: "0px",
    y: "0px",
    viewBox: viewBox,
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("g", {
    id: "g10",
    transform: "matrix(1, 0, 0, 1, 0, 0)"
  }, React.createElement("g", {
    id: "g12",
    transform: "scale(0.1,0.1)"
  }, React.createElement("path", {
    id: "path14",
    fill: outerFill,
    d: "M2499.8,4950C3853.2,4950,4950,3853.2,4950,2500.2 C4950,1147.2,3853.2,50,2499.8,50C1146.8,50,50,1147.2,50,2500.2C50,3853.2,1146.8,4950,2499.8,4950"
  }), React.createElement("path", {
    id: "path16",
    fill: innerFill,
    d: "M3049.6,1862.1c0-278.6,188.6-548.8,291.5-497.9 C3458.4,1423,3253.2,1685.4,3049.6,1862.1 M1767.1,1963.6c0-224,221-649.6,356-604.6C2282.7,1412.2,1990.9,1841.5,1767.1,1963.6 M1543,3565.6c-101.6,4.6-169.6-60.4-169.6-168.9c0-291.5,404.5-570,710-719.5C2029.2,3084.2,1891.7,3549.9,1543,3565.6 M3409.2,2615.7c-230.7,0-407,169.7-407,373.2c0,169.7,102,305.4,237.3,305.4c47.9,0,95.3-27.3,95.3-87.9 c0-88.7-117-110-108.2-241.9c5.9-87,87.9-145.2,169.3-145.2c162.7,0,238.8,157.7,238.8,320.4c-6.6,251.3-191.6,425.8-408.4,425.8 c-285.2,0-468.4-271.2-468.4-563.1c0-434.6,285.2-604.2,434.6-644.7c1.4,0,390.2,69.1,378.1-102.3 c-5.6-75.4-117.7-104.4-198.7-107.5c-90.1-3.5-181.1,28.9-181.1,28.9c-47.2-24-80-70.9-100.3-124.9 c278.3-210.6,475.1-414,475.1-644.8c0-122.1-81.6-230.7-237.7-230.7c-278.3,0-488.7,352.9-488.7,671.9c0,54.1,0,108.6,14,156 c-176.6,128.8-307.9,209.1-545.2,351.6c0-29.7,6.2-106.4,26.2-205.6c81.3-88.3,193-220.6,193-322.5c0-47.4-26.9-88.3-81.7-88.3 c-135.5,0-237.1,203.8-264.3,346.3c-61.1,75-183.3,170-285.3,170c-81.3,0-108.6-74.7-115.5-102c258-88.3,577-441.2,577-760.2 c0-67.7-27.2-217.2-230.7-217.2c-305.4,0-563,454.9-563,807.4c-108.9,0-149.4-115.2-149.4-203.5c0-88.4,33.9-176.3,33.9-203.6 c0-27.2-13.6-61-54.5-61c-101.6,0-162.7,135.7-162.7,291.8c7,217.2,149.4,353.3,339.3,366.6c27.2,129.1,142.4,251.3,284.8,251.3 c88.4,0,196.9-27.2,271.6-94.9c-6.6,47.4-13.2,88.3-20.2,128.8c-298.8,156.4-516,264.9-712.8,441.3 c-155.7,142.7-244,332.6-244,481.7c0,203.9,128.8,393.8,393.4,393.8c312,0,549.8-251,665.3-597.3 c54.1-162.7,75.8-399.7,89.7-617.2c311.8-176.7,459.8-278.5,622.8-394.1c20.3,33.9,40.8,61,67.7,81.3 c-142.4,74.7-481.7,285.2-481.7,780.5c0,352.9,237.3,746.7,705.9,746.7c386.8,0,651.4-319.1,651.4-624.6 C3864.1,2873.4,3708,2615.7,3409.2,2615.7 M4576.1,3198.7c-1,2.1-4.8,4.9-12.5,2.4c-6-2.1-7.3-4.9-7.3-8.8 c0.3-3.8,82-245.4,81.3-522.2c-0.7-299.2-122.1-482.5-277.8-482.5c-95.3,0-163.1,68.1-163.1,170.1 c0,183.2,223.8,196.9,223.8,597.2c0,162.7-33.9,318.8-87.9,488.4c-251.4,848.2-1052.2,1242-1832.3,1242 c-359.9,0-615.5-74-691.5-108.1c-3.1-1.8-6-7.7-3.5-13.7c1.7-4.5,7-8,10.1-6.6c30.8,11.9,250.3,81,521.9,81 c298.5,0,475.1-122.1,475.1-271.6c0-94.9-74.7-169.6-169.6-169.6c-183.3,0-197.2,230.7-590.7,230.7c-169.6,0-319-33.9-495.3-88.4 C715,4081.2,314.3,3287.4,314.6,2500.2c0.3-383.6,107.9-689.1,109.6-691.9c1.4-2,6.2-4.2,12.1-2c6,2,7.3,6.9,7,8.7 c-9.7,31.8-81,250.7-81,522.3c0,298.8,122.1,475.1,278.2,475.1c88,0,162.7-67.7,162.7-162.7c0-183.5-224.1-203.8-224.1-597.5 c0-169.7,34.2-319.1,88.3-495.4c258-841.6,1052.2-1236,1832.7-1242.1c362.7-2.8,680,105.8,692.2,115.5c2.1,1.8,4.2,6.4,2.1,11.9 c-2.9,6.6-7.1,7.3-9.1,6.9c-3.8-0.3-210.2-86.6-522.6-86.6c-291.8-0.3-475.1,121.9-475.1,278.2c0,88,68.1,162.7,169.6,162.7 c183.3,0,196.9-223.8,590.7-223.8c169.2,0,318.7,33.5,495,88c848.6,257.9,1234.7,1058.7,1242,1832.6 C4688.9,2896.4,4577.2,3196.2,4576.1,3198.7 M2500.2,165.5c-1289.5,0-2334.6,1044.8-2334.6,2334.6 c0,1289.5,1045.1,2334.3,2334.6,2334.3c1289.2,0,2334.3-1044.8,2334.3-2334.3C4834.5,1217.3,3789.4,165.5,2500.2,165.5 M2500.2,4950C1149.6,4950,50,3857.4,50,2500.2C50,1149.2,1149.6,50,2500.2,50C3850.4,50,4950,1149.2,4950,2500.2 C4950,3857.4,3850.4,4950,2500.2,4950"
  }))));
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    min-height: 75px;\n    text-align: center;\n    background-color: ", ";\n    color: #ffffff;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    ", "\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  width: 970px;\n  margin: 0px auto;\n  display: flex;\n  flex-direction: row;\n  & > ul {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0px 10px;\n  }\n  & > ul > li {\n    display: flex;\n  }\n  & > ul > li > a {\n    color: #fff;\n    font-size: 16px;\n    text-decoration: none;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledNavContainer = styled.div(_templateObject$5());

function Nav(props) {
  var name = props.name,
      links = props.links,
      breadcrumbs = props.breadcrumbs;
  var StyledNav = styled.nav(_templateObject2$1(), props.blue ? colors.blue : colors.darkGray, props.fixed && "position: fixed;\n    width: 100%; \n    top: 0; \n    z-index: 999;\n    transition: background-color .6s ease-in;");
  return React.createElement(StyledNav, null, React.createElement(StyledNavContainer, null, React.createElement(NavBrand, {
    name: name
  }, React.createElement(GELogoSvg, null)), React.createElement("ul", null, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return React.createElement("li", {
      key: key
    }, React.createElement("a", {
      href: href
    }, label.toUpperCase()));
  }))), breadcrumbs && React.createElement(NavBreadcrumbs, {
    breadcrumbs: breadcrumbs
  }));
}

exports.Button = Button;
exports.Card = Card;
exports.Footer = Footer;
exports.Nav = Nav;
