import React from "react";
import { Card } from "../Card";
import { Layout } from "../Layout";

interface Props {

}

export const Magisk = (props : Props) => {
    return <Layout>
        <div id="bgImage">
            <img src="images/magisk-svgrepo-com.svg" alt="" />
        </div>

        <section id="magiskDesc" className="sectionPadding">

            <Card type="magiskCard">
                <img src="images/magisk-trimmed.png" alt="" />
                <div>
                    <p><strong>Magisk</strong> (Magic Mask for Android) is a suite of open source software for customizing Android, supporting devices higher than Android 5.0. Some highlight features:</p>
                    <ul>
                        <li><strong>MagiskSU:</strong> Provide root access for applications</li>
                        <li><strong>Magisk Modules:</strong> Modify read-only partitions by installing modules</li>
                        <li><strong>MagiskBoot:</strong> The most complete tool for unpacking and repacking Android boot images</li>
                        <li><strong>Zygisk:</strong> Run code in every Android applications' processes</li>
                    </ul>
                    <div className="filler"></div>
                    <div>
                        {/* <button className="btnCommon btnWhite" onclick="window.open('https://github.com/topjohnwu/Magisk','_blank')">Learn More</button>
                        <button className="btnCommon btnColor" onclick="window.open('https://github.com/topjohnwu/Magisk/releases','_blank')">Download</button> */}
                    </div>
                </div>
            </Card>

            {/* <div class="card magiskCard" id="recentChanges"> */}
            <Card type="magiskCard" direction="column">
                <h1>Recent Changes</h1>
                <h2>v25.1</h2>
                <ul>
                    <li>[MagiskBoot] Fix ramdisk backup being incorrectly skipped</li>
                    <li>[MagiskBoot] Add new feature to detect unsupported dtb and abort during installation</li>
                    <li>[Zygisk] Change binary hijack paths</li>
                    <li>[App] Fix incorrect recovery mode detection and installation</li>
                    <li>[MagiskInit] Fix config not properly exported in legacy SAR devices</li>
                    <li>[General] Enforce the Magisk app to always match or be newer than magiskd</li>
                </ul>

                <h2>v25.0</h2>
                <ul>
                    <li>[MagiskInit] Update 2SI implementation, significantly increase device compatibility (e.g. Sony Xperia devices)</li>
                    <li>[MagiskInit] Introduce new sepolicy injection mechanism</li>
                    <li>[MagiskInit] Support Oculus Go</li>
                    <li>[MagiskInit] Support Android 13 GKIs (Pixel 6)</li>
                    <li>[MagiskBoot] Fix vbmeta extraction implementation</li>
                    <li>[App] Fix stub app on older Android versions</li>
                    <li>[App] [MagiskSU] Properly support apps using sharedUserId</li>
                    <li>[MagiskSU] Fix a possible crash in magiskd</li>
                    <li>[MagiskSU] Prune unused UIDs as soon as system_server restarts to prevent UID reuse attacks</li>
                    <li>[MagiskSU] Verify and enforce the installed Magisk app’s certificate to match the distributor’s signature</li>
                    <li>[MagiskSU] [Zygisk] Proper package management and detection</li>
                    <li>[Zygisk] Fix function hooking on devices running Android 12 with old kernels</li>
                    <li>[Zygisk] Fix Zygisk’s self code unloading implementation</li>
                    <li>[DenyList] Fix DenyList on shared UID apps</li>
                    <li>[BusyBox] Add workaround for devices running old kernels</li>
                </ul>
            </Card>

        </section>
    </Layout>
}