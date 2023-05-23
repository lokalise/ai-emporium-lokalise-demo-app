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

import { useTranslation, Trans } from "react-i18next";

const benefitOne = {
  title: <Trans i18nKey="data_benefitOne_title"></Trans>,
  desc: <Trans i18nKey="data_benefitOne_desc"></Trans>,
  image: benefitOneImg,
  bullets: [
    {
      title: <Trans i18nKey="data_benefitOne_bulletOne_title"></Trans>,
      desc: <Trans i18nKey="data_benefitOne_bulletOne_desc"></Trans>,
      icon: <FaceSmileIcon />,
    },
    {
      title: <Trans i18nKey="data_benefitOne_bulletTwo_title"></Trans>,
      desc: <Trans i18nKey="data_benefitOne_bulletTwo_desc"></Trans>,
      icon: <ChartBarSquareIcon />,
    },
    {
      title: <Trans i18nKey="data_benefitOne_bulletThree_title"></Trans>,
      desc: <Trans i18nKey="data_benefitOne_bulletThree_desc"></Trans>,
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: <Trans i18nKey="data_benefitTwo_title"></Trans>,
  desc: <Trans i18nKey="data_benefitTwo_desc"></Trans>,
  image: benefitTwoImg,
  bullets: [
    {
      title: <Trans i18nKey="data_benefitTwo_bulletOne_title"></Trans>,
      desc: <Trans i18nKey="data_benefitTwo_bulletOne_desc"></Trans>,
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: <Trans i18nKey="data_benefitTwo_bulletTwo_title"></Trans>,
      desc: <Trans i18nKey="data_benefitTwo_bulletTwo_desc"></Trans>,
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: <Trans i18nKey="data_benefitTwo_bulletThree_title"></Trans>,
      desc: <Trans i18nKey="data_benefitTwo_bulletThree_desc"></Trans>,
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
