const apiKey = ""

let request_tracker = ({ tracking_code, carrier }) => {
    body = `tracker[tracking_code]=${tracking_code}&tracker[carrier]=${carrier}`;
    url = "https://api.easypost.com/v2/trackers";
    authorization = `Basic ${apiKey}`;
    http_request = fetch(url,
        {
            body,
            headers: {
                Authorization: authorization,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        }
    )
    return http_request;
}

module.exports = {
    apiKey,
    request_tracker
}
