import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoragesPage } from './storages.page';

describe('StoragesPage', () => {
  let component: StoragesPage;
  let fixture: ComponentFixture<StoragesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StoragesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
