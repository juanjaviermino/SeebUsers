import React from 'react';

const Task = ({task, onClick}) => {

    return (
        <div onClick={onClick} className={`task task--${task.difficulty}`}>
            <div className='task-icons'>
                <i className='pi pi-info-circle'></i>
                <span>{task.status_description}</span>
                <i className='pi pi-clock'></i>
                <span>{task.estimatetime}</span>
                <i className='pi pi-check-circle'></i>
                <span>{task.donetime || '-' }</span>
            </div>
            <div className='task-description-task'>
                <p>{task.description}</p>
            </div>
        </div>
    );
};

export default Task;
