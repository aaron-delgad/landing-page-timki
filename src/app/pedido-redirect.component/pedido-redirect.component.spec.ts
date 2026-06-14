import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoRedirectComponent } from './pedido-redirect.component';

describe('PedidoRedirectComponent', () => {
  let component: PedidoRedirectComponent;
  let fixture: ComponentFixture<PedidoRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
