function Body (props){
    return <div>
    {
      props.image.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
  </div>
}

export default Body