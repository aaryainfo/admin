import React, { useEffect, useState } from 'react'

function InstaFeeds() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        InstaFeed()
    }, [])

    async function InstaFeed() {
        try {
            const res = await fetch("https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=IGQWRQWkdsemFfcGhrRTdVcWx4aE0yb2VaTEVYakNXUlZArR1RxdWZApQXhpcVM4RmtSV3haeE9RQ0FBYWRlM1pkSWFxdFdYTkVzNHl1a3IzaE15Nk5UY0MyMm42c0x3TzhmM0pOWFk3VGNaUEtEby1pS3hUNkphU2sZD")
            const data = await res.json()
            console.log(data.data);
            setPosts(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='instaFeed'>
            <div className="container">
                <div className="row gy-4">
                    {posts.map((el, index) => {
                        return (
                            <div key={index} className="col-lg-3">
                                <a target='blank' href={el.permalink}>
                                <div className="postDiv">
                                    {((el.media_type == "IMAGE")|| (el.media_type == "CAROUSEL_ALBUM")) && 
                                        <img className='w-100 instaImg' src={el.media_url} alt="" />
                                    }
                                    {el.media_type == "VIDEO" &&
                                        <video className='instaVid w-100' width="320" height="240" controls>
                                            <source src={el.media_url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    }

                                </div>
                                </a>
                                
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default InstaFeeds