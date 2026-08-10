import "./loading.css"

const Loading = () => {
  return (
     <div className='loading'>
                <div className="circles">
                    {[1, 2, 3].map(item => <i className="fa-solid fa-circle" key={item}></i>)}
                </div>
                <p>Loading...</p>
            </div>
  )
}

export default Loading
