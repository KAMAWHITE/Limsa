import React from "react";
import { useTranslation } from 'react-i18next';

function PricingSection() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1500px] mx-auto px-5 py-10 bg-[#161616] text-white">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        {t("cost.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#121111] rounded-xl p-5 shadow-lg">
          <h2 className="text-xl font-bold text-[#6c2dba] mb-3">{t("cost.card1.h2")}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {t("cost.card1.p")}
          </p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2">
            <li>{t("cost.card1.li1")}</li>
            <li>{t("cost.card1.li2")}</li>
            <li>{t("cost.card1.li3")}</li>
            <li>{t("cost.card1.li4")}</li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Келишилади</span>
            <button className="bg-[#6c2dba] text-white py-2 px-4 rounded-lg hover:bg-[#532396]">
              {t("cost.button")}
            </button>
          </div>
        </div>

        <div className="bg-[#121111] rounded-xl p-5 shadow-lg">
          <h2 className="text-xl font-bold text-[#6c2dba] mb-3">{t("cost.card2.h2")}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {t("cost.card2.p")}
          </p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2">
            <li>{t("cost.card2.li1")}</li>
            <li>{t("cost.card2.li2")}</li>
            <li>{t("cost.card2.li3")}</li>
            <li>{t("cost.card2.li4")}</li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Келишилади</span>
            <button className="bg-[#6c2dba] text-white py-2 px-4 rounded-lg hover:bg-[#532396]">
              {t("cost.button")}
            </button>
          </div>
        </div>

        <div className="bg-[#121111] rounded-xl p-5 shadow-lg">
          <h2 className="text-xl font-bold text-[#6c2dba] mb-3">{t("cost.card3.h2")}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {t("cost.card3.p")}
          </p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2">
            <li>{t("cost.card3.li1")}</li>
            <li>{t("cost.card3.li2")}</li>
            <li>{t("cost.card3.li3")}</li>
            <li>{t("cost.card3.li4")}</li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Келишилади</span>
            <button className="bg-[#6c2dba] text-white py-2 px-4 rounded-lg hover:bg-[#532396]">
              {t("cost.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;