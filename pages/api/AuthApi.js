import axios from "axios";

export function register(req){
    axios.get('https://sawaal1croreka.store//api/user?e_mail='+req.e_mail + '&password='+req.password).then(response => {
//   console.log(response);
return response;
});
}