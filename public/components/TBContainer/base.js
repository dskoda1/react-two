"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global React*/
/*global ReactDOM*/

var TBContainer = function (_React$Component) {
    _inherits(TBContainer, _React$Component);

    function TBContainer() {
        _classCallCheck(this, TBContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TBContainer).call(this));

        _this.state = {
            children: [React.createElement(ToggleButton, { key: 1, text: "whats up" })],
            totalChildren: 1
        };
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);

        return _this;
    }

    _createClass(TBContainer, [{
        key: "handleAdd",
        value: function handleAdd(e) {
            e.preventDefault();
            var text = 'Button #' + this.state.totalChildren;
            this.state.totalChildren = this.state.totalChildren + 1;
            var button = React.createElement(ToggleButton, { key: this.state.numChildren, text: text });
            this.state.children.push(button);
            this.forceUpdate();
        }
    }, {
        key: "handleDelete",
        value: function handleDelete(e) {
            e.preventDefault();
            this.state.children.pop();
            this.forceUpdate();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { class: "container" }, React.createElement("div", { class: "row" }, React.createElement("div", { class: "col-md-12" }, React.createElement("button", { onClick: this.handleAdd, className: "btn btn-success" }, "Add"), React.createElement("button", { onClick: this.handleDelete, className: "btn btn-danger" }, "Remove"))), React.createElement("div", { class: "row" }, React.createElement("div", { class: "col-md-12" }, this.state.children)));
        }
    }]);

    return TBContainer;
}(React.Component);