export const errorHandler = (statusCode, message)=>{
    const error = new Error(message); //error constructor
    error.statusCode = statusCode;
    error.message = message;
    return error;
}