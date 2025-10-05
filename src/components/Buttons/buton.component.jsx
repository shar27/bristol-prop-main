import { BaseButton, FeatureButton, FormButton, GhostButton, InlineButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    feature: 'feature',
    form: 'form',
    ghost: 'ghost',
    inline: 'inline'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.feature]: FeatureButton,
        [BUTTON_TYPE_CLASSES.form]: FormButton,
        [BUTTON_TYPE_CLASSES.ghost]: GhostButton,
        [BUTTON_TYPE_CLASSES.inline]: InlineButton,
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
