import { TestBed, ComponentFixture} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import {of} from 'rxjs';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';

describe('Heroes Component shallow integration', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService; 
    let HEROES;

    @Component({
        selector: 'app-hero',
        template: `<div></div>`
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
    }

    beforeEach(() => {
    HEROES = [
        {id: 1, name: 'Auston', strength: 100 },
        {id: 2, name: 'Oshie', strength: 75 },
        {id: 3, name: 'Moo', strength: 51 },
    ]
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
      TestBed.configureTestingModule({
        declarations: [HeroesComponent, FakeHeroComponent],
        providers: [
            {provide: HeroService, useValue: mockHeroService }
        ],
        //schemas: [NO_ERRORS_SCHEMA]
      })
      fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heros correctly from service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes[0].name).toBe('Auston');
    })
    //dealing with lists of Elements
    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })

})