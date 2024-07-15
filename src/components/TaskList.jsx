import React, {useState} from 'react';
import useTasks from '../services/tasksService.js'
import Task from './Task.jsx';

const TaskList = () => {

    const { data, isLoading, error, isValidating, mutate } = useTasks();
    const [selectedTask, setSelectedTask] = useState(null);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return dateString.split(' ').slice(0, -2).join(' ');
    };
    

    return (
        <div className='page'>
            <div className='page__title'>
                {
                    selectedTask &&
                    <i onClick={() => setSelectedTask(null)} className='pi pi-arrow-left'></i>
                }
                <h4>{selectedTask ? 'Task Details' : 'Assigned Tasks'}</h4>
                <hr></hr>
            </div>
            {
                selectedTask ? 
                <div className='task-description'>
                    <div className={`task-icons task--${selectedTask.difficulty}`}>
                        <i className='pi pi-info-circle'></i>
                        <span>{selectedTask.status_description}</span>
                        <i className='pi pi-clock'></i>
                        <span>{selectedTask.estimatetime}</span>
                        <i className='pi pi-check-circle'></i>
                        <span>{selectedTask.donetime || '-' }</span>
                    </div>
                    <span>Task description:</span>
                    <p>{selectedTask.description}</p>
                    <span>Job details:</span>
                    <p>Job: {selectedTask.job_name}</p>
                    <p>Start date: {formatDate(selectedTask.job_start)}</p>
                    <p>End date: {formatDate(selectedTask.job_end)}</p>
                </div> :
                <div className='task-list'>
                    {data ? data?.tasks?.map((task) => (
                        <Task key={task.id} task={task} onClick={() => setSelectedTask(task)}/>
                    )) :
                        <>No hay tareas</>
                    }
                </div>
            }
        </div>
    );
};

export default TaskList;
