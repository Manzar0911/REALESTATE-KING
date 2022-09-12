import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'edd1066b30mshed84bafc6e94428p1f5e15jsna25565209b7f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        },
    });

    return data;
}