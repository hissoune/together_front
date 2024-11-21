import {ConfigOptions} from '../constant'
export const Config = (token: string | null = null) : ConfigOptions => {
    return <ConfigOptions>{
        baseURL: 'http://localhost:3000/',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? {'Authorization': `Bearer ${token}`} : {}),
        },
    };
};