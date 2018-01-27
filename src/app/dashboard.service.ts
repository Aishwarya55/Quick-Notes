import { Injectable } from '@angular/core'

import {dashboardContent} from './dashboardContent'
import {dashboardList} from  './dashboardList'

@Injectable()

export class DashboardService {
    getdashboardData() :Promise<dashboardContent[]> {
        return Promise.resolve(dashboardList);
    }
}
