import axios from "axios";

export default axios.create({
    baseUrl: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID KJAdDkojslc2WeM886204fSjGHqpMp8b0eSSwsRMPuY"
    }
});