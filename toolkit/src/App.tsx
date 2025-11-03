import ToolbarLayout from './components/ToolbarContainer/ToolbarContainer.tsx'

import './App.css'

function App() {

  return (
    <ToolbarLayout>
      <ToolbarLayout.Content>
        Test container
      </ToolbarLayout.Content>
      <ToolbarLayout.Toolbar style={{width: "40vw"}}>
        Toolbar Container
      </ToolbarLayout.Toolbar>
    </ToolbarLayout>
  )
}

export default App;
