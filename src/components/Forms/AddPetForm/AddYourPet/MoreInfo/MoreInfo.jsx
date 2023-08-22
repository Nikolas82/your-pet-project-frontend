import React, { useEffect, useState } from 'react';
import {
    Form,
    IconCrossValidate,
    IconOkey,
    ImagePet,
    ImageWrapper,
    InputUploadImage,
    LabelForAdd,
    LabelForAddImage,
    PlusImage,
    TextValidation,
    Textarea,
    Title,
    TypeInput,
    WrapperNextBackButton,
} from '../../../Forms.styled';
import { Button, ButtonTransparent } from '../../../../Button/Button';
import { BiArrowBack } from 'react-icons/bi';
import {
    IconCross,
    PlusPhoto,
    iconPawprint,
} from '../../../../../images/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

const schema = object({
    coment: string()
        .required('Comment is required')
        .matches(
            /^[a-zA-Z0-9\s\W]{0,120}$/,
            'Comment max 120 characters, letters, numbers, symbols allowed'
        )
        .max(120, 'Comment must be at most 120 characters'),
}).required();

export default function MoreInfo({
    children,
    nextForm,
    beforeForm,
    stepNumber,
}) {
    const [isComentValid, setIsComentValid] = useState(false);
    const [coment, setComent] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [imageError, setImageError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            coment: '',
            imageURL: '',
        },
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        console.log(imageURL);
    }, [imageURL]);

    const handleImageChange = e => {
        const file = e.target.files[0];
        if (file) {
            // Check file size
            if (file.size > 3 * 1024 * 1024) {
                setImageError('Image size should be less than 3MB');
            } else {
                setImageError(null);
                setImageURL(URL.createObjectURL(file));
            }
        }
    };

    const deliveryDataUser = data => {
        console.log(data);
        // dispatch(
        //     registerUser({
        //         name,
        //         email,
        //         password,
        //     })
        // );
    };
    const reset = () => {
        setComent('');
        setIsComentValid(false);
    };
    const deliveryData = data => {
        console.log(data);
        reset();
    };

    return (
        <Form addPet>
            <Title>Add pet</Title>
            {children}
            <form
                onSubmit={handleSubmit(deliveryData)}
                encType="multipart/form-data"
            >
                <LabelForAddImage>
                    <TypeInput addImage>Load the pet’s image:</TypeInput>
                    <ImageWrapper>
                        <InputUploadImage
                            {...register('imageURL')}
                            aria-invalid={
                                errors.imageURL ? 'true' : 'false'
                            }
                            type="file"
                            required
                            onChange={handleImageChange}
                        ></InputUploadImage>
                        {!imageURL && (
                            <>
                                <PlusImage
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 182 182"
                                    fill="none"
                                >
                                    <rect
                                        width="182"
                                        height="182"
                                        rx="40"
                                        fill="#CCE4FB"
                                    />
                                    <path
                                        d="M92 115V91M92 91V67M92 91H116.375M92 91H67.625"
                                        stroke="#54ADFF"
                                    />
                                </PlusImage>
                            </>
                        )}
                        {imageURL && <ImagePet src={imageURL} />}
                    </ImageWrapper>
                    {imageError && (
                        <TextValidation>{imageError}</TextValidation>
                    )}
                </LabelForAddImage>
                <LabelForAdd coment>
                    <TypeInput>Comments</TypeInput>
                    <Textarea
                        {...register('coment')}
                        aria-invalid={errors.coment ? 'true' : 'false'}
                        {...register('coment', {
                            maxLength: 120,
                        })}
                        placeholder="Type of pet"
                        type="text"
                        value={coment}
                        spellCheck="false"
                        data-grame="false"
                        style={{
                            border: errors.coment
                                ? '1px solid var(--red)'
                                : isComentValid && !errors.coment
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /^[a-zA-Z0-9\s\W]{0,120}$/.test(
                                e.target.value
                            );
                            setIsComentValid(isValid);
                            setComent(e.target.value);
                            if (isValid) {
                                errors.coment = undefined;
                            }
                        }}
                    ></Textarea>

                    {isComentValid && (
                        <IconOkey
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            addPet
                        >
                            <path
                                d="M20.0001 7L9.0001 18L4 13"
                                stroke="#00C3AD"
                            />
                        </IconOkey>
                    )}
                    {errors.coment && (
                        <>
                            <TextValidation addPet>
                                {errors.coment.message}
                            </TextValidation>
                            <IconCrossValidate
                                onClick={() => {
                                    setIsComentValid(false);
                                    setComent('');
                                }}
                                type="button"
                                addPet
                            >
                                {IconCross}
                            </IconCrossValidate>
                        </>
                    )}
                </LabelForAdd>
                <WrapperNextBackButton>
                    <ButtonTransparent addPet onClick={() => beforeForm()}>
                        <BiArrowBack /> {stepNumber > 1 ? 'Back' : 'Cancel'}
                    </ButtonTransparent>
                    <Button stepNumber={stepNumber} addPet type="submit">
                        {stepNumber > 2 ? 'Done' : 'Next'} {iconPawprint}
                    </Button>
                </WrapperNextBackButton>
            </form>
        </Form>
    );
}
