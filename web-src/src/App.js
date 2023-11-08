import React, { useEffect } from "react";
import { apiPath } from "webPath";
import { RestServer } from "common/js/Rest";
import axios from "axios";
import Router from "Router";
import { useLocation, useNavigate } from "react-router";
import { ConfirmContextProvider } from "context/ContextProvider";
import { AlertContextProvider } from "context/ContextProvider";
import ConfirmModal from "common/js/commonNoti/ConfirmModal";
import AlertModal from "common/js/commonNoti/AlertModal";
import {
    useRecoilState,
    useRecoilValue,
    useResetRecoilState,
    useSetRecoilState,
} from "recoil";
import {
    checkScheduleAtom,
    codesAtom,
    countryBankAtom,
    ipInfoAtom,
    resultCodeAtom,
    userInfoAtom,
    userTokenAtom,
    viewScheduleAtom,
} from "recoils/atoms";

function App() {
    const [ipInfo, setIpInfo] = useRecoilState(ipInfoAtom);

    const navigate = useNavigate();
    const location = useLocation();

    const resetUserInfo = useResetRecoilState(userInfoAtom);
    const resetUserToken = useResetRecoilState(userTokenAtom);

    const userToken = useRecoilValue(userTokenAtom);

    useEffect(() => {}, []);

    return (
        <>
            <div className="wrapper">
                <ConfirmContextProvider>
                    <AlertContextProvider>
                        <Router />
                        <AlertModal />
                        <ConfirmModal />
                    </AlertContextProvider>
                </ConfirmContextProvider>
            </div>
        </>
    );
}

export default App;
