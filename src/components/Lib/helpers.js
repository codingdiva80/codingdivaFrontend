export const apiURL = () => {
    return (document.domain.indexOf('localhost') !== -1) ? "http://localhost:8080" : "api.codingdiva.com";
}