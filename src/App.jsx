import { useState } from 'react'
import Content from './components/Content'
import NewProject from './components/NewProject'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [sidebarProjects, setSidebarProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState({})
  const [viewMode, setViewMode] = useState("CONTENT");

  function handleAddProjectClick(isDeletingProject = false) {
    if (!isDeletingProject) {
      setSelectedProject({})
      setViewMode("NEW_PROJECT")
    }
    else {
      setSelectedProject({})
      setViewMode("CONTENT")
    }

  }

  return (
    <>
      <main className="h-screen my-8 flex">
        <Sidebar setViewMode={setViewMode} sidebarProjects={sidebarProjects} setSelectedProject={setSelectedProject} selectedProject={selectedProject} handleAddProjectCLick={handleAddProjectClick} />
        {viewMode == "CONTENT" && <Content selectedProject={selectedProject} setViewMode={setViewMode} setSidebarProjects={setSidebarProjects} sidebarProjects={sidebarProjects} handleAddProjectClick={handleAddProjectClick} />}
        {viewMode == "NEW_PROJECT" && <NewProject setSidebarProjects={setSidebarProjects} setViewMode={setViewMode} />}
      </main>
    </>
  )
}

export default App    