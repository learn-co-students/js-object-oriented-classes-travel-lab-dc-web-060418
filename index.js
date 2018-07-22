class Driver {
    constructor(name, date) {
        this.name = name;
        this.startDate = new Date(date);
    }

    yearsExperienceFromBeginningOf(year) {
        return (year - this.startDate.getFullYear())
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    eastWest() {
        return ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']; 
    }

    blocksTravelled() {
        let streets = Math.abs(parseInt(this.beginningLocation.vertical)-parseInt(this.endingLocation.vertical))
        let avenues = Math.abs( this.eastWest().indexOf(this.beginningLocation.horizontal)-this.eastWest().indexOf(this.endingLocation.horizontal) )
        return streets + avenues;
    }

    estimatedTime(peak) {
        let bloksPerMinute = peak ? 2 : 3
        return Math.round(this.blocksTravelled()/bloksPerMinute)
    }
}