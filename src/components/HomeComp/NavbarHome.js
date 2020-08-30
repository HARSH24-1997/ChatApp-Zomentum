import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa';

function NavbarHome() {
    return (
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar6">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbar6"> <a class="navbar-brand text-primary d-none d-md-block" href="#">
                    <FaTelegramPlane size="1.5rem"/>
                    <b className="px-2">Telegram</b>
                </a>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"> <a class="nav-link" href="#">Log in</a> </li>
                        <li class="nav-item"> <a class="nav-link text-primary" href="#">Register</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarHome
