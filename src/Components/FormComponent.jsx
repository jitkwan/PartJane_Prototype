import React,{ useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {                    
    Typography,
    Box,
    Button,
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    IconButton
  } from "@mui/material";
  import CloseIcon from '@mui/icons-material/Close';



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


    //validate part
    const submitData = (e) =>{
        e.preventDefault()

        if(activityName.length > 0){
            setActivityName(activityName)
            setErrorActivityName('')
        }else{
            setErrorActivityName('Required your activity name')
        }

        if(activityType !== ''){
            setActivityType(activityType)
            setErrorActivityType('')
        }else{
            setErrorActivityType('Required the activity type')
        }

        if(duration >= 10 ){
            setDuration(duration)
            setErrorDuration('')
        }else{
            setErrorDuration('Required time at least 10 minutes')
        }

        if(date !== ''){
            setDate(date)
            setErrorDate('')
        }else{
            setErrorDate('Date is required')
        }

        if(activityName.length>0 && activityType !==''&& duration >= 10 && date !== ''){
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
            setActivityType('')
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
        <div>
            <form onSubmit={submitData} >
                <Box
                display="flex" 
                maxWidth={450} 
                flexDirection={'column'} 
                boxShadow = "10px 10px 20px #ccc"
                padding ={3}
                margin='auto'
                marginTop={6}
                borderRadius = {5}>
                <Box display="flex" marginLeft = 'auto'>
                <IconButton  >
                    <CloseIcon />
                </IconButton>
                </Box>
                <Box 
                display="flex"  
                flexDirection={'column'} 
                alignItems='center' 
                justifyContent={'center'}
                >
                    <Typography fontWeight={"bold"} variant='h4' padding={1}  textAlign ='center'>Create Your Activity</Typography>
{/* for user to put Name of Activity */}
                    <TextField label="Activity's name" type = 'text' placeholder="Activity's name" margin='normal' value={activityName} onChange = {(e) => setActivityName(e.target.value)}/>
                    <small className='text-red-700'>{errorActivityName}</small>

{/* for user to select type of Activity */}
                    <Box sx={{ minWidth: 220 }} marginTop={1}>
                        <FormControl fullWidth>
                            <InputLabel >Activity Type</InputLabel>
                            <Select 
                            value={activityType}
                            label="Activity Type"
                            onChange= {(e) =>setActivityType(e.target.value)}
                            >
                            <MenuItem value={"Run"}>Run</MenuItem>
                            <MenuItem value={"Walk"}>Walk</MenuItem>
                            <MenuItem value={"Bicycle"}>Bicycle</MenuItem>
                            <MenuItem value={"Hike"}>Hike</MenuItem>
                            <MenuItem value={"Swim"}>Swim</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <small className='text-red-700'>{errorActivityType}</small>
{/* for user to describe the Activity */}
                    <TextField sx={{ minWidth: 220 }} label="Description" type = 'text' multiline Rows={4} placeholder='Description' margin='normal' value={description} onChange = {(e) => setDescription(e.target.value)}/>
{/* for user to set duration */}
                    <TextField label="Time" type ='number' placeholder='time' margin='normal' value={duration} onChange = {(e) => setDuration(e.target.value)}/>
                    <small className='text-red-700'>{errorDuration}</small>
            
{/* for user to set date */}
                    <TextField sx={{ minWidth: 220 }}  type="date" placeholder='Date' margin='normal' value={date} onChange = {(e)=> setDate(e.target.value)}/>
                    <small className='text-red-700'>{errorDate}</small>
                    <Button type='submit' variant='contained' sx={{borderRadius:3,marginTop:3}} color="primary">Create</Button>
                    </Box>
            </Box>
        </form>
    </div>
     )
    }
export default FormComponent1
