const redis = require("redis")
const client = redis.createClient({
    host: '121.0.0.1',
    port: 6379
})


client.connect()
client.on('connect', (err) => {
    console.log('connected on redis');
})

exports.getRockets = catchAsyncErrors(async (req,res,next) => {
    let primaryKey = 'rockets'
    let getCachedData = await client.get(primaryKey)
    let responseArray = ''
    if(getCachedData) {
        responseArray = JSON.parse(getCachedData)
        console.log('cached data');
        return res.send(responseArray)
    } else {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets')
    
    const data = JSON.stringify(response.data)
    // cache data on redis
    await client.set(primaryKey, data)
    
    console.log("server data");
    res.send(response.data)
    }
})