import {TestBed, inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';



describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);
        
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                HeroService,
                { provide: MessageService, useValue: mockMessageService}
            ]
        })
        //get instance to a service
       // httpTestingController = TestBed.get(HttpTestingController)
    })

    describe('getHero', () => {
        it('Should call get with the correct URL',
         inject([HeroService, HttpTestingController],
             (service: HeroService, httpController: HttpTestingController ) => {
            
             service.getHero(4).subscribe();

             const req = httpController.expectOne('api/heroes/4');
             req.flush({id: 4, name: 'Oshie', strength: 100 });
             httpController.verify();
        }));
    });
});