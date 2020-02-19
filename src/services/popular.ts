import {ref} from '../utils';

const popularList = [
    'asdf1234',
    'asdf9876',
];

export const popular = {
    fetch: async(): Promise<any[]> => {
        return new Promise((resolve, reject) => {
            resolve(popularList);
        })
    }
};