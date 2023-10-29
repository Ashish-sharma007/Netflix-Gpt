 export const checkValidDate = (name,email,password) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
const isName = /^[A-Z][-'a-zA-Z]+$/.test(name);

if (!isName) return "Name is not valid";
if (!isEmailValid) return "Email ID is not valid";
if (!isPasswordValid) return "Password is not valid";

return null;
 }