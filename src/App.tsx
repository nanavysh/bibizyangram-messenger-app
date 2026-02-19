import { Sidebar } from "./features/sidebar/Sidebar"

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{padding: '20px'}}>
                {/*<h2>Здесь будут чаты</h2>*/}
            </div>
        </div>
    )
}

export default App