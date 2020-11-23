import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicantsListComponent } from './user-applicants-list.component';

describe('UserApplicantsListComponent', () => {
  let component: UserApplicantsListComponent;
  let fixture: ComponentFixture<UserApplicantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplicantsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplicantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
