import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Modal = ({ clickedImg, handelRotationRight, handelRotationLeft, setClickedImg }) => {

    const handelClick = (e) => {
        if (e.target.classList.contains("dismiss"))
            setClickedImg(null)
    }

    return <>
        <div className="overlay dismiss" onClick={handelClick}>
            <img src={clickedImg} alt="tryhugb" />
            <span className="dismiss" onClick={handelClick} >X</span>

            <div className="ArrowSec">
                <div onClick={handelRotationRight} >
                    <div>
                        <button className="RightArrow" ><BiLeftArrowAlt /></button>
                    </div>
                </div>

                <div onClick={handelRotationLeft} >
                    <div>
                        <button className="LeftArrow" ><BiRightArrowAlt /></button>
                    </div>
                </div>
            </div>

        </div>
    </>;
};

export default Modal