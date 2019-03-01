import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Hero Component shallow tests', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'Dadda', strength: 45};
        expect(fixture.componentInstance.hero.name).toEqual('Dadda');
    })

    it('should render the hero name inside an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'Dadda', strength: 45};
        fixture.detectChanges(); //run change detection and update any bindings
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Dadda');
    })

    it('should render the hero name inside an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperMan', strength: 100 };
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('#myId')).nativeElement.textContent).toContain('SuperMan');
    })
})