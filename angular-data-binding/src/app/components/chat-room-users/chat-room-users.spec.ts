import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomUsers } from './chat-room-users';

describe('ChatRoomUsers', () => {
  let component: ChatRoomUsers;
  let fixture: ComponentFixture<ChatRoomUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomUsers],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRoomUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
