import axios, { AxiosInstance } from 'axios';

class UserService {

    public async getUsuarios() {
        return await  axios
            .get<any>('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (response) );
    }
}

export const userService = new UserService();