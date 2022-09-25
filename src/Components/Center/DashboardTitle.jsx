import { useContext } from "react"
import { ThemeContext } from "../../Context/ThemeContext"

export default function DashboardTitle() {

    const value = useContext(ThemeContext)
    const { toggleMode, isDarkMode} = value

    return (
        <div id="myDashBoard">
            <h2>My Dashboard</h2>
            <p style={{fontSize:"10px", marginLeft:"100px"}}>{isDarkMode?"Dark Mode":"Lite Mode"}</p>
            
            <div >
                <label class="switch">
                    <input type="checkbox" onChange={toggleMode}/>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    )
};
