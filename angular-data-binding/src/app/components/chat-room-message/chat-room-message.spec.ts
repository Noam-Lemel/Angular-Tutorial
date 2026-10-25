import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomMessage } from './chat-room-message';

describe('Message', () => {
  let component: ChatRoomMessage;
  let fixture: ComponentFixture<ChatRoomMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRoomMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
