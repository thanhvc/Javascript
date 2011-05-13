/*The constrcutor for your Lecture class*/
/* Takes two String, teacher and name*/
function Lecture(name, teacher) {
	this.name = name;
	this.teacher = teacher;
}

/*The method of the teacher class, use the generated
 * a string that can be used to display() Lecture information.
 */ 
Lecture.prototype.display = function() {
	return this.teacher + ' is teaching ' + this.name;
}

/**
 * A Schedule constructor that takes in an 
 * array of lectures.
 * @param {Object} lectures the array of lectures.
 */
function Schedule(lectures) {
	this.lectures = lectures;
}

Schedule.prototype.display = function() {
	var str = '';
	//Go through each of the lectures, building up
	// a string of information
	for(var i = 0; i < this.lectures.length; i++) {
		str += this.lectures[i].display() + ' \n';
	}
	
	return str;
}




