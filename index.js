class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year) {
        let beginningOf = new Date(year, 1, 1)
        return beginningOf.getFullYear() - this.startDate.getFullYear() - 1
    }

}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    eastWest() {
        return ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']; 
    }

    blocksTravelled() {
        let streets = Math.abs(parseInt(this.beginningLocation.vertical)-parseInt(this.endingLocation.vertical))
        let avenues = Math.abs( this.eastWest().indexOf(this.beginningLocation.horizontal)-this.eastWest().indexOf(this.endingLocation.horizontal) )
        return streets + avenues;
    }

    estimatedTime(peak = false){
        return (peak) ? this.blocksTravelled()/2 : this.blocksTravelled()/3
    }


}