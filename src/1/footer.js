import './../css/global.css';
import './../css/css3.css';
import './../css/grey.css';
import './../css/responsive.css';

function Footer(){
    return(
        <footer id="footer">
	        <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link>
            
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

            <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/global.css?t=1628341445" />
            <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/css3.css?t=1625923460" />
            <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/responsive.css?t=1625923460" />
            <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/grey.css?t=1628447859" />

	
            <div id="copyright">
	            <div class="container">
			        <div class="pull-right">
                        <div class="language">
                            <form method="POST" action="/index.php" id="lang_select">
	
	                            <input type="hidden" name="my_post_key" value="fa6906f0d86502d75aed39fda6ba93b6" />
	                            <select name="language" onchange="MyBB.changeLanguage();">
		                            <optgroup label="Quick Language Select">
                                        <option value="english" selected="selected">&nbsp;&nbsp;&nbsp;English (American)</option>
                                        <option value="russian">&nbsp;&nbsp;&nbsp;Russian</option>
		                            </optgroup>
	                            </select>
                                <input type="submit" class="button" value="Go" />
                            </form>
                        </div>
                    </div>
			        <div class="pull-left">
				        Powered by <a href="https://www.blast.hk/"><b>blast.hk</b></a>. Copyright © 2023. All rights reserved.
			        </div>
	            </div>

            </div>
        </footer>
    )
}

export default Footer;