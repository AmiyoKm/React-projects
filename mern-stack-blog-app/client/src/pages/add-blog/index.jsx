import { useContext, useEffect } from 'react'
import classes from './styles.module.css'
import { GlobalContext } from '../../context'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
export default function AddNewBlog(){
    const {formData , setFormData ,isEdit , setIsEdit} = useContext(GlobalContext)
    console.log(formData);
    const navigate = useNavigate();
    const location = useLocation();

    async function handleSaveBlogToDatabase(){
        const response = isEdit?await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,{
            title:formData.title,
            description: formData.description
        }):await axios.post('http://localhost:5000/api/blogs/add',{
            title:formData.title,
            description: formData.description
        })
        const result  = await response.data
        

        if(result){
            setFormData({
                title:'',
                description:''
            });
            navigate('/');
        }
        
    }
        useEffect( ()=>{
            console.log(location);
            if(location.state){
                const {getCurrentBlogItem} = location.state;
                setIsEdit(true)
                setFormData({
                    title:getCurrentBlogItem.title,
                    description: getCurrentBlogItem.description
                });
                return()=>{
                    setIsEdit(false);
                    
                    
                    
                }
            }
            
        },[location])
    
    return (
        <div className='classes.wrapper'>
            <h1>
                { isEdit?  "Edit a blog " : "Add a Blog"}
            </h1>
            <div className={classes.formWrapper}>
                <input type="text"id="title" placeholder='Enter Blog Title' name="title" value={formData.title} onChange={(e)=>setFormData({...formData, title:e.target.value})} />
                <textarea name='description' placeholder='Enter Blog Description' id ="description"  value={formData.description} onChange={(e)=>setFormData({...formData, description:e.target.value})}/>
                <button type='submit' onClick={handleSaveBlogToDatabase}>Add New Blog</button>
            </div>
        </div> 
    )
}