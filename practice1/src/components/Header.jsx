//Header.jsx

import React from "react";

//부모 컴포넌트(Page)로부터 물려받은 props(isDark)
const Header=({isDark})=>{
    return(
        <header
            className="header"
            style={{backgroundColor:isDark?'black':'lightgray', color:isDark?'white':'black',}}
>
    <h1>Welcome 홍길동</h1>
        </header>
    );
};
export default Header;