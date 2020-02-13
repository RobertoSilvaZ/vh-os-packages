"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHComments = function VHComments(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(S.Title, null, "Comments (".concat(props.comments.length, ")")), _react.default.createElement("div", {
    style: {
      height: '150px',
      overflow: 'scroll'
    }
  }, props.comments.map(function (comment) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(S.Wrapper, null, _react.default.createElement(_Avatar.default, {
      image: comment.image,
      size: "md"
    }), _react.default.createElement(S.Name, null, comment.fullName), _react.default.createElement(S.Date, null, comment.days)), _react.default.createElement(S.Description, null, comment.event));
  })), _react.default.createElement(S.CommentWrapper, null, _react.default.createElement(_Avatar.default, {
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    size: "md"
  }), _react.default.createElement(S.Area, {
    placeholder: "Ask a question or post a uptade"
  })));
};

VHComments.defaultProps = {};
VHComments.propTypes = {};
var _default = VHComments;
exports.default = _default;