import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero service: fetched heroes');
    return of(HEROES);
  }
}
