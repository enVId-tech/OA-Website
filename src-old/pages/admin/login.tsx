/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Navbar from '../../components/ts/navbar/navbar.template.tsx';
// import PageTitle from '../../components/ts/pagetitle/pagetitle.global.module.tsx';
import trackPageView from '../../components/ts/analytics/analytics.global.module.ts';
import Footer from '../../components/ts/footer/footer.global.module.tsx';

import ClassHelmet from '../../components/ts/pagetitle/title.global.module.tsx';
// import applyPageAnims from '../../components/ts/animations/animations.global.module.ts';

const AdminLogin: React.FC = (): React.JSX.Element => {
    const errorMessageElement: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    const usernameElement: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);
    const passwordElement: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);
    
    React.useEffect((): void => {
        trackPageView();

        const enterKeyHandler: (event: KeyboardEvent) => void = (event) => {
            if (event.key === "Enter") {
                loginHandler();
            }
        }

        document.addEventListener("keydown", enterKeyHandler);
        return document.removeEventListener("keydown", enterKeyHandler);
    }, []);

    const loginHandler = async (): Promise<void> => {
        const data: object = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: usernameElement.current?.value,
                password: passwordElement.current?.value
            })
        }

        const response: Response = await fetch("/api/admin/login", data);

        if (response.status === 200) {
            window.location.href = "/admin";
        } else if (response.status === 401 && errorMessageElement.current!.innerHTML === "") {
            errorMessageElement.current!.innerHTML = "<h1 id='AdminLoginErrorMessageLabel'>Invalid username or password.</h1>";
            setTimeout((): void => {
                errorMessageElement.current!.innerHTML = "";
            }, 2000);
        }
    }

    return (
        <div id="AdminLogin">
            <ClassHelmet title="Admin Login" />
            <Navbar />
                <div id="AdminLoginMain">
                    <div id="AdminLoginArea">
                        <h1 id="AdminLoginLabel">Admin Login</h1>
                        <form id="AdminLoginForm">
                            <input type="text" id="AdminLoginUsername" placeholder="Username" ref={usernameElement} />
                            <input type="password" id="AdminLoginPassword" placeholder="Password" ref={passwordElement} />
                            <input type="submit" id="AdminLoginSubmit" value="Login" onClick={() => loginHandler()} />

                            <div id="AdminLoginErrorMessage" ref={errorMessageElement}>
                                <h1 id="AdminLoginErrorMessageLabel"></h1>
                            </div>

                            <a href="http://localhost:3001/auth/google" className="googleSignIn">
                                <span className="fa fa-google"></span>Register/Sign In With Google
                            </a>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default AdminLogin;