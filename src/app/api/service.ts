import * as api from './1.json';

import { InjectionToken } from "@angular/core";

export const API = new InjectionToken<any>("API", {providedIn: "root", factory: () => api})
