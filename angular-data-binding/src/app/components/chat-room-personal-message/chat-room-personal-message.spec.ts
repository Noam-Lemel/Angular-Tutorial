import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomPersonalMessage } from './chat-room-personal-message';

describe('ChatRoomPersonalMessage', () => {
  let component: ChatRoomPersonalMessage;
  let fixture: ComponentFixture<ChatRoomPersonalMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomPersonalMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRoomPersonalMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
