import { BaseProvider, ProviderTrustPilot, ProviderGoogle } from './ReviewProvider.styles';

export const PROVIDER_TYPE_CLASSES = {
    base: 'base',
    trust: 'trust',
    google: 'google'
}

const getProvider = (providerType = PROVIDER_TYPE_CLASSES.base) =>
    ({
        [PROVIDER_TYPE_CLASSES.base]: BaseProvider,
        [PROVIDER_TYPE_CLASSES.trust]: ProviderTrustPilot,
        [PROVIDER_TYPE_CLASSES.google]: ProviderGoogle
    }[providerType]);

const ReviewProvider = ({ children, providerType, ...otherProps }) => {
    const CustomerProvider = getProvider(providerType);
    return (
        <CustomerProvider {...otherProps}>
            {children}
        </CustomerProvider>
    )
};

export default ReviewProvider;

