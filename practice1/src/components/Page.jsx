//Page.jsx
import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

//부모컴포넌트(App)에서 받은 props를 
const Page=({isDark, setIsDark})=>{
    return(
        <div className="page">
            {/* 자식컴포넌트(Header, Footer, Content)에게 전달하고 있다. props drilling이 발생하고 있음 */}
            <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
    );
};

export default Page;


