let score = 0
let wicket = 0
let ballWiseRes=[]
let hit=0
let inputRef= React.createRef()

function addScore(num){
    // score+=num
    // ballWiseRes.push(num)

    hit=num
    root.render(<App/>)
}
function addWicket(){
    // if (wicket < 10){
    //     wicket+=1
    //     ballWiseRes.push('W')
    //     root.render(<App/>)
    // }else{
    //     wicket=0
    //     score=0
    //     alert('Match Over')
    //     root.render(<App/>)
    // }

    hit='W'
    root.render(<App/>)
}
function ScoreButton(){
    return(
        <div>
            <button onClick={()=>addScore(0)}>0</button>
            <button onClick={()=>addScore(1)}>1</button>
            <button onClick={()=>addScore(2)}>2</button>
            <button onClick={()=>addScore(3)}>3</button>
            <button onClick={()=>addScore(4)}>4</button>
            <button onClick={()=>addScore(5)}>5</button>
            <button onClick={()=>addScore(6)}>6</button>
            <button onClick={addWicket}>wicket</button>
        </div>
    )
}
function Result(){
    return(
        <div>
            {ballWiseRes.map((res,index)=>(
            <>
            {index % 6 === 0?<br/>: null}
            <span key={index}>{res===0?<strong>.</strong>:res}</span>&nbsp;&nbsp;&nbsp;
            </>
            ))}
        </div>
    )
}
function handleSubmit(event){
    event.preventDefault()
    ballWiseRes.unshift(
        <span>{`${hit}: ${inputRef.current.value}`}</span>
        )
    if (hit==='W'){
        wicket+=1
    }else{
        score+=hit
    }
    hit=0
    inputRef.current.value=''
    root.render(<App/>)
}   

function Form(){
    return(
        <form onSubmit={handleSubmit}>
            <input value={hit}></input>
            <input ref={inputRef} placeholder='Add Comment'></input>
            <button>Submit</button>
        </form>

    )
}
const App = () => (

    <>
        <h1>SCOREBOARD</h1>
        <h2>Score: {score}/{wicket}</h2>
        <ScoreButton/>
        <br/>
        <Form/>
        <hr/>
        {ballWiseRes.map((res,index)=>(
            <>
            <span key={index}>{res}</span>
            </>
        ))}
        

    </> 
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)