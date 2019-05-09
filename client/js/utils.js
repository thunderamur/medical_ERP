'use strict';

function getShortName(person) {
	return `${person.surname} 
					${person.name.substr(0,1)}.
					${person.patronymic.substr(0,1)}.`;
}
