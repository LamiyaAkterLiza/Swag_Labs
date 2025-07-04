const loginObject = require("./loginObject");

const userName = "locked_out_user";
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
    async getErrorMessage() {
        return await loginObject.errorMessage.getText();
    }
}



module.exports = new loginAction();