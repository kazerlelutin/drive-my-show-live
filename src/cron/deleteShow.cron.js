const 
	axios= require('axios'),
	CronJob = require('cron').CronJob;

async function deleteShow(){
	const {data} = await axios.get(process.env.URL_API + '/deleteOldShowes',{headers:{
		Authorization: process.env.CRON_KEY
	}})
	console.log('🧹 clean', data)
}

const deleteShowCron = new CronJob(
	'0 0 * * *',
	deleteShow,
	null,
	true,
	'Europe/Paris'
);

module.exports =  deleteShowCron