const Top = (props) =>{
    return(
        <div className='top'>
            <div id='rank'>
                <p className='rank-text'>{props.position}</p>
            </div>
            <div className="name">
                {props.player}
            </div>
            <div className='level'>
                Level {props.level}
            </div>
        </div>
    )
}

export default Top