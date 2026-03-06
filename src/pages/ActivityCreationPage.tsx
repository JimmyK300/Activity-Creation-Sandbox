import { useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { generateId } from "../utils/generateId"

export default function ActivityCreationPage() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [activities, setActivities] = useLocalStorage("activities", [])

  function handleSave() {

    const id = generateId(title)

    const newActivity = {
      id: id,
      title: title,
      content: content
    }

    const updatedActivities = [...activities, newActivity]

    setActivities(updatedActivities)

    setTitle("")
    setContent("")
  }

  return (
    <div>

      <h1>Create Activity</h1>

      <input
        type="text"
        placeholder="Activity Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Activity Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button onClick={handleSave}>
        Save
      </button>

    </div>
  )
}
