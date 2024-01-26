//import React from 'react'

import HomeBanner from "./heroBanner/HomeBanner"
import TopRated from "./topRated/TopRated"
import Trending from "./trending/Trending"
import Popular from "./popular/Popular"

const Home = () => {
    return (
        <div className="homepage">
            <HomeBanner />
            <Trending />
            <TopRated />
            <Popular />

        </div>
    )
}

export default Home
