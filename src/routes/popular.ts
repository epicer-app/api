import { RoutePathSet, RouteResult } from 'falcor-router';
import {popular as service} from '../services/popular';
import {response, responses, ref} from '../utils';

export const popular = [{
    route: 'popular.length',
    get: async (pathSet:RoutePathSet): Promise<RouteResult> => {
        const recipes = await service.fetch();
        return {
            path: ['popular', 'length'],
            value: recipes.length,
        };
    }
}, {
    route: 'popular[{ranges}]',
    get: async(pathSet: RoutePathSet): Promise<RouteResult> => {
        const range = (pathSet[1] as any[])[0] as any;
        const keys = [].concat(pathSet[2]);

        const res = (await service.fetch() as object[]).slice(range.from, range.to + 1);
        const output = res.map((r: any, x: number) => {
            return {
                path: ['popular', x + range.from],
                value: ref(['recipesById', r]),
            };
        });

        return output;
    }
}];
