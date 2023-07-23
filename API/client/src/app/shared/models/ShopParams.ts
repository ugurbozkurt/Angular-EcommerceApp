export class ShopParams{
    brandId : number = 0;
    typeId : number = 0;
    sort : string = 'name';
    pageNumber : number = 1;
    pageSize : number = 6;
    firstItem = {id:0,name:'All'};
    search : string = '';
    sortOptions = [
        {name:'Alphabetical',value:'name'},
        {name:'Price: Low to High',value:'priceAsc'},
        {name:'Price: High to Low',value:'priceDesc'}
      ];
}