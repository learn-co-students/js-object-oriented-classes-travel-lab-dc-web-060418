class Driver {
  constructor(name, dateJoined) {
    this.name = name;
    this.startDate = new Date(dateJoined);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear() - 1;
  }
}



class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];


    let horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let verticalDistance = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))

    return (horizontalDistance + verticalDistance);
  }

  estimatedTime(peak) {
    return (peak) ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
