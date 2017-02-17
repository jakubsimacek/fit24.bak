var express = require('express');
var router = express.Router();
var clone = require('clone');

var data = {
    "_id" : "02-01-2017",
    "state" : "open",
    "startDate" : "02/01/2017",
    "endDate"   : "08/01/2017",
    "description" : "Rozvrh cvičení 1.1.2017 do 7.1.2017",
    "tableWidth" : 1005,
    "config" : {
	"maxPeople" : 7,
	"firstGap"  : 15,
	"intermGap" : 47,
	"endGap"    : 20
    },
    "ruler" : [
	{
	    "time" : "7:00",
	    "left" : 180,
	    "gap" : false    
	},
	{
	    "time" : "8:00",
	    "left" : 360,
	    "gap" : true    
	},
	{
	    "time" : "16:00",
	    "left" : 407,
	    "gap" : true    
	},
	{
	    "time" : "17:00",
	    "left" : 587,
	    "gap" : false    
	},
	{
	    "time" : "18:00",
	    "left" : 767,
	    "gap" : false    
	},
	{
	    "time" : "19:00",
	    "left" : 947,
	    "gap" : false    
	}
    ],
    "intervals" : [
	{
	    "from" : "6:20",
	    "to"   : "8:00"
	},
	{
	    "from" : "16:00",
	    "to"   : "19:00"
	}
    ],
    "days" : [ 
        {
            "day" : "pondělí",
	    "terms" : [
		{
                    "id"    : "po-16-45",
		    "start" : "16:45",
		    "timestamp" : "2017-01-02T16:45:00",
		    "line1" : "Metabolické cvičeni I.",
		    "line2" : "",
		    "coach" : "Ivana",
		    "capacity" : 7,
		    "left" : 540,
		    "top" : 31,
		    "booked" : [
			{
			    "userId" : "jakubsimacek",
			    "userName" : "Jakub Šimáček",
			    "count" : 1
			},
			{
			    "userId" : "tomashavel",
			    "userName" : "Tomáš Havel",
			    "count" : 1
			},
			{
			    "userId" : "mariemejdrova",
			    "userName" : "Marie Mejdrová",
			    "count" : 1
			},
			{
			    "userId" : "martinamala",
			    "userName" : "Martina Malá",
			    "count" : 1
			}
		    ]
		},
		{
                    "id"    : "po-18-00",
		    "start" : "18:00",
		    "timestamp" : "2017-01-02T18:00:00",
		    "line1" : "Posilování nohou, břicha,",
		    "line2" : "zádových svalů",
		    "coach" : "Aleš",
		    "capacity" : 7,
		    "left" : 765,
		    "top" : 31,
		    "booked" : [
			{
			    "userId" : "tomashavel",
			    "userName" : "Tomáš Havel",
			    "count" : 1
			},
			{
			    "userId" : "mariemejdrova",
			    "userName" : "Marie Mejdrová",
			    "count" : 5,
			    "cancelling" : 2
			},
			{
			    "userId" : "martinamala",
			    "userName" : "Martina Malá",
			    "count" : 1
			}
		    ],
		    "reserved" : [
			{
			    "userId" : "martinamala",
			    "userName" : "Martina Malá",
			    "count" : 3
			}
		    ]
		}
	    ],
        }, 
        {
            "day" : "úterý",
	    "terms" : [
		{
                    "id"    : "ut-18-00",
		    "start" : "18:00",
		    "timestamp" : "2017-01-03T18:00:00",
		    "line1" : "Metabolické cvičeni I./II.",
		    "line2" : "",
		    "coach" : "Veronika",
		    "capacity" : 7,
		    "left" : 765,
		    "top" : 111,
		    "booked" : [
			{
			    "userId" : "tomashavel",
			    "userName" : "Tomáš Havel",
			    "count" : 1
			},
			{
			    "userId" : "mariemejdrova",
			    "userName" : "Marie Mejdrová",
			    "count" : 2
			},
			{
			    "userId" : "martinamala",
			    "userName" : "Martina Malá",
			    "count" : 4
			}
		    ],
		    "reserved" : [
			{
			    "userId" : "michalburdik",
			    "userName" : "Michal Burdík",
			    "count" : 1
			}
		    ]
		}
	    ],
        }, 
        {
            "day" : "středa",
	    "terms" : [
		{
                    "id"    : "st-06-20",
		    "start" : "6:20",
		    "timestamp" : "2017-01-04T06:20:00",
		    "line1" : "Posilování celého těla",
		    "line2" : "",
		    "coach" : "Ivana",
		    "capacity" : 7,
		    "left" : 129,
		    "top" : 191,
		    "booked" : [
			{
			    "userId" : "jakubsimacek",
			    "userName" : "Jakub Šimáček",
			    "count" : 1
			},
			{
			    "userId" : "tomashavel",
			    "userName" : "Tomáš Havel",
			    "count" : 1
			},
			{
			    "userId" : "mariemejdrova",
			    "userName" : "Marie Mejdrová",
			    "count" : 1
			},
			{
			    "userId" : "martinamala",
			    "userName" : "Martina Malá",
			    "count" : 1
			}
		    ]
		},
		{
                    "id"    : "st-17-30",
		    "start" : "17:30",
		    "timestamp" : "2017-01-04T17:30:00",
		    "line1" : "Posilování horní",
		    "line2" : "poloviny těla",
		    "coach" : "Aleš",
		    "capacity" : 7,
		    "left" : 675,
		    "top" : 191,
		    "booked" : [
			{
			    "userId" : "alespetera",
			    "userName" : "Aleš Petera",
			    "count" : 3
			},
			{
			    "userId" : "tomashavel",
			    "userName" : "Tomáš Havel",
			    "count" : 1
			},
			{
			    "userId" : "mariemejdrova",
			    "userName" : "Marie Mejdrová",
			    "count" : 1
			},
			{
			    "userId" : "martinamala",
			    "userName" : "Martina Malá",
			    "count" : 1
			}
		    ]
		}
	    ],
        }, 
        {
            "day" : "čtvrtek",
	    "terms" : [
		{
                    "id"    : "ct-17-30",
		    "start" : "17:30",
		    "timestamp" : "2017-01-05T17:30:00",
		    "line1" : "Metabolické cvičeni I./II.",
		    "line2" : "",
		    "coach" : "Aleš",
		    "capacity" : 7,
		    "left" : 675,
		    "top" : 271,
		    "booked" : [
			{
			    "userId" : "tomashavel",
			    "userName" : "Tomáš Havel",
			    "count" : 1
			},
			{
			    "userId" : "mariemejdrova",
			    "userName" : "Marie Mejdrová",
			    "count" : 1
			},
			{
			    "userId" : "martinamala",
			    "userName" : "Martina Malá",
			    "count" : 1
			}
		    ],
		    "reserved" : [
			{
			    "userId" : "jakubsimacek",
			    "userName" : "Jakub Šimáček",
			    "count" : 1
			},
			{
			    "userId" : "michalburdik",
			    "userName" : "Michal Burdík",
			    "count" : 1
			},
			{
			    "userId" : "jakubsimacek",
			    "userName" : "Jakub Šimáček",
			    "count" : 1
			}
		    ]
		}
	    ],
        }, 
        {
            "day" : "pátek",
	    "terms" : [
		{
                    "id"    : "pa-18-00",
		    "start" : "18:00",
		    "timestamp" : "2017-01-06T18:00:00",
		    "line1" : "Posilování celého těla",
		    "line2" : "",
		    "coach" : "Ivana",
		    "capacity" : 7,
		    "left" : 765,
		    "top" : 351
		}
	    ],
        }
    ]
};

