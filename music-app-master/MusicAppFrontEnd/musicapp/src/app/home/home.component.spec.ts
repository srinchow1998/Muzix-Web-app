import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should have addToFav()', () => {
  //   // Testcase to check function existence
  //   expect(component.addToFav).toBeTruthy();
  // });

  // it('should have Logout()', () => {
  //      // Testcase to check function existence
  //     expect(component.Logout).toBeTruthy();
  //   });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('addToFav() should add item to favourites ',() => {
     //   expect(component.addToFav).toBeTruthy();
  // });
});
