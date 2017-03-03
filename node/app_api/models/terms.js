var mongoose = require('mongoose');

var peopleListSchema = new mongoose.Schema({
    userId: {type: Sring, required: true, unique: true},
    userName: {type: Sring, required: true},
    count: {type: Number, required: true, min: 1}
});

var rulerSchema = new mongoose.Schema({
    time: {type: String, required: true},
    left: {type: Number, required: true},
    gap: {type: Boolean, required: true},
});

var intervalsSchema = new mongoose.Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
});

var weekDisplayPropsSchema = new mongoose.Schema({
    firstGap: {type: Number, required: true},
    intermGap: {type: Number, required: true},
    endGap: {type: Number, required: true},
    ruler: {type: rulerSchema, required: true},
    intervals: {type: intervalSchema, required: true},
});

var termDisplayPropsSchema = new mongoose.Schema({
    left: {type: Number, required: true},
    top: {type: Number, required: true},
});

var daysSchema = new mongoose.Schema({
    day: {type: String, required: true},
    terms: {type: termSchema, required: true},
});

var termSchema = new mongoose.Schema({
    id: {type: String, required: true},
    start: {type: Sring, required: true},
    duration: {type: Number, required: true},
    timestamp: {type: Sring, required: true},
    line1: {type: Sring, required: true},
    line2: String,
    coach: {type: Sring, required: true},
    capacity: Number,
    termDisplayProps: {type: displayPropsSchema, required: true},
    booked: peopleListSchema,
    reserved: peopleListSchema,
    cancelling: peopleListSchema
});

var weekSchema = new mongoose.Schema({
    state:
    startDate:
    endDate:
    description:
    weekDisplayProps: {type: weekDisplayPropsSchema, required: true},
    days: {type: [daysSchema], required: true}
});


