const loginObject = require("../login/loginObject");

const userName = "standard_user";
const password = "secret_sauce"

class loginAction{
    
    async InputUserName(userName){
        await loginObject.EnterUserName.setValue(userName);
    }
    async InputPassword(password){
        await loginObject.EnterPassword.setValue(password);
    }
    async ClickloginButton(){
        await loginObject.ClickLogin.click();
    }
}



module.exports = new loginAction();