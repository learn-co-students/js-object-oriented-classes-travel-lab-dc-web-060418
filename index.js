let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let totalYears = 1 + (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000)
    return parseInt(totalYears)

  }

}

class Route {
  constructor (beginingLocation, endingLocation) {
    this.beginingLocation = beginingLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontal = Math.abs(eastWest.indexOf(this.beginingLocation.horizontal)  - eastWest.indexOf(this.endingLocation.horizontal))
    let vertical = Math.abs(this.beginingLocation.vertical - this.endingLocation.vertical)
    return horizontal + vertical
  }

  estimatedTime(peakHours) {
    if (peakHours) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }

  }

}
