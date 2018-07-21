
class Driver {
    constructor(name,joinedDate){
        this.name = name 
        this.startDate = new Date(joinedDate)
    }
    
    yearsExperienceFromBeginningOf(year){
        return (year -this.startDate.getFullYear())
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }
    blocksTravelled(){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        let blocks = 0
        blocks+=Math.abs(parseInt(this.beginningLocation.vertical)-parseInt(this.endingLocation.vertical))
        blocks+=Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)-eastWest.indexOf(this.endingLocation.horizontal))
        return blocks
    }
    estimatedTime(peak = false){
        return (peak) ? this.blocksTravelled()/2 : this.blocksTravelled()/3
    }
}