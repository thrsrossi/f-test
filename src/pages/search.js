import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { InputField } from '../components/shared/InputField';
import { Button } from '../components/shared/Button';
import Icon from '../assets/icons/search-icon-white.png';
import LogoGreen from '../assets/logos/gitconnect_green.png';

export const Search = () => {
  const initialValues = {
    location: '',
  };
  const validationSchema = yup.object().shape({
    location: yup
      .string()
      .required('This is a required field.')
      .min(3, 'Entry needs to be at least three characters long.'),
  });
  return (
    <Wrapper>
      <ContentContainer>
        <TextContainer>
          <TextBox>
            <Text>Connect with</Text>
            <Text>active GitHubers</Text>
            <Text>near you</Text>
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
                <TopWrapper>
                  <InputField
                    name='location'
                    label='Start connecting'
                    id='location'
                    type='text'
                    placeholder='Enter your location'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    error={errors.location && touched.location}
                    message={
                      errors.location &&
                      touched.location &&
                      `${errors.location}`
                    }
                    icon={Icon}
                  />
                </TopWrapper>
                <BottomWrapper>
                  <Button type='submit' text='Search' disabled={isSubmitting} />
                </BottomWrapper>
              </Form>
            )}
          </Formik>
        </SearchContainer>
        <CopyWriteWrapper>
          <CopyWrite>&copy; 2020 </CopyWrite>
          <Logo src={LogoGreen} alt='Gitconnect logo green' />
        </CopyWriteWrapper>
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
  position: relative;
  width: 95vw;
  height: 35rem;
  border: 1px solid ${({ theme }) => theme.color.lightGreen};
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    width: 85vw;
    flex-direction: row-reverse;
    height: 40rem;
    padding: 1rem;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 80vw;
    padding: 2rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 75rem;
    height: 45rem;
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
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: flex-start;
    padding: 2.5rem 0.5rem;
  }
`;
const Text = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-family: ${({ theme }) => theme.font.comfortaa};
  color: ${({ theme }) => theme.color.light};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.2rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 2.8rem;
  }
`;
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
const CopyWriteWrapper = styled.div`
  position: absolute;
  top: 102%;
  right: 0;
  display: flex;
  aligm-items: flex-end;
`;
const CopyWrite = styled.p`
  color: ${({ theme }) => theme.color.lightGreen};
  font-family: ${({ theme }) => theme.font.abel};
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding-right: 0.5rem;
`;
const Logo = styled.img`
  height: 1.5rem;
`;
