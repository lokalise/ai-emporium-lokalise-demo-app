import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

import { Trans } from "react-i18next";

const getBenefitOne = (t) => {
  return {
    title: t('data_benefitOne_title'),
    desc: t('data_benefitOne_desc'),
    image: benefitOneImg,
    bullets: [
      {
        title: t('data_benefitOne_bulletOne_title'),
        desc: t('data_benefitOne_bulletOne_desc'),
        icon: <FaceSmileIcon />,
      },
      {
        title: t('data_benefitOne_bulletTwo_title'),
        desc: t('data_benefitOne_bulletTwo_desc'),
        icon: <ChartBarSquareIcon />,
      },
      {
        title: t('data_benefitOne_bulletThree_title'),
        desc: t('data_benefitOne_bulletThree_desc'),
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
};

const getBenefitTwo = (t) => {
  return {
    title: t('data_benefitTwo_title'),
    desc: t('data_benefitTwo_desc'),
    image: benefitTwoImg,
    bullets: [
      {
        title: t('data_benefitTwo_bulletOne_title'),
        desc: t('data_benefitTwo_bulletOne_desc'),
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: t('data_benefitTwo_bulletTwo_title'),
        desc: t('data_benefitTwo_bulletTwo_desc'),
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: t('data_benefitTwo_bulletThree_title'),
        desc: t('data_benefitTwo_bulletThree_desc'),
        icon: <SunIcon />,
      },
    ],
  };
};


export {getBenefitOne, getBenefitTwo};
