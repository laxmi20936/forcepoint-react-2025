import ReactDOM from 'react-dom/client'
import { resDataArray , imgURL} from './src/utils/constants' 
import "./index.css"

const ResCard = (props) => {
    const {resData} = props
    console.log(resData)
    const {areaName, avgRating, cloudinaryImageId,name , costForTwo} = resData?.info

    return (
        <div className='res-card'>
            <div className= "img-container">
                <img src={imgURL + cloudinaryImageId}/>
            </div>
            <div className='res-card-details'>
                <h2>{name}</h2>
                <p>{areaName}</p>
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )

}
const Body = () => {
    return (
        <div className="res-container">
           {resDataArray.map(resInfo => <ResCard key = {resInfo?.card?.card?.info?.id} resData = {resInfo?.card?.card}/>)}
        </div>
    )
}
const App = () => (
    <div>
       <Body/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)