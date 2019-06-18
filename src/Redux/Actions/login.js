const UserLoginData = {
    "username": "hruday@gmail.com",
    "password": "nruday123"
}
export const userLogin = (data) => {
    return function(dispatch) {
        if(data.username === UserLoginData.username && data.password === UserLoginData.password ) {
            console.log("sravya");
            dispatch({
                type: "LOGIN",
                data: true
            })
        }
    }
}