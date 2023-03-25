const required = (value) => {
    if (value) return;
    return 'Field is required';
};
const lengthValidatorCreator = (length) => {
    return (value) => {
        if (value.length > length) {
            return;
        }
        return `Min length is ${length}`;
    };
};

export { required, lengthValidatorCreator };
