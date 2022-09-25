import SignleActiveUser from "./SignleActiveUser";
import UserHeader from "./UserHeader";

export default function ActiveUsers(props) {

    const ActiveUsersData = [
        { "id": 1, name: "Pravhat", address: ",Vaishali,Bihar", ProLevel: 7, points: 45350, image: "https://images.unsplash.com/photo-1642863742634-62cce58e3eda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpaGFyJTIwYm95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
        { "id": 2, name: "kabir", address: "Silchar Assam", ProLevel: 11, points: 5656, image: "https://images.unsplash.com/photo-1550806474-dbf3184e5517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFzc2FtJTIwYm95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
        { "id": 3, name: "Raja Rama", address: "AKhand Bharat", ProLevel: 33, points:4536, image: "https://images.unsplash.com/photo-1609309783328-b2fcbf559d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9yZCUyMHJhbWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" }
    ]

    return (
        <div style={props.style} id="ActiveUsers">
            <UserHeader />
            {
                ActiveUsersData.map((el) => (
                    <SignleActiveUser key={el.id} name={el.name} address={el.address} ProLevel={el.ProLevel} points={el.points} image={el.image} />
                ))
            }
        </div>
    )
};
