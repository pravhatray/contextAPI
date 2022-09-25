import Navigation from "./Navigation";
import User from "./User";
import AddNew from "./AddNew";

export default function LeftMenu(props) {
    const {style} = props
    return (
        <div style={style} id="leftMenu">
            <User />
            <Navigation />
            <AddNew />
        </div>
    )
};
