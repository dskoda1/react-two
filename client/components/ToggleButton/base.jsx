/*global React*/

class ToggleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }
  render() {

    //Check if clicked
    var css;
    if (this.state.clicked) {
      css = 'btn btn-primary';
    }
    else {
      css = 'btn btn-default';
    }

    return (
      <button type="button" onClick={this.handleClick} className={css}>{this.props.text}</button>
    )
  }
}
