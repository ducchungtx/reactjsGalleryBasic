var Com = React.createClass({
    getInitialState : function() {
        return {num: 0}
    },
    add: function(){
        this.setState({
            num: this.state.num + 1
        });
    },
    render: function() {
        return(
            <button onClick={this.add}>Hello {this.state.num}</button>
        );
    }
});
ReactDOM.render(
    <Com/>,
    document.getElementById('root')
);