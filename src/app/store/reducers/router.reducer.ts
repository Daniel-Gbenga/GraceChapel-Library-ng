import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{

    serialize(routerState: RouterStateSnapshot) {

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }

        const { params } = state;
        const { url, root: { queryParams } } = routerState;
        return { url, queryParams, params };
    }

}