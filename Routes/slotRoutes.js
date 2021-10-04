const { json } = require('body-parser');
const express = require('express');
const Slot = require('../Models/slot');
const Course = require('../Models/course');
const router = require('./courseRoutes');
const routerSlots = express.Router();

routerSlots.get('/', (req,res) => {
    res.send('Slot section');
});

routerSlots.get('/add-slots', async (req,res) => {
    let slotAvailable = await Slot.exists({});
    if(!slotAvailable)
    {
        let slotsArray = [
            {
                name: 'A2',
                year: 1,
            },
            {
                name: 'B2',
                year: 1,
            },
            {
                name: 'C2',
                year: 1,
            },
            {
                name: 'D2',
                year: 1,
            },
            {
                name: 'E2',
                year: 1,
            },
            {
                name: 'F2',
                year: 1,
            },
            {
                name: 'A2',
                year: 3,
            },
            {
                name: 'B2',
                year: 3,
            },
            {
                name: 'C2',
                year: 3,
            },
            {
                name: 'D2',
                year: 3,
            },
            {
                name: 'E2',
                year: 3,
            },
            {
                name: 'F2',
                year: 3,
            },
            {
                name: 'A1',
                year: 2,
            },
            {
                name: 'B1',
                year: 2,
            },
            {
                name: 'C1',
                year: 2,
            },
            {
                name: 'D1',
                year: 2,
            },
            {
                name: 'E1',
                year: 2,
            },
            {
                name: 'F1',
                year: 2,
            },
            {
                name: 'A1',
                year: 4,
            },
            {
                name: 'B1',
                year: 4,
            },
            {
                name: 'C1',
                year: 4,
            },
            {
                name: 'D1',
                year: 4,
            },
            {
                name: 'E1',
                year: 4,
            },
            {
                name: 'F1',
                year: 4,
            }            
        ]

        Slot.insertMany(slotsArray)
        .then(()=>{
            console.log("Slots inserted");
        })
        .catch((err) => {
            console.log(err);
        });
    }
    else console.log("Slots exist");
});

routerSlots.get('/assign-courses', async (req,res) => {
    
    for(let curYear=1;curYear <=5; curYear++)
    {
        let availCourses = await Course.find({year: curYear});
        let availSlots = await Slot.find({year: curYear, isEmpty: true});

        console.log(curYear);
        // console.log(availSlots);
        // console.log(availCourses);

        availCourses.forEach( async (course) => {
            let flag = false;
            
            if(course.slotAssigned==='NULL'){

                for(let i = 0; i< availSlots.length; i++){

                    let check = await Slot.exists({name: availSlots[i].name, profAssigned: course.teacher});
                    
                    if(availSlots[i].isEmpty && !check){
    
                        console.log(availSlots[i]);
    
                        flag=true;
                        availSlots[i].courseAssigned = course._id;
                        availSlots[i].profAssigned = course.teacher;
                        availSlots[i].isEmpty = false;
                        availSlots[i].save()
                        .then(data => console.log(data));
                        course.slotAssigned = availSlots[i].name;
                        break;
                    }                        

                }
    
                if(flag) course.save();

            }
            
        })
    }

    Slot.find({}).populate('courseAssigned');
});

routerSlots.get('/del-slots', (req,res) => {
    Slot.deleteMany({})
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

module.exports = routerSlots;