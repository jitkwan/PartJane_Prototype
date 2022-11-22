import './FormComponent.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



//state declare of each infomation
const FormComponent = (props) =>{
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
    const [activityNameColor,setActivityNameColor] = useState('')
    const [activityTypeColor,setActivityTypeColor] = useState('')
    const [durationColor,setDurationColor] = useState('')
    const [dateColor,setDateColor] = useState('')

    //validate part
    const submitData = (e) =>{
        e.preventDefault()

        if(activityName.length > 0){
            setActivityName(activityName)
            setActivityNameColor('green')
        }else{
            setErrorActivityName('Please specific your activity name')
            setActivityNameColor('red')
        }

        if(activityType !== 'Activity Type'){
            setActivityType(activityType)
            setActivityTypeColor('green')
        }else{
            setErrorActivityType('Please select the activity type')
            setActivityTypeColor('red')
        }
        if(duration !== '' && duration >= 10 && duration <= 360 ){
            setDuration(duration)
            setDurationColor('green')
        }else{
            setErrorDuration('Please specific time')
            setDurationColor('red')
        }
        if(date !== ''){
            setDate(date)
            setDateColor('green')
        }else{
            setErrorDate('Date is required')
            setDateColor('red')
        }

        if(activityNameColor==='green' && activityTypeColor==='green'&& durationColor==='green' && dateColor==='green'){
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
            setActivityType('Activity Type')
            setDescription('')
            setDuration('')
            setDate('')
            setErrorActivityName('')
            setErrorActivityType('')
            setErrorDuration('')
            setErrorDate('')
            setActivityNameColor('')
            setActivityTypeColor('')
            setDurationColor('')
            setDateColor('')


       }
    }

    // const submitData=(e)=>{
    //     e.preventDefault()
    //     const newItem = {  } }

    return(
        <div className="container">
            <form className="form" onSubmit={submitData} >
                <h2>Setting An Activity</h2>
{/* for user to put Name of Activity */}
                <div className= 'form-control'>
                    <label>Name Your Activity</label>
                    <input type = 'text' placeholder = 'Specific your activity name' value={activityName} onChange = {(e) => setActivityName(e.target.value)} style={{borderColor:activityNameColor}}/>
                    <small>{errorActivityName}</small>
                </div>
{/* for user to select type of Activity */}
                <div>
                    <select className="form-control" value={activityType} onChange = {(e) =>setActivityType(e.target.value)} style={{borderColor:activityTypeColor}}>
                        <option value = 'Activity Type'>Activity Type</option>
                        <option value = 'Run'>Run</option>
                        <option value = 'Bicycle Ride'>Bicycle Ride</option>
                        <option value = 'Swim'>Swim</option>
                        <option value = 'Walk'>Walk</option>
                        <option value = 'Hike'>Hike</option>
                    </select>
                    <small>{errorActivityType}</small>
                </div>
{/* for user to describe the Activity */}
                <div className= 'form-control'>
                    <label>Description</label>
                    <input type = 'text' placeholder = 'Describe your activity...' value={description} onChange = {(e) => setDescription(e.target.value)}/>
                    {/* <small>{errorPassword}</small> */}
                </div>
{/* for user to set duration */}
                <div className= 'form-control'>
                    <label>Duration(between 10 - 360 minutes)</label>
                    <input type ='number' placeholder = "Specific activity's time " value={duration} onChange = {(e) => setDuration(e.target.value)} style={{borderColor:durationColor}}/>
                    <small>{errorDuration}</small>
                </div>
{/* for user to set date */}
                <div className= 'form-control'>
                    <label>Date</label>
                    <input type ='date' value={date} onChange = {(e)=> setDate(e.target.value)} style={{borderColor:dateColor}}/>
                    <small>{errorDate}</small>
                </div>
                <button type='submit'>submit</button>
                
            </form>


        </div>
    )

}


export default FormComponent
