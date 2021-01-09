import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };

    return (
        <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={(e) => onFormSubmit(e)}>
                <div className='field'>
                    {/* <label className='ui header'>Video Search</label> */}
                    <div className='ui grid'>
                        <div className='fourteen wide column'>
                            <input
                                type='text'
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
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
};

export default SearchBar;
