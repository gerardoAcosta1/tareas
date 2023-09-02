import axios from "axios";

const useFetch = () => {
    
    const todos = () => {
        axios   
          .get(" https://tareas1.onrender.com/todos ")
          .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });

    }
    const post = data => {
        axios
            .post("https://tareas1.onrender.com/todos", data)
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