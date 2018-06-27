/*
 * Main menu.
 */

'use strict'

var _ = require('lodash'); 
var React = require('react');
var SPM = require('comp/StorePropMixins.js');
var ModalWindow = require('comp/ModalWindow.jsx');
var Battle = require('act/Battle.js');
var Settings = require('store/Settings.js');
var Applet = require('store/Applet.js');
var Log = require('act/Log.js');
var Process = require('act/Process.js');

var Server = require('act/LobbyServer.js');
var ConState = require('store/LobbyServerCommon.js').ConnectionState;

module.exports = React.createClass({
	displayName: 'Home',
	mixins: [SPM.connect('gameInfoStore', 'gameInfo')],
	getInitialState: function(){
		return {
			choosingDifficulty: null,
		};
	},
	handleMultiplayer: function(){
		if (this.props.serverStore.getInitialState().connection !== ConState.CONNECTED)
			Server.connect();
		this.props.onSelect('battlelist');
	},
	handleOpenUrl: function(url){
		var link = document.createElement('a');
		link.href = url;
		link.click();
	},
	handleSandbox: function(){
		// TODO
		/*var latestEvo = ...;
		Process.launchSpringScript({
			isHost: 1,
			hostIp: '127.0.0.1',
			myPlayerName: Settings.name || 'Player',
			gameType: latestEvo,
			mapName: ...,
			startPosType: ...,
			allyTeam0: {},
			team0: {
				allyTeam: 0,
				side: ...,
				rgbcolor: ...
			}
		});*/
	},
	render: function(){
		return <div className="container">
			
			<div className="homeScreen">
				<img className="aligncenter displayblock logoimage" src={require('img/balogo.png')} width="1040px" />

						<div className="entry entry-background">
							<h4>Thanks for checking out Balanced Annihilation!</h4>
							
							<p>Balanced Annihilation continues the unceasing war between ARM and CORE started in Cavedog’s legendary Total Annihilation! BA is a free and open-source multiplayer-focused Real Time Strategy (RTS) game. Be sure to join our discord server so that you can connect with the community and voice chat with us as well!</p>
						</div>
						<div className="entry">
							<h1 onClick={this.handleMultiplayer} className="menubutton aligncentertext">Play the Game!</h1>
							<h1 className="menubutton aligncentertext"><a href="https://balancedannihilation.com/guides/" title="Guides" target="_blank"> Guides</a></h1>
							<h1 className="menubutton aligncentertext"><a href="https://discord.me/balancedannihilation" title="Community Discord Server" target="_blank">Community Discord Server</a></h1>
							<h1 className="menubutton aligncentertext"><a href="https://springrts.com/phpbb/viewforum.php?f=44" title="Community Forums" target="_blank">Community Forums</a></h1>
							<h1 className="menubutton aligncentertext"><a href="https://www.evolutionrts.info" title="Balanced Annihilation Website" target="_blank">Balanced Annihilation Website</a></h1>
							<h1 className="menubutton aligncentertext"><a href="https://github.com/Balanced-Annihilation/Balanced-Annihilation" title="Source" target="_blank"> Source</a></h1>
							<h1 onClick={_.partial(this.props.onSelect, 'settings')} className="menubutton aligncentertext">Settings</h1>
						</div>

			</div>
		</div>;
	}
});