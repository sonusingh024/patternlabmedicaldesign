import mypage from './mypage.twig';
import mypageData from './mypage.yml';
import menuorgData from '../../03-organisms/menuorg/menuorg.yml';
import bannerData from '../../03-organisms/bannercategory/banner.yml';
import heromoleculeData from '../../02-molecules/hero/heromolecule.yml';
import iconorgData from '../../03-organisms/iconorg/iconorg.yml';
import videosectionData from '../../03-organisms/videosection/videosection.yml';
import featureorgData from '../../03-organisms/featureorg/featureorg.yml';
import revieworgData from '../../03-organisms/revieworg/revieworg.yml';
import reviewmoleculeData from '../../02-molecules/reviewmolecule/reviewmolecule.yml';
/**
 * ule Definition.
 */
export default { title: 'Templates/mypage' };
export const mypages = () =>
  mypage({
    ...mypageData,
    ...menuorgData,
    ...bannerData,
    ...heromoleculeData,
    ...iconorgData,
    ...videosectionData,
    ...featureorgData,
    ...revieworgData,
    ...reviewmoleculeData,
  });
