module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Header/styles.ts

const HeaderContainer = external_styled_components_default.a.header.withConfig({
  displayName: "styles__HeaderContainer",
  componentId: "sc-14v2o85-0"
})(["border-bottom:1px solid var(--divider);position:fixed;padding:0 20px;height:80px;display:flex;align-items:center;top:0;width:100%;border-radius:0px;background:#ffffff;box-shadow:1px 1px 8px #000;h2{margin-left:50px;color:#000;}.date{color:var(--secondary);font-size:14px;text-transform:uppercase;}.avatar{background:var(--divider);border-radius:50%;position:absolute;bottom:12px;right:0;overflow:hidden;margin-right:20px;}.avatar,.avatar img{width:40px;height:40px;}.imagem{height:40px;margin-right:8px;svg{fill:#fff;width:40px;height:40px;}}"]);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./src/components/Menu/use-dimensions.tsx
 // Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.

const useDimensions = ref => {
  const dimensions = Object(external_react_["useRef"])({
    width: 0,
    height: 0
  });
  Object(external_react_["useEffect"])(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);
  return dimensions.current;
};
// CONCATENATED MODULE: ./src/components/Menu/styles.js


const Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-9otgl4-0"
})([""]);
const IconPaceHolder = external_styled_components_default.a.div.withConfig({
  displayName: "styles__IconPaceHolder",
  componentId: "sc-9otgl4-1"
})(["width:40px;height:40px;border-radius:50%;flex:40px 0;margin-right:20px;"]);
const TextPlaceHolder = external_styled_components_default.a.div.withConfig({
  displayName: "styles__TextPlaceHolder",
  componentId: "sc-9otgl4-2"
})(["border-radius:5px;width:100%;flex:1;color:#000;"]);
const Li = external_styled_components_default()(external_framer_motion_["motion"].li).withConfig({
  displayName: "styles__Li",
  componentId: "sc-9otgl4-3"
})(["list-style:none;margin-bottom:20px;display:flex;align-items:center;cursor:pointer;"]);
const Nav = external_styled_components_default()(external_framer_motion_["motion"].nav).withConfig({
  displayName: "styles__Nav",
  componentId: "sc-9otgl4-4"
})(["top:0;left:0;bottom:0;width:300px;.background{position:inherit;top:0;left:0;bottom:0;width:300px;background:#fff;}"]);
const Ul = external_styled_components_default()(external_framer_motion_["motion"].ul).withConfig({
  displayName: "styles__Ul",
  componentId: "sc-9otgl4-5"
})(["padding:25px;position:absolute;top:100px;width:100%;"]);
const Button = external_styled_components_default.a.button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-9otgl4-6"
})(["outline:none;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:pointer;position:absolute;top:18px;left:15px;width:50px;height:50px;border-radius:50%;background:transparent;"]);
// CONCATENATED MODULE: ./src/components/Menu/MenuToggle.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Path = props => __jsx(external_framer_motion_["motion"].path, _extends({
  fill: "transparent",
  strokeWidth: "3",
  stroke: "hsl(0, 0%, 18%)",
  strokeLinecap: "round"
}, props));

const MenuToggle = ({
  toggle
}) => __jsx(Button, {
  onClick: toggle
}, __jsx("svg", {
  width: "23",
  height: "23",
  viewBox: "0 0 23 23"
}, __jsx(Path, {
  variants: {
    closed: {
      d: 'M 2 2.5 L 20 2.5'
    },
    open: {
      d: 'M 3 16.5 L 17 2.5'
    }
  }
}), __jsx(Path, {
  d: "M 2 9.423 L 20 9.423",
  variants: {
    closed: {
      opacity: 1
    },
    open: {
      opacity: 0
    }
  },
  transition: {
    duration: 0.1
  }
}), __jsx(Path, {
  variants: {
    closed: {
      d: 'M 2 16.346 L 20 16.346'
    },
    open: {
      d: 'M 3 2.5 L 17 16.346'
    }
  }
})));
// CONCATENATED MODULE: ./src/components/Menu/MenuItem.tsx
var MenuItem_jsx = external_react_default.a.createElement;


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100
      }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {
        stiffness: 1000
      }
    }
  }
};
const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];
const MenuItem = ({
  menu
}) => {
  const style = {
    border: `2px solid ${colors[menu.id]}`
  };
  return MenuItem_jsx(Li, {
    variants: variants,
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.95
    }
  }, MenuItem_jsx(IconPaceHolder, {
    style: style
  }), MenuItem_jsx(TextPlaceHolder, {
    style: style
  }, menu.titulo));
};
// CONCATENATED MODULE: ./src/components/Menu/Navigation.tsx
var Navigation_jsx = external_react_default.a.createElement;



