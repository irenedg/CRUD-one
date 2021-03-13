import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtabellaComponent } from './crudtabella.component';

describe('CrudtabellaComponent', () => {
  let component: CrudtabellaComponent;
  let fixture: ComponentFixture<CrudtabellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudtabellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtabellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
