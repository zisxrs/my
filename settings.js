const fs = require('fs')

global.creator = 'Scheta'
global.MONGO_DB_URI = "mongodb+srv://SchetaMongoDB:06052002205n1c@cluster0.j77owui.mongodb.net/?retryWrites=true&w=majority"  
global.ACTIVATION_TOKEN_SECRET = "keguadululah" 
global.your_email = "vecksosz3@gmail.com" 
global.email_password = "fbfa stvg gpiv jthe" 
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
