// 网络请求
// 封装好处 1.便于修改 2.便于更换,以后不用axios直接换,不会影响逻辑页面
import axios from 'axios'
axios.defaults.baseURL = "https://netease-cloud-music-api-lac-nine-54.vercel.app"
export default axios
