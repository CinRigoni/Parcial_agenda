import axios from 'axios'

export const deleteContact = async(id)=>{
    return await axios.delete(`http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=${id}`)
    .then(res=> res.data)
    .catch(err=> {
        console.log(err)
    })
}

export const insertContact = async(body)=>{
    return await axios.post(`http://168.194.207.98:8081/api_contacto/post_contacto.php`,
        body
    ).then(res=> console.log(res))
    .catch(err=> {
        console.log(err)
    })
}

export const editContact = async(body)=>{
    return await axios.put(`http://168.194.207.98:8081/api_contacto/put_contacto.php`,
        body
    ).then(res=> console.log(res))
    .catch(err=> {
        console.log(err)
    })
}