const Navigation_variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
const Navigation = () => Navigation_jsx(Ul, {
  variants: Navigation_variants
}, itemIds.map(menu => Navigation_jsx(MenuItem, {
  menu: menu,
  key: menu.id
})));
const itemIds = [{
  id: 1,
  rota: '/',
  titulo: 'Independência Financeira'
}];
// CONCATENATED MODULE: ./src/components/Menu/index.tsx
var Menu_jsx = external_react_default.a.createElement;






const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const Menu = () => {
  const [isOpen, toggleOpen] = Object(external_framer_motion_["useCycle"])(false, true);
  const containerRef = Object(external_react_["useRef"])(null);
  const {
    height
  } = useDimensions(containerRef);
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (!isOpen) {
      setTimeout(() => {
        setOpen(isOpen);
      }, 1000);
    } else {
      setOpen(isOpen);
    }
  }, [isOpen]);
  return Menu_jsx(Nav, {
    style: {
      position: isOpen ? 'inherit' : 'absolute'
    },
    initial: false,
    animate: isOpen ? 'open' : 'closed',
    custom: height,
    ref: containerRef
  }, Menu_jsx(external_framer_motion_["motion"].div, {
    className: "background",
    variants: sidebar
  }), Menu_jsx(Navigation, null), Menu_jsx(MenuToggle, {
    toggle: () => toggleOpen()
  }));
};

/* harmony default export */ var components_Menu = (Menu);
// CONCATENATED MODULE: ./src/components/Header/index.tsx
var Header_jsx = external_react_["createElement"];




const Header = () => Header_jsx(HeaderContainer, null, Header_jsx(components_Menu, null), Header_jsx("h2", null, "Independ\xEAncia Financeira"));

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./src/styles/global.ts

/* harmony default export */ var global = (external_styled_components_["createGlobalStyle"]`
  * {
    margin: 0;
    padding: 0 0 0 0;
    box-sizing: border-box;
}

body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    height: 100vh;
    padding-top: 60px;
}

input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
    background: #fff;
  }
  .inpt-error {
      border: 2px solid red;
  }

  p {
    color: #000;
    text-align: center;
  }

#root {
    display: flex;
    justify-content: center;
  }

  .sp-error {
    color: red;
  }
`);
// CONCATENATED MODULE: ./src/styles/theme.ts
const theme = {
  colors: {
    background: '#fafafa',
    text: '#000',
    primary: '#8257e6'
  }
};
/* harmony default export */ var styles_theme = (theme);
// EXTERNAL MODULE: external "next-routes"
var external_next_routes_ = __webpack_require__("90Kz");
var external_next_routes_default = /*#__PURE__*/__webpack_require__.n(external_next_routes_);

// CONCATENATED MODULE: ./src/pages/_app.tsx
var _app_jsx = external_react_default.a.createElement;







const MyApp = ({
  Component,
  pageProps
}) => {
  var _routes$Router$router;

  return _app_jsx(external_styled_components_["ThemeProvider"], {
    theme: styles_theme
  }, _app_jsx(Component, pageProps), _app_jsx(global, null), ((_routes$Router$router = new external_next_routes_default.a().Router.router) === null || _routes$Router$router === void 0 ? void 0 : _routes$Router$router.asPath) !== '/login' && _app_jsx(components_Header, null));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ })

/******/ });