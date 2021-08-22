const moment = require('moment')

function formMessage(username, text) {
	return {
		username,
		text,
		time: moment().format('h:mm a')
	}
}

module.exports = formMessage