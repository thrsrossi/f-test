import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { InputField } from './InputField';
import { Button } from './Button';
import SearchIcon from '../../assets/icons/search-icon-white.png';
import { useAxios } from '../../helpers/hooks/useAxios';

export const SearchForm = ({ setInputString, setResult, setHasError }) => {
  const regex = /^[a-öA-Ö\s]*$/; // Only letters and spaces
  const regex2 = /^[a-öA-Ö]/; // Start with letter

  const initialValues = {
    location: '',
  };

  const validationSchema = yup.object().shape({
    location: yup
      .string()
      .required('This is a required field.')
      .matches(regex, 'Only letters and spaces are allowed.')
      .matches(regex2, 'Entry cannot begin with whitespace.')
      .min(3, 'Entry needs to be at least three characters.')
      .max(25, 'Entry can be maximum 25 characters.'),
  });

  const formatInputValue = (string) => {
    // Remove extra spaces, transform to lowercase, split into array
    const trimmedString = string.toLowerCase().trim().replace(/\s+/g, ' ');
    const wordArray = trimmedString.split(' ');

    // If word count is more than one, add '&' after each word except for last word.
    // Finally add last word and return new formatted string. Else return single word from array.
    if (wordArray.length !== 1) {
      let newString = '';
      for (let i = 0; i < wordArray.length - 1; i++) {
        let word = wordArray[i] + '&';
        newString = newString + word;
      }
      let [lastItem] = wordArray.slice(-1);
      newString = newString + lastItem;
      return newString;
    } else {
      return wordArray[0];
    }
  };

  const [payload, setPayload] = useState({});
  const { data, hasError } = useAxios(payload);

  useEffect(() => {
    if (data) {
      setResult(data);
    }
    if (hasError) {
      setHasError(true);
    }
  }, [data, hasError, setHasError, setResult]);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        const formattedInputValue = formatInputValue(values.location);
        setInputString(formattedInputValue);
        setPayload({
          endpoint: `/search/users?q=location:${formattedInputValue}`,
        });
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
          <TopWrapper>
            <InputField
              name='location'
              label='Enter your location'
              id='location'
              type='text'
              placeholder='City or country'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location}
              error={errors.location && touched.location}
              message={
                errors.location && touched.location && `${errors.location}`
              }
              icon={SearchIcon}
              autoFocus
            />
          </TopWrapper>
          <BottomWrapper>
            <Button type='submit' text='Search' disabled={isSubmitting} />
          </BottomWrapper>
        </Form>
      )}
    </Formik>
  );
};

const Form = styled.form`
  padding: 0 2rem;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    height: 22rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding: 0 2.5rem;
  }
`;
const TopWrapper = styled.div`
  flex: 1;
`;
const BottomWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  padding-bottom: 2rem;
`;
