// 网络请求
// 封装好处 1.便于修改 2.便于更换,以后不用axios直接换,不会影响逻辑页面
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000"
export default axios