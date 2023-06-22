import {useEffect} from "react";
import ReactPortal from "./Popup";
import {ReactComponent as CloseIcon} from "../Assets/icons/exit.svg";
import styles from '../styles/Modal.module.scss'
import clsx from "clsx";

function Modal({ children, isOpen, handleClose }) {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);

        if (typeof window != 'undefined' && window.document && isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <div className="h-full w-full fixed top-0 left-0 z-[100] flex items-center justify-center">
                <div onClick={handleClose} className='absolute h-full w-full top-0 left-0 bg-[#00000040]' />

                    <div className={clsx(styles.animate, 'bg-white w-full h-full md:w-[80vw] md:h-[80vh] scrollbar-hide overflow-hidden md:rounded-[1.46375rem] relative')}>

                        <div className='sticky h-[7rem] flex justify-end top-0'>
                            <button onClick={handleClose} className="py-[1rem] px-[2rem]">
                                <CloseIcon className={styles.closeIcon} />
                            </button>
                        </div>

                        <div className="w-full h-full md:h-[70vh]">{children}</div>
                    </div>

            </div>
        </ReactPortal>
    );
};

export default Modal;