let config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};

let URL = window.location.hostname;

if (URL === "localhost") {
  URL = process.env.REACT_APP_AXIOS_URL;
} else {
  URL = "https://bugtracker.cyclic.app/"
}

export {config, URL};