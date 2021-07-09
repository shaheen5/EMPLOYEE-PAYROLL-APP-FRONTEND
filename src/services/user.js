import Axios from 'axios'
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const userLogin = (loginDetails) => {
    Axios.post('/login', loginDetails).then((res) => {
        console.log(res.data.message);
    }).catch((error) => {
        console.log(error);
    })
}

export const userRegistration = (userCredentials) => {
    Axios.post('/registerUser', userCredentials).then((res) => {
        console.log(res.data.message);
    }).catch((error) => {
        console.log(error);
    })
}