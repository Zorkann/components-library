/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface CardProps {
    text: string;
}
declare const Card: (props: CardProps) => JSX.Element;

declare const Alert: () => JSX.Element;

export { Alert, Button, ButtonProps, Card };
