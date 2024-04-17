const baseUrl = 'http://localhost:3010/Sister';

//Gallery

export const getAll = async () => {
   try{ 
    const response = await fetch(`${baseUrl}/cakes`);
    const result = await response.json();
    //const data = Object.values(result);
    
    return result
} catch(err) {
    console.log(err)
}
}

//Birday cakes

export const getAllBirthdayCake = async () => {
    try{ 
     const response = await fetch(`${baseUrl}/birthdayCakes`);
     const result = await response.json();
     const data = Object.values(result);
     
     return data
 } catch(err) {
     console.log(err)
 }

    
}

export const getOneBdCake = async (cakeId) => {
    try{ 
     const response = await fetch(`${baseUrl}/birthdayCakes/${cakeId}`);
     
     const result = await response.json();
     return result
     
 } catch(err) {
     console.log(err)
 }
}

//Weddingcakes

export const getAllWeddingCake = async () => {
    try{ 
     const response = await fetch(`${baseUrl}/weddingCakes`);
     const result = await response.json();
     const data = Object.values(result);
     
     return data
 } catch(err) {
     console.log(err)
 }

    
}

export const getOneWeddingCake = async (cakeId) => {
    try{ 
     const response = await fetch(`${baseUrl}/weddingCakes/${cakeId}`);
     
     const result = await response.json();
     return result
 } catch(err) {
     console.log(err)
 }
}

//Kids cakes

export const getAllKidsCake = async () => {
    try{ 
     const response = await fetch(`${baseUrl}/kidsCakes`);
     const result = await response.json();
     const data = Object.values(result);
     
     return data
 } catch(err) {
     console.log(err)
 }

    
}

export const getOneKidsCake = async (cakeId) => {
    try{ 
     const response = await fetch(`${baseUrl}/kidsCakes/${cakeId}`);
     
     const result = await response.json();
     return result
 } catch(err) {
     console.log(err)
 }
}

//Individual cakes

export const getAllIndividualCake = async () => {
    try{ 
     const response = await fetch(`${baseUrl}/individualCakes`);
     const result = await response.json();
     const data = Object.values(result);
     
     return data
 } catch(err) {
     console.log(err)
 }

    
}

export const getOneIndividualCake = async (cakeId) => {
    try{ 
     const response = await fetch(`${baseUrl}/individualCakes/${cakeId}`);
     
     const result = await response.json();
     return result
 } catch(err) {
     console.log(err)
 }
}



export const buyOneCake = async (cakeData, token) => {

    const response = await fetch(`${baseUrl}/purchase`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...cakeData})
    })

    const result = await response.json();
    return result;
}

export const getAllBuys = async () => {
    
    const response = await fetch(`${baseUrl}/purchase`)
    const result = await response.json();
    
    return result;
} 