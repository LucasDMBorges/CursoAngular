import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})

export class PhotoListComponent implements OnInit {

  hasMore: boolean = true;
  photos: Photo[] = [];
  filter: string = '' ;
  userName: string = '';
  currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photosService: PhotoService) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  onKeyUp(x: any) {
    this.filter = x.target.value;
  }

  load(){
    this.photosService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length){
        this.hasMore = false;
      }
    });
  }

}
