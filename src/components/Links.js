import React from 'react'

function Links({github, linkedin}){
    return(
        <>
            <h2>Links</h2>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </>
    )
}

export default Links