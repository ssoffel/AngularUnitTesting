import {TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from '../hero/hero.component';
import { HeroService } from '../hero.service'; 
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {of} from 'rxjs';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';

describe('HeroesComponent deep tests', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let HEROES;
    let mockHeroService;
    
    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'Auston', strength: 100 },
            {id: 2, name: 'Oshie', strength: 75 },
            {id: 3, name: 'Moo', strength: 51 },
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations: [HeroesComponent, HeroComponent],
            providers: [
                { provide: HeroService, useValue: mockHeroService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
     
        
    })

    it('should render each hero as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        //run ngOnInit
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.directive(HeroComponent)).length).toEqual(3);
    })

    it('should render correct heroes name', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        //run ngOnInit
        fixture.detectChanges();
        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDEs[0].componentInstance.hero.name).toEqual('Auston');
        expect(heroComponentDEs[2].componentInstance.hero.name).toEqual('Moo');
    })

    it('should render the correct HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        //run ngOnInit
        fixture.detectChanges();

        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
        for(let i = 0; i < heroComponentDEs.length; i++ ) {
            expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
        }

    })
})