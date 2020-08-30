import React from 'react'
import {IoIosPersonAdd} from 'react-icons/io';
import Modal from './AddModal';
import './Add.css'
function Position({Add}) {
    return (
        <>
        <div data-toggle="modal" data-target="#Add">
            <IoIosPersonAdd  className="AddButton" color="#139BD0" size="2em"/>
        </div>
        <Modal Add={Add}/>
        </>
    )
}

export default Position
