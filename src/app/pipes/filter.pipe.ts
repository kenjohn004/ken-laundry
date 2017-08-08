import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: String): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => (item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || item.tags.DESCRIPTION.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || item.tags.VERSION.indexOf(filter) !== -1));
    }
}