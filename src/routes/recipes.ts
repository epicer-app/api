import {RoutePathSet, GetRoute, RouteResult} from 'falcor-router';
import {recipes as service} from '../services/recipes';
import {responses} from '../utils';

export const recipes:GetRoute[] = [{
    route: 'recipesById[{keys:ids}]["id", "name", "with"]',
    get: async (pathSet:RoutePathSet):Promise<RouteResult> => {
        const ids = pathSet[1] as string[];
        const keys = [].concat(pathSet[2]);

        const res = await service.fetch(ids) as object[];

        const output = res.map((r: any) => responses(keys, ['recipesById', r.id], r)).reduce((p,a) => p.concat(a), []);
        return output;
    }
}, {
    route: 'recipesById[{keys:id}]["ingredients","steps"].length',
    get: async (pathSet: RoutePathSet): Promise<RouteResult> => {
        const ids = pathSet[1] as string[];
        const keys = [].concat(pathSet[2]);

        const res = await service.fetch(ids) as object[];
        const output = res.map((r: any) => {
            return keys.map((key) => {
                return {
                    path: ['recipesById', r.id, key, 'length'],
                    value: r[key].length,
                };
            }).reduce((p,a) => p.concat(a), [])
        }).reduce((p,a) => p.concat(a), []);

        return output;
    }
}, {
    route: 'recipesById[{keys:ids}].ingredients[{ranges}]["name", "amount", "measure"]',
    get: async (pathSet: RoutePathSet): Promise<RouteResult> => {
        const ids = pathSet[1] as string[];
        const keys = [].concat(pathSet[4]);

        const res = await service.fetch(ids) as object[];

        const output = res.map((r:any) => {
            return r.ingredients.map((ingredient:any, x: number) => {
                return responses(keys, ['recipesById', r.id, 'ingredients', x], ingredient);
            }).reduce((p: object[],a: object[]) => p.concat(a), []);
        }).reduce((p,a) => p.concat(a), []);
        return output;
    }
}, {
    route: 'recipesById[{keys:ids}].steps[{ranges}]["description"]',
    get: async (pathSet: RoutePathSet): Promise<RouteResult> => {
        const ids = pathSet[1] as string[];
        const keys = [].concat(pathSet[4]);

        const res = await service.fetch(ids) as object[];

        const output = res.map((r:any) => {
            return r.steps.map((step:any, x: number) => {
                return responses(keys, ['recipesById', r.id, 'steps', x], step);
            }).reduce((p: object[],a: object[]) => p.concat(a), []);
        }).reduce((p,a) => p.concat(a), []);
        return output;
    }
}];
