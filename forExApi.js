const forExBaseURL = "https://api.exchangerate.host";

const endPoints = {
    latest: "/latest",
    symbols: "/symbols",
    convert: "/convert",
    timeSeries: "/timeSeries"
};

const hitAPI = async(endPoint) => {
    const rawResponse = await fetch(forExBaseURL + endPoint);
    const jsonData = await rawResponse.json();
    return jsonData;
}

export { hitAPI, endPoints };