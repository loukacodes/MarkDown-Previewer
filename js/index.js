"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sampleText = 'Heading\n=======\nSub-heading\n-----------\n### Another deeper heading\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \n\nline break\n\n> Block quotes are\n> written like so.\n>\n> They can span multiple paragraphs,\n> if you like.\n\nText attributes *italic*, **bold**, \n`monospace`,\n~~strikethrough~~ .\n\nShopping list:\n * apples\n * oranges\n * pears\n\nNumbered list:\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *Made by * **[Trang Tran](https://github.com/trangtmtran)**';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "h1",
        { className: "heading" },
        "MarkDown Previewer"
      ),
      React.createElement(MarkDown, null)
    );
  };

  return App;
}(React.Component);

var MarkDown = function (_React$Component2) {
  _inherits(MarkDown, _React$Component2);

  function MarkDown(props) {
    _classCallCheck(this, MarkDown);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = {
      input: sampleText
    };
    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.createMarkup = _this2.createMarkup.bind(_this2);
    return _this2;
  }

  MarkDown.prototype.handleChange = function handleChange(event) {
    this.setState({
      input: event.target.value
    });
  };

  MarkDown.prototype.createMarkup = function createMarkup() {
    return { __html: marked(this.state.input) };
  };

  MarkDown.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "div",
        { className: "input" },
        React.createElement(
          "h3",
          null,
          "Input"
        ),
        React.createElement("textarea", { onChange: this.handleChange, value: this.state.input })
      ),
      React.createElement(
        "div",
        { className: "rendered" },
        React.createElement(
          "h3",
          null,
          "Mark it up!"
        ),
        React.createElement("div", { dangerouslySetInnerHTML: this.createMarkup() })
      )
    );
  };

  return MarkDown;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('react-render'));