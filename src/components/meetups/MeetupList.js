import { useNavigate } from 'react-router-dom'
import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList(props) {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/favorites')
  }

  return <ul className={classes.list}>
      {props.meetups.map((meetup) => (
      <MeetupItem
       key={meetup.id}
       id={meetup.id}
       image={meetup.image}
       title={meetup.title} 
       address={meetup.address}
       description={meetup.description}
       onClick ={handleClick}
       />
       ))}
  </ul>  
}

export default MeetupList   