
import NavigationOption from "./NavigationOption";

export default function Navigation() {

    const Icons = [
        { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png" },
        { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png" },
        { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png" },
        { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png" },
        { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png" },
        { icon: "https://cdn-icons-png.flaticon.com/128/3917/3917033.png" }
    ]
    return (
        <div>
            {Icons.map((el) => (
                <NavigationOption icon={el.icon} />
            ))}
        </div>
    )
};
