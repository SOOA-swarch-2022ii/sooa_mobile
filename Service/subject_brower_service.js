import axios from "axios";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';




class SubjectBrowserService {



    getCoursesBySubject (subject, func){
        let body = {
            query: `
            query{
                getCoursesBySubject(subject: ${subject}){
                    subject
                    places
                    academic_semester
                    students_record{
                        student
                    }
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
                func((response.data).data.getCoursesBySubject);
            })
            .catch(error => console.log(error));
    }
}

export default new SubjectBrowserService();