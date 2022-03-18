import axios from 'axios';
var userName = prompt('Please Enter your Name');
sessionStorage.setItem("userName",userName);
export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
      'Content-Type': 'application/json',
      'Authorization':sessionStorage.getItem("userName")
    },
});