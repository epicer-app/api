import { PathSet, PathValue } from "falcor";

export const ref = (path: PathSet) => ({$type: 'ref', value: path});

export const response = (key: string, path: string[], res: any): PathValue => (
    {
        path: path.concat(key),
        value: res[key],
    }
);

export const responses = (keys:string[], path: string[], res: any): PathValue[] => (
    keys.filter(key => res[key]).map(key => response(key, path, res))
);