testParams = {
    "currentDate" : "2017-01-03T07:00:00",
    "userId" : "jakubsimacek",
    "userName" : "Jakub Šimáček",
    "isAdmin" : false
}
var currentDate = function() {
    return new Date(testParams.currentDate);
}

var checkIfPassed = function(date) {
    return (currentDate() > new Date(date));
}

var getState = function(available, numBooked, youBooked, numReserved, youReserved, time) {
    console.log(available, numBooked, youBooked, numReserved, youReserved);
    var state;
    if (checkIfPassed(time)) {
	return "passed";
    }
    if (youBooked > 0) {
	if (youReserved > 0) {
	    return "partly-booked";
	}
	else {
	    return "booked";
	}
    }
    if (youReserved > 0) {
	return "reserved";
    }
    if (available > 0) {
	return "available";
    }
    return "saturated";
}

var getOccupancy = function(isAdmin, state, available, numBooked, youBooked, numCancel, youCancel, numReserved, youReserved) {
    if (isAdmin) {
	return available + "/" + numBooked + "/" + numReserved + "/" + numCancel;
    }
    if (state == "available") {
	return available;
    }
    else if(state == "booked") {
	return available + "/" + youBooked + "/" + numCancel;
    }
    else if(state == "partially-booked") {
	return youBooked + "/" + youReserved + "/" + numCancel;
    }
    else if(state == "reserved") {
	return youReserved;
    }
    else if(state == "saturated") {
	return "";
    }
    else if(state == "passed") {
	return "";
    }
    else {
	throw new Exception("Unknown state " + state);
    }
}

