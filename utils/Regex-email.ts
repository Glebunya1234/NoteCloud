export const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9]{3,}(\.[a-zA-Z0-9]+)?@gmail\.com$/;

    return emailRegex.test(email);
};