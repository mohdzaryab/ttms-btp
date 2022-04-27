const { json } = require('body-parser');
const express = require('express');
const Slot = require('../Models/slot');
const Course = require('../Models/course');
const tutSlot = require('../Models/tutSlot');
const router = require('./courseRoutes');
const routerSlots = express.Router();

routerSlots.get('/', (req,res) => {
    res.send('Slot section');
});
routerSlots.get('/add-tut-slots', async (req,res) => {
    let slotAvailable = await tutSlot.exists({});
    if(!slotAvailable)
    {
        let slotsArray = [
            {
                name:'C1',
                num: 1,
                year: 1,
            },
            {
                name: 'E1',
                num:2,
                year: 1,
            },
            {
                name: 'A1',
                num:3,
                year: 1,
            },
            {
                name: 'D1',
                num:4,
                year: 1,
            },
            {
                name: 'F1',
                num:5,
                year: 1,
            },
            {
                name: 'E1',
                num:6,
                year: 1,
            },
            {
                name: 'C1',
                num:7,
                year: 1,
            },
            {
                name: 'F1',
                num:8,
                year: 1,
            },
            {
                name: 'A1',
                num:9,
                year: 1,
            },
            {
                name: 'D1',
                num:10,
                year: 1,
            },
            {
                name: 'B1',
                num:11,
                year: 1,
            },
            {
                name: 'E1',
                num:12,
                year: 1,
            },
            {
                name: 'G1',
                num:13,
                year: 1,
            },
            {
                name: 'D1',
                num:14,
                year: 1,
            },
            {
                name: 'C1',
                num:15,
                year: 1,
            },
            {
                name: 'F1',
                num:16,
                year: 1,
            },
            {
                name: 'D2',
                num:17,
                year: 2,
            },
            {
                name: 'E2',
                num:18,
                year: 2,
            },
            {
                name: 'A2',
                num:19,
                year: 2,
            },
            {
                name: 'F2',
                num:20,
                year: 2,
            },
            {
                name: 'B2',
                num:21,
                year: 2,
            },
            {
                name: 'E2',
                num:22,
                year: 2,
            },
            {
                name: 'F2',
                num:23,
                year: 2,
            },
            {
                name: 'C2',
                num:24,
                year: 2,
            },
            {
                name: 'A2',
                num:25,
                year: 2,
            },
            {
                name: 'B2',
                num:26,
                year: 2,
            },
            {
                name: 'D2',
                num:27,
                year: 2,
            },
            {
                name: 'E2',
                num:28,
                year: 2,
            },
            {
                name: 'F2',
                num:29,
                year: 2,
            },
            {
                name: 'C2',
                num:30,
                year: 2,
            },
            {
                name: 'B2',
                num:31,
                year: 2,
            },
            {
                name: 'D2',
                num:32,
                year: 2,
            },
            {
                name:'D2',
                num: 1,
                year: 3,
            },
            {
                name: 'E2',
                num:2,
                year: 3,
            },
            {
                name: 'A1',
                num:3,
                year: 3,
            },
            {
                name: 'D1',
                num:4,
                year: 3,
            },
            {
                name: 'F1',
                num:5,
                year: 3,
            },
            {
                name: 'E1',
                num:6,
                year: 3,
            },
            {
                name: 'C1',
                num:7,
                year: 3,
            },
            {
                name: 'F1',
                num:8,
                year: 3,
            },
            {
                name: 'A1',
                num:9,
                year: 3,
            },
            {
                name: 'D1',
                num:10,
                year: 3,
            },
            {
                name: 'B1',
                num:11,
                year: 3,
            },
            {
                name: 'E1',
                num:12,
                year: 3,
            },
            {
                name: 'G1',
                num:13,
                year: 3,
            },
            {
                name: 'D1',
                num:14,
                year: 3,
            },
            {
                name: 'C1',
                num:15,
                year: 3,
            },
            {
                name: 'F1',
                num:16,
                year: 3,
            },
            {
                name: 'D2',
                num:17,
                year: 4,
            },
            {
                name: 'E2',
                num:18,
                year: 4,
            },
            {
                name: 'A2',
                num:19,
                year: 4,
            },
            {
                name: 'F2',
                num:20,
                year: 4,
            },
            {
                name: 'B2',
                num:21,
                year: 4,
            },
            {
                name: 'E2',
                num:22,
                year: 4,
            },
            {
                name: 'F2',
                num:23,
                year: 4,
            },
            {
                name: 'C2',
                num:24,
                year: 4,
            },
            {
                name: 'A2',
                num:25,
                year: 4,
            },
            {
                name: 'B2',
                num:26,
                year: 4,
            },
            {
                name: 'D2',
                num:27,
                year: 4,
            },
            {
                name: 'E2',
                num:28,
                year: 4,
            },
            {
                name: 'F2',
                num:29,
                year: 4,
            },
            {
                name: 'C2',
                num:30,
                year: 4,
            },
            {
                name: 'B2',
                num:31,
                year: 4,
            },
            {
                name: 'D2',
                num:32,
                year: 4,
            },
            {
                name:'D2',
                num: 1,
                year: 5,
            },
            {
                name: 'E2',
                num:2,
                year: 5,
            },
            {
                name: 'A1',
                num:3,
                year: 5,
            },
            {
                name: 'D1',
                num:4,
                year: 5,
            },
            {
                name: 'F1',
                num:5,
                year: 5,
            },
            {
                name: 'E1',
                num:6,
                year: 5,
            },
            {
                name: 'C1',
                num:7,
                year: 5,
            },
            {
                name: 'F1',
                num:8,
                year: 5,
            },
            {
                name: 'A1',
                num:9,
                year: 5,
            },
            {
                name: 'D1',
                num:10,
                year: 5,
            },
            {
                name: 'B1',
                num:11,
                year: 5,
            },
            {
                name: 'E1',
                num:12,
                year: 5,
            },
            {
                name: 'G1',
                num:13,
                year: 5,
            },
            {
                name: 'D1',
                num:14,
                year: 5,
            },
            {
                name: 'C1',
                num:15,
                year: 5,
            },
            {
                name: 'F1',
                num:16,
                year: 5,
            }
                  
        ]

        tutSlot.insertMany(slotsArray)
        .then(()=>{
            console.log("Tut Slots inserted");
        })
        .catch((err) => {
            console.log(err);
        });
    }
    else console.log("Tut Slots exist");
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

routerSlots.get('/get-lecture-slots',async(req,res) => {
    let availableLectureSlots = await Slot.find({});
    res.send(availableLectureSlots);
});

routerSlots.get('/get-tut-slots',async(req,res) => {
    let availableTutorialSlots = await tutSlot.find({});
    res.send(availableTutorialSlots);
});

routerSlots.get('/assign-courses', async (req,res) => {
    
    for(let curYear=1;curYear <=3; curYear++)
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

routerSlots.get('/assign-finalYear-electives', async (req,res) => {
    let availCourses = await Course.find({year: curYear});
    let availSlots = await Slot.find({year: curYear, isEmpty: true});


    availCourses.forEach( async (course) => {
        let flag = false;

        let studentList = await Course.find({courseId: course._id});

        unordered_map<int,int> mp;

        for(let  i=0;i<studentList.size();i++){
            mp[studentList[i].enrollmentNumber]++;
        }
        

            for(let i = 0; i< availSlots.length; i++){

                let check = await Slot.exists({name: availSlots[i].name, profAssigned: course.teacher});

                let studentCheck = true;

                if(availSlots.courseAssigned.length()){
                    for(let j=0;j<availSlots.courseAssigned.length();j++){
                        let studentsEnrolled = await Course.find({courseId: course._id});

                        for(let k=0;k<studentsEnrolled.length();k++){
                            if(mp[studentsEnrolled[k].enrollmentNumber]){
                                studentCheck = false;
                                break;
                            }
                        }
                    }
                }

                if(!check && studentCheck){
                    flag = true;
                    availSlots[i].courseAssigned.push( course._id);
                    availSlots[i].profAssigned.push( course.teacher);
                    availSlots[i].save()
                    .then(data => console.log(data));
                    course.slotAssigned = availSlots[i].name;
                    break;
                }
                                      

            }

            if(flag) course.save();

        
        
    })
    Slot.find({}).populate('courseAssigned');

});


routerSlots.get('/del-slots', (req,res) => {
    Slot.deleteMany({})
    .then(res => console.log(res))
    .catch(err => console.log(err));
});
routerSlots.get('/del-tut-slots', (req,res) => {
    tutSlot.deleteMany({})
    .then(res => console.log(res))
    .catch(err => console.log(err));
});


routerSlots.get('/assign-tut',async (req,res) => {
    for(let curYear=1; curYear<=5;curYear++){
        console.log("Fetching courses")
        let availCourses = await Course.find({year: curYear});
        console.log(availCourses)
        console.log("Done")
        let availSlots = await tutSlot.find({year: curYear, isEmpty: true});
        
        let enumCourses=[];
        availCourses.forEach(course => {
            if(course.T!=0){
                for(let i=1;i<=8;i++){
                    enumCourses.push({
                        ...course.toObject(),
                        subBatch: i,
                        tutPrac: "Tut"
                    });
                }
            }
        })
        for(let k=0;k<enumCourses.length;k++){
            for(let i=0;i<availSlots.length;i++){
                
                let isAlloted = false;
                let condition = await tutSlot.exists({num:availSlots[i].num,proffsAssigned:enumCourses[k].teacher});
                
                let check = await Slot.exists({name:availSlots[i].name,profAssigned:enumCourses[k].teacher});   
                let flag = false;
                
                for(let j=0;j<availSlots[i].coursesAssigned.length;j++){
                    if(availSlots[i].coursesAssigned[j].subBatch == enumCourses[k].subBatch){
                        flag = true;
                    }
                }
                // console.log(flag)
                
                if(!condition && !check && !flag){
                    availSlots[i].coursesAssigned.push(enumCourses[k])
                    availSlots[i].proffsAssigned.push(enumCourses[k].teacher)
                    const result = await availSlots[i].save()
                    isAlloted = true
                    
                    // let temp = tutSlot.findOneAndUpdate({_id:availSlots[i]._id},{"$push":{proffsAssigned:course.teacher, coursesAssigned: course}})
                    
                }
                if(isAlloted){
                    break;
                }
            }
        }
        // enumCourses.forEach(async (course) => {
        //     for(let i=0;i<availSlots.length;i++){
                
        //         let isAlloted = false;
        //         let condition = await tutSlot.exists({num:availSlots[i].num,proffsAssigned:course.teacher});
                
        //         let check = await Slot.exists({name:availSlots[i].name,profAssigned:course.teacher});   
        //         let flag = false;
                
        //         for(let j=0;j<availSlots[i].coursesAssigned.length;j++){
        //             if(availSlots[i].coursesAssigned[j].subBatch == course.subBatch){
        //                 flag = true;
        //             }
        //         }
        //         // console.log(flag)
                
        //         if(!condition && !check && !flag){
        //             availSlots[i].coursesAssigned.push(course)
        //             availSlots[i].proffsAssigned.push(course.teacher)
        //             const result = await availSlots[i].save()
        //             isAlloted = true
                    
        //             // let temp = tutSlot.findOneAndUpdate({_id:availSlots[i]._id},{"$push":{proffsAssigned:course.teacher, coursesAssigned: course}})
                    
        //         }
        //         if(isAlloted){
        //             break
        //         }
        //     }
            
            
            // console.log(possibleSlots.length)
            // let len = possibleSlots.length
            // let index = Math.floor(Math.random()*(len-1))
            // possibleSlots[index].coursesAssigned.push(course)
            // possibleSlots[index].proffsAssigned.push(course.teacher)
            
            // DB Update 
            // possibleSlots[index].save()
            // .then(res => console.log(res))
            // .catch(err => console.log(err));
        }
    });

routerSlots.get('/assign-prac', async(req,res) =>{
    for(let curYear=1;curYear<=5;curYear++){

        console.log("Fetching courses for practical allotment")
        let availCourses = await Course.find({year: curYear});
        console.log(availCourses)
        console.log("Done")
        let availSlots = await tutSlot.find({year: curYear, isEmpty: true});
        let enumCourses=[];
        availCourses.forEach(course => {
            if(course.P!=0){
                // console.log("practical not 0");
                let batches=[];
                console.log(batches);
                for(let i=1;i<=8;i+=2){
                    // console.log(i);
                    batches.push({
                        ...course.toObject(),
                        subBatch: i,
                        tutPrac: "Prac"
                    });
                    // console.log(batches);             
                }

                // console.log(batches);
                for(let j=0;j<2;j++){

                    let randomNumber = Math.floor(Math.random()* batches.length);
                    // console.log(randomNumber);
                    let tempstring = "TA."+course.code;
                    // console.log(tempstring);
                    batches[randomNumber].teacher = tempstring;
                    enumCourses.push(batches[randomNumber]);
                    batches.splice(randomNumber,1);
                }
                enumCourses.push(...batches);
            }
        })
        // console.log(enumCourses);
        for(let k=0;k<enumCourses.length;k++){

            for(let i=0;i<availSlots.length;i++){
                if(availSlots[i].num%2==0) continue;

                let isAlloted = false;
                let condition = await tutSlot.exists({num:availSlots[i].num,proffsAssigned:enumCourses[k].teacher});
                
                let check = await Slot.exists({name:availSlots[i].name,profAssigned:enumCourses[k].teacher});   
                let flag = false;
                
                for(let j=0;j<availSlots[i].coursesAssigned.length;j++){
                    if(availSlots[i].coursesAssigned[j].subBatch == enumCourses[k].subBatch || availSlots[i].coursesAssigned[j].subBatch == enumCourses[k].subBatch+1){
                        
                        flag = true;
                    }
                }
                // console.log(flag)
                
                if(!condition && !check && !flag){
                    console.log("Inside condition");
                    // console.log(enumCourses[k]);
                    availSlots[i].coursesAssigned.push(enumCourses[k]);
                    availSlots[i+1].coursesAssigned.push(enumCourses[k]);
                    console.log(availSlots[i]);

                    enumCourses[k].subBatch+=1;
                    availSlots[i].coursesAssigned.push(enumCourses[k]);
                    availSlots[i+1].coursesAssigned.push(enumCourses[k]);

                    availSlots[i].proffsAssigned.push(enumCourses[k].teacher);
                    availSlots[i+1].proffsAssigned.push(enumCourses[k].teacher);

                    const result = await availSlots[i].save();
                    const result2 = await availSlots[i+1].save();
                    isAlloted = true
                    
                    // let temp = tutSlot.findOneAndUpdate({_id:availSlots[i]._id},{"$push":{proffsAssigned:course.teacher, coursesAssigned: course}})
                    
                }
                if(isAlloted){
                    break
                }
            }
        }
    }
    
});

module.exports = routerSlots;




