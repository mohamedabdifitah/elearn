import { useParams } from 'react-router-dom';
const GroupCourses = () => {
  const { group } = useParams();
  console.log(group)
  return (
    <div>
    </div>
  )
}

export default GroupCourses
