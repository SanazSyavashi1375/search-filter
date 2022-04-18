import React, { useState } from "react";
let searchingArray = ['ali', 'selena', 'bita', 'diana', 'farhad', 'goli', 'hatef', 'jalal', 'kiana', 'leyla', 'peter', 'omid', 'iran', 'uni', 'yavar', 'taranom', 'raha', 'sanaz', 'rose', 'tala', 'keyvan', 'hojat', 'fifi'];
let SearchFilter = () => {
        const [searchItem, setSearchItem] = useState('');
        let result = searchingArray.filter(item => item.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())).map(item => < li key = { searchingArray.indexOf(item) } > { item } < /li>)
            return ( <
                div >
                <
                input type = 'text'
                placeholder = "Enter Name"
                value = { searchItem }
                onChange = {
                    (ev) => setSearchItem(ev.target.value) }
                /> { result } <
                /div>
            )
        }
        export default SearchFilter;