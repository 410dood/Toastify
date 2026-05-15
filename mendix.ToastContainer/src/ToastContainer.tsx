import { ReactElement, useEffect } from "react";
import { ToastContainer as ReactToastContainer, toast, ToastPosition, Theme } from "react-toastify";
import { ToastContainerContainerProps } from "../typings/ToastContainerProps";

import "react-toastify/dist/ReactToastify.css";

const POSITION_MAP: Record<string, ToastPosition> = {
    topLeft: "top-left",
    topCenter: "top-center",
    topRight: "top-right",
    bottomLeft: "bottom-left",
    bottomCenter: "bottom-center",
    bottomRight: "bottom-right"
};

export function ToastContainer(props: ToastContainerContainerProps): ReactElement {
    useEffect(() => {
        (window as unknown as { toast: typeof toast }).toast = toast;
    }, []);

    const autoCloseValue = props.autoClose && props.autoClose > 0 ? props.autoClose : false;

    return (
        <ReactToastContainer
            position={POSITION_MAP[props.position] ?? "top-right"}
            autoClose={autoCloseValue}
            hideProgressBar={props.hideProgressBar}
            newestOnTop={props.newestOnTop}
            closeOnClick={props.closeOnClick}
            pauseOnHover={props.pauseOnHover}
            rtl={props.rtl}
            theme={(props.theme as Theme) ?? "light"}
        />
    );
}
