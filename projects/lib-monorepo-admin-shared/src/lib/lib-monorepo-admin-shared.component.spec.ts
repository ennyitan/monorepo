import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMonorepoAdminSharedComponent } from './lib-monorepo-admin-shared.component';

describe('LibMonorepoAdminSharedComponent', () => {
  let component: LibMonorepoAdminSharedComponent;
  let fixture: ComponentFixture<LibMonorepoAdminSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibMonorepoAdminSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibMonorepoAdminSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
