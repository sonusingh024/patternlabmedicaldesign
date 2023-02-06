import featureorg from './featureorg.twig';
import featureorgData from './featureorg.yml';
import custommenuData from '../../02-molecules/featuremole/custommenu.yml';
import './featureorg.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/featureorg' };
export const featureorgs = () =>
  featureorg({ ...featureorgData, ...custommenuData });
