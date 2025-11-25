import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { Calculator, Upload, Image, LucideX } from 'lucide-react'

import Button, { BUTTON_TYPE_CLASSES } from '../../Buttons/buton.component';

import {
    QuoteModalContainer,
    QuoteModalContent,
    QuoteModalHeader,
    QuoteModalTitle,
    QuoteModalDescription,
    QuoteModalForm,
    QuoteModal2Fields,
    QuoteModal1Field,
    QuoteModalFormField,
    QuoteModalFormLabel,
    QuoteModalFormInput,
    QuoteModalSelect,
    QuoteModalSelectItem,
    QuoteModalUploadContainer,
    QuoteModalUploadPhotos,
    QuoteModalFormSpan,
    QuoteModalFormTextArea,
    QuoteModalFilePreviewContainer,
    QuoteModalFilePreview,
    QuoteModalFileDetails,
    QuoteModalFileName,
    QuoteXButton
} from './QuoteModal.styles';

const modalRoot = document.getElementById('modal-root');

const QuoteModal = ({ handleModalClose, modalOpen, formRef, emailDisplayMessage, sendEmail }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        serviceType: "",
        propertyType: "",
        urgency: "",
        message: "",
    });

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleQuoteSubmission = (event) => {
        event.preventDefault();

        sendEmail();

    

        setFormData({
            name: "",
            email: "",
            phone: "",
            postcode: "",
            serviceType: "",
            propertyType: "",
            urgency: "",
            message: "",
        });
        setUploadedFiles([]);
        handleModalClose();
    };

    const handleInputChange = (event) => {
        const fieldId = event.target.id;
        const value = event.target.value;
        setFormData(prev => ({ ...prev, [fieldId]: value }))
    };

    const handleFileUpload = (event) => {
        const files = event.target.files;

        if (files) {
            const newFiles = Array.from(files).slice(0, 5 - uploadedFiles.length);
            setUploadedFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        createPortal(
            <QuoteModalContainer>
                <QuoteModalContent>


                    {/* Header */}
                    <QuoteModalHeader>
                        <QuoteModalTitle>
                            <Calculator style={{ marginRight: '0.75rem', height: '1.5rem', width: '1.5rem' }} />
                            Get Your Free Quote
                        </QuoteModalTitle>
                        <QuoteModalDescription>Fill out the form below and we'll provide you with a detailed quote for your house clearance needs.</QuoteModalDescription>
                    </QuoteModalHeader>
                    {emailDisplayMessage}


                    {/* Form */}
                    <QuoteModalForm ref={formRef} onSubmit={handleQuoteSubmission} encType='multipart/form-data'>


                        {/* Personal Details */}
                        <QuoteModal2Fields>
                            <QuoteModalFormField>
                                <QuoteModalFormLabel htmlFor='name'>Full Name *</QuoteModalFormLabel>
                                <QuoteModalFormInput
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={(e) => handleInputChange(e)}
                                    placeholder='John Smith'
                                    required
                                />
                            </QuoteModalFormField>
                            <QuoteModalFormField>
                                <QuoteModalFormLabel htmlFor='email'>Email Address *</QuoteModalFormLabel>
                                <QuoteModalFormInput
                                    id='email'
                                    name='email'
                                    type='email'
                                    value={formData.email}
                                    onChange={(e) => handleInputChange(e)}
                                    placeholder='johnsmith@email.com'
                                    required
                                />
                            </QuoteModalFormField>
                        </QuoteModal2Fields>

                        <QuoteModal2Fields>
                            <QuoteModalFormField>
                                <QuoteModalFormLabel htmlFor='phone'>Phone Number *</QuoteModalFormLabel>
                                <QuoteModalFormInput
                                    id='phone'
                                    name='phone'
                                    type='tel'
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange(e)}
                                    placeholder='07123 456789'
                                    required
                                />
                            </QuoteModalFormField>
                            <QuoteModalFormField>
                                <QuoteModalFormLabel htmlFor='postcode'>Post Code *</QuoteModalFormLabel>
                                <QuoteModalFormInput
                                    id='postcode'
                                    name='postcode'
                                    value={formData.postcode}
                                    onChange={(e) => handleInputChange(e)}
                                    placeholder='SW1A 1AA'
                                    required
                                />
                            </QuoteModalFormField>
                        </QuoteModal2Fields>


                        {/* Service Details */}
                        <QuoteModal2Fields>
                            <QuoteModalFormField>
                                <QuoteModalFormLabel htmlFor='serviceType'>Service Required *</QuoteModalFormLabel>
                                <QuoteModalSelect name="serviceType" id="serviceType" onChange={(e) => handleInputChange(e)} defaultValue={'default'} required>
                                    <QuoteModalSelectItem value="default" disabled>Select service type</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="complete-clearance">Complete House Clearance</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="single-item">Single Item Collection</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="estate-clearance">Estate Clearance</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="emergency">Emergency Clearance</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="commercial">Commercial Clearance</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="eco-clearance">Eco Clearance</QuoteModalSelectItem>
                                </QuoteModalSelect>
                            </QuoteModalFormField>
                            <QuoteModalFormField>
                                <QuoteModalFormLabel htmlFor='propertyType'>Property Type</QuoteModalFormLabel>
                                <QuoteModalSelect name="propertyType" id="propertyType" onChange={(e) => handleInputChange(e)} defaultValue={'default'} required>
                                    <QuoteModalSelectItem value="default" disabled>Select property type</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="1-bed">1 Bedroom</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="2-bed">2 Bedroom</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="3-bed">3 Bedroom</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="4-bed">4+ Bedroom</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="office">Office/Commercial</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="other">Other</QuoteModalSelectItem>
                                </QuoteModalSelect>
                            </QuoteModalFormField>
                        </QuoteModal2Fields>

                        <QuoteModal1Field>
                            <QuoteModalFormField>
                                <QuoteModalFormLabel htmlFor='urgency'>When do you need this done?</QuoteModalFormLabel>
                                <QuoteModalSelect name="urgency" id="urgency" onChange={(e) => handleInputChange(e)} defaultValue={'default'} required>
                                    <QuoteModalSelectItem value="default" disabled>Select timeframe</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="emergency">Emergency (Same Day)</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="urgent">Urgent (24-48 hours)</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="week">Within a week</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="month">Within a month</QuoteModalSelectItem>
                                    <QuoteModalSelectItem value="flexible">Flexible timing</QuoteModalSelectItem>
                                </QuoteModalSelect>
                            </QuoteModalFormField>
                        </QuoteModal1Field>


                        {/* Photo Upload Section */}
                        {/* <QuoteModal1Field>
                            <QuoteModalFormLabel htmlFor='photos'>Upload Photos (Optional)</QuoteModalFormLabel>
                            <QuoteModalUploadContainer>
                                <div style={{ textAlign: 'center' }}>
                                    <Upload style={{ marginInline: 'auto', height: '2rem', width: '2rem', color: 'hsl(220 15% 45%)' }} />
                                    <QuoteModalUploadPhotos>
                                        <QuoteModalFormLabel htmlFor='file-upload' style={{ cursor: 'pointer' }}>
                                            <QuoteModalFormSpan>
                                                Upload up to 5 photos to help us provide a more accurate quote
                                            </QuoteModalFormSpan>
                                            <QuoteModalFormInput
                                                id='file-upload'
                                                name='files'
                                                type='file'
                                                multiple
                                                accept='image/*'
                                                onChange={(e) => handleFileUpload(e)}
                                                style={{
                                                    position: 'absolute',
                                                    margin: '-1px',
                                                    opacity: '0%',
                                                    whiteSpace: 'nowrap'
                                                }}
                                            />
                                        </QuoteModalFormLabel>
                                    </QuoteModalUploadPhotos>
                                    <QuoteModalDescription style={{ marginTop: '0.25rem' }}>
                                        PNG, JPG, GIF up to 10MB each
                                    </QuoteModalDescription>
                                </div>
                            </QuoteModalUploadContainer> */}


                            {/* Uploaded Files Preview */}
                            {/* {uploadedFiles.length > 0 && (
                                <QuoteModalFilePreviewContainer>
                                    {uploadedFiles.map((file, index) => (
                                        <QuoteModalFilePreview key={`file-${index}`} className="group">
                                            <QuoteModalFileDetails>
                                                <Image style={{
                                                    height: '1rem',
                                                    width: '1rem',
                                                    color: 'hsl(220 15% 45%)',
                                                    marginRight: '0.5rem'
                                                }}
                                                />
                                                <QuoteModalFileName className="text-xs text-muted-foreground truncate flex-1">
                                                    {file.name}
                                                </QuoteModalFileName>
                                                <Button
                                                    buttonType={BUTTON_TYPE_CLASSES.ghost}
                                                    type="button"
                                                    onClick={() => removeFile(index)}
                                                    style={{
                                                        height: '1rem',
                                                        width: '1rem',
                                                        padding: '0',
                                                        marginLeft: '0.25rem'
                                                    }}
                                                >
                                                    <LucideX style={{
                                                        height: '0.75rem',
                                                        width: '0.75rem'
                                                    }} />
                                                </Button>
                                            </QuoteModalFileDetails>
                                        </QuoteModalFilePreview>
                                    ))}
                                </QuoteModalFilePreviewContainer>
                            )}
                        </QuoteModal1Field> */}


                        {/* Additional Details */}
                        <QuoteModal1Field>
                            <QuoteModalFormLabel htmlFor="message">Additional Details</QuoteModalFormLabel>
                            <QuoteModalFormTextArea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={(e) => handleInputChange(e)}
                                placeholder="Please provide any additional details about your clearance requirements, access issues, special items, etc. including a description of items for any clearance service. "
                                rows={4}
                            />
                        </QuoteModal1Field>


                        {/* Submit Button */}
                        <Button buttonType={BUTTON_TYPE_CLASSES.form} type="submit" style={{ width: '100%', marginTop: '1.5rem' }} >
                            Get My Free Quote
                        </Button>


                    </QuoteModalForm>


                    {/* Close Button */}
                    <QuoteXButton onClick={() => handleModalClose()}>
                        <LucideX />
                    </QuoteXButton>


                </QuoteModalContent>
            </QuoteModalContainer>
            , modalRoot)
    );
};

export default QuoteModal;

