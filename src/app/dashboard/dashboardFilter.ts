import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'dashboardFilter'})
export class dashboardFilter implements PipeTransform {
    public transform(values: any[], filter:string): any[]{

        if (!values || !values.length) return [];
        if (!filter) return values;
       
        return values.filter(v => v.heading.toLowerCase().indexOf(filter.toLowerCase()) >= 0 || v.content.toLowerCase().indexOf(filter) >= 0);
    }
}