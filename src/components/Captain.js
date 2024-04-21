import './Captain.css';

function Captain(props)
{

    const captain = props.captainName

    return(
        <p className="captainName">{captain}</p>
    )
}

export default Captain;