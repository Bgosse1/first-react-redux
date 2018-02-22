export const selectUser = (user) => {
    console.log("you clicked in user: ", user.first);
    return {
       type: "USER_SELECTED",
       payload: user
    }
};