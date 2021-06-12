import $ from jQuery
const API_URL = "http://localhost:3000/api/signup";

const register = (email,password) =>{
    let data = {
        email:email,
        password:password
    }
    return $.post(API_URL,data)
    
}

module.export.register = register