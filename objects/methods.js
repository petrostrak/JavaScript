let restaurant = {
  name : 'Corner Grill',
  guestCapacity : 75,
  guestCount : 0,
  checkAvailability : function(partySize){
    let seatsLeft = this.guestCapacity - this.guestCount;
      return partySize <= seatsLeft;
  },
  removeParty : function(partySize){
    this.guestCount = this.guestCount - partySize;
  },
  seatParty : function(partySize){
    this.guestCount = this.guestCount - partySize;
  }
}
