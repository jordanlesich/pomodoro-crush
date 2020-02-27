import './Page.css'
import React from 'react';

function Page(props){
    return <section className='page'>{props.children}</section>
}

export default Page;