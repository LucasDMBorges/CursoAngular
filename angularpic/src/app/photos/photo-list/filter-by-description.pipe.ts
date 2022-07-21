import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuerry: string) {
    descriptionQuerry = descriptionQuerry
    .trim()
    .toLowerCase();
    if(descriptionQuerry){
      return photos.filter(photos =>
        photos.description
        .toLowerCase().includes(descriptionQuerry)
        );
    }else{
      return photos;
    }
  }

}
