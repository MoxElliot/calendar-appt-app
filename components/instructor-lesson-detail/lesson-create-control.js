import React, { useState} from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addLesson } from '../../redux/slices/lessonDataSlice'


const lessonDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const repeatOptArr = ['Daily', 'Weekly', 'Monthly', 'None'];

export default function LessonCreateControl () {

    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [repeat, setRepeat] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState('Requested');

    const dispatch = useDispatch();

    const onDateChange = e => setDate(e.target.value);
    const onDayChange = e => setDay(e.target.value);
    const onRepeatChange = e => setRepeat(e.target.value);
    const onTimeChange = e => setTime(e.target.value);
    const onNameChange = e => setName(e.target.value);
    const onDetailChange = e => setDetail(e.target.value);
    const onStatusChange = e => setStatus("Booked");

    const onCreateLessonClick = (e) => {
        e.preventDefault();
        console.log("in onCreateLessonClick")
        dispatch(
            addLesson({
                id:nanoid(),
                date,
                day,
                repeat,
                time,
                name,
                detail,
                status
            })
        )
        setDate('')
        setDay('')
        setRepeat('')
        setTime('')
        setName('')
        setDetail('')
        setStatus('')
    }


    const lessonDayRadio = lessonDayArr.map(dayOfWeek=> (
                    <label className="lesson-control-radio" key={dayOfWeek.toString()} >
                        {dayOfWeek}
                        <input 
                            type="radio" 
                            id="dayRad"
                            name="dayRad"
                            value={day}
                            onChange={onDayChange} 
                            />
                    </label>
              
            ));

    const repeatOptRadio = repeatOptArr.map(option=> (
                    <label className="lesson-control-radio" key={option.toString()} >
                        {option}
                        <input 
                            type="radio" 
                            id="repeatRad"
                            name="repeatRad"
                            value={repeat}
                            onChange={onRepeatChange} 
                            />
                    </label>
                
            ));
    return (
        <div className='controlContainer'>
        <div className="lessonControlLeft col mx-2">
            <form id="lessonControlEle">
                <p className="lessonControlP">
                    Set New Lesson Date -or- Select Repeat Options
                </p>
                <div className='lesson-date-input 
                    container 
                    d-flex-column justify-content-center align-items-center'>
                    <div className="row w-50" >        
                    <input 
                        type="date" 
                        name="lesson-date"
                        id="lesson-date"
                        value={date}
                        onChange={onDateChange} 
                        />
                    </div>
                    
                </div>
            </form>
            <form id="lessonControlEle">
                <p  className="lessonControlP">Repeat Lesson</p>
                    {repeatOptRadio}
                <div>
                    {lessonDayRadio}
                </div>
            </form>
            <form>
                    <p className="lessonControlP">
                        Set New Lesson Time
                    </p>
                    <div className='lesson-time-input 
                        container 
                        d-flex-column justify-content-center align-items-center'>
                        <div className="row w-50" >        
                        <input 
                            type="time" 
                            name="lesson-time"
                            id="lesson-time"
                            value={time}
                            onChange={onTimeChange} 
                            />
                        </div>
                    </div>
                </form>
            <div className="lessonControlBottom">
                
                <form id="lessonControlEle" > 
                    <label className="studentSelect" id="lessonControlP">
                        <input 
                            type="checkbox" 
                            id="lessonStatus"
                            name="lessonStatus"
                            value={status}
                            onChange={onStatusChange}
                            />
                        Only Available to:
                    </label>
                        <input 
                            type="text" 
                            placeholder='Student Name'
                            id="studentName"
                            name="studentName"
                            className='studentName'
                            value={name}
                            onChange={onNameChange}
                            />
                </form>
                
            </div>
        </div>
        <div className='lessonControlRight col'>
            <div className='container'>
            <form className='lessonControlDetail'>
                <p className='lessonControlP'>Lesson Details</p>
                <textarea 
                    rows="3"
                    cols="30"
                    name="lessonDetail"
                    value={detail}
                    onChange={onDetailChange}
                />
            </form>
                <div className='row'>
                    <form className='lessonControlAttachment m-2 px-1
                            col col-md-4 col-6
                            d-flex flex-column'>
                    
                            <p className='lessonControlP m-0'>Lesson Attachments</p>
                            <button className='btn p-0 w-75'>
                                <label className='bi bi-plus'>Add Attachment</label>
                            </button>
                            <Link href="/">
                                <a className='bi bi-paperclip'>game-review.sgf</a>
                            </Link>
                            <Link href="/">
                                <a className='bi bi-paperclip'>OpeningProblems.sgf</a>
                            </Link>
                    
                    </form>
                    <form className="lessonControlBtn col" id="lessonControlEle">
                        <button 
                            className='btn btn-primary'
                            id="lessonSubmit"
                            name="lessonSubmit"
                            onClick={onCreateLessonClick}
                        >
                            Create Lessson
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}