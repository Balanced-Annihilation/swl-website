// This module is to be overriden by custom lobbies deriving from swl.
module.exports.settings = {

			"Chat": {
				autoJoin: { val: "#ba", name: 'Autojoin channels/private messages', type: 'list', desc: 'Can be changed by pressing the heart button in chat. Channels are prefixed with #.' },
				sortColors: { val: false, name: 'Sort players by rank', type: 'bool' },
			},

			"Spring games to show in battle list": {
				selectedAll: { val: false, name: 'Always show all games', type: 'bool' },
				selectedBa: { val: true, name: 'Balanced Annihilation', type: 'bool' },
			},};
module.exports.localStorageKey = 'swl_settings';
