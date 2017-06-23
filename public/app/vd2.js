var Album = React.createClass({
    getInitialState: function(){
        return{
            hinh: 1
        }
    },
    tiep: function() {
        this.setState({
            hinh: this.state.hinh == 4?4:this.state.hinh + 1
        });
        
    },
    quaylai: function() {
        this.setState({
            hinh: this.state.hinh == 1?1:this.state.hinh - 1
        });
    },
    render: function() {
        return (
            <div className="div-album">
                <img src={"images/" + this.state.hinh + ".jpg"}/>
                <hr/>
                <button onClick={this.tiep}>Tiep theo</button>
                <button onClick={this.quaylai}>Quay lai</button>
            </div>
        );
    }
});

ReactDOM.render(
    <Album/>,
    document.getElementById('root')
);