import { activities } from "../data/activities";

export function isValidId(id: string) {
  const regex = /^[a-z0-9]+(-[a-z0-9]+)*$/
  return id.length >= 3 && id.length <= 50 && regex.test(id)
}
export function getActivityById(id:String){
  
    return activities.find(a => a.id === id)
}


//future
export function getAllActivities(){
  return activities
}