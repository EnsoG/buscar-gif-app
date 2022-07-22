export const ItemGif = ({imagen}) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imagen.url} alt={imagen.title} />
            <div className="card-body">
                <p className="card-text">{imagen.title}</p>
            </div>
        </div>
    )
}
