import { HeroesComponent } from './heroes.component';
// tslint:disable-next-line:import-blacklist
import { of } from 'rxjs';

describe('HeroesComponent', () => {
    let heroesComponent: HeroesComponent
    let HEROES; 
    let mockHeroesService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'Auston', strength: 100 },
            {id: 2, name: 'Oshie', strength: 75 },
            {id: 3, name: 'Moo', strength: 51 },
        ];

        mockHeroesService = jasmine.createSpyObj([
            'getHeroes', 'addHero', 'deleteHero'
        ])
        heroesComponent = new HeroesComponent(mockHeroesService);
    })

    describe('delete', () => {
        it('should remove the correct hero from the array', () => {
            mockHeroesService.deleteHero.and.returnValue(of(true));
            heroesComponent.heroes = HEROES;
            heroesComponent.delete(HEROES[0]);
            expect(heroesComponent.heroes.length).toBe(2);
        })
        it('should call deleteHero', () => {
            mockHeroesService.deleteHero.and.returnValue(of(true));
            heroesComponent.heroes = HEROES;

            heroesComponent.delete(HEROES[2]);
            expect(mockHeroesService.deleteHero).toHaveBeenCalled();
        })
        it('should call deleteHero with correct value', () => {
            mockHeroesService.deleteHero.and.returnValue(of(true));
            heroesComponent.heroes = HEROES;

            heroesComponent.delete(HEROES[2]);
            expect(mockHeroesService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })

    describe('add', () => {
        it('should add the correct hero to the array', () => {
             mockHeroesService.addHero.and.returnValue(of({id:1, name: 'Waggy', strength: 11}));
             heroesComponent.heroes = [];
             heroesComponent.add('Waggy');
             expect(heroesComponent.heroes.length).toEqual(1);
             console.log(heroesComponent.heroes);
        })

        it('should add the correct hero to the array', () => {
            mockHeroesService.addHero.and.returnValue(of({id:1, name: 'Waggy', strength: 11}));
            heroesComponent.heroes = [];
            heroesComponent.add('Waggy');
            expect(heroesComponent.heroes[0].name).toEqual('Waggy');
           
       })

        it('should call addHero', () => {
            mockHeroesService.addHero.and.returnValue(of({id:1, name: 'Waggy', strength: 11}));
            heroesComponent.heroes = [];
            heroesComponent.add('Waggy');
             
            expect(mockHeroesService.addHero).toHaveBeenCalled();
       })
    })
})