import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMonorepoUISharedComponent } from './lib-monorepo-ui-shared.component';

describe('LibMonorepoUISharedComponent', () => {
  let component: LibMonorepoUISharedComponent;
  let fixture: ComponentFixture<LibMonorepoUISharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibMonorepoUISharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibMonorepoUISharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