var enrichDocument = function(doc, userId) {
    var curDoc = clone(doc, false);
    var i, j, k;
    var daysLen, termsLen, listLen;
    var curDay, curTerm, curListItem;
    var numReserved, numBooked, numCancel, youCancel;
    var youReserved, youBooked;
    var available, state, occupancy;

    console.log("Start");
    for(i = 0, daysLen = curDoc.days.length; i < daysLen; i++) {
	curDay = curDoc.days[i];
	//console.log("i " + curDay.day.length);
	for(j = 0, termsLen = curDay.terms.length; j < termsLen; j++) {
	    numBooked = 0;
	    youBooked = 0;
	    numCancel = 0;
	    youCancel = 0;
	    numReserved = 0;
	    youReserved = 0;
	    //console.log("j");
	    curTerm = curDay.terms[j];
	    if (curTerm.booked) {
		for(k = 0, listLen = curTerm.booked.length; k < listLen; k++) {
		    //console.log("k1");
		    curListItem = curTerm.booked[k];
		    numBooked += curListItem.count;
		    if (curListItem.cancelling) {
			numCancel += curListItem.cancelling;
		    }
		    if (curListItem.userId == testParams.userId) {
			youBooked += curListItem.count;
			if (curListItem.cancelling) {
			    youCancel += curListItem.cancelling;
			}
		    }
		}
	    }
	    if (curTerm.reserved) {
		for(k = 0, listLen = curTerm.reserved.length; k < listLen; k++) {
		    //console.log("k2");
		    curListItem = curTerm.reserved[k];
		    numReserved += curListItem.count;
		    if (curListItem.userId == testParams.userId) {
			youReserved += curListItem.count;
		    }
		}
	    }
	    available = ((curTerm.capacity - numBooked) < 0) ? 0 : (curTerm.capacity - numBooked);
	    state = getState(available, numBooked, youBooked, numReserved, youReserved, curTerm.timestamp);
	    occupancy = getOccupancy(testParams.isAdmin, state, available, numBooked, youBooked, numCancel, youCancel, numReserved, youReserved);
	    curTerm.viewData = {
		"state" : state,
		"occupancy" : occupancy,
		"available" : available,
		"numBooked" : numBooked,
		"numCancel" : numCancel,
		"numReserved" : numReserved,
		"youBooked" : youBooked,
		"youCancel" : youCancel,
		"youReserved" : youReserved
	    }
	    console.log("State: " + curTerm.viewData.state);
	}
    }
    //console.log(JSON.stringify(curDoc));
    return curDoc;
}

/* GET home page - current term view */
router.get('/', function(req, res, next) {
    res.render('index', {
	title: 'Fit 24',
	data: enrichDocument(data, testParams.userId),
	session : {
	    isAdmin: testParams.isAdmin,
	    userId: testParams.userId,
	    userName: testParams.userName
	}
    });
});

// GET term edit
router.get('/cviceni/:week/:term', function(req, res, next) {
    var termId = req.params.term;
    var i, j, lenD, lenT, termsOfDay;
    var curDay, curTerm, foundTerm;
    var enrData = enrichDocument(data, testParams.userId);
    loop1:
    for(i = 0, lenD = enrData.days.length; i < lenD; i++) {
        termsOfDay = enrData.days[i];
        console.log("... i tu " + i);
        for(j = 0, lenT = termsOfDay.terms.length; j < lenT; j++) {
            console.log(i);
            curTerm = termsOfDay.terms[j];
            if (curTerm.id == termId) {
                foundTerm = curTerm;
                curDay = termsOfDay.day;
		console.log('nalezeno ' + foundTerm.viewData.state);
                break loop1;
            }
        }
    }

    res.render('index', {
	title: 'Fit 24',
	data: enrData,
	curTerm: foundTerm,
	curDay : curDay,
	session : {
	    isAdmin: testParams.isAdmin,
	    userId: testParams.userId,
	    userName: testParams.userName
	}
    });
});

// GET params
router.get('/params', function(req, res, next) {
    res.render('params', { title: 'Fit 24', testParams: testParams, data : JSON.stringify(data, null, 2) });
});

router.post('/params', function(req, res) {
    testParams.currentDate = req.body.currentDate;
    testParams.userId = req.body.userId;
    testParams.userName = req.body.userName;
    testParams.isAdmin = (req.body.isAdmin == 'on') ? true : false;
    console.log(testParams.isAdmin);
    res.redirect(req.path);
});

module.exports = router;
