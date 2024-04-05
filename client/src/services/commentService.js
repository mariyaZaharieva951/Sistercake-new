const baseUrl = 'http://localhost:3030/data/comments';

export const createComment = async(comment,token) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...comment})
    })

    const result = await response.json();
    
    return result;
}
    
export const getAllComments = async () => {
    try {
        const response = await fetch(baseUrl)
        const result = await response.json();
    
        return result;
    } catch(err) {
        console.log(err)
    }
    
}

export const getLatesComments = async () => {
    try {
        const query = new URLSearchParams('offset=0&pageSize=15')
        const response = await fetch(`${baseUrl}?sortBy=_createdOn%20desc&${query}`)
        const result = await response.json();
    
        return result;
    } catch(err) {
        console.log(err)
    }
    
}



export const getOneComment = async (commentId) => {
   try{
    const response = await fetch(`${baseUrl}/${commentId}`)
    const result = await response.json();
   
    return result;

    } catch(err) {
        console.log(err)
    }

}

export const editComment = async(commentId,token,data) => {
    const response = await fetch(`${baseUrl}/${commentId}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...data})
    })

    if(response.status === 403) {
        alert('You is not a owner!')
    }

    const result = await response.json();

    return result;
}

export const delComment = async(commentId,token) => {
   const response = await fetch(`${baseUrl}/${commentId}`, {
    method: 'DELETE',
    headers: {
        "X-Authorization": token,
    }
   }) 
   if(response.status === 403) {
    alert('You is not a owner!')
    }
   const result = await response.json();
        
   return result;
}

