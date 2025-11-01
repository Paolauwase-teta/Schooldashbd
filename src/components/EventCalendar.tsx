"use client";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
import React from 'react'

const EventCalendar = () => {
     const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white rounded-md p-4 shadow-md max-w-md mx-auto'>
        <Calendar onChange= {onChange} value={value}  selectRange/>
    </div>
  )
}

export default EventCalendar
