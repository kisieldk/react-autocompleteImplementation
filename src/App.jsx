import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-autocomplete';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Ma' };
        this.matchStateToTerm = this.matchStateToTerm.bind(this);
    }
    matchStateToTerm(state, value){
        return (
            state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
        )
    }
    componentDidMount() {

    }
    render() {
       
        return (
  
            <div>
                <input id="elo" type="text" />
                <Autocomplete
                    value={this.state.value}
                    inputProps={{ id: 'states-autocomplete' }}
                    wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                    items={[
                        { abbr: 'AL', name: 'Alabama' },
                        { abbr: 'AK', name: 'Alaska' },
                        { abbr: 'AZ', name: 'Arizona' },
                        { abbr: 'AR', name: 'Arkansas' }
                        ]}
                    getItemValue={(item) => item.name}
                    shouldItemRender={this.matchStateToTerm}
                    onChange={(event, value) => this.setState({ value })}
                    onSelect={value => this.setState({ value })}
                    renderMenu={children => (
                        <div className="menu">
                            {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div
                            className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                            key={item.abbr}
                        >{item.name}</div>
                    )}
                />
            </div>
    )}
}
export default App;
ReactDOM.render(<App />, document.getElementById('App'));
