import React from 'react';

export default class Header extends React.Component {
	render () {
		return (
            <nav className="navbar navbar-inverse navbar-fixed-top top-nav-collapse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" target="_blank" href="https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz">
							<img className="img-responsive" src="https://i.scdn.co/image/9b5e12a4d057a8b4313842ee481a9d8ea82945cd" alt="Linkin Park"/> Linkin Park Radio
						</a>
                    </div>
                </div>
            </nav>
		);
	}
}
