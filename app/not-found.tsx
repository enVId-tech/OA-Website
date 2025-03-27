"use client";
import React from "react";

import styles from "@/styles/pages/error.module.scss";
import Navbar from "@/app/_components/navbar/navbar.template.tsx";
import Footer from "@/app/_components/footer/footer.global.module.tsx";

const ErrorPage: React.FC = (): React.JSX.Element => {
    const [time, setTime]: [number, React.Dispatch<React.SetStateAction<number>>] = React.useState<number>(3);

    const interval: number = 0.1;

    setTimeout((): void => {
        if (time <= 0.1) {
            setTime(0);
            window.location.href = "/";
            return;
        }
        setTime(time - interval);
    }, 100);

    return (
        <div className={styles.errorPage}>
            <Navbar heightChange={790} />

            <div className={styles.errorMain}>
                <h1 className={styles.errorMessage}>Error 404, this page does not exist!</h1>

                <p className={styles.errorDescription}>You will be redirected to home in {time.toFixed(1)} seconds.</p>
                <p className={styles.errorDescription}>Hint: Anything green in the top bar has a link!</p>
            </div>

            <Footer />
        </div>
    )
}

export default ErrorPage;