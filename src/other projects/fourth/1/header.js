
import './../css/style.css';

function Header(){
    return(
        
		<div id="header">
			<div id="motto">
				<a href="index.html" class="sitename"><img src="./../images/blakletterpress.png" height="24" width="142" alt="SiteName"/></a>
				<p>
					<img src="./../images/header-text.png" height="14" width="218" alt="Text"/>
				</p>
			</div>
			
			

    
		<div id="contents">
			<div id="main">
				<div id="gallery">
					<div>
						<img src="./../images/team-large.jpg" height="342" width="666" alt="Img"/>
					</div>
					<ul>
						<li>
							<img src="./../images/smiling.jpg" height="48" width="78" alt="Img"/>
						</li>
						<li>
							<img src="./../images/ecofriends.jpg" height="48" width="78" alt="Img"/>
						</li>
						<li>
							<img src="./../images/team.jpg" height="48" width="78" alt="Img"/>
						</li>
						<li>
							<img src="./../images/smiling.jpg" height="48" width="78" alt="Img"/>
						</li>
						<li>
							<img src="./../images/ecofriends.jpg" height="48" width="78" alt="Img"/>
						</li>
						<li>
							<img src="./../images/team.jpg" height="48" width="78" alt="Img"/>
						</li>
					</ul>
				</div>
				<div class="body">
					<h1>LANNER STUDIOS</h1>
					<p>
						Мы - проект, занимающийся монтажом видео разной сложности, созданием мувиков/эдитов/нарезок/хайлайтов, 3D визуалом по ВСЕМ играм на заказ, а также дизайном. Участники нашей команды, работающие в этом проекте, подбираются и проверяются индивидуально основателями проекта. Каждый имеет многолетний опыт в своей сфере и наработал внушительное портфолио, с которым вы можете ознакомиться при оформлении заказа.
					</p>
					<p>
						На данном канале публикуются работы, выполненные нашей командой на заказ.
					</p>
					<a href="lannerstudios/discord/index.html" target="_blank" class="more">Read more</a>
				</div>
			</div>
		</div>
        </div>
    );
}

export default Header;