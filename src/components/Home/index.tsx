import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Card } from "../Card";
import { Layout } from "../Layout";

interface Props {

}

export const Home = (props : Props) => {

    const navigation = useNavigate();

    return <Layout>

        <div id="bgImage">
            <img src="images/magisk-svgrepo-com.svg" alt="" />
        </div>

        <section id="home">
            <h1>Personal Magisk Repository.</h1>
        </section>

        <Card type="navCard">
            <img src="images/magisk-trimmed.png" alt="" />
            <div>
                <div>
                    <h1>Magisk</h1>
                    <p>Learn more about Magisk and it's uses</p>
                </div>
                <Button text="Learn More" type="coloured" onClickFn={() => navigation("/magisk")}/>
            </div>
        </Card>

        <Card type="navCard">
            <img src="images/magisk-svgrepo-com.svg" alt="" />
            <div>
                <div>
                    <h1>Modules</h1>
                    <p>Find Magisk modules on the Modules page</p>
                </div>
                <Button text="Modules" type="coloured" onClickFn={() => navigation("/modules")}/>
            </div>
        </Card>

        <Card type="navCard">
            <img src="images/icons/google-camera.svg" alt="" />
            <div>
                <div>
                    <h1>Google Cameras</h1>
                    <p>Find where to get Google Camera for your phone</p>
                </div>
                <Button text="Gcam" type="coloured" onClickFn={() => navigation("/gcam")}/>
            </div>
        </Card>

        <Card type="navCard">
            <img src="images/cogwheel_nice_android.svg" alt="" />
            <div>
                <div>
                    <h1>FAQ</h1>
                    <p>Frequently Asked Questions</p>
                </div>
                <Button text="FAQ" type="coloured" onClickFn={() => navigation("/faq")}/>
            </div>
        </Card>

    </Layout>
}