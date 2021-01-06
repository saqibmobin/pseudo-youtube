import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onTextChange = (e) => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        {/* <label className='ui header'>Video Search</label> */}
                        <div className='ui grid'>
                            <div className='fourteen wide column'>
                                <input
                                    type='text'
                                    value={this.state.term}
                                    onChange={this.onTextChange}
                                />
                            </div>
                            <div className='two wide column'>
                                <input
                                    className='ui red button'
                                    type='submit'
                                    value='submit'
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
