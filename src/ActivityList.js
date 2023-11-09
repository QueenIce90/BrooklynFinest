 function ActivityList({brooklyns}){
    return (
    <div className="card">
    <p>{brooklyns.activites}</p>
    <img src={brooklyns.activityimage} />
    </div>
    )
 }

 export default ActivityList