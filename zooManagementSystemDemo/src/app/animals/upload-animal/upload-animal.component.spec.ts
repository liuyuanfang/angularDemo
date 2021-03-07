import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAnimalComponent } from './upload-animal.component';

describe('UploadAnimalComponent', () => {
  let component: UploadAnimalComponent;
  let fixture: ComponentFixture<UploadAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
