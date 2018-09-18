class Driver {

    constructor(name, startDate) {
	this.name = name;
	this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
	return year - this.startDate.getFullYear() - 1;
    }

}

class Route {

    constructor(beginningLocation, endLocation) {
	this.beginningLocation = beginningLocation;
	this.endLocation = endLocation;
    }

    blocksTravelled() {
	let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

	let street_start = Number.parseInt(this.beginningLocation.vertical);
	let street_end   = Number.parseInt(this.endLocation.vertical);
	let ave_start    = eastWest.indexOf(this.beginningLocation.horizontal);
	let ave_end      = eastWest.indexOf(this.endLocation.horizontal);

	return (street_end - street_start) + (ave_end - ave_start);
    }

    estimatedTime(peak = false) {
	return this.blocksTravelled() / (peak ? 2 : 3);
    }

}
