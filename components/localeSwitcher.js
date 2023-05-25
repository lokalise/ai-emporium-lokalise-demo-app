import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { useTranslation, Trans } from "next-i18next";

const languages = [
    {
        id: 1,
        name: <Trans i18nKey="localeSwitcher_english"></Trans>,
        shortName: "en",
        unavailable: false,
        href: "/en",
    },
    { id: 2, 
    name: <Trans i18nKey="localeSwitcher_german"></Trans>,
    shortName: "de", 
    unavailable: false, 
    href: "/de" },
];

const LocaleSwitcher = () => {
    const { i18n, t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    return (
        <div className="flex flex-col">
            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                <Listbox.Button>
                    {t('localeSwitcher_button_languages')}
                </Listbox.Button>
                <Listbox.Options className="absolute top-16">
                    {languages.map((language) => (
                        <Listbox.Option
                            key={language.id}
                            value={language}
                            disabled={language.unavailable}
                            onClick={() => changeLanguage(language.shortName)}
                            className="cursor-pointer"
                        >
                            {language.name}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

export default LocaleSwitcher;
