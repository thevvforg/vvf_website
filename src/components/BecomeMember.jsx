import React from 'react'
import { useTranslation } from 'react-i18next'

export default function BecomeMember() {
    const {t} = useTranslation();
    return (
    <section className="bg-green-50 py-16 text-center px-4">
            <h2 className="text-4xl font-bold text-orange-600 max-w-3xl mx-auto">
                {t("vvf_membership_heading")}
           </h2>
            <p className="mt-4 text-lg text-gray-600">
                {t("vvf_membership_body 1")}
            </p>
             <p className="mt-4 text-lg text-gray-600">
                {t("vvf_membership_body 2")}
            </p>
             <p className="mt-4 text-lg text-gray-600">
                {t("vvf_membership_body 3")}
            </p>
             <h1 className="text-xl text-orange-600 max-w-6xl mx-auto">
                "{t("vvf_membership_body 4")}"
            </h1>
      </section>  )
}
