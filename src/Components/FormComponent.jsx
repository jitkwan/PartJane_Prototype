import './FormComponent.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



//state declare of each infomation
const FormComponent1 = (props) =>{
    const [activityName,setActivityName] = useState('')
    const [activityType,setActivityType] = useState('')
    const [description,setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState('')
   

//state declare to check error if user don't put the information
    const [errorActivityName,setErrorActivityName] = useState('')
    const [errorActivityType,setErrorActivityType] = useState('')
    const [errorDuration,setErrorDuration] = useState('')
    const [errorDate,setErrorDate] = useState('')

//state declare to change color if user don't put the information
    // const [activityNameColor,setActivityNameColor] = useState('')
    // const [activityTypeColor,setActivityTypeColor] = useState('')
    // const [durationColor,setDurationColor] = useState('')
    // const [dateColor,setDateColor] = useState('')

    //validate part
    const submitData = (e) =>{
        e.preventDefault()

        if(activityName.length > 0){
            setActivityName(activityName)
            setErrorActivityName('')
        }else{
            setErrorActivityName('Please specific your activity name')
        }

        if(activityType !== '' && activityType !== 'Please Select'){
            setActivityType(activityType)
            setErrorActivityType('')
        }else{
            setErrorActivityType('Please select the activity type')
        }

        if(duration >= 10 ){
            setDuration(duration)
            setErrorDuration('')
        }else{
            setErrorDuration('Please specific time and you should excercise at least 10 minutes')
        }

        if(date !== ''){
            setDate(date)
            setErrorDate('')
        }else{
            setErrorDate('Date is required')
        }

        if(activityName.length>0 && activityType !=='Please Select'&& duration >= 10 && date !== ''){
            const newCard = {
                id: uuidv4(),
                activityName: activityName,
                activityType: activityType,
                description: description,
                duration: Number(duration),
                date: date
            }
            console.log(newCard)
            props.onAddNewCard(newCard)
            
            setActivityName('')
            setActivityType('Please Select')
            setDescription('')
            setDuration('')
            setDate('')
            setErrorActivityName('')
            setErrorActivityType('')
            setErrorDuration('')
            setErrorDate('')
        }
    }


    return(
        <div className="container">
            <form className="form" onSubmit={submitData} >
                <h2>Setting An Activity</h2>
{/* for user to put Name of Activity */}
                <div className= 'form-control'>
                    <label>Name Your Activity</label>
                    <input 
                    type = 'text' 
                    placeholder = 'Specific your activity name' 
                    value={activityName} onChange = {(e) => setActivityName(e.target.value)}/>
                    <small className='text-red-700'>{errorActivityName}</small>
                </div>
{/* for user to select type of Activity */}
                <div>
                    <label>Activity Type</label>
                    <select className="form-control" value={activityType} onChange = {(e) =>setActivityType(e.target.value)} >
                        <option value = 'Please Select'>Please Select</option>
                        <option value = 'Run'>Run</option>
                        <option value = 'Bicycle Ride'>Bicycle Ride</option>
                        <option value = 'Swim'>Swim</option>
                        <option value = 'Walk'>Walk</option>
                        <option value = 'Hike'>Hike</option>
                    </select>
                    <small className='text-red-700'>{errorActivityType}</small>
                </div>
{/* for user to describe the Activity */}
                <div className= 'form-control'>
                    <label>Description</label>
                    <textarea type = 'text' placeholder = 'Describe your activity...' value={description} onChange = {(e) => setDescription(e.target.value)} cols="30" rows="5"></textarea>
                </div>
{/* for user to set duration */}
                <div className= 'form-control'>
                    <label>Duration(between 10 - 360 minutes)</label>
                    <input type ='number' placeholder = "Specific activity's time " value={duration} onChange = {(e) => setDuration(e.target.value)}/>
                    <small className='text-red-700'>{errorDuration}</small>
                </div>
{/* for user to set date */}
                <div className= 'form-control'>
                    <label>Date</label>
                    <input type ='date' value={date} onChange = {(e)=> setDate(e.target.value)}/>
                    <small className='text-red-700'>{errorDate}</small>
                </div>
                <button type='submit'>submit</button>
                
            </form>


        </div>
    )

}


export default FormComponent1
