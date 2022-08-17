import { useState } from 'react';
import '../App.css';

export default function Search()
{
    const [search, setSearch] = useState<string>("bruh");
    const [searchData, setSearchData] = useState<string>("null");

    function handleOnChange(searchData:string) {
        setSearch(searchData);
        //  onSearchChange(searchData);
    }

    return (
        <div className="App">
            <h1>Look It Worked!</h1>
            <div className='search-box'>
                <input 
                    type='text'
                    className='search-bar'
                    placeholder='Search'
                />
            </div>
        </div>
    );
}