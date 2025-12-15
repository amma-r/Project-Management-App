import { useState } from 'react'
import Content from './components/Content'
import NewProject from './components/NewProject'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [selectedProjectId, setSelectedProjectId] = useState()
  const [viewMode, setViewMode] = useState("CONTENT");

  console.log(projects)

  function handleAddProjectClick(isDeletingProject = false) {
    if (!isDeletingProject) {
      setSelectedProjectId("")
      setViewMode("NEW_PROJECT")
    }
    else {
      console.log("selecting new project and setting project id as an empty strin")
      setSelectedProjectId("")
      setViewMode("CONTENT")
    }

  }

  return (
    <>
      <main className="h-screen my-8 flex">
        <Sidebar setViewMode={setViewMode} projects={projects} setSelectedProjectId={setSelectedProjectId} selectedProjectId={selectedProjectId} handleAddProjectCLick={handleAddProjectClick} />
        {viewMode == "CONTENT" && <Content selectedProjectId={selectedProjectId} setViewMode={setViewMode} setProjects={setProjects} projects={projects} handleAddProjectClick={handleAddProjectClick} />}
        {viewMode == "NEW_PROJECT" && <NewProject setProjects={setProjects} setViewMode={setViewMode} />}
      </main>
    </>
  )
}

export default App    
//we have to use more of 