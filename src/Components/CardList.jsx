import CardActivity from "./CardActivity";

const CardList = (props) =>{
    const {cards} = props

    return(
        <div className="card-list">
            {cards.map((element) => {
                return <CardActivity {...element} key={element.id}/>
            })}

        </div>
    )

}

export default CardList