import styled from 'styled-components/native';
import { variant } from 'styled-system';
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from '../typography-functions';

type HeadingProps = {
  variant: 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5';
} & TypographyFunctionsProps;

const defaultHeadingStyles = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  color: 'text.primary',
  mt: 0,
  mb: 0,
};

const headingVariant = variant({
  variants: {
    'heading-1': {
      fontSize: [7, 8, 9, 9],
      lineHeight: ['title.7', 'title.8', 'title.9', 'title.9'],
      ...defaultHeadingStyles,
    },
    'heading-2': {
      fontSize: [6, 7, 8, 8],
      lineHeight: ['title.7', 'title.8', 'title.9', 'title.9'],
      ...defaultHeadingStyles,
    },
    'heading-3': {
      fontSize: [5, 6, 7, 7],
      lineHeight: ['title.7', 'title.8', 'title.9', 'title.9'],
      ...defaultHeadingStyles,
    },
    'heading-4': {
      fontSize: [4, 5, 6, 6],
      lineHeight: ['title.7', 'title.8', 'title.9', 'title.9'],
      ...defaultHeadingStyles,
    },
    'heading-5': {
      fontSize: [3, 4, 5, 5],
      lineHeight: ['title.7', 'title.8', 'title.9', 'title.9'],
      ...defaultHeadingStyles,
    },
  },
});

export const Heading = styled.Text<HeadingProps>`
  ${headingVariant}
  ${typographyFunctions}
`;

Heading.defaultProps = {
  variant: 'heading-1',
};
