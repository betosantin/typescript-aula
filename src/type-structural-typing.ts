type VerifyUserFn = (user: User, sendValue: User) => boolean;
type User = { userName: string, pass: string };

const verifyUser: VerifyUserFn = (user, sendValue) => {
    return user.userName === sendValue.userName &&
        user.pass === sendValue.pass;
}

const bdUser = { userName: 'Joao', pass: '123' };
const sendUser = { userName: 'Joao', pass: '123' };

const loggedIn = verifyUser(bdUser, sendUser);

console.log(loggedIn);
