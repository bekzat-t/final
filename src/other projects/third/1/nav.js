// import $ from 'jquery';
// jQuery(document).ready(function( $ ) {
// 	$('.countup').counterUp({
// 	delay: 10, // the delay time in ms
// 	time: 1000 // the speed time in ms
// 	});
// 	});

import './../css/style.css';
function Nav(){
    
    return(
		<div id="sidebar">
				<div id="navigation">
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
				</div>
				<div class="section">
					
				</div>
				<div class="section">
					<div id="posts">
						<h2>Похожие запросы</h2>
						<ul>
							<li>
								
								<p>
									LANNER STUDIOS исполняется 1 год!
								</p>
								<a href="https://vk.com/lannerstudios" target="_blank" class="more">Read more</a>
							</li>
							<li>
								
								<p>
									Вышла игра Counter Strike 2 от разработчика Valve!
								</p>
								<a href="https://www.counter-strike.net/cs2?l=russian" target="_blank" class="more">Read more</a>
							</li>
						</ul>
						<a href="news.html" class="btn2">View More</a>
					</div>
				</div>
			</div>
	)
};

export default Nav;