class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endYear) {
    let startYear = this.startDate.getFullYear()
    return endYear - startYear
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {

    // HELPER VARIABLES
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let beginningHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)

    let endingHorizontal = eastWest.indexOf(this.endingLocation.horizontal)

    // RESULT VARIABLES
    let verticalChange = this.endingLocation.vertical - this.beginningLocation.vertical

    let horizontalChange = endingHorizontal - beginningHorizontal

    // RETURN
    return (horizontalChange + verticalChange)

  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }

  }


}
