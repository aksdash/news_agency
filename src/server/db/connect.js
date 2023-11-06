import {connect} from "mongoose"
import 'dotenv/config'
console.log(process.env.MONGO_SERVER_URL)
const serverUrl = "mongodb://localhost:27017" + '/news-agency'
connect(serverUrl)
