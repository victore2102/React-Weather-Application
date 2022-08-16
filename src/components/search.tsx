import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
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
        <div className='search-box'>
            <input 
                type='text'
                className='search-bar'
                placeholder='Search'
            />
        </div>
    );
}