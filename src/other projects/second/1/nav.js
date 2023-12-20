import React from "react";

function Nav(){
    // return(
    // <nav>
    //     <ul>
    //         <li><a href="/">Главная</a></li>
    //         <li><a href="/о-нас">О нас</a></li>
    //         <li><a href="/услуги">Услуги</a></li>
    //         <li><a href="/контакты">Контакты</a></li>
    //     </ul>
    // </nav>
    // )
    return(
        <div>
						<ul>
							<li class="selected">
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="about.html">About</a>
							</li>
							<li>
								<a href="news.html">News</a>
							</li>
							<li>
								<a href="blog.html">Blog</a>
							</li>
						</ul>
					</div>
    )
}

export default Nav;