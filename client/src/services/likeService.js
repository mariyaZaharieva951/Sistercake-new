const baseUrl = 'http://localhost:3030/data/likes';

export const addLike = async(userId, commentId,token) => {

    const response = await fetch(baseUrl, {
        
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({userId,commentId})
    })

    return getAllLikes(commentId)
}

export const getAllLikes = async (currentCommentId) => {
    try {
        const query = encodeURIComponent(`commentId = "${currentCommentId}"`)
        const response = await fetch(`${baseUrl}?select=_ownerId&where=${query}`);
        const result = await response.json();
        const data = result.map(x => x._ownerId)
        
        return data;
    } catch(err) {
        console.log(err)
    }
}