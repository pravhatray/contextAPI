import ActiveUsers from "./ActiveUsers/ActiveUsers";
import DashboardTitle from "./DashboardTitle";

export default function Center(props) {
    const {style} = props
    return (
        <div id="center">
            <DashboardTitle />
            <ActiveUsers style={style}/>
        </div>
    )
};
