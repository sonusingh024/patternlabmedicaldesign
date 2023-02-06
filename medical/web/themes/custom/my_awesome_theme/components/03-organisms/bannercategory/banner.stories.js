import banner from './banner.twig';
import bannerData from './banner.yml';
import catemoleData from '../../02-molecules/catemole/catemole.yml';
import './banner.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/categorybanner' };
export const banners = () => banner({ ...bannerData, ...catemoleData });
