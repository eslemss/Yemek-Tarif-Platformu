import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifDetail } from './tarif-detail';

describe('TarifDetail', () => {
  let component: TarifDetail;
  let fixture: ComponentFixture<TarifDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(TarifDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
