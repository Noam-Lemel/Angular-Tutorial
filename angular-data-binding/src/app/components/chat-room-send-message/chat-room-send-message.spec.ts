import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomSendMessage } from './chat-room-send-message';

describe('ChatRoomSendMessage', () => {
  let component: ChatRoomSendMessage;
  let fixture: ComponentFixture<ChatRoomSendMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomSendMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRoomSendMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
