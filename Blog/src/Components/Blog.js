//Blogging App using Hooks
import { useEffect,useState,useRef, useReducer } from "react";

function blogsReducer(state,action){
    switch(action.type){
        case 'ADD':
            return [action.blog,...state]

        case 'DEL':
            return state.filter((blog,i)=>i!==action.id)

        default:
            return []
    }
}

export default function Blog(){
    //Create Seprate useStateHooks
    // const [title,setTitle]=useState('')
    // const [content,setContent]=useState('') 

    const [formData,setFormData]=useState({title:'',content:''})
    // const [blogs,setBlogs] = useState([])
    const [blogs, dispatch] = useReducer(blogsReducer,[])
    const titleRef = useRef()

    useEffect(()=>{
        titleRef.current.focus()
    },[])

    useEffect(()=>{
        if(blogs.length){
            document.title=blogs[0].title
        }else{
            document.title='No Blogs'
        }
    },[blogs])

    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();
        // setBlogs([formData ,...blogs]) //useState implementation
        dispatch({type: 'ADD',blog:formData}) //useReducer implementation
        setFormData({
            title:'',content:''
        })
        titleRef.current.focus()
        console.log(blogs)
    }

    function handleDelete(id){
        // let newblogs=blogs.filter((blog,i)=>i!==id)
        // setBlogs(newblogs)
        dispatch({type: 'DEL',id})
    }
    
    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input ref={titleRef} onChange={(e)=>setFormData({title: e.target.value, content: formData.content})} value={formData.title} className="input"
                                placeholder="Enter the Title of the Blog here.." required/>
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea onChange={(e)=>setFormData({content: e.target.value, title: formData.title})} value={formData.content} className="input content"
                                placeholder="Content of the Blog goes here.." required/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i)=>(
            <div className="blog" key={i}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button  onClick={()=>handleDelete(i)} className="btn remove">Del</button>
            </div>
        ))}
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
