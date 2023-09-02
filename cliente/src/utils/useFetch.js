import axios from "axios";

const useFetch = () => {
    
    const todos = () => {
        axios   
          .get(" http://localhost:3000/todos ")
          .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });

    }
    const post = data => {
        axios
            .post("http://localhost:3000/todos", data)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });

    }
       return {todos, post}
     
}

export default useFetch