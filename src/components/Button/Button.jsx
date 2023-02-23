import PropTypes from "prop-types";
import { ButtonLoad } from "./Button.stled";

export const Button = ({ onClick }) =>  {
    return <ButtonLoad onClick={onClick}>Load more</ButtonLoad>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}