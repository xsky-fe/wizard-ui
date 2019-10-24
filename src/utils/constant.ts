import { Variant, BtnVariant } from './../interface';
import { Placement } from 'react-bootstrap/Overlay';

const variants: Variant[] = ['danger', 'info', 'warning', 'success', 'primary', 'secondary', 'dark', 'light'];

const btnVariants: BtnVariant[] = ['primary', 'secondary', 'dark', 'light', 'link', 'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light']

const placements: Placement[] = ["right", "left", "auto", "bottom", "top", "auto-start", "auto-end", "top-start", "top-end", "right-start", "right-end", "bottom-end", "bottom-start", "left-end", "left-start"]

export {
  variants,
  btnVariants,
  placements
}