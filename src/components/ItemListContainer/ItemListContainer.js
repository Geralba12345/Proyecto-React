

export const ItemListContainer = (greeting) => {

    const {titulo,content} = greeting


    return(
        <article>
            <div>
                <h5>{titulo}</h5>
                <p>{content}</p>
            </div>
        </article>
    )
}