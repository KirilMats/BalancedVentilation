import React from 'react';
import c from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import homeImg from "../../assets/img/home.svg";

const Header = (props) => {
		return (
			<header className={c.headerWrap}>
				<nav>
					<NavLink to={'/main'} className={c.homePage} activeClassName={c.activeHomePage}>
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						     viewBox="0 0 512 457.1" style={{enableBackground: `new 0 0 512 457.1`}} xmlSpace="preserve">
							<style type="text/css">
								{`.st0{fill:${'#343755'}`}
							</style>
							<g>
								<path className="st0" d="M69.6,443.4c0,0-0.5,11.4,10.7,11.4c13.9,0,129.1-0.2,129.1-0.2l0.2-105.8c0,0-1.8-17.4,15.1-17.4h53.5
									c20,0,18.8,17.4,18.8,17.4l-0.2,105.4c0,0,109.2,0,126.3,0c14.2,0,13.5-14.2,13.5-14.2v-195l-178-158.4l-189,158.4
									C69.6,245.1,69.6,443.4,69.6,443.4z"/>
								<path className="st0" d="M0,230.4c0,0,16,29.6,51,0L260.2,53.4l196.1,175.8c40.5,29.2,55.7,0,55.7,0L260.2,1.2L0,230.4z"/>
								<polygon className="st0" points="451.6,53 401.1,53 401.3,114.2 451.6,156.8 	"/>
							</g>
						</svg>
					</NavLink>
					<h1><span>B</span>alanced <span>v</span>entilation</h1>
					{
						props.authData.isAuth ?
							<div className={c.wlcomeAndLogout}>
								<span className={c.login_name}>{'Welcome, ' + props.authData.login}</span>
								<button onClick={props.logout} className={c.logout}>
									<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									     viewBox="0 0 512 512" style={{enableBackground: `new 0 0 512 512`}} xmlSpace="preserve">
										<style type="text/css">
											{`.logout{fill:${'#63CEBE'}`}
										</style>
										<g>
											<path className="logout" d="M510.371,226.513c-1.088-2.603-2.645-4.971-4.629-6.955l-63.979-63.979c-8.341-8.32-21.824-8.32-30.165,0
												c-8.341,8.341-8.341,21.845,0,30.165l27.584,27.584H320.013c-11.797,0-21.333,9.557-21.333,21.333s9.536,21.333,21.333,21.333
												h119.168l-27.584,27.584c-8.341,8.341-8.341,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251s10.923-2.069,15.083-6.251
												l63.979-63.979c1.984-1.963,3.541-4.331,4.629-6.955C512.525,237.606,512.525,231.718,510.371,226.513z"/>
											<path className="logout" d="M362.68,298.667c-11.797,0-21.333,9.557-21.333,21.333v106.667h-85.333V85.333c0-9.408-6.187-17.728-15.211-20.437
												l-74.091-22.229h174.635v106.667c0,11.776,9.536,21.333,21.333,21.333s21.333-9.557,21.333-21.333v-128
												C384.013,9.557,374.477,0,362.68,0H21.347c-0.768,0-1.451,0.32-2.197,0.405c-1.003,0.107-1.92,0.277-2.88,0.512
												c-2.24,0.576-4.267,1.451-6.165,2.645c-0.469,0.299-1.045,0.32-1.493,0.661C8.44,4.352,8.376,4.587,8.205,4.715
												C5.88,6.549,3.939,8.789,2.531,11.456c-0.299,0.576-0.363,1.195-0.597,1.792c-0.683,1.621-1.429,3.2-1.685,4.992
												c-0.107,0.64,0.085,1.237,0.064,1.856c-0.021,0.427-0.299,0.811-0.299,1.237V448c0,10.176,7.189,18.923,17.152,20.907
												l213.333,42.667c1.387,0.299,2.795,0.427,4.181,0.427c4.885,0,9.685-1.685,13.525-4.843c4.928-4.053,7.808-10.091,7.808-16.491
												v-21.333H362.68c11.797,0,21.333-9.557,21.333-21.333V320C384.013,308.224,374.477,298.667,362.68,298.667z"/>
										</g>
									</svg>
								</button>
							</div>
							:
							<NavLink to={'/login'} className={c.loginPage} activeClassName={c.activeLoginPage}>Login</NavLink>
					}
				</nav>
			</header>
		)
}

export default Header;