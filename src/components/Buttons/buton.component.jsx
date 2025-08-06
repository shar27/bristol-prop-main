import { BaseButton, FeatureButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    feature: 'feature'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.feature]: FeatureButton
    }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
};

export default Button;
