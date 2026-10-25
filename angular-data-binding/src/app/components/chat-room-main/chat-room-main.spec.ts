import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomMain } from './chat-room-main';

describe('ChatRoomMain', () => {
  let component: ChatRoomMain;
  let fixture: ComponentFixture<ChatRoomMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomMain],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRoomMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
