class loginObject{
    
    get EnterUserName(){
        return $ ("//input[@data-test='username']");
    }
    get EnterPassword(){
        return $ ("//input[@data-test='password']");
    }
    get ClickLogin(){
        return $ ("//input[@data-test='login-button']");
    } 

}

module.exports = new loginObject();