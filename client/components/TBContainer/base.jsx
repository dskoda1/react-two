/*global React*/
/*global ReactDOM*/

class TBContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            children: [<ToggleButton key={1} text = "whats up" />],
            totalChildren: 1
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleAdd(e) {
        e.preventDefault();
        var text = 'Button #' + this.state.totalChildren;
        this.state.totalChildren = this.state.totalChildren + 1;
        var button = <ToggleButton key={this.state.numChildren} text={text}/>;
        this.state.children.push(button);
        this.forceUpdate();
    }

    handleDelete(e) {
        e.preventDefault();
        this.state.children.pop();
        this.forceUpdate();
    }

    render() {
        return (
            <div class="container">
            <div class="row">
            <div class="col-md-12">
            <button onClick={this.handleAdd} className="btn btn-success">Add</button> 
            <button onClick={this.handleDelete} className="btn btn-danger">Remove</button>
            </div>
            </div> 
            <div class="row">
            <div class="col-md-12">

            {this.state.children}
            </div>
            </div>
                        </div>



        )
    }
}
