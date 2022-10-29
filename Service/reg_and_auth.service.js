import axios from "axios";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// Initialize Apollo Client

const client = new ApolloClient({

  uri: 'http://192.168.0.3:8090',

  cache: new InMemoryCache()

});



class RegAndAuthService {

    async login(username, password, func) {
        try {
            const response = axios
                .post('http://192.168.0.3:8090/auth', {
                    username,
                    password
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
                
            return func((await response).data);
        } catch (error) {
            return console.log(error);
        }
    }

    logout() {
        localStorage.clear();
    }

    getUser(func) {
        let body = {
            query: `
          query {
            findCurrentUser {
              name
              role
              phone
              address
              nationality
              sex
              dateOfBirth
              identificationNumber
              email
            }
          }
        `,
            variables: {}
        }
        let options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios
            .post('http://192.168.0.3:8090/graphql',
                body,
                options
            ).then(response => {
                func(response.data.data.findCurrentUser);
            })
            .catch(error => console.log(error));
    }

    getAllUsers(func) {
        let body = {
            query: `
          query {
            findAll {
              name
            }
          }
        `,
            variables: {}
        }
        let options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios
            .post('/graphql',
                body,
                options
            ).then(response => {
                func((response.data).data.findAll);
            })
            .catch(error => console.log(error));
    }

    getUserByUsername(username,func) {
        let body = {
            query: `
          query {
            findOneByUsername(username: "${username}") {
              name
            }
          }
        `,
            variables: {}
        }
        let options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios
            .post('/graphql',
                body,
                options
            ).then(response => {
                console.log(response.data);
                func((response.data).data.findOneByUsername);
            })
            .catch(error => console.log(error));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new RegAndAuthService();