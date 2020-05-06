import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { InputField } from '../components/shared/InputField';
import { Button } from '../components/shared/Button';
import Icon from '../assets/icons/search-icon-white.png';

export const Search = () => {
  const initialValues = {
    location: '',
  };
  const validationSchema = yup.object().shape({
    location: yup
      .string()
      .required('This is a required field.')
      .min(3, 'Entry needs to be at least tre characters long.'),
  });
  return (
    <Wrapper>
      <ContentContainer>
        <TextContainer>
          <TextBox>
            <Text>Connect with active GitHubers near you</Text>
          </TextBox>
        </TextContainer>
        <SearchContainer>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              // eslint-disable-next-line no-console
              console.log('values submit', values);
              resetForm();
            }}
          >
            {({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <InputField
                  name='location'
                  label='Enter your location:'
                  id='location'
                  type='text'
                  placeholder='...city or country'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                  error={errors.location && touched.location}
                  message={
                    errors.location && touched.location && `${errors.location}`
                  }
                  icon={Icon}
                />
                <ButtonContainer>
                  <Button type='submit' text='Search' disabled={isSubmitting} />
                </ButtonContainer>
              </Form>
            )}
          </Formik>
        </SearchContainer>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.darkGreen};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  width: 95vw;
  height: 50%;
  border: 1px solid ${({ theme }) => theme.color.lightGreen};
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    width: 80vw;
    flex-direction: row-reverse;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 70vw;
  }
`;
const TextContainer = styled.div`
  flex: 1;
`;
const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: flex-end;
  }
`;
const TextBox = styled.div`
  height: 100%;
  width: 80%;
  padding: 2.5rem;
  display: flex;
  @media ${({ theme }) => theme.device.desktop} {
    paddıng: 3.5rem;
  }
`;
const Text = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.font.quicksand};
  color: ${({ theme }) => theme.color.light};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.5rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 2.8rem;
  }
`;
const Form = styled.form`
  padding: 0 2rem;
  width: 100%;
  @media ${({ theme }) => theme.device.desktop} {
    padding: 0 2.5rem;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  @media ${({ theme }) => theme.device.tablet} {
    height: 10rem;
  }
`;
