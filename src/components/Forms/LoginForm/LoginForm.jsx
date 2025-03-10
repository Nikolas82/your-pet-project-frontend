import React, { useState } from 'react';
import {
    ButtonSubmit,
    Form,
    IconCrossValidate,
    IconOkey,
    Input,
    LabelForLogin,
    LinkToForm,
    Question,
    ShowPasswordButton,
    TextValidation,
    Title,
} from '../Forms.styled';
import { IconCross, iconEyes } from '../../../images/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

const schema = object({
    email: string()
        .required()
        .matches(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
            'Enter a valid email address'
        ),
    password: string()
        .required()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
            'Password: 1 lowercase, 1 uppercase, 1 digit, 6-16 characters.'
        ),
}).required();

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordlValid] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const handleClickShow = () => setShow(!show);
    const deliveryDataUser = (email, password) => {
        // dispatch(
        //     registerUser({
        //         name,
        //         email,
        //         password,
        //     })
        // );
    };
    const reset = () => {
        setEmail('');
        setPassword('');
        setIsEmailValid(false);
        setIsPasswordlValid(false);
    };
    const deliveryData = data => {
        console.log(321321);
        console.log('you right');
        const { email, password } = data;
        console.log(email, password);
        deliveryDataUser(email, password);
        reset();
    };

    return (
        <div>
            <Form>
                <form  onSubmit={handleSubmit(deliveryData)}>
                    <Title>Login</Title>
                    <LabelForLogin>
                        <Input
                            {...register('email')}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            placeholder="Email"
                            type="email"
                            value={email}
                            style={{
                                border: errors.email
                                    ? '1px solid var(--red)'
                                    : isEmailValid && !errors.email
                                    ? '1px solid var(--green)'
                                    : '1px solid var(--blue)',
                            }}
                            onChange={e => {
                                const isValid =
                                    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
                                        e.target.value
                                    );
                                setIsEmailValid(isValid);
                                setEmail(e.target.value);
                                if (isValid) {
                                    errors.email = undefined;
                                }
                            }}
                        ></Input>
                        {isEmailValid && (
                            <IconOkey
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M20.0001 7L9.0001 18L4 13"
                                    stroke="#00C3AD"
                                />
                            </IconOkey>
                        )}
                        {errors.email && (
                            <>
                                <TextValidation>
                                    {errors.email.message}
                                </TextValidation>
                                <IconCrossValidate
                                    onClick={() => {
                                        setIsEmailValid(false);
                                        setEmail('');
                                    }}
                                    type="button"
                                >
                                    {IconCross}
                                </IconCrossValidate>
                            </>
                        )}
                    </LabelForLogin>
                    <LabelForLogin login={true}>
                        <Input
                            {...register('password')}
                            aria-invalid={errors.password ? 'true' : 'false'}
                            placeholder="Password"
                            title="Password must contain at least one lowercase letter, one uppercase letter, and one digit. It should be 6 to 16 characters long."
                            value={password}
                            type={show ? 'text' : 'password'}
                            style={{
                                border: errors.password
                                    ? '1px solid var(--red)'
                                    : isPasswordValid && !errors.password
                                    ? '1px solid var(--green)'
                                    : '1px solid var(--blue)',
                            }}
                            onChange={e => {
                                const isValid =
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(
                                        e.target.value
                                    );
                                setIsPasswordlValid(isValid);
                                setPassword(e.target.value);
                                if (isValid) {
                                    errors.password = undefined;
                                }
                            }}
                        ></Input>
                        {isPasswordValid && (
                            <IconOkey
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                iconPassowrd
                            >
                                <path
                                    d="M20.0001 7L9.0001 18L4 13"
                                    stroke="#00C3AD"
                                />
                            </IconOkey>
                        )}
                        {errors.password && (
                            <>
                                <TextValidation>
                                    {errors.password.message}
                                </TextValidation>
                                <IconCrossValidate
                                    onClick={() => {
                                        setIsPasswordlValid(false);
                                        setPassword('');
                                    }}
                                    type="button"
                                    iconPassowrd
                                >
                                    {IconCross}
                                </IconCrossValidate>
                            </>
                        )}
                        <ShowPasswordButton type="button" onClick={handleClickShow}>
                            {iconEyes}
                        </ShowPasswordButton>
                    </LabelForLogin>
                    <ButtonSubmit type="submit" loginButtom={true}>
                        Login
                    </ButtonSubmit>
                    <Question>
                        Don't have an account?{' '}
                        {
                            <LinkToForm href="fwefew" to="/register">
                                Register
                            </LinkToForm>
                        }
                    </Question>
                </form>
            </Form>
        </div>
    );
}
