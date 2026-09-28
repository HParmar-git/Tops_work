/*

Sass is a CSS pre-processor.
Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor 
that extends CSS by adding features like 

variables, 
nesting,
extends
mixins, 
and more, making it easier to write and maintain stylesheets. 

Sass files are executed on the server and sends CSS to the browser.

npm i sass

Create a Sass file : .scss

*/


import React from 'react'

import './my_sass.scss'

function Sass_css() {
    return (
        <div>
            <h1 className='box'>Hi i am Sass css</h1>

            <hr />

            <div className='nav'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                </ul>
            </div>

            <hr />

            <h1 className='myproperties'>Nested Properties</h1>
            <h1 className='myproperties1'>Nested Properties</h1>

            <hr />

            <button className='button-basic'>Basic Button</button>
            <button className='red-basic'>Red Button</button>
            <button className='green-basic'>Green Button</button>
            <button className='blue-basic'>Basic Button</button>
            <button className='orange-basic'>Basic Button</button>
            <button className='purple-basic'>Basic Button</button>

        </div>
    )
}

export default Sass_css