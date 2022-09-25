export default function SignleActiveUser(props) {

    const { name, image, address, ProLevel, points } = props

    return (
        <div id="SingleActiveUser">
            <div>
                <div>
                    <img className="ActiveUserImage" src={image} alt="" />
                    <div>
                        <h4>{name}</h4>
                        <p>{address}</p>
                    </div>
                </div>
                <div className="dotes">...</div>
            </div>
            <div id="progressBar"></div>
            <div className="level">
                <p>Professionalism {ProLevel}</p>
                <p> {points} scores </p> 
            </div>
        </div>
    )
};
