/*
Copyright 2022 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import Teaser from './Teaser';
import Adventures from './Adventures';
import "./Home.scss";

/***
 * Displays a grid of current adventures
 */
function Home() {
    return (
        <div className="Home">
            <Teaser />
            <Adventures />
        </div>
    );
}

export default Home;
