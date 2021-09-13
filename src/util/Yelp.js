const apiKey = 'XeUu_S5OQicSSgpk2NrLm6nL4LWacwSZ0SYG8dlJUPDeN1XcxW-1pS-6kXwBRbs1q9KQkfnYHedu_e5A7B9jLP9VOCF4HFh8ojPD8TapCOIyLNBVR0RwnXchvTQGYHYx';

const Yelp = {
    search: async function (term, location, searchBy) {
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${searchBy}`;
        const headers = {
            headers: {Authorization : `Bearer ${apiKey}`}
        };
    
        const response = await fetch(url, headers);
        
        try {
            if (response.ok) {
                const jsonResponse = await response.json();
                
                if (jsonResponse.businesses) {
                    const newList = jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imgSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });

                    return newList;
    
    
                } else {
                    console.log('Nay!');
                }
    
    
            }
        } catch(e) {
            console.log(e.message);
        }
    
    
        return [];
    }
}



export {Yelp};