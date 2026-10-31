import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomUsersSearch } from './chat-room-users-search';

describe('ChatRoomUsersSearch', () => {
  let component: ChatRoomUsersSearch;
  let fixture: ComponentFixture<ChatRoomUsersSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatRoomUsersSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRoomUsersSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
