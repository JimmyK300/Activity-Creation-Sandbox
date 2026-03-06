import { activities } from "../data/activities";
const regex = /^[a-z0-9]+(-[a-z0-9]+)*$/
export function isValidId(id: string) {
  
  return id.length >= 3 && id.length <= 50 && regex.test(id)
}
export function getActivityById(id:string){
  
    return activities.find(a => a.id === id)
}


//future
export function getAllActivities(){
  return activities
}