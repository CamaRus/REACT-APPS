import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-a266c-default-rtdb.firebaseio.com/'
})
