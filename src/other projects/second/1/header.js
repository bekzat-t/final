import React from 'react';

function Header(){
    return (
        <header>
            <h1>Заголовок страницы</h1>
            <nav>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/о-нас">О нас</a></li>
                    <li><a href="/контакты">Контакты</a></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;