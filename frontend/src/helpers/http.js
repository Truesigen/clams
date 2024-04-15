import axios from "axios";

const http = () => {
    let options = {
        headers: {},
    }

    if (localStorage.getItem('token')) {

        let token = JSON.parse(localStorage.getItem('token'))

        options.headers.Authorization = `Bearer ${token.token}`
    }

    return axios.create(options)
}

export default http