// import axios from "axios";
// const api = axios.create({
//     baseURL: "http://localhost:5000/auth",
//     withCredentials: true,
// })
// try {
//     const res = await api.get("/all")    
//     console.log(res.data)
// } catch (error) {
//     console.log(error)
// }
fetch('http://localhost:5000/auth', {
  method: 'GET',
  credentials: 'include' // again, include credentials
})
.then(res => {
  if (!res.ok) throw new Error('Unauthorized');
  return res.json();
})
.then(data => {
  console.log('Protected data:', data.status);